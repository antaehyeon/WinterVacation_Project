var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');

// listen
app.listen(3003, function() {
    console.log('Connected 3003 Port :)');
});

// use
app.use(cookieParser());

// get
app.get('/count', function(req, res) {
  if (req.cookies.count)
    var count = parseInt(req.cookies.count);
  else
    var count = 0;

  count += 1;

  res.cookie('count', count);
  res.send('COUNT : ' + req.cookies.count);
})
