var express = require('express');
var OrientDB = require('orientjs');
var bodyParser = require('body-parser');
var server = OrientDB({
   host:       'localhost',
   port:       2424,
   username:   'root',
   password:   '111111'
});
var db = server.use('o2');
var app = express();
// use
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;
app.use('/user', express.static('uploads'));
app.set('views', './views/orientdb/');
app.set('view engine', 'jade');

var passport = require('./config/orientdb/passport')(app);

var auth = require('./routes/orientdb/auth')(passport, db);
app.use('/auth', auth);

var topic = require('./routes/orientdb/topic')();
app.use('/topic', topic);

app.listen(3003, function(){
  console.log('Connected, 3003 port ! :)');
});
