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

The module should be initliazed with:

{username: ..., password: ...}

It will return an object which implements the following API calls:

__viewPartner(cb)__

__viewAccounts(cb)__

__createAccount({accountName: ..., adminUser: ..., adminEmail: ...}, cb)

__createDatabase({databaseName: ..., databaseUser: ..., databasePassword: ..., plan: ..., cloud: ..., accountName: ...}, cb) __

__listDatabases(accountName, cb)__

__viewDatabase(accountName, cb)__

__deleteDatabase(accountName, databaseName, cb)__


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
