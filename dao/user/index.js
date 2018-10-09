var db = require('../../db')

var get = function(cb) {
  var sql = 'select * from user;'
  db(sql, cb)
}

var add = function(user, cb) {
  var {name, age, birthday} = user
  var sql = `INSERT INTO user ( name, age, birthday ) VALUES ('${name}', ${age}, '${birthday}') ;`
  db(sql, cb)
}

var update = function(cb) {
  var sql = `select * from user;`
  db(sql, cb)
}
var del = function(cb) {
  var sql = 'select * from user;'
  db(sql, cb)
}

var getList = function(cb) {
  var sql = 'select * from user;'
  db(sql, cb)
}

module.exports = {
  get,
  add,
  update,
  del,
  getList
}