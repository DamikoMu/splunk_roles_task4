# Splunk Migration Ansible Role

## Introduction

This Ansible project facilitates the installation and configuration of a Splunk instance on Ubuntu 22.04. It also provides the ability to migrate indexed data from one Splunk instance to another.

## Pre-requisites

- **Ansible**
- **Ubuntu Server 22.04 virtual machine** (target machine)
- **Splunk version < 9.x.x**
- **Access to source Splunk instance** (if migrating data)

## Preparation for Splunk Instance Migration

1. **Backup Existing Data**: Ensure a backup of the Splunk data from the source machine before any operation.
2. **Downtime Notification**: Inform all Splunk users about the planned migration and the expected downtime.
3. **Networking**: Ensure the source and destination VMs can communicate directly.
4. **Storage Check**: Ensure that the target machine has sufficient storage.
5. **Service Dependencies**: Identify and handle services with dependencies on Splunk.
6. **Test Environment**: Replicate the production environment in a staging area and test the migration.

## Role Structure

The main Ansible role is structured as follows:

```
- roles/
  - splunk/
    - tasks/
    - handlers/
    - templates/
    - vars/
```

## Running the Role

1. **Install and Configure Splunk**:
   
```bash
ansible-playbook main.yml -i inventory.ini
```

2. **Migrate Splunk Data**:

```bash
ansible-playbook migrate_splunk_data.yml -i inventory.ini
```

## Considerations Beyond the Test's Scope

- **Splunk Clustering**: Set up Splunk in a clustered environment for high availability.
- **Monitoring and Alerting**: Integrate monitoring solutions for Splunk.
- **Data Retention Policies**: Implement data retention policies in Splunk.
- **Splunk Forwarders**: Use Splunk forwarders for data sources in multiple locations.
