var express = require('express');
var app = express();

/* adding one static route for the dist folder that pingy creates */
app.use(express.static('dist'))

app.listen(process.env.PORT || 3000, function() {
  console.log("server listening on port 3000")
})
