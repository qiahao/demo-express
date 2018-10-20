let jwt = require('jsonwebtoken')
let fs = require('fs')
let path = require('path')

module.exports = {
  generateToken: function(data) {
    let created = Math.floor(Date.now() / 1000);
    let cert = fs.readFileSync(path.join(__dirname, '../config/rsa_private.key')); //私钥
    let token = jwt.sign({
      data,
      exp: created + 3600 * 24
    }, cert, { algorithm: 'RS256' })
    return token
  },
  verifyToken: function(token) {
    let cert = fs.readFileSync(path.join(__dirname, '../config/rsa_public.key')); //公钥
    let res = {}
    try {
      let result = jwt.verify(token, cert, { algorithms: ['RS256'] }) || {};
      let { exp = 0 } = result, current = Math.floor(Date.now() / 1000);
      if (current <= exp) {
        res = result.data || {}
      }
    } catch (e) {
      // 无效的token
    }
    return res;
  }
}