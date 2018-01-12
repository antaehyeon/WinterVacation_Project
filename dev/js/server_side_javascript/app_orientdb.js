var app = require('./config/orientdb/express')();

var OrientDB = require('orientjs');

var passport = require('./config/orientdb/passport')(app);

var auth = require('./routes/orientdb/auth')(passport);
app.use('/auth', auth);

var topic = require('./routes/orientdb/topic')();
app.use('/topic', topic);

app.listen(3003, function(){
  console.log('Connected, 3003 port ! :)');
});
