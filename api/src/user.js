var express = require('express')
var app = express()
var user = require('../../controller/user')

app.get('', user.get)
app.post('', user.add)
app.put('', user.update)
app.delete('', user.del)
app.get('/list', user.getList)

module.exports = app