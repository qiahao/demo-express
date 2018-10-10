var express = require('express')
var router = express.Router()
var serviceUser = require('../../service/user')

function Err ({code = 1, msg = '服务器出错'}) {
  this.code = code
  this.msg = msg
  this.data = null
}

router.get('/', function(req, res) {
  serviceUser.get((err, results, fields) => {
    return res.json(results)
  })
})

router.post('/', function(req, res) {
  var user = req.body
//   if (!user.name) {
//     throw new Err({msg: '姓名不能为空'})
//   }
//   if (!user.age) {
//     throw new Err({msg: '年龄不能为空'})
//   }
//   if (!user.birthday) {
//     user.birthday = null
//   }
  serviceUser.add(user, (err, results, fields) => {
    return res.json(results)
  })
})

router.put('/', function(req, res) {
  serviceUser.update((err, results, fields) => {
    return res.json(results)
  })
})

router.delete('/:id', function(req, res) {
  var id = req.params.id
  serviceUser.del(id, (err, results, fields) => {
    return res.json(results)
  })
})

router.get('/list', function(req, res) {
  serviceUser.getList((err, results, fields) => {
    return res.json({
      code: 0,
      data: results,
      msg: 'ok'
    })
  })
})

module.exports = router