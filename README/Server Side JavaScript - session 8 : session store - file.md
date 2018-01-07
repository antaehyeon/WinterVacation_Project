# Server Side JavaScript - session 8 : session store - file

> session store(저장)에 대한 개념을 살펴볼 것

- session을 memory에만 설정하는 것은 실 서비스에서 잘 사용하지 않는 방식임
  - 서버를 껐다 키면 사용자들 웹브라우저의 session이 모두 날라가므로
- 그래서 영구적으로 저장할 수 있는 File 이나 Database를 사용함

1. #### [express session store file검색](https://www.npmjs.com/package/session-file-store)

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%2010.47.07.png)

2. #### npm을 통해 session-file-store 설치

   ```js
   npm install session-file-store --save
   ```

3. #### app_session_file.js 추가 (based on app_session.js)

4. #### session-file-store을 이용하기 위한 코드 추가

   ```js
   var session = require('express-session');
   var FileStore = require('session-file-store')(session);
    
   app.use(session({
       store: new FileStore(options),
       secret: 'keyboard cat'
   }));
   ```

   - Express 에는 session 을 처리할 수 있는 기술이 없음

   - 그래서, Express의 session에서 구체적인 처리를 하는것이 'express-session' Module

   - 'express-session' Module 은 기본적으로 Memory에 저장하는 기능은 있지만

   - 이것을 다른 것으로 교체할 때 (예를들어 파일에 저장할 때)

   - 사용하는 것이 FileStore 임!
     - session-file-store 는 express-session에 의존하고 있기 때문에
     - **var FileStore = require('session-file-store')(session)** 과 같은 코드를 통해 session을 넘겨주는 것임!

   - app.use의 session도 **express-session(session 변수) 을 의미하는 것**임

   - 단, 기존의 session을 이용한 code가 존재한다면 아래와 같은 형식으로 코드가 구성될 것임
     기존의 app.use(session({})) 에 추가되는 방식

     ```js
     app.use(session({
       secret: '12941nlekfsMFSDLIQNf%!%',
       resave: false,
       saveUninitialized: true,
       cookie: { secure: false },
       store: new FileStore()
     }));
     ```

5. #### session 을 사용하기 위해 use 했던 부분에 store 옵션 추가

   ```js
   app.use(session({
     secret: '12941nlekfsMFSDLIQNf%!%',
     resave: false,
     saveUninitialized: true,
     cookie: { secure: false },
     store: new FileStore()
   }));
   ```


6. #### 서버 실행

   ```js
   supervisor app_session_file.js
   ```

   - store에 new FileStore()라고 하는 새로운 Module이 구동됨
     - Session Data를 저장할 수 있는 저장소인 디렉토리를 생성함
     - 디렉토리 이름 : sessions
   - Sessions 라는 디렉토리가 생성됨

7. #### 웹 브라우저에서 서버로 사용자가 접속

   - 서버가 웹 브라우저에게 session data 를 cookie로 전송함

   - 동시에 session data에 대한 정보가 sessions 라는 디렉토리에 파일로 만들어짐

     ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%2011.44.35.png)

   - 만약에 웹브라우저에서 session 을 모두 삭제하고 새로 접속 (/welcome) 한다면

     ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%2011.48.43.png)

     위와 같이 새로운 session 데이터가 생기게 됨

8. #### 웹 브라우저에서 사용자가 로그인 했을경우

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%2011.50.17.png)

   - displayName 데이터가 추가됨

9. #### 서버를 재시작

   - 기존의 서버는 Memory에 저장되어 있기 때문에, 서버를 재시작하면 기존의 세션 데이터가 날라가지만
   - 현재 File로 저장된 session 데이터가 있기 때문에 (/sessions) 서버를 재시작 하고 새로고침을 해도 똑같은 화면을 보여줌(로그인 상태 유지)

