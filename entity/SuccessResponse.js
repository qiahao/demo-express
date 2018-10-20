var Response = require('./Response')

function SuccessResponse({code = 0, data = {}, message = '操作成功！'}) {
  Response.call(this, {code, data, message})
}

module.exports = SuccessResponse

