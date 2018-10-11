var daoUser = require('../../dao/user')
module.exports = function login(user, cb) {
  daoUser.login(user, cb)
}