# Server Side JavaScript - session 6 : login 3

> 사용자가 로그인에 성공했을 때 session을 다루는 방법

1. #### displayName 추가 (화면에 보여줄 닉네임) 및 서버에 저장

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

   - req.session.displayName 에 user.displayName 을 저장하였으므로, 서버에 현재 displayName이 저장되어 있는 상태임

2. #### /welcome에 대한 GET Route 설정

   ```js
   app.get('/welcome', function(req, res) {
     res.send(req.session);
   })
   ```

   - 위와같이 session을 출력하면, 아래와 같은 session에 대한 정보를 확인할 수 있음

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%2010.02.32.png)

   - displayName 에 대한 항목도 확인할 수 있음

3. #### /welcome에 대한 GET Route에서 displayName을 기준으로 event 설정

   ```js
   app.get('/welcome', function(req, res) {
     if(req.session.displayName) {
       res.send(`
         <h1>HELLO, ${req.session.displayName}</h1>
   	  <a href="/auth/logout">logout</a>
       `);
     } else {
       res.send(`
         <h1>WELCOME</h1>
         <a href="/auth/login">LOGIN</a>
       `);
     }
   });
   ```

   - 만약 로그인을 했었다면
     - 서버에 displayName 값이 저장되어 있었을 것
   - 그것을 판별 **' IF req.session.displayName '**
     - **데이터가 존재**한다
       - /welcome 에 GET 방식으로 접근했을 때
       - **' HELLO, 저장된 displayName '** 의 메세지와
       - logout ('/auth/logout') 에 대한 링크가 설정될 것
         - 해당 링크를 클릭하면 **' Cannot GET /auth/logout '**
     - **데이터가 존재하지 않는다**
       - /welcome 에 GET 방식으로 접근했을 때
       - **' WELCOME '** 메세지가 출력될 것임

   ​