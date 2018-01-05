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
app.get('/topic/new', function(req, res) {
  fs.readdir('data', function(err, files) {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('new', {topics: files});
  });
});

app.get(['/topic', '/topic/:id'], function(req, res) {
  var sql = 'SELECT FROM topic';
  db.query(sql).then(function(_topics) {
    res.render('view', {topics:_topics});
  });
  // fs.readdir('data', function(err, files) {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send('Internal Server Error');
  //   }
  //   var id = req.params.id;
  //   if (id) {
  //     // id 값이 있을 때
  //     fs.readFile('data/'+id, 'utf8', function(err, data) {
  //       if(err) {
  //         console.log(err);
  //         res.status(500).send('Internal Server Error');
  //       }
  //       res.render('view', {topics:files, title:id, description:data});
  //     })
  //   } else {
  //     // id 값이 없을 때
  //     res.render('view', {topics:files, title:'Welcome :)', description:'Hello JavaScript For Server :)'});
  //   }
  // })
});

app.get('/upload', function(req, res) {
  res.render('upload');
})

// post
app.post('/topic', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/' + title, description, function(err) {
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.redirect('/topic/' + title);
  })
})

app.post('/upload', upload.single('userfile'), function(req, res, next) {
  console.log(req.file);
  res.send('Uploaded : ' + req.file.filename);
})

// set
app.set('views', './views_orientdb');
app.set('view engine', 'jade');
