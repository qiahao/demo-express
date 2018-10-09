var express = require('express')
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express()
// var user = require('./dao/user')
var routeUser = require('./route/user')

app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static('public'))
app.use(express.static('views'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.get('/', (req, res) => {
  return res.render('index')
})


app.use('/user', routeUser)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
module.exports = app 