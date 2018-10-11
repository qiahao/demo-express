var express = require('express')
var app = express()
var user = require('./src/user')

app.use('/user', user)
module.exports = app