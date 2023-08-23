# Run tests from $SPLUNK_HOME/web folder

## Prereqs
1. Must be running node 16.x.x
2. Must be running npm 8.x.x 
- These prereqs ensure that overrides in package.json are correctly applied.

## Build and test locally

1. Within this folder, run:

```bash
npm install
npm run symlink-ui
```

And then to start

```bash
npm start
```

2. Run Splunk locally:

```bash
$SPLUNK_HOME/bin/splunk start
```

3. Add this snippet to `$SPLUNK_HOME/etc/system/local/web.conf` to see UI changes without having to restart Splunk.

```
[settings]
cacheEntriesLimit = 0
cacheBytesLimit = 0
enableWebDebug = True
```

### Splunk Assist development

By default, MC loads Splunk Assist from a local supervisor URL, at `/beam/v1/proxy/com.splunk.assist.ui/static`

In development mode, you may want to point Splunk Assist directly to your local package or remote. In order to do this, add a stanza
to `$SPLUNK_HOME/etc/system/default/web.conf` that looks as follows.

#### Point to your Remote UI package running locally

```conf
[smc]
remoteRoot = http://localhost:8888/v1/proxy/static
```

#### Point to your Remote running locally

```conf
[smc]
remoteRoot = http://localhost:3001/splunk-assist-main/0.latest
```

### Running a Supervisor locally

Running the Supervisor locally is not trivial. Follow the instructions here to do that:
<https://cd.splunkdev.com/swp/ui-platform/blob/main/projects/remotes-splunk-assist/splunk-assist-main/SUPERVISOR-local.md>

To run Splunk Assist in test mode, so that it uses mock data instead of calling the backend APIs, set USE_MOCK_DATA to `true` [src/views/splunk_assist/common/constants.jsx](src/views/splunk_assist/common/constants.jsx).

## Run Unit and Lint tests

-   `export FE_COVERAGE=true`
-   `$SPLUNK_HOME/bin/node ../cfg/bundles/splunk_monitoring_console/ci_ui_runner_mc.js`

Test results are created inside:
`$SPLUNK_HOME/cfg/bundles/splunk_monitoring_console/ci_ui_xml_mc`

-   `test_splunk_monitoring_console.xml`
-   `lint_splunk_monitoring_console.xml`
-   `lint_splunk_monitoring_console_jsx.xml`

# Run tests from $SPLUNK_HOME/cfg/bundles/splunk_monitoring_console folder

## Run Unit tests

-   `npm install`
-   `npm run test`

## Run a specific Unit test

-   `npm install`
-   `npm run test -- --filter collections/test_bookmarks.js`

where `collections/test_bookmarks.js` is inside `$SPLUNK_HOME/cfg/bundles/splunk_monitoring_console/appserver/test/` folder

## Run Lint tests

-   `npm install`
-   `npm run lint`

## Creating new Docker Image to run MC unit tests

-   Create a protected branch in https://cd.splunkdev.com/splunk-monitoring-console/splunk-monitoring-console-builder and follow steps
    in https://cd.splunkdev.com/splunk-monitoring-console/splunk-monitoring-console-builder/-/blob/main/README.md
-   Once pipeline on the above repository run successfully, bump the Docker version in `Builder` Variable in
    main/cfg/bundles/splunk_monitoring_console/mc_ui_unit_tests.yml
-   commit the changes

## Updating dependencies

1. Update dependencies in `package.json`.
1. Run `npm install` to automatically apply changes to `package-lock.json`.
2. Run `node build_tools/genTarball.js`.
3. Copy the generated tar file to `splcore/main/contrib`, on your computer.
4. From `contrib`, run the command: `splunk cmd python upload_archive.py <tarball> -custom-dependency ''`
    - in order to upload to artifactory, you must be a member of `ssg-artif-contrib_source/deploy` group (request to join at go/groups)
5. Update `contrib/smc_modules_version.py` with the new version and SHA. -->
6. Run `npm install` to apply changes to local node_modules before testing.
