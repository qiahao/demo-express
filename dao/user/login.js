var db = require('../../db')
module.exports = function(user, cb) {
  var { name, password } = user
  var sql = `SELECT id, name, phone, is_admin, birthday FROM user WHERE name=? AND password=? `
  db(sql, [name, password], cb)
}