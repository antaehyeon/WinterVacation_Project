var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'html')));

app.listen(3000, function() {
    console.log('Connected 3003 Port :)');
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'window_control_communication.html'));
});

app.get('/demo2.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'demo2.html'));
})
