var express = require('express')
var cors = require('cors')
var app = express()
var path = require('path');

app.use(cors())

app.use(express.static('assets'))

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})