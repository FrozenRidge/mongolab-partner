mongolab-partner
================

[MongoLab Partner API](https://objectlabs.jira.com/wiki/display/partners/MongoLab+Partner+Integration+API) wrapper & CLI interface.

## Installation

`npm install mongolab-partner`

## Usage

```javascript

var mongolab = require('mongolab-partner')({username: "my-username", password: "super secret"})

mongolab.viewPartner(function(err, res) {
  if (err) return console.log(err)
  console.log(res)
})

```

## API

The following API calls are documented:

__viewPartner__

__viewAccounts__

__createAccount__

__createDatabase__

__listDatabases__

__viewDatabase__ 

__deleteDatabase__


## CLI

`mongolab-partner <command> [options]`

Commands map to API calls. The following are available:

- viewPartner
- viewAccounts
- createAccount
- createDatabase
- listDatabases
- viewDatabase
- deleteDatabase

Create database example:

`mongolab-partner createDatabase -u <username> -p <password> --accountName <account name> --databaseUsername <database username> --databasePassword <database password> --databaseName <database name>`

View database example:

`mongolab-partner viewDatabase -u <username> -p <password> --accountName <account name> --databaseName <database name>`

List databases:

`mongolab-partner listDatabases -u <username> -p <password> --accountName <account name>`
