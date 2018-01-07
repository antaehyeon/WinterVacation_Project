// variable Init
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

// listen
app.listen(3003, function() {
    console.log('Connected 3003 Port :)');
});

// use
app.use(session({
  secret: '12941nlekfsMFSDLIQNf%!%',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(bodyParser.urlencoded({ extended: false }))

// get
app.get('/count', function(req, res) {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send('COUNT : ' + req.session.count);
})

// get - login
app.get('/auth/login', function(req, res) {
  var output = `
  <form action="/auth/login" method="post">
    <p>
      <input type="text" name="username" placeholder="username"/>
    </p>
    <p>
      <input type="password" name="password" placeholder="password"/>
    </p>
    <p>
      <input type="submit" value="SUBMIT"/>
  </form>
  `;
  res.send(output);
})

// post - login
app.post('/auth/login', function(req, res) {
  var user = {
    username:'hyeon',
    password:'111'
  };
  var uname = req.body.username;
  var pwd = req.body.password;
  if (uname == user.username && pwd == user.password) {
    res.redirect('/welcome');
  } else {
    res.send('Who are you ? <a href="/auth/login">login</a>');
  }
  res.send(req.body.id);
})
