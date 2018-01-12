module.exports = function(app) {
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;
  var bkfd2Password = require("pbkdf2-password");
  var hasher = bkfd2Password();
  var db = require('./db')();

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    console.log("************ SERIALIZEUSER ************")
    console.log(user);

    done(null, user.authId);
    console.log("************ SERIALIZEUSER 2 ************");
    console.log(user.authId);
  });

  passport.deserializeUser(function(id, done) {
    console.log('************ DESERIALIZEUSER ************');
    console.log(id);

    var sql = 'SELECT FROM user WHERE authId=:authId';
    db.query(sql, {params:{authId:id}}).then(function(results){
      if (results.length === 0) {
        done('There is no USER :()');
      } else {
        done(null, results[0]);
      }
    });
  });

  passport.use(new LocalStrategy(
    function(username, password, done) {
      console.log('************ LOCALSTRATEGY 0 ************');
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
            console.log('************ LOCALSTRATEGY 1 ************');
            console.log(user);
            done(null, user);
          } else {
            done(null, false);
          }
        });
      })
    }
  ));

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

  return passport;
}
