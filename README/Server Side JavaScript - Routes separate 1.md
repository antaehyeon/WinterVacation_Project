# Server Side JavaScript - Routes separate 1

> 라우트가 많아짐에 따라서 라우트를 정리정돈하는 방법에 대해서 설명

- 라우트가 많아지면
  - 서로의 라우트가 얽히면서 간섭이 될 수 있고
  - 사람이 코드를 인지하기에 시간이 걸릴 수 있음

1. ### 기본 초기 코드 작성

   ```js
   var express = require('express');
   var app = express();

   // get
   app.get('/p1/r1', function(req, res) {
     res.send('HELLO /p1/r1 :)');
   });
   app.get('/p1/r2', function(req, res) {
     res.send('HELLO /p1/r2 :)');
   });
   app.get('/p2/r1', function(req, res) {
     res.send('HELLO /p2/r1 :)');
   });
   app.get('/p2/r2', function(req, res) {
     res.send('HELLO /p2/r2 :)');
   });

   // listen
   app.listen(3003, function(){
     console.log('connected');
   });
   ```

   - 라우트가 1000개 정도 된다고 생각했을 때, 서로 유사한 목적의 라우트를 파일로 쪼개는 것을 시작

2. ### Express js - Application-Level middleware

   - [English](http://expressjs.com/en/guide/using-middleware.html)
   - [Korean](http://expressjs.com/ko/guide/using-middleware.html)

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%ED%9B%84%203.01.08.png)

   - 우리가 여태까지 사용하고 있던 코드(app.use 형식)는 **Application-level 에서의 middleware(route)** 이다

3. ### Router-level middleware

   > 라우터 라는 것으로 라우팅 작업을 쪼갤 것

   ```js
   var app = express();

   var router = express.Router();
   ```

   - app 변수는 express 를 호출하고
   - router 은 호출된 express의 Router 라고 하는 함수를 호출한 결과가 담김
   - 라우터를 만드는 과정

4. ### 코드를 본격적으로 바꿔보자

   - 기존의 `app.get` 을 `router.get` 으로 수정한다

     ```js
     app.get('/p1/r1', function(req, res) {
       res.send('HELLO /p1/r1 :)');
     });
     app.get('/p1/r2', function(req, res) {
       res.send('HELLO /p1/r2 :)');
     });
     =>
     router.get('/r1', function(req, res) {
       res.send('HELLO /p1/r1 :)');
     });
     router.get('/r2', function(req, res) {
       res.send('HELLO /p1/r2 :)');
     });
     ```

   - 라우터를 위임

     ```js
     app.use('/p1', p1);
     ```

5. ### 동일한 주소로 접속하면 정상적으로 동작함

   - 아직까지는 최적화된것이 아님
   - 파일로 쪼갤 때 진정한 효과가 나타남