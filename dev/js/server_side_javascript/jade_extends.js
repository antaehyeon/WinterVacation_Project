var express = require('express');
var app = express();

// listen
app.listen(3003, function() {
  console.log('CONNECT 3003 PORT SUCCESS :)');
});

// set
app.set('view engine', 'jade');
app.set('views', 'jade');

// get
app.get('/view', function(req, res) {
  res.render('view');
});
app.get('/add' ,function(req, res) {
  res.render('add');
});
