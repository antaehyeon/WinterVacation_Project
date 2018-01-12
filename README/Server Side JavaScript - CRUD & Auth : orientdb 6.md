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

     ​


