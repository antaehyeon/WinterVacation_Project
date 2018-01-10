module.exports = function(app) {
  var express = require('express');
  var route = express.Router();

  route.get('/r1', function(req, res) {
    res.send('HELLO /p1/r1 :)');
  });
  route.get('/r2', function(req, res) {
    res.send('HELLO /p1/r2 :)');
  });
  app.get('/p3/r1', function(req, res){
    res.send('HELLO P3/R1 :)');
  })
  return route;
};
