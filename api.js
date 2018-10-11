var express = require('express')
var api = express()
var controllerUser = require('./controller/user')

api.get('/user', controllerUser.get)
api.post('/user', controllerUser.add)
api.put('/user', controllerUser.update)
api.delete('/user', controllerUser.del)
api.get('/user/list', controllerUser.getList)

module.exports = api