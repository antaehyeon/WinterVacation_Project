# Server Side JavaScript - session 9 : session store - orientdb

1. #### app_session_orientdb.js 파일 생성 (based on app_session_file.js)

2. #### module 추가

   > File 방식이 아닌 orientdb 방식을 이용하기 위해서 Module을 추가함

   - [connect-oriento](https://www.npmjs.com/package/connect-oriento)

   - [Install](https://www.npmjs.com/package/connect-oriento#installation)

     ```js
     npm install connect-oriento --save
     ```

   - [Usage](https://www.npmjs.com/package/connect-oriento#usage)

     ```js
     var session = require('express-session'),
         OrientoStore = require('connect-oriento')(session);
      
     // minimalistic config providing only DB data 
     // provide server config as object or url encoded 
     var config = {
             session: {
                 server: "host=localhost&port=2424&username=dev&password=dev&db=test"
             }
         };
      
     app.use(session({
             secret: 'SomeSecret',
             store: new OrientoStore(config.session)
         }));
     ```

     - session 항목에서 server 에 대한 데이터를 OrientDB (username, password, db) 에 맞게 수정

3. #### 서버 시작

   ![스크린샷 2018-01-08 오전 12.18.52](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%EC%A0%84%2012.18.52.png)

   - created Session cluster

   - created Session.id property

   - created Session.id index

   - orient DB 에 접속해보면

     ![스크린샷 2018-01-08 오전 12.26.25](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%EC%A0%84%2012.26.25.png)
     ![스크린샷 2018-01-08 오전 12.25.09](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%EC%A0%84%2012.25.09.png)
     위와 같이 orient DB SCHEMA 부분에 Session Table (orient DB - CLASS, Data id) 가 생성되어 있음

4. #### 웹페이지 접속

   - app.use 중 store 항목(new OrientoStore({}))
   - orient db 에 session 이라는 테이블이 있는지 확인
     - 없으면 생성
   - 새로운 session id 를 발급해서, session id 를 orient db에 저장하고
   - 동시에 사용자의 웹브라우저에게 session id 를 전송
     ![스크린샷 2018-01-08 오전 12.34.23](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%EC%A0%84%2012.34.23.png)
   - 그렇게 되면 위와같이 Session Table(CLASS)에 id 값 데이터가 추가됨

5. ####  기타

   - 몇번 시도하다 보면 로그인을 하고나서 Welcome(관리자 계정이 아닐경우 출력되는 페이지) 페이지만 뜨는 때가 존재함

     ```js
     app.post('/auth/login', function(req, res) {
       var user = {
         username:'hyeon',
         password:'111',
         displayName:'HYEON'
       };
       var uname = req.body.username;
       var pwd = req.body.password;
       if (uname == user.username && pwd == user.password) {
         req.session.displayName = user.displayName;
         res.redirect('/welcome');
       } else {
         res.send('Who are you ? <a href="/auth/login">login</a>');
       }
       res.send(req.body.id);
     })
     ```

     - 이유는 관리자 데이터를 비교하는 과정에서 session 데이터를 데이터베이스에 저장하는 시간보다
     - 이후 실행되는 res.redirect('/welcome') 코드의 시간이 더 짧아서
     - **redirect 이후 데이터베이스에 저장되는 오류가 발생**함

     ```js
     app.post('/auth/login', function(req, res) {
       var user = {
         username:'hyeon',
         password:'111',
         displayName:'HYEON'
       };
       var uname = req.body.username;
       var pwd = req.body.password;
       if (uname == user.username && pwd == user.password) {
         req.session.displayName = user.displayName;
         req.session.save(function() {
           res.redirect('/welcome');
         });
       } else {
         res.send('Who are you ? <a href="/auth/login">login</a>');
       }
       res.send(req.body.id);
     })
     ```

     - 그래서 **req.session.save(function() {});**
     - 해당 코드(save EVENT)를 사용하게 되면 안전하게 처리할 수 있음
     - **session이 store에 저장이 된 후에 session이 인자로 전달된 함수가 호출됨**
     - (= session store 가 끝났다는 것을 확신할 수 있을 때 redirect이 실행됨)