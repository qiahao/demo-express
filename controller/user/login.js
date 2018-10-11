var serviceUser = require('../../service/user')
module.exports = function login(req, res, next) {
  var user = req.body
  serviceUser.login(user, (err, results, fields) => {
    if (err) {
      next(new Error('出错啦'))
    }
    if (results) {
      res.json(results)
    } else {
      next({
        code: 1,
        msg: '账号或密码错误'
      })
    }
    
  })
}