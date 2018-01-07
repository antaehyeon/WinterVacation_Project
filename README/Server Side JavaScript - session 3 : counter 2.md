# Server Side JavaScript - session 3 : counter 2

> session 을 express에 추가 할 것임

1. #### [module](https://github.com/expressjs/session) 추가

   ```js
   Installation
   npm install express-session --save
   ```
   [API](https://github.com/expressjs/session#cookiesecure)

   ```js
   API
   var session = require('express-session')
   ```

   [cookie.secure](https://github.com/expressjs/session#cookiesecure)

   ```js
   cookie.secure
   var app = express()
   app.set('trust proxy', 1) // trust first proxy
   app.use(session({
     secret: 'keyboard cat',
     resave: false,
     saveUninitialized: true,
     cookie: { secure: true }
   }))
   ```

2. #### app_session.js 추가 (app_template.js 기반)

3. #### [session의 사용법](https://github.com/expressjs/session)

4. #### app use session

   ```js
   app.use(session({
     secret: 'keyboard cat',
     resave: false,
     saveUninitialized: true,
     cookie: { secure: false }
   }))
   ```

   - secret : KEY DATA
   - resave : 세션 아이디를 접속할 때 마다 새롭게 발급하는 기능
   - saveUninitialized : 세션 아이디를 실제로 사용하기 전까지 발급하지 않는 기능
   - cookie : 항목을 사용(true)하게 되면 session이 아닌 cookie로 통신됨
     - false 사용 시, session 으로 사용됨

5. #### /count 에 대한 GET ROUTE 코드 구성

   ```js
   app.get('/count', function(req, res) {
     res.send('HELLO SESSION !');
   })
   ```

6. #### session 코드 삽입

   ```Js
   app.get('/count', function(req, res) {
     req.session.count = 1;
     res.send('HELLO SESSION !');
   })
   ```

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%206.35.24.png)

   - Cookie 에서 count 의 값이 출력되는게 아닌 **connect.sid=사용자** 식별 ID 으로 출력되는 것을 확인할 수 있음

7. #### tmp 로 테스트

   ```js
   app.get('/tmp', function(req, res) {
     res.send('result : ' + req.session.count);
   })
   ```

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%206.39.42.png)

   - **6에서 설정한 req.session.count 에 대한 값**이 제대로 출력되는 것을 확인할 수 있음

8. #### count에 대한 코드를 구성

   ```js
   // get
   app.get('/count', function(req, res) {
     if (req.session.count) {
       req.session.count++;
     } else {
       req.session.count = 1;
     }
     res.send('COUNT : ' + req.session.count);
   })
   ```

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%206.47.35.png)

   - Private Mode로 하면 session.id가 달라지는 것을 확인할 수 있음
   - SERVER을 재가동 시키면 (CTRL + C, 이후 동작) 역시 session.id 가 변경됨