var mysql = require('mysql')
var config = require('./config')

var db = function (sql, values, cb) {
  var connection = mysql.createConnection(config)
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  });
  connection.query(sql, values, function (err, results, fields) {
    cb(err, results, fields)
  });
  connection.end()
}
module.exports = db