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

nomnom.parse()
