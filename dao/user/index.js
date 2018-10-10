var db = require('../../db')
var user = {}
user.get = function(cb) {
  var sql = 'select * from user;'
  db(sql, cb)
}

user.add = function(user, cb) {
  var {name, age, birthday} = user
  var sql = `INSERT INTO user ( name, age, birthday ) VALUES ('${name}', ${age}, '${birthday}') ;`
  db(sql, cb)
}

user.update = function(cb) {
  var sql = `select * from user;`
  db(sql, cb)
}
user.del = function(cb) {
  var sql = 'select * from user;'
  db(sql, cb)
}

user.getList = function(cb) {
  var sql = 'select * from user;'
  db(sql, cb)
}

module.exports = user