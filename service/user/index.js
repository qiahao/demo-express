var daoUser = require('../../dao/user')
var login = require('./login')

exports.get = function (cb) {
  daoUser.get(cb)  
}
exports.add = function(user, cb) {
  
  daoUser.add(user, cb)
}

exports.put = function(user, cb) {
  daoUser.update(user, cb)
}

exports.del = function(id, cb) {
  daoUser.del(id, cb)
}

exports.getList = function(cb) {
  daoUser.getList(cb)
}
exports.login = login