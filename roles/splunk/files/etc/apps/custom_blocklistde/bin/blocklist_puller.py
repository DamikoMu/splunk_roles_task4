import requests
import json
import sys
import os

API_ENDPOINT = "https://api.blocklist.de/getlast.php?time=60min"  # Fetch data from the last 60 minutes
STORED_IPS_FILE = "stored_ips.txt"

# Fetch data from blocklist.de
response = requests.get(API_ENDPOINT)
if response.status_code != 200:
    sys.stderr.write("Error retrieving data. HTTP Status Code: {}".format(response.status_code))
    sys.exit(1)

# Extract IP list from the response
ip_list = response.text.split("\n")

# Load previously fetched IPs
previous_ips = []
if os.path.exists(STORED_IPS_FILE):
    with open(STORED_IPS_FILE, 'r') as f:
        previous_ips = f.read().splitlines()

# Deduplicate by filtering out IPs that we've already seen
new_ips = [ip for ip in ip_list if ip and ip not in previous_ips]

# Update the stored IPs file with new IPs
with open(STORED_IPS_FILE, 'a') as f:
    for ip in new_ips:
        f.write(ip + '\n')

# Convert the new IPs into a format suitable for Splunk ingestion
ip_objects = [{"ip": ip} for ip in new_ips if ip]
print(json.dumps(ip_objects))
