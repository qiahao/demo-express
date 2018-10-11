var db = require('../../db')
var login = require('./login')

exports.get = function(cb) {
  var sql = 'SELECT * from user;'
  db(sql, cb)
}

exports.add = function(user, cb) {
  var {name, age, birthday} = user
  var sql = `INSERT INTO user ( name, age, birthday ) VALUES ('${name}', ${age}, '${birthday}') ;`
  db(sql, cb)
}

exports.update = function(cb) {
  var sql = `select * from user;`
  db(sql, cb)
}
exports.del = function(id, cb) {
  var sql = `DELETE FROM user WHERE id=${id}`
  db(sql, cb)
}

exports.getList = function(cb) {
  var sql = 'select * from user;'
  db(sql, cb)
}

exports.login = login
