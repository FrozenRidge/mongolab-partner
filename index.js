var request = require('superagent')

var API_URL = "https://api.mongolab.com/api/1/"

module.exports = function(opts) {
  return {
    viewAccounts: function(cb) {
      request
        .get(API_URL + "partners/" + opts.username + "/accounts")
        .auth(opts.username, opts.password)
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
        .auth(opts.username, opts.password)
        .end(function(err, res) {
          if (res.error) {
            return cb(res.error, res)
          }
          return cb(null, res)
        })
    },
  }

}
