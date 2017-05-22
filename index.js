var express = require('express');
var app = express();

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function(req, res) {
  res.render('index', {title: 'My App', message: 'Hello World!!!'});
})
app.get('/about', function(req, res) {
  res.render('about')
})

app.listen(3000, function() {
  console.log("server listening on port 3000")
})
