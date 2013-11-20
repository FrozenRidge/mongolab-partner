var request = require('superagent')

var API_URL = "https://api.mongolab.com/api/1/"

module.exports = function(config) {
  return {
    viewPartner: function(cb) {
      request
        .get(API_URL + "partners/" + config.username)
        .auth(config.username, config.password)
        .end(function(res) {
          if (res.error) {
            return cb(res.error, res)
          }
          return cb(null, res)
        })
    },

    viewAccounts: function(cb) {
      request
        .get(API_URL + "partners/" + config.username + "/accounts")
        .auth(config.username, config.password)
        .end(function(res) {
          if (res.error) {
            return cb(res.error, res)
          }
          return cb(null, res)
        })
    },

    listDatabases: function(accountName, cb) {
      request
        .get(API_URL + "partners/" + config.username + "/accounts/" + accountName + "/databases")
        .auth(config.username, config.password)
        .end(function(res) {
          if (res.error) {
            return cb(res.error, res)
          }
          return cb(null, res)
        })
    },

    createAccount: function(opts, cb) {
      request.post(API_URL + "partners/" + opts.username + "/accounts")
        .send({name: opts.accountName, adminUser: {email: opts.adminEmail, username: opts.adminUser}})
        .auth(config.username, config.password)
        .end(function(err, res) {
          if (res.error) {
            return cb(res.error, res)
          }
          return cb(null, res)
        })
    },
  }

}
