var express = require('express');
var app = express();

var router = express.Router();
var p2 = express.Router();

// listen
app.listen(3003, function(){
  console.log('connected');
});

// use
app.use('/p1', router);
app.use('/p2', p2);

// get
router.get('/r1', function(req, res) {
  res.send('HELLO /p1/r1 :)');
});
router.get('/r2', function(req, res) {
  res.send('HELLO /p1/r2 :)');
});
p2.get('/r1', function(req, res) {
  res.send('HELLO /p2/r1 :)');
});
p2.get('/r2', function(req, res) {
  res.send('HELLO /p2/r2 :)');
});
