var express = require('express')
var app = express()
var jwt = require('../utils/jwt')
var user = require('./src/user')
app.use(function(req, res, next) {
  let { url = '' } = req;
  if (url.indexOf('/user/login') == -1) { //需要校验登录态
    return next()
    let header = ctx.request.header;
    let { token } = header;
    if (token) {
      let result = verifyToken(token);
      let { uid } = result;
      if (uid) {
        ctx.state = { uid };
        next();
      } else {
        return ctx.body = Tips[1005];
      }
    } else {
      return ctx.body = Tips[1005];
    }
  } else {
    next();
  }
})
app.use('/user', user)
module.exports = app