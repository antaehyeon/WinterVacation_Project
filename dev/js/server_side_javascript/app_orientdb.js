var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

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

// setting
app.locals.pretty = true;

// listen
app.listen(3000, function(){
  console.log('Connected, 3000 port ! :)');
})

// get
app.get('/topic/add', function(req, res) {
  var sql = 'SELECT FROM topic';
  db.query(sql).then(function(_topics) {
    if (_topics.length == 0) {
      console.log('There is no topic record.');
      res.status(500).send('Internal Server Error');
    }
    res.render('add', {topics: _topics});
  });
});

app.get(['/topic', '/topic/:id'], function(req, res) {
  var sql = 'SELECT FROM topic';
  db.query(sql).then(function(_topics) {
    var id = req.params.id;
    if(id) {
      var sql = 'SELECT FROM topic WHERE @rid=:rid';
      db.query(sql, {params:{rid:id}}).then(function(topic) {
          console.log(topic[0]);
          res.render('view', {topics: _topics, topic:topic[0]});
      });
    } else {
        res.render('view', {topics:_topics});
    }
  });
});

app.get('/upload', function(req, res) {
  res.render('upload');
})

// post
app.post('/topic/add', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  var author = req.body.author;
  var sql = 'INSERT INTO topic (title, description, author) VALUES(:title, :desc, :author)';
  db.query(sql, {
    params:{
      title: title,
      desc: description,
      author: author
    }
  }).then(function(results){
      // res.send(results[0]['@rid']);
      res.redirect('/topic/' + encodeURIComponent(results[0]['@rid']));
  });
})

app.post('/upload', upload.single('userfile'), function(req, res, next) {
  console.log(req.file);
  res.send('Uploaded : ' + req.file.filename);
})

// set
app.set('views', './views_orientdb');
app.set('view engine', 'jade');
