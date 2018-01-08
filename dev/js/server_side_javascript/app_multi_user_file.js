// variable Init
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var FileStore = require('session-file-store')(session);
var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password();
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
  cookie: { secure: false },
  store: new FileStore()
}));

app.use(bodyParser.urlencoded({ extended: false }))

// global variable
var salt = '@!3@#GDVAEfB%^%@!$';
var users = [
  {
    username:'hyeon',
    password:'tL9xX3mhlfbH0yU7f7ytgBXDE3baE4WN/WI3cs+dkHRvlEXFZkyvvMhpx3uFqgYMSF5TVYTKFhr49Vzf1I7oMjZ6ItMS7ZVtGROjXqfi4oyPmVZwCqcJdhGdtfsNfQAxrQ6CP26stKZWLSgAZwV8f2wIhqrpuzH4AwJh0vbXJW4=',
    salt: 'RzPygEXkljP8LqC5l4tz+RVosr1fMW2qJZmAxp70wTEnVexfN8lpRr3UTJ4d2mSyJHziV9j4TqWH69WKM9KiQw==',
    displayName:'HYEON'
  }
];

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

app.get('/welcome', function(req, res) {
  if(req.session.displayName) {
    res.send(`
      <h1>HELLO, ${req.session.displayName}</h1>
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

app.get('/auth/logout', function(req, res) {
  delete req.session.displayName;
  res.redirect('/welcome');
})

app.get('/auth/register', function(req, res) {
  var output = `
    <h1>Register</h1>
    <form action="/auth/register" method="post">
      <p>
        <input type="text" name="username" placeholder="username"/>
      </p>
      <p>
        <input type="password" name="password" placeholder="password"/>
      </p>
      <p>
        <input type="text" name="displayName" placeholder="displayName"/>
      </p>
      <p>
        <input type="submit" value="SUBMIT"/>
    </form>
  `;
  res.send(output);
})

// post - login
app.post('/auth/login', function(req, res) {
  var uname = req.body.username;
  var pwd = req.body.password;
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if(uname === user.username) {
      return hasher({password:pwd, salt:user.salt}, function(err, pass, salt, hash){
        if(hash === user.password) {
          req.session.displayName = user.displayName;
          req.session.save(function() {
            res.redirect('/welcome');
          })
        } else {
          res.send('Who are you ? <a href="/auth/login">login</a>');
        }
      });
    }
    // if (uname == user.username && sha256(pwd+user.salt) == user.password) {
    //   req.session.displayName = user.displayName;
    //   return req.session.save(function(){
    //     res.redirect('/welcome');
    //   });
    // }
  }
})

app.post('/auth/register', function(req, res) {
  var user = {
    username: req.body.username,
    password: req.body.password,
    displayName: req.body.displayName
  }
  users.push(user);
  req.session.displayName = req.body.displayName;
  req.session.save(function() {
    res.redirect('/welcome');
  })
})
