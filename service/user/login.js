var daoUser = require('../../dao/user')
module.exports = function login(user, cb) {
  daoUser.login(user, (err, results, fields) => {
    if (err) {
      next(new Error('出错啦'))
    }
    if (results) {
      cb(err, results, fields)
    } else {
      next({
        code: 1,
        msg: '账号或密码错误'
      })
    }
  })
}