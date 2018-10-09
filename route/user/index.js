var express = require('express')
var router = express.Router()
var daoUser = require('../../dao/user')

router.get('/', function(req, res) {
  daoUser.get((err, results, fields) => {
    return res.json(results)
  })
})

router.post('/', function(req, res) {
  var user = req.body
  daoUser.add(user, (err, results, fields) => {
    console.log('err', err)
    console.log('results', results)
    return res.json(results)
  })
})

router.put('/', function(req, res) {
  daoUser.update((err, results, fields) => {
    return res.json(results)
  })
})

router.delete('/', function(req, res) {
  daoUser.del((err, results, fields) => {
    return res.json(results)
  })
})

router.get('/list', function(req, res) {
  daoUser.getList((err, results, fields) => {
    console.log('results', results)
    return res.json({
      code: 0,
      data: results,
      msg: 'ok'
    })
  })
})

module.exports = router