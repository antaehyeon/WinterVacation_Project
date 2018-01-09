# Server Side JavaScript - Auth orientdb 2 session store

1. ### CREATE app_passport_orientdb.js (based on app_passport_file.js)

2. ### 파일로 저장했던 session 부분에 대한 코드수정

   ```js
   var OrientoStore = require('connect-oriento')(session);
   var bodyParser = require('body-parser');
   ```

   - app_session_orientdb.js 파일에서 선언했었던 코드가 필요

   ```js
   var FileStore = require('session-file-store')(session); 
   =>
   var OrientoStore = require('connect-oriento')(session);
   ```

   - 그리고 session의 use 코드 중 store 부분을 보면

   ```js
   app.use(session({
     secret: '12941nlekfsMFSDLIQNf%!%',
     resave: false,
     saveUninitialized: true,
     cookie: { secure: false },
     store: new OrientoStore({
       server: "host=localhost&port=2424&username=root&password=111111&db=o2"
     })
   }));
   ```

   - store 에서 new OrientoStore 부분을 확인할 수 있음

   ```js
   store: new FileStore()
   =>
   store: new OrientoStore({
   	server: "host=localhost&port=2424&username=root&password=111111&db=o2"
   })
   ```

3. Session Query ALL
   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%EC%A0%84%201.42.25.png)

   - 해당 세션 정보가 사용자가 현재 접속한 사용자의 세션정보를 가지고 있는 것
   - **세션 기능 활성화**