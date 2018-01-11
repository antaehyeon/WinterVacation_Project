var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

var topic = require('./routes/orientdb/topic')();

// File Upload
var multer = require('multer');
var _storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: _storage });

// orientDB Initializaing
var OrientDB = require('orientjs');

var server = OrientDB({
   host:       'localhost',
   port:       2424,
   username:   'root',
   password:   '111111'
});

var db = server.use('o2')
console.log('Using Database:', db.name);

// use
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', express.static('uploads'));

app.use('/topic', topic);

// setting
app.locals.pretty = true;

// listen
app.listen(3000, function(){
  console.log('Connected, 3000 port ! :)');
})

// get
app.get('/upload', function(req, res) {
  res.render('topic/upload');
});

// post
app.post('/upload', upload.single('userfile'), function(req, res, next) {
  console.log(req.file);
  res.send('Uploaded : ' + req.file.filename);
})

// set
app.set('views', './views/orientdb/');
app.set('view engine', 'jade');
