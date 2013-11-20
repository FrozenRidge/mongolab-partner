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
  })
}

function createDatabase(opts) {
  var m = mongolab({username: opts.username, password: opts.password})
  m.createDatabase(opts, function(err, res) {
    if (err) {
      console.log("Error creating database: ", res.body.message)
      return
    }
  })
}

nomnom.option('username', {
    abbr: 'u',
    required: true
  })
  .option('password', {
    abbr: 'p',
    required: true
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
      required: true
    }
  })
  .callback(createAccount)

nomnom.command('viewAccounts').callback(viewAccounts)

nomnom.command('viewPartner').callback(viewPartner)

nomnom.command('listDatabases')
  .options({
    accountName: {
      required: true
    }
  })
  .callback(listDatabases)

nomnom.command('createDatabase')
  .options({
    accountName: {
      required: true
    },
    databaseName: {
      required: true
    },
    plan: {
      default: "sandbox"
    },
    cloud: {
      default: 'JYC_us-sw-1'
    }
  })
  .callback(listDatabases)

nomnom.parse()
