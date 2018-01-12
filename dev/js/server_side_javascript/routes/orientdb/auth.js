module.exports = function(passport) {
  var route = require('express').Router();
  var bkfd2Password = require("pbkdf2-password");
  var hasher = bkfd2Password();
  var db = require('../../config/orientdb/db')();

  // GET ************************
  route.get('/login', function(req, res) {
    var sql = 'SELECT FROM topic';
    db.query(sql).then(function(_topics) {
      res.render('auth/login', {topics:_topics});
    })
  });

  route.get('/logout', function(req, res) {
    req.logout();
    req.session.save(function() {
      res.redirect('/topic');
    })
  });

  route.get('/register', function(req, res) {
    var sql = 'SELECT FROM topic';
    db.query(sql).then(function(_topics) {
      res.render('auth/register', {topics:_topics});
    })
  })

  route.get( // get-facebook
    '/facebook',
    passport.authenticate(
      'facebook',
      {scope: 'email'}
    )
  );

  route.get(
    '/facebook/callback',
    passport.authenticate(
      'facebook',
      {
        successRedirect: '/topic',
        failureRedirect: '/auth/login'
      }
    )
  );

  // POST **************************
  route.post('/login', passport.authenticate('local',
      {
        successRedirect: '/topic',
        failureRedirect: '/auth/login',
        failureFlash: false
      }
    )
  );

  route.post('/register', function(req, res) {
    hasher({password: req.body.password}, function(err, pass, salt, hash) {
      var user = {
        authId: 'local:' + req.body.username,
        username: req.body.username,
        password: hash,
        salt: salt,
        displayName: req.body.displayName
      };
      var sql = 'INSERT INTO user (authId, username, password, salt, displayName) VALUES(:authId, :username, :password, :salt, :displayName)';
      db.query(sql, {
        params:user
      }).then(function(results) {
        req.login(user, function(err) {
          req.session.save(function() {
            res.redirect('/topic');
          });
        });
      }, function(error) {
        console.log(error);
        res.status(500);
      });
    });
  })
  return route;
}
