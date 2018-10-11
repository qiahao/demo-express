var serviceUser = require('../../service/user')
var login = require('./login')

function Err ({code = 1, msg = '服务器出错'}) {
  this.code = code
  this.msg = msg
  this.data = null
}

exports.get = function(req, res) {
  serviceUser.get((err, results, fields) => {
    return res.json(results)
  })
}

exports.add = function(req, res) {
  var user = req.body
  serviceUser.add(user, (err, results, fields) => {
    return res.json(results)
  })
}

exports.update = function(req, res) {
  var user = req.body
  serviceUser.update(user, (err, results, fields) => {
    return res.json(results)
  })
}

exports.del =  function(req, res) {
  var id = req.params.id
  serviceUser.del(id, (err, results, fields) => {
    return res.json(results)
  })
}

exports.getList = function(req, res) {
  serviceUser.getList((err, results, fields) => {
    return res.json({
      code: 0,
      data: results,
      msg: 'ok'
    })
  })
}

exports.login = login
