# ClientManagementCli

ClientManagementCli is a command-line interface (CLI) tool for managing customer data. It allows you to add, find, update, remove, and list customers using a simple and intuitive command-line interface.

## Installation
* Clone the repository:

```bash
git clone https://github.com/mauryavinay1407/customer-management-cli-tool.git
```
* Install server dependencies:
```bash
cd Customer-cli-tool
npm install
```

## Run it in same directory only
```bash
node commands.js [commands]
```
* i.e
* Check the version 
```bash
node commands.js --version|-v
```
* Add a Customer
```bash
node commands.js add|a
```
* Find a Customer
```bash
node commands.js find|f <name>
```
* Update a Customer
```bash
node commands.js update|u <_id>
```
* Remove a Customer
```bash
node commands.js remove|r <_id>
```
* List All Customers
```bash
node commands.js list|l
```

## Setup this globally to run from anywhere
* This section guides users through setting up the CLI tool globally, making it easy for them to run the commands from anywhere on their system.
```bash
npm link
```

## Run it globally in terminal
* You can use the CLI by running `customer-management-cli` or its alias `cmc`
```bash
customer-management-cli [command]
# or
cmc [command]
```
* i.e
* Check the version 
```bash
customer-management-cli --version|-v
# or
cmc --version|-v
```
* Add a Customer
```bash
customer-management-cli add|a
# or
cmc add|a
```
* Find a Customer
```bash
customer-management-cli find|f <name>
# or
cmc find|f <name>
```
* Update a Customer
```bash
customer-management-cli update|u <_id>
# or
cmc update|u <_id>
```
* Remove a Customer
```bash
customer-management-cli remove|r <_id>
# or
cmc remove|r <_id>
```
* List All Customers
```bash
customer-management-cli list|l
# or
cmc list|l
```

