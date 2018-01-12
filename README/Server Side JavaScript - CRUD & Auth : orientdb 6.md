# Server Side JavaScript - CRUD & Auth : orientdb 6 (final)

> 모든 것의 종지부
>
> 중점적으로 느껴야 될 것은, 소스코드의 복잡도를 낮추는 것에 대해서 !

1. ### app_orientdb.js 에서 auth/login 구현

   > app.passport_orientdb.js 파일 참고

   - auth/login 에 대한 부분은 아래 코드가 담당

     ```js
     var auth = require('./routes/orientdb/auth')(passport, db);
     app.use('/auth', auth);
     ```

   - 파일을 분리할 때 가장 중요한 부분이 객체들의 순서인 것 같음

   - 원래는 passport가 동작하지 않아서 로그인을 진행해도 failure 부분으로 리턴 (/auth/login) 됬는데

   - 해당 객체들의 선언순서를 맞춰주니 정상적으로 동작함

     ```js
     var express = require('express');
     var OrientDB = require('orientjs');
     var bodyParser = require('body-parser');
     var server = OrientDB({
        host:       'localhost',
        port:       2424,
        username:   'root',
        password:   '111111'
     });
     var db = server.use('o2');
     var app = express();
     // use
     app.use(bodyParser.urlencoded({ extended: false }));
     app.locals.pretty = true;
     app.use('/user', express.static('uploads'));
     app.set('views', './views/orientdb/');
     app.set('view engine', 'jade');

     var passport = require('./config/orientdb/passport')(app);

     var auth = require('./routes/orientdb/auth')(passport, db);
     app.use('/auth', auth);

     var topic = require('./routes/orientdb/topic')();
     app.use('/topic', topic);

     app.listen(3003, function(){
       console.log('Connected, 3003 port ! :)');
     });
     ```

2. ### auth.js에서 /welcome 대신 /topic 로 전환

   - `successRedirect: /welcome`  에서 `successRedirect: /topic` 으로 변경

3. ### 로그인이 되었을 때 로그인을 알리는 기능 추가

   - layout.jade 에서 a 태그(Login) 추가
   - layout.jade 파일만 수정하면 한번에 모두 바뀌므로 유지보수가 매우 편안

   ```js
   body
       a(href='/auth/login') Login
       h1
         a(href='/topic') HELLO Server Side JavaScript
       ul
   ```

   - 그런데 항상 Login 만 표시되므로, 로그인이 됬을 경우에는 Logout 으로 바꿔주는 분기 추가

     - /topic 으로 접근하는 GET Route 에서 layout.jade 로 user 객체를 전달

       - user는 로그인이 되었는지 안되었는지에 대한 부분을 판단하는 데이터를 담고 있으므로 (displayName)

     - `res.render('topic/view', {topics:_topics});` 에서 

     - `res.render('topic/view', {topics:_topics, user:req.user});` 으로 변경

     - layout.jade 에서는 login, logout 에 대한 if-else 구문 추가

       ```jade
       if user
         a(href='/auth/login') Logout
       else
         a(href='/auth/login') Login
       ```

4. ### 그러나 로그인을 진행해도 Login 은 그대로 표시되어 있었다

   - passport 과정중에서 session을 사용하기 때문에 app_orientdb.js 에서 session 에 대한 부분을 처리해주어야 한다

   - app_orientdb.js 에서 session 에 대한 부분을 추가하려고 봤더니

   - 이미 /config/orientdb/express.js 에 대한 부분에 express 및 session 과 관련된 부분이 있었음

   - 기존의 express 에 대한 코드들을 모두 지우고

   - `var app = require('./config/orientdb/express')();` 줄 추가

     ```js
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
     ```

   - 그러면 자연스럽게 require 된 객체가 app 변수에 담기고, app 이 passport 에 인자로 넘어가게 되므로

   - passport는 session 기능이 추가된 것

   - 정상적으로 수행됨

5. ### 이제는 REGISTER !

   - layout.jade 에서 register 에 대한 태그 추가

     ```jade
       body
         ul#account
           if user
             li
               a(href='/auth/logout') Logout
           else
             li
               a(href='/auth/login') Login
             li
               a(href='/auth/register') Register
     ```

6. ### 컨텐츠를 정렬해보자

   - ### Login

   - views/orientdb/layout.jade 파일의 최상위 코드

     ```jade
     extends ../layout
     block content
     ```

     - 부분을 login.jade에 붙여넣는다

     ```jade
     extends ../layout
     block content
       form(action='/auth/login', method='post')
     ```

     - 그런데 **에러**가 뜸

   - 해당 에러는 layout.jade 에서 topics 에 대한 부분을 찾을 수 없기 때문임

   - 해당 topics 에 대한 데이터를 넘겨주어야 함

     ```js
     route.get('/login', function(req, res) {
       res.render('auth/login', {topics:_topics});
     });
     =>
     route.get('/login', function(req, res) {
       var sql = 'SELECT FROM topic';
       db.query(sql).then(function(_topics) {
         res.render('auth/login', {topics:_topics});
       })
     });
     ```

     - 로그인을 클릭했을 때, 다른 페이지로 로딩되는것이 아닌 아래의 페이지가 변경됨

       ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%EC%A0%84%2012.56.11.png)

   - ### Register

     - register.jade 에도 

       ```jade
       extends ../layout
       block content
       ```

     - 해당 코드를 붙여넣기

     - auth.js 중 /register 에 대한 GET Route 부분 추가

       ```js
         route.get('/register', function(req, res) {
           var sql = 'SELECT FROM topic';
           db.query(sql).then(function(_topics) {
             res.render('auth/register');
           })
         })
       ```

       ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%EC%A0%84%201.04.17.png)

7. ### 기타

   - 로그아웃 뒤에 닉네임 넣기 (jade 간단한 변형)

     ```jade
     a(href='/auth/logout') Logout,
     =user.displayName
     ```

     ​


