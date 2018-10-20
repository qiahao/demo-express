var serviceUser = require('../../service/user')
var jwt = require('../../utils/jwt')
var FailResponse = require('../../entity/FailResponse')
var SuccessResponse = require('../../entity/SuccessResponse')

module.exports = function login(req, res, next) {
  var user = req.body
  serviceUser.login(user, (err, results, fields) => {
    console.log('1', err, results, fields)
    if (err) {
      next(new FailResponse({code: 10, message: err}))
    }
    console.log('2', err, results, fields)
    let response = {}
    if (results && results[0]) {
      response = new SuccessResponse({ data: { token: jwt.generateToken(results[0]) } })
      console.log('3', err, results, fields)
    } else {
      console.log('4', err, results, fields)
      response = new FailResponse({code: 1, message: '账号或密码错误'})
    }
    res.json(response)
  })
}