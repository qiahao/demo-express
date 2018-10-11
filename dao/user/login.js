module.exports = function(user, cb) {
  var { name, password } = user
  var sql = `SELECT 
            id, name, phone, is_admin, birthday
            WHERE
            (name=${name}, password=${password})
            `
  db(sql, cb)
}