// variable Init
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var FileStore = require('session-file-store')(session);
var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
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

app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    var uname = username;
    var pwd = password;
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if(uname === user.username) {
        return hasher({password:pwd, salt:user.salt}, function(err, pass, salt, hash){
          if(hash === user.password) {
            console.log('LocalStrategy', user);
            done(null, user);
          } else {
            done(null, false);
          }
        });
      }
    }
    done(null, false);
  }
));

passport.serializeUser(function(user, done) {
  console.log('serializeUser ', user);
  done(null, user.authId);
});

passport.deserializeUser(function(id, done) {
  console.log('deserializeUser ', id);
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if(user.authId === id) {
      return done(null, user);
    }
  }
  done('There is no User');
});

passport.use(new FacebookStrategy({
    clientID: '2023046454641372',
    clientSecret: 'afa28eae335a8fee5d66fcbc10c597a4',
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'email', 'gender', 'link', 'locale',
    'name', 'timezone', 'updated_time', 'verified', 'displayName']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    var authId = 'facebook:' + profile.id;
    for(var i=0; i<users.length; i++) {
      var user = users[i]; 
      if(user.authId === authId) {
        return done(null, user);
      }
    }
    var newuser = {
      'authId': authId,
      'displayName': profile.displayName,
      'emails': profile.emails[0].value
    };
    users.push(newuser);
    done(null, newuser);
  }
));

// global variable
var salt = '@!3@#GDVAEfB%^%@!$';
var users = [
  {
    authId:'local:hyeon',
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
});

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
  <a href="/auth/facebook">FACEBOOK</a>
  `;
  res.send(output);
})

app.get('/welcome', function(req, res) {
  if(req.user && req.user.displayName) {
    res.send(`
      <h1>HELLO, ${req.user.displayName}</h1>
      <h1>YOUR EMAIL : ${req.user.emails}</h1>
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
  req.logout();
  req.session.save(function() {
    res.redirect('/welcome');
  })
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

app.post('/auth/login', passport.authenticate('local',
    {
      successRedirect: '/welcome',
      failureRedirect: '/auth/login',
      failureFlash: false
    }
  )
);

app.get( // get-facebook
  '/auth/facebook',
  passport.authenticate(
      'facebook',
      {scope: 'email'}
    )
  );

app.get(
  '/auth/facebook/callback',
  passport.authenticate(
    'facebook',
    {
      successRedirect: '/welcome',
      failureRedirect: '/auth/login'
    }
  )
);
// post - login
// app.post('/auth/login', function(req, res) {
//   var uname = req.body.username;
//   var pwd = req.body.password;
//   for (var i = 0; i < users.length; i++) {
//     var user = users[i];
//     if(uname === user.username) {
//       return hasher({password:pwd, salt:user.salt}, function(err, pass, salt, hash){
//         if(hash === user.password) {
//           req.session.displayName = user.displayName;
//           req.session.save(function() {
//             res.redirect('/welcome');
//           })
//         } else {
//           res.send('Who are you ? <a href="/auth/login">login</a>');
//         }
//       });
//     }
//   }
// })


app.post('/auth/register', function(req, res) {
  hasher({password: req.body.password}, function(err, pass, salt, hash) {
    var user = {
      authId: 'local:' + req.body.username,
      username: req.body.username,
      password: hash,
      salt: salt,
      displayName: req.body.displayName
    };
    users.push(user);
    req.login(user, function(err) {
      req.session.save(function() {
        res.redirect('/welcome');
      });
    });
  });
})
