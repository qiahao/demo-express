function Response({code = 0, data = {}, message = ''}) {
  this.code = code
  this.data = data
  this.message = message
}

module.exports = Response
