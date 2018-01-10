# Server Side JavaScript - Routes separate 2

> p1 이라는 라우터와 p2 라우터를 파일로 분리

1. ### /routes 디렉토리 생성

   - p1.js 파일 생성

     ```js
     var express = require('express');
     var route = express.Router();

     route.get('/r1', function(req, res) {
       res.send('HELLO /p1/r1 :)');
     });
     route.get('/r2', function(req, res) {
       res.send('HELLO /p1/r2 :)');
     });

     module.exports = route;
     ```

     - 각각의 파일에서 Router을 호출하기 위해서 express가 필요하므로
     - express 를 require 해주는 작업이 필요함

   - p2.js 파일 생성

     ```js
     var express = require('express');
     var route = express.Router();

     route.get('/r1', function(req, res) {
       res.send('HELLO /p2/r1 :)');
     });
     route.get('/r2', function(req, res) {
       res.send('HELLO /p2/r2 :)');
     });

     module.exports = route;
     ```

   - app_routes.js 파일 수정

     ```js
     var express = require('express');
     var app = express();

     var p1 = require('./routes/p1');
     var p2 = require('./routes/p2');

     // listen
     app.listen(3003, function(){
       console.log('connected');
     });

     // use
     app.use('/p1', p1);
     app.use('/p2', p2);
     ```

2. #### 파일로 쪼개고 나서, 복잡도가 훨씬 줄어드는것을 확인할 수 있음