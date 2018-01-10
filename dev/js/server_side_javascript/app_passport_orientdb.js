// variable Init
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var OrientoStore = require('connect-oriento')(session);
var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

var auth = require('./routes/orientdb/auth')(passport, db);
var db = require('./config/orientdb/db')();

var app = express();

// listen
app.listen(3003, function() {
    console.log('Connected 3003 Port :)');
});

// set
app.set('views', './views/orientdb');
app.set('view engine', 'jade');

// use
app.use(session({
  secret: '12941nlekfsMFSDLIQNf%!%',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: new OrientoStore({
  	server: "host=localhost&port=2424&username=root&password=111111&db=o2"
  })
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth);

passport.use(new LocalStrategy(
  function(username, password, done) {
    var uname = username;
    var pwd = password;
    var sql = 'SELECT * FROM user WHERE authId=:authId';
    db.query(sql, {params:{
      authId:'local:'+uname}}).then(function(results){
        if(results.length === 0) {
            return done(null, false);
      }
      var user = results[0];
      return hasher({password:pwd, salt:user.salt},
      function(err, pass, salt, hash){
        if(hash === user.password) {
          console.log('LocalStrategy', user);
          done(null, user);
        } else {
          done(null, false);
        }
      });
    })
  }
));

passport.serializeUser(function(user, done) {
  console.log('serializeUser ', user);
  done(null, user.authId);
});

passport.deserializeUser(function(id, done) {
  console.log('deserializeUser ', id);
  var sql = 'SELECT FROM user WHERE authId=:authId';
  db.query(sql, {params:{authId:id}}).then(function(results){
    if (results.length === 0) {
      done('There is no USER :()');
    } else {
      done(null, results[0]);
    }
  });
});

passport.use(new FacebookStrategy({
    clientID: '2023046454641372',
    clientSecret: 'afa28eae335a8fee5d66fcbc10c597a4',
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'email', 'gender', 'link', 'locale',
    'name', 'timezone', 'updated_time', 'verified', 'displayName']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("FACEBOOKSTRATEGY **********************");
    console.log(profile);
    var authId = 'facebook:' + profile.id;
    var sql = 'SELECT * FROM user WHERE authId=:authId';
    db.query(sql, {params:{authId:authId}}).then(function(results){
      if(results.length == 0) {
        // add user
        var newuser = {
          'authId': authId,
          'displayName': profile.displayName,
          'emails': profile.emails[0].value
        };
        var sql = 'INSERT INTO user (authId, displayName, email) VALUES (:authId, :displayName, :emails)';
        db.query(sql, {params:newuser}).then(function(){

        }, function(error){
          console.log(error);
          done('ERROR :()');
        });
      } else {
        // LOGIN
        console.log("FACEBOOKSTRATEGY ***********************");
        console.log("ELSE ***********************************");
        return done(null, results[0]);
      }
    })
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

// GET *************************************
app.get('/count', function(req, res) {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send('COUNT : ' + req.session.count);
});

app.get('/welcome', function(req, res) {
  if(req.user && req.user.displayName) {
    console.log("/WELCOME GET ROUTE ********************");
    console.log(req.user);
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
