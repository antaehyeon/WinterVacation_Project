# Server Side JavaScript - CRUD + Auth : orientdb 3 (Auth config)

> passport 에 대한 부분을 최적화

1. ### config/orientdb/passport.js 에 대한 파일 생성

   ```js
   module.exports = function(app) {
     var passport = require('passport');
     var LocalStrategy = require('passport-local').Strategy;
     var FacebookStrategy = require('passport-facebook').Strategy;
     var bkfd2Password = require("pbkdf2-password");
     var hasher = bkfd2Password();

     app.use(passport.initialize());
     app.use(passport.session());

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
   ```

   - 위와 같이 passport와 관련된 코드를 전부 별도의 파일 (./config/orientdb/passport.js) 로 구성

2. ### app_passport_orientdb.js 의 선언 부분 정리

   ```js
   var express = require('express');
   var session = require('express-session');
   var bodyParser = require('body-parser');
   var OrientoStore = require('connect-oriento')(session);
   var app = express();
   var db = require('./config/orientdb/db')();
   var passport = require('./config/orientdb/passport')(app);
   var auth = require('./routes/orientdb/auth')(passport, db);
   ```

3. ### 현재 /welcome 에 대한 GET Route 에서 req에 대한 user 데이터가 안들어옴

  - passport.js 분리 후, app_passport_orientdb.js 정리 후

  - session이 관리가 안되는지 계속해서 serializeUser 함수만 호출되고, deserializeUser 에 대한 함수호출이 안됨

  - 근데 Passport 에 대한 기능들은 전부 동작함, LocalStrategy 나 SerializeUser 는 모두 동작함

  - auth.js에 있는 /login에 대한  POST Route도 동작해서 SuccessRedirection (redirection /welcome) 로 되는데

  - /welcome에 대한 POST Route 의 req 데이터에 user 가 존재하지 않음

  - 결국 안됨

  - 어딘지 모르겠음

  - 미쳐버리겠음

  - 아 해결함

    ```js
    var passport = require('./config/orientdb/passport')(app);
    var db = require('./config/orientdb/db')();
    var auth = require('./routes/orientdb/auth')(passport, db);
    app.use('/auth', auth);
    ```

    - 선언 후, 인자로 넘길 때의 차례가 굉장히 중요함
    - auth 에서 passport를 사용하므로 passport 는 app 바로 다음에 위치해야함
      - passport 가 app 을 사용하므로
    - 그런데, auth는 db도 사용하므로 passport 다음에 db가 위치하고
    - app.use 에서 auth를 붙이므로 auth 는 위에 선언이 일단 되어있어야 함
    - 이후 app에 붙은 여러가지 (bodyParser, session, auth) 들은 /welcome GET 라우트를 처리할 때 사용

4. ### app_passport_orientdb.js 최적화

   - /config/orientdb/express.js 생성

     ```js
     module.exports = function() {
       var express = require('express');
       var session = require('express-session');
       var OrientoStore = require('connect-oriento')(session);
       var bodyParser = require('body-parser');

       var app = express();

       // SET
       app.set('views', './views/orientdb');
       app.set('view engine', 'jade');

       // USE
       app.use(bodyParser.urlencoded({ extended: false }));
       app.use(session({
         secret: '12941nlekfsMFSDLIQNf%!%',
         resave: false,
         saveUninitialized: true,
         cookie: { secure: false },
         store: new OrientoStore({
         	server: "host=localhost&port=2424&username=root&password=111111&db=o2"
         })
       }));

       return app;
     }
     ```

   - app_passport_orientdb.js 생성

     ```js
     // variable Init
     var app = require('./config/orientdb/express')();
     var passport = require('./config/orientdb/passport')(app);
     var db = require('./config/orientdb/db')();

     var auth = require('./routes/orientdb/auth')(passport, db);
     app.use('/auth', auth);

     app.listen(3003, function() {
         console.log('Connected 3003 Port :)');
     });
     ```

     - /welcome 에 대한 GET Route 를 제외했을 때
     - 상대적으로 app_passport_orientdb 에 대한 구성을 한눈에 확인할 수 있음
     - passport 가 어디에 위치해 있는지 어떤 인자를 필요로 하는지