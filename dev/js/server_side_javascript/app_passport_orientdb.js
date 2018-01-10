// variable Init
var app = require('./config/orientdb/express')();
var passport = require('./config/orientdb/passport')(app);
var db = require('./config/orientdb/db')();

// GET
app.get('/welcome', function(req, res) {
  // console.log('************ WELCOME ************');
  // console.log(req);
  if(req.user && req.user.displayName) {
    res.send(`
      <h1>HELLO, ${req.user.displayName}</h1>
      <h1>YOUR EMAIL : ${req.user.email}</h1>
      <a href="/auth/logout">logout</a>
    `);
  } else {
    res.send(`
      <h1>WELCOME</h1>
      <ul>
        <li><a href="/auth/login">LOGIN</a></li>
        <li><a href="/auth/register">Register</a></li>
      </ul>
    `);
  }
});

var auth = require('./routes/orientdb/auth')(passport, db);
app.use('/auth', auth);

app.listen(3003, function() {
    console.log('Connected 3003 Port :)');
});
