var express = require('express');
var app = express();

app.set('views', './views')
app.set('view engine', 'pug')

/* removing these routes */

// app.get('/', function(req, res) {
//   res.render('index', {title: 'My App', message: 'Hello World!!!'});
// })
// app.get('/about', function(req, res) {
//   res.render('about')
// })

/* adding one static route for the dist folder that pingy creates */
app.use(express.static('dist'))

app.listen(process.env.PORT || 3000, function() {
  console.log("server listening on port 3000")
})
