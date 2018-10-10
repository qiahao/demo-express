var daoUser = require('../../dao/user')
var user = {} 

user.get = function (cb) {
  daoUser.get(cb)  
}
user.add = function(user, cb) {
  
  daoUser.add(user, cb)
}

user.put = function(user, cb) {
  daoUser.update(user, cb)
}

user.del = function(id, cb) {
  daoUser.del(id, cb)
}

user.getList = function(cb) {
  daoUser.getList(cb)
}
module.exports = user