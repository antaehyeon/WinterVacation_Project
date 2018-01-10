var express = require('express');
var route = express.Router();

route.get('/r1', function(req, res) {
  res.send('HELLO /p1/r1 :)');
});
route.get('/r2', function(req, res) {
  res.send('HELLO /p1/r2 :)');
});

module.exports = route;
