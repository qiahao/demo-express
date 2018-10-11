var serviceUser = require('../../service/user')
module.exports = function login(req, res) {
  var user = req.body
  serviceUser.login(user, (err, results, fields) => {
    
    
    res.json(results)
  })
}