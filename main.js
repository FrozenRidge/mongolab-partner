#!/usr/bin/env node
var nomnom = require('nomnom')
var mongolab = require('./index.js')


function createAccount(opts) {
  var m = mongolab({username: opts.username, password: opts.password})
  m.createAccount(opts, function(err, res) {
    if (err) {
      console.log("Error creating account: ", res.body.message)
      return
    }
    console.log("Account created!")
  })
}

function viewAccounts(opts) {
  var m = mongolab({username: opts.username, password: opts.password})
  m.viewAccounts(function(err, res) {
    if (err) {
      console.log("Error viewing accounts: ", res.body.message)
      return
    }
    console.log(res.body)
  })
}

function viewPartner(opts) {
  var m = mongolab({username: opts.username, password: opts.password})
  m.viewPartner(function(err, res) {
    if (err) {
      console.log("Error viewing partner: ", res.body.message)
      return
    }
    console.log(res.body)
  })
}

function listDatabases(opts) {
  var m = mongolab({username: opts.username, password: opts.password})
  m.listDatabases(opts.accountName, function(err, res) {
    if (err) {
      console.log("Error listing databases: ", res.body.message)
      return
    }
    console.log(res.body)
  })
}

function viewDatabase(opts) {
  var m = mongolab({username: opts.username, password: opts.password})
  m.viewDatabase(opts.accountName, opts.databaseName, function(err, res) {
    if (err) {
      console.log("Error viewing database: ", res.body.message)
      return
    }
    console.log(res.body)
  })
}

function deleteDatabase(opts) {
  var m = mongolab({username: opts.username, password: opts.password})
  m.deleteDatabase(opts.accountName, opts.databaseName, function(err, res) {
    if (err) {
      console.log("Error deleteing database: ", res.body.message)
      return
    }
    console.log(res.body)
  })
}

function createDatabase(opts) {
  var m = mongolab({username: opts.username, password: opts.password})
  m.createDatabase(opts, function(err, res) {
    if (err) {
      console.log("Error creating database: ", res.body.message)
      return
    }
    console.log(res.body)
  })
}

nomnom.option('username', {
    abbr: 'u',
    required: true,
    help: "MongoLab Partner API username"
  })
  .option('password', {
    abbr: 'p',
    required: true,
    help: "MongoLab Partner API password"
  })

nomnom.command('createAccount')
  .options({
    adminUser: {
      required: true
    },
    adminEmail: {
      required: true
    },
    accountName: {
      required: true,
      help: "Account name to create"
    }
  })
  .callback(createAccount)

nomnom.command('viewAccounts').callback(viewAccounts)

nomnom.command('viewPartner').callback(viewPartner)

nomnom.command('listDatabases')
  .options({
    accountName: {
      required: true,
      help: "Account name to list databases for"
    }
  })
  .callback(listDatabases)

nomnom.command('viewDatabase')
  .options({
    accountName: {
      required: true,
      help: "Account name to view database for"
    },
    databaseName: {
      required: true,
      help: "Databases name to view"
    }
  })
  .callback(viewDatabase)

nomnom.command('deleteDatabase')
  .options({
    accountName: {
      required: true,
      help: "Account name to delete databases for"
    },
    databaseName: {
      required: true,
      help: "Databases name to delete"
    }
  })
  .callback(deleteDatabase)

nomnom.command('createDatabase')
  .options({
    accountName: {
      required: true,
      help: "Account name to create this database under"
    },
    databaseName: {
      required: true,
      help: "Name of database to create"
    },
    plan: {
      default: "sandbox"
    },
    cloud: {
      default: 'JYC_us-sw-1'
    },
    databaseUsername: {
      required: true,
      help: "Username of admin user to create in database"

    },
    databasePassword: {
      required: true,
      help: "Password of admin user to create in database"
    }
  })
  .callback(createDatabase)

nomnom.parse()
