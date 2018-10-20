var Response = require('./Response')

function FailResponse({code = 1, data = {}, message = '服务器出错'}) {
  Response.call(this, {code, data, message})
}

module.exports = FailResponse


