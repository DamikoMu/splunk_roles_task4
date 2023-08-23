import os
import re
import sys
import copy
import json
import time
import six
import splunk.rest as sr
from itertools import groupby

if sys.version_info.major == 2:
    sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'libs_py2'))
    sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'libs_py2', 'pura_libs_utils'))
elif sys.version_info.major == 3:
    sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'libs_py3'))
    sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'libs_py3', 'pura_libs_utils'))

from pura_libs_utils import pura_logger_manager as logger_manager
from pura_libs_utils import pura_skynet_log_manager as skynet_logger_manager
from pura_libs_utils.pura_consts import *
from pura_libs_utils import pura_utils as utils
# from pura_libs_utils import six
from builtins import str
from builtins import object
from splunk.clilib import cli_common as cli
from pura_libs_utils import pura_python_toggle_utils as python_toggle_utils

logging = logger_manager.setup_logging('pura_telemetry')
skynet_logging = skynet_logger_manager.setup_logging('jura_scan_summary')

class Telemetry(object):
    """
    This class deals with collecting telemetry data and sending to Splunk via REST call
    """

    def __init__(self, session_key, user):

        self.session_key = session_key
        self.telemetry_data = dict()
        self.scan_summary = dict()
        try:
            self.host = python_toggle_utils.get_host(self.session_key)
        except Exception as e:
            logging.exception("Error fetching host {} ".format(str(e)))
            self.host = ""
        self.user = user

    def init_telemetry(self, scanType=TELEMETRY_ALL):
        """
        Set telemetry entry for a scan if applicable
        """

        TELEMETRY_DATA = {
            'type': "event",
            'component': "app.pythonupgradereadiness.scan",
            'optInRequired': 2,
            'data': {
                'appVersion': UPGRADE_READINESS_APP_VERSION,
                'scanType': scanType,
                'scanTypeModified': True
            }
        }

        self.telemetry_data['statistics'] = TELEMETRY_DATA
        self.scan_summary['statistics'] = TELEMETRY_DATA
        try:
            schedule_last_update, schedule_details =  self.get_scan_frequency_data()
        except Exception as e:
            logging.exception("Exception occurred while initialising telemetry: {}".format(str(e)))
            schedule_last_update = None
            schedule_details = None
        try:
            app_list_date = self.get_app_list_date()
        except Exception as e:
            logging.exception("Exception occurred while getting app list date: {}".format(str(e)))
            app_list_date = "NA"
        TELEMETRY_SUMMARY_DATA = {
            'appListDate': app_list_date,
            'scanFrequency': schedule_details,
            'frequencyUpdateTime': schedule_last_update,
            'stackDefaultPython': self.get_default_python_stack()
        }
        SCAN_SUMMARY_SUMMARY_DATA = {
            'appListDate': app_list_date,
            'scanFrequency': schedule_details,
            'frequencyUpdateTime': schedule_last_update,
            'stackDefaultPython': self.get_default_python_stack()
        }
        ERROR_INFO = {
            'status': '',
            'errorMessage': ''
        }
        self.telemetry_data['summary'] = TELEMETRY_SUMMARY_DATA
        self.telemetry_data['errors'] = ERROR_INFO
        self.scan_summary['summary'] = SCAN_SUMMARY_SUMMARY_DATA
        self.scan_summary['errors'] = ERROR_INFO

    def get_host(self):
        """
         Used to get the Stack ID from splunk instance
        """
        host = ""
        try:
            service = python_toggle_utils.splunk_connect(self.session_key)
            server_info = utils.get_local_host_details(service)
            for item in server_info:
                content = dict(item)
                cluster_label = content.get("splunk_server")
                if cluster_label:
                    host = cluster_label
        except Exception as e:
            logging.exception("Exception fetching the host name {}".format(str(e)))
        return host

    def get_app_list_date(self):
        max_epoch_time = None
        if os.path.exists(SYNCED_CSV_PATH):
            for new_csv in os.listdir(SYNCED_CSV_PATH):
                # if at all multiple files are present then get the file with greatest epoch
                epoch_time = int(new_csv.split("_")[1][:-4])
                if max_epoch_time is None or epoch_time > max_epoch_time:
                    max_epoch_time = epoch_time
            return str(max_epoch_time)
        return "NA"

    def get_scan_frequency_data(self):
        content = None
        try:
            response, content = sr.simpleRequest(
                pra_remote_schedule_scan_endpoint,
                sessionKey=self.session_key,
            )
        except Exception as e:
            logging.exception(
                MESSAGE_EXCEPTION_REMOTE_SCHEDULE_SCAN_READ.format(self.user, self.host, str(e))
            )
            return None, None
        if response["status"] not in success_codes:
            logging.error(MESSAGE_ERROR_REMOTE_SCHEDULE_SCAN_READ.format(self.user, self.host))
            return None, None
        if content is None:
            logging.error(MESSAGE_ERROR_READ_SCHEDULE_SCAN_DETAILS.format(self.user, self.host))
            return None, None
        content = json.loads(content)
        schedule_scan_details = dict()
        max_timestamp = None
        logging.info('schedule_scan_endpoint value {} '.format(content))
        if len(content) > 0:
            for schedule_scan_detail in content:
                schedule_scan_details = schedule_scan_detail
                max_timestamp = int(schedule_scan_detail["timestamp"])
            logging.info('schedule_scan_details values {} '.format(schedule_scan_details))
            if len(schedule_scan_details.keys()) > 0:
                schedule_scan_details.pop('host')
                schedule_scan_details.pop('schedule_scan_type')
                schedule_scan_details.pop('timestamp')
                try:
                    schedule_scan_details.pop('_user')
                    schedule_scan_details.pop('user')
                except Exception:
                    logging.info("No username found.")
            return str(max_timestamp), schedule_scan_details
        else:
            return "", {}

    def get_default_python_stack(self):
        try:
            version = cli.getConfKeyValue('server', 'general', 'python.version')
            return version
        except Exception:
            logging.exception('Error fetching the Python stack version')
            return ''

    def update_telemetry_data(self, report, result, app, app_meta=None, skip_flag=False, default=False):
        """
        Update telemetry data as per the processed report of the app

        :param report: App report
        :param result: Status of the app
        :param app: Name and label of the app
        :param app_meta: Type of app and external link of app
        :param default: Boolean value signifying app is set to PASSED by default

        :return None
        """

        try:
            app_name = app["name"]
            app_name_scan_summary = app_name
            try:
                app_version = report['version']
            except Exception:
                app_version = ''
                logging.info("Missing version key.")
            app_version_scan_summary = app_version
            if (
                app["summary"]["type"] == CONST_SPLUNKBASE_QUAKE or
                app["summary"]["type"] == CONST_SPLUNKBASE_DUAL or
                app["summary"]["type"] == CONST_SPLUNKBASE_UPDATE
            ):
                meta_data = dict()
                meta_data['source'] = "Splunkbase"
                meta_data['appStatus'] = result
                meta_data['MakoXMLStatus'] = CHECK_CONST_PASSED
                meta_data['MakoNumber'] = 0
                meta_data['PythonScriptStatus'] = CHECK_CONST_PASSED
                meta_data['PythonScriptNumber'] = 0
                # meta_data['skipped'] = skip_flag
                meta_data['dismissedApp'] = report['summary']['dismiss_app']
                meta_data['dismissedAppDate'] = report['summary']['dismiss_app_date']
                meta_data['dismissedBy'] = report['summary'].get('dismissed_by', "")

            else:
                meta_data = dict()
                app_name = ''
                if app["summary"]["type"] == CONST_PRIVATE:
                    meta_data['source'] = "Private"
                    app_name = 'XXXXXXXXXXX'
                    app_version = 'XXXXXXXXXXX'
                else:
                    meta_data['source'] = "Splunkbase"
                    app_name = app["name"]
                meta_data['appStatus'] = result
                meta_data['skipped'] = skip_flag
                meta_data['dismissedApp'] = report['summary']['dismiss_app']
                meta_data['dismissedAppDate'] = report['summary']['dismiss_app_date']
                meta_data['dismissedBy'] = report['summary'].get('dismissed_by', "")

                for check in report['checks']:
                    if check['name'] == "Python in custom Mako templates":
                        meta_data['MakoXMLStatus'] = check['result']
                        file_list = list(entry for entry in check['messages'] if entry['message_filename'] is not None)
                        meta_data['MakoNumber'] = len(file_list)
                    elif check['name'] == "Python scripts":
                        meta_data['PythonScriptStatus'] = check['result']
                        meta_data['PythonScriptNumber'] = len(check['messages'])

            local_versions, remote_versions = self.getPytonSDKVersion(app)
            meta_data['localpythonSDKVersion'] = local_versions
            meta_data['remotepythonSDKVersion'] = remote_versions

            meta_data_skynet = copy.deepcopy(meta_data)
            if meta_data['dismissedBy']:
                meta_data['dismissedBy'] = 'XXXXXXXXXXX'
            meta_data['dismissed_files'] = list()
            meta_data_skynet['dismissed_files'] = list()
            
            for check in report['checks']:
                for message in check['messages']:
                    if message['dismissed'] == 1:
                        if app["summary"]["type"] == CONST_PRIVATE:
                            filename = "XXXXXXXXXXX".join(message['message_filename'].split(app["name"]))
                        else:
                            filename = message['message_filename']
                        data = {
                            'file_name': filename,
                            'check_name': check['name'],
                            'dismissed_by': 'XXXXXXXXXXX',
                            'dismiss_file_date': message['dismiss_file_date']
                        }
                        meta_data['dismissed_files'].append(data)
                        data_skynet = {
                            'file_name': message['message_filename'],
                            'check_name': check['name'],
                            'dismissed_by': message['dismissed_by'],
                            'dismiss_file_date': message['dismiss_file_date']
                        }
                        meta_data_skynet['dismissed_files'].append(data_skynet)

            self.telemetry_data['apps'].append({
                'name': app_name,
                'version': app_version,
                'status': report['summary']['Status'],
                'details': report['details'],
                'type': report['summary']['type'],
                'meta': meta_data
            })
            self.scan_summary['apps'].append({
                'name': app_name_scan_summary,
                'version': app_version_scan_summary,
                'status': report['summary']['Status'],
                'details': report['details'],
                'type': report['summary']['type'],
                'meta': meta_data_skynet
            })
        except Exception as e:
            logging.exception("Could not update the telemetry data due to exception: {}".format(str(e)))

    def send_telemetry(self):
        """
        Send data statistics to telemetry endpoint
        """

        try:
            counter = 0
            more_data = True
            while more_data:
                data, more_data = self.chunk_data(counter)
                if not data:
                    break
                try:
                    response, _ = sr.simpleRequest('{}?output_mode=json'.format(telemetry_endpoint),
                                                sessionKey=self.session_key,
                                                jsonargs=json.dumps(data),
                                                method='POST',
                                                raiseAllErrors=True)
                    if response['status'] not in success_codes:
                        logging.error("Error Code: {}".format(str(response['status'])))
                    else:
                        logging.info("Telemetry data uploaded on : {}".format(str(time.asctime())))

                except Exception as e:
                    logging.exception(str(e))
                    break
                counter += 10
                if not more_data:
                    break
        except Exception as e:
            logging.exception("Could not send telemetry data due to exception: {}".format(str(e)))

    def send_action_summary(self, data):
        """
        Send data statistics to telemetry endpoint without dividing data into chunks
        """
        try:
            chunk = copy.deepcopy(self.telemetry_data['statistics'])
            chunk['component'] = "app.upgradereadinessapp.useractions"
            chunk['data'].update(data)
            chunk['data']['pageType'] = 'python'
            response, _ = sr.simpleRequest('{}?output_mode=json'.format(telemetry_endpoint),
                                                sessionKey=self.session_key,
                                                jsonargs=json.dumps(chunk),
                                                method='POST',
                                                raiseAllErrors=True)
            if response['status'] not in success_codes:
                logging.error("Error Code: {}".format(str(response['status'])))
            else:
                logging.info("Telemetry data uploaded on : {}".format(str(time.asctime())))
        except Exception as e:
            logging.exception("Could not send telemetry data due to exception: {}".format(str(e)))

    def add_logs_for_skynet(self, data):
        """
        Add scan summary logs for skynet.
        """
        try:
            logging.info("Adding python scan summary to logs.")
            for app in data.get("apps", []):
                try:
                    log_data = copy.deepcopy(data.get("statistics", {}))
                    if not log_data.get("data"):
                        log_data["data"] = {}
                    log_data['data']['summary'] = data['summary']
                    log_data['data']['errors'] = data['errors']
                    log_data["apps"] = [app]
                    log_data_str = json.dumps(log_data)
                    log_msg = "source={}, source_type={}, user={}, message={}".format(
                        "upgrade_readiness_app",
                        "python_upgrade_readiness_app",
                        self.user,
                        log_data_str
                    )
                    skynet_logging.info(log_msg)
                except Exception as e:
                    logging.exception("Could not app to scan summary logs for skynet exception: {}".format(str(e)))
        except Exception as e:
            logging.exception("Could not app to scan summary logs for skynet exception: {}".format(str(e)))

    def write_scan_summary(self):
        """
        Send the scan summary.
        """
        try:
            logging.info("Writing scan summary")
            summary = {}
            summary['appPythonUpradeReadinessScanDetails'] = {}
            summary['appPythonUpradeReadinessScanDetails']['statistics'] = self.scan_summary['statistics']
            summary['appPythonUpradeReadinessScanDetails']['apps'] = self.scan_summary['apps']
            summary['appPythonUpradeReadinessScanDetails']['export_report'] = self.scan_summary['export_report']
            summary['appPythonUpradeReadinessScanDetails']['send_email'] = self.scan_summary['send_email']
            summary['appPythonUpradeReadinessScanDetails']['page_visits'] = self.scan_summary['page_visits']
            summary['appPythonUpradeReadinessScanDetails']['email_switch'] = self.scan_summary['email_switch']
            summary['appPythonUpradeReadinessScanDetails']['summary'] = self.scan_summary['summary']
            summary['appPythonUpradeReadinessScanDetails']['errors'] = self.scan_summary['errors']
            summary['appPythonUpradeReadinessScanDetails']['timestamp'] = int(time.time())
            if not os.path.exists(PURA_LOG_DIR):
                os.mkdir(PURA_LOG_DIR)
            if not os.path.exists(SKYNET_LOG_DIR):
                os.mkdir(SKYNET_LOG_DIR)
            filepath = os.path.join(SKYNET_LOG_DIR, SKYNET_SCAN_SUMMARY_FILE)
            apps = utils.update_structure(self.scan_summary, "appPythonUpradeReadinessScanDetails", False)
            updated_summary = utils.update_summary(self.scan_summary)
            utils.update_skynet_data(filepath, apps, updated_summary)
            logging.info("Scan summary written.")
            self.add_logs_for_skynet(self.scan_summary)
        except Exception as e:
            logging.exception("Exception occurred while writing scan summary: {}".format(str(e)))

    def write_to_audit(self):
        """
        Write summary data to audit file.
        """
        try:
            logging.info("Writing data to audit file.")
            summary = {}
            summary['appVersion'] = UPGRADE_READINESS_APP_VERSION
            summary['appPythonUpradeReadinessScanDetails'] = {}
            summary['appPythonUpradeReadinessScanDetails']['apps'] = self.scan_summary['apps']
            summary['appPythonUpradeReadinessScanDetails']['summary'] = self.scan_summary['summary']
            summary['appPythonUpradeReadinessScanDetails']['errors'] = self.scan_summary['errors']
            summary['timestamp'] = int(time.time())
            python_toggle_utils.splunk_push(self.session_key, summary, "python_upgrade_readiness_app")
            logging.info("Successfully written to audit file.")
        except Exception as e:
            logging.exception("Exception occurred while writing to audit file: {}".format(str(e)))

    def chunk_data(self, counter):
        """
        Divide total data statisitcs in chunks of 1 apps for telemetry

        :param counter: Counter from where the app data should be chunked

        :return chunk, more_data: JSON data of 1 apps, True/False
        """

        apps = self.telemetry_data['apps']
        if counter >= len(apps):
            return {}, False

        chunk = copy.deepcopy(self.telemetry_data['statistics'])
        chunk['data']['summary'] = self.telemetry_data['summary']
        chunk['data']['errors'] = self.telemetry_data['errors']

        last_item = counter + 10
        more_data = True
        if last_item > len(apps):
            last_item = len(apps)
            more_data = False
        chunk['data']['apps'] = apps[counter:last_item]

        return chunk, more_data

    def read_version(self, file_path):
        with open(file_path) as f:
            content = f.readlines()
        content = [x.strip() for x in content]
        matcher_rex = re.compile(r'^(\s*[A-Za-z_][A-Za-z_0-9]*\s*)(?=\=)(?!==)(\s*.*)')
        for line in content:
            matches = matcher_rex.search(line)
            if matches:
                name, value = matches.groups()
                if name == "__version_info__ " or name == "__version__ ":
                    version_rex = re.compile(r'\s*((\d*)(\s*)(\.|\,)(\s*)(\d*)(\s*)(\.|\,)(\s*)(\d*))\s*')
                    version_matches = version_rex.search(value)
                    if version_matches:
                        version = version_matches.groups()[0]
                        version = version.replace(',', '.').replace(' ', '')
                        return version
        return None

    def getPytonSDKVersion(self, app):
        # init_files = self.get_init_files(app_path)
        versions = set()
        remote_versions = set()
        try:
            for check in app.get("checks", []):
                if check["name"] == "Splunk Python SDK Check":
                    for message in check.get("messages", []):
                        if(message.get("instance") == "both"):
                            versions.add(message["code"])
                            remote_versions.add(message["code"])
                        elif (message.get("instance") == "remote"):
                            remote_versions.add(message["code"])
                        else:
                            versions.add(message["code"])
            versions = ", ".join(versions)
            remote_versions = ", ".join(remote_versions)
            return versions, remote_versions
        except Exception:
            logging.exception("Exception getting the Python SDK version for app {} ".format(app_path))
        return "", ""

