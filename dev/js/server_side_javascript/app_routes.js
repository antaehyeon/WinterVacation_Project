var express = require('express');
var app = express();

var p1 = require('./routes/p1');
var p2 = require('./routes/p2');

// listen
app.listen(3003, function(){
  console.log('connected');
});

// use
app.use('/p1', p1);
app.use('/p2', p2);
