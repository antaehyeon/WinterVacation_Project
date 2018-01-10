# Server Side JavaScript - CRUD + Auth : orientdb 2 (Auth routes)

> route 쪽에 대한 코드 분리

1. ### /auth 에 대한 모든 GET Route 코드를 파일로 분리

   - routes/orientdb/auth.js 파일로 구성 (auth Router)

     ```js
     module.exports = function(passport) {
       var route = require('express').Router();

       route.get('/auth/login', function(req, res) {
         res.render('auth/login');
       });

       route.get('/auth/logout', function(req, res) {
         req.logout();
         req.session.save(function() {
           res.redirect('/welcome');
         })
       });

       route.get('/auth/register', function(req, res) {
         res.render('auth/register');
       })

       route.get( // get-facebook
         '/auth/facebook',
         passport.authenticate(
           'facebook',
           {scope: 'email'}
         )
       );

       route.get(
         '/auth/facebook/callback',
         passport.authenticate(
           'facebook',
           {
             successRedirect: '/welcome',
             failureRedirect: '/auth/login'
           }
         )
       );
       
       // POST ********************************
         route.post('/auth/login', passport.authenticate('local',
           {
             successRedirect: '/welcome',
             failureRedirect: '/auth/login',
             failureFlash: false
           }
         )
       );

       route.post('/auth/register', function(req, res) {
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
                 res.redirect('/welcome');
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
     ```

     - 그런데 app 이라는 변수가 존재하지 않음

       - app 은 express() 를 받으므로 app(route)을 auth.js 파일에서 선언

         ```js
         var route = require('express').Router();
         ```

     - 그리고 module의 exports를 함수로 만들어서 **route를 리턴**한다

   - require 에 대한 코드 구성

     ```js
     var auth = require('./routes/orientdb/auth')(passport);
     ```

     - passport 에 대한 부분은 인자로 넘겨서 사용

   - use 에 대한 코드 구성

     ```js
     app.use('/auth', auth);
     ```

2. ### Cannot GET /auth/login

   ```js
   app.use('/auth', auth);
   ```

   - auth 로 들어오는 모든요청을 auth 라우터에게 모두 위임

     - auth 라우터 = auth.js

   - 들어가 보니, route.get('/auth/login') 으로 구성됨

     - **/auth 에 대한 문자 제거**

       ```js
       module.exports = function(passport) {
         var route = require('express').Router();

         // GET ************************
         route.get('/login', function(req, res) {
           res.render('auth/login');
         });

         route.get('/logout', function(req, res) {
           req.logout();
           req.session.save(function() {
             res.redirect('/welcome');
           })
         });

         route.get('/register', function(req, res) {
           res.render('auth/register');
         })

         route.get( // get-facebook
           'facebook',
           passport.authenticate(
             'facebook',
             {scope: 'email'}
           )
         );

         route.get(
           'facebook/callback',
           passport.authenticate(
             'facebook',
             {
               successRedirect: '/welcome',
               failureRedirect: '/auth/login'
             }
           )
         );

         // POST **************************
         route.post('/login', passport.authenticate('local',
             {
               successRedirect: '/welcome',
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
                   res.redirect('/welcome');
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

       ```

3. ### 로그인은 성공, 회원가입은?

   ```
   ReferenceError: hasher is not defined
   ```

- hasher은 app_passport_orientdb.js 에 위치하고 있기 때문에

  - 즉, auth.js 에 존재하지 않음

- hasher은 **bkfd2Password** 와 **hasher** 이 필요

  ```js
  var bkfd2Password = require("pbkdf2-password");
  var hasher = bkfd2Password();
  ```

  - 단, hasher은 passport의 Strategies 를 구성하는데도 필요하므로 복사만 !

4. ### 이번에는 db가 없다네

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%ED%9B%84%2011.22.03.png)

   - auth.js 의 61번째 줄에서 발생한 오류 `db.query(sql, {` 를 보니
   - db를 핸들링 해주는 부분이 존재하지 않음
   - 물론 passport 처럼 인자로 넘겨도 되지만, 그렇게 하지 않고 db를 별도의 파일로 구성해보겠음

5. ### db를 별도의 파일로 구성

   - config 폴더 생성

     - 안에 db.js 파일 생성

       ```js
       module.exports = function() {
         var OrientDB = require('orientjs');
         var server = OrientDB({
            host:       'localhost',
            port:       2424,
            username:   'root',
            password:   '111111'
         });
         var db = server.use('o2');
         return db;
       }
       ```

       -  데이터베이스를 설정하는 코드를 별도의 파일로 구성

   - 기존의 코드는 위의 코드부분을 `var db = require('./config/dbㅐ');` 로 구성

   - 해당 코드는 재활용되므로 auth.js 에 붙여넣기 진행 !

   - 하지만 그대로 에러가 발생함

   - app_passport_orientdb.js 파일은 최상위에 있어서 경로의 차이가 없지만

   - auth.js 파일에서의 경로는 약간 다름

     ```js
     var db = require('../../config/orientdb/db');
     ```

   - 그래도 에러가 발생함

     - 자 db.js나 auth.js 은 무조건 값을 리턴하는 형식임

     - 값이 리턴된 것을 받기 위해서는 요청한 것이 함수여야 함

     - 그러므로 아래와 같이 수정한다

       ```js
       var db = require('../../config/orientdb/db');
       =>
       var db = require('../../config/orientdb/db')();
       ```

6. ### 회원가입을 진행해보면 정상적으로 진행됨

