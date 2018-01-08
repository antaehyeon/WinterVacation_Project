# Server Side JavaScript - Security Password 3: salt

> md5를 이용하지 않고 어떻게 해야할까

1. ### salt 변수 추가

   ```js
   var salt = '@!3@#GDVAEfB%^%@!$';
   ```

   - 문자는 아무것이나 상관없음

2. ### node 를 이용해 암호화

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%ED%9B%84%203.06.07.png)

   - 이런식으로 salt 의 값을 따로 선언하여, md5(pwd+salt) 를 한 암호화 된 데이터를 아까의 사이트에 다시 넣어보면

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%ED%9B%84%203.07.55.png)

   - 아까와는 다르게 **NOT FOUND** 라는 문구를 출력함

3. ### 암호화를 진행했던 md5 부분의 코드를 수정

   ```js
   app.post('/auth/login', function(req, res) {
     var uname = req.body.username;
     var pwd = req.body.password;
     for (var i = 0; i < users.length; i++) {
       var user = users[i];
       if (uname == user.username && md5(pwd+salt) == user.password) {
         req.session.displayName = user.displayName;
         return req.session.save(function(){
           res.redirect('/welcome');
         });
       }
     }
     res.send('Who are you ? <a href="/auth/login">login</a>');
   })
   ```

   - md5(pwd+salt) == user.password

4. ### 로그인

   - 정상적으로 로그인 됨
   - 원래의 암호화(md5) 를 조금 더 알아보기 어렵게 한다를 보안쪽으로는 **' 소금(salt)을 친다 '** 라고 표현
   - 만약에 salt 값이 고정적으로 정해져 있고
   - 다양한 사용자 중 비밀번호가 같은 사람들끼리의 암호화된 결과는 동일할 것임
   - 결국 암호화도 완벽한것이 아니기 때문에, 한 비밀번호가 뚫렸을 때
   - 해당 암호를 사용하고 있는 사람들의 정보가 무더기로 털림
   - 그래서 가변적인 salt 값을 지정

5. ### 각각 SALT

   ```js
   var salt = '@!3@#GDVAEfB%^%@!$';
   var users = [
     {
       username:'hyeon',
       password:'92a395ceb7a21c0b8283bebaac9f5586',
       salt: '!@^%&!DAQEFDVA@@$',
       displayName:'HYEON'
     },
     {
       username: 'test',
       password: '47b49772d9292ace5c536fa0e0afefe9',
       salt: '!%bkqnBIQN950%@!#PQ',
       displayName: 'TEST'
     }
   ];
   ```

   ```js
   if (uname == user.username && md5(pwd+user.salt) == user.password) {
   ```

   - 기존의 서비스차원 salt 를 제외하고 user의 salt 를 가져오면 부분으로 수정

6. ### 그래도 md5는 사용하지 않는다

7. ### **그래서 SHA256 / SHA512** 를 사용

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%ED%9B%84%203.24.57.png)

   - 위와 같이 md5 대신 sha256 을 사용
   - 쉽게 변환하기 위해 중간의 함수 선언

8. ### 코드 수정

   ```js
   var sha256 = require('sha256');

   ...

   var users = [
     {
       username:'hyeon',
       password:'a15fcec619698646b54b18e6497082263fed103e177ed0af925da979418942a8',
       salt: '!@^%&!DAQEFDVA@@$',
       displayName:'HYEON'
     },
     {
       username: 'test',
       password: 'f4e7e02e6594bd24e85e904394b253ce4a99d834ec384024501539deb8e5054c',
       salt: '!%bkqnBIQN950%@!#PQ',
       displayName: 'TEST'
     }
   ];

   ...

   app.post('/auth/login', function(req, res) {
     var uname = req.body.username;
     var pwd = req.body.password;
     for (var i = 0; i < users.length; i++) {
       var user = users[i];
       if (uname == user.username && sha256(pwd+user.salt) == user.password) {
         req.session.displayName = user.displayName;
         return req.session.save(function(){
           res.redirect('/welcome');
         });
       }
     }
     res.send('Who are you ? <a href="/auth/login">login</a>');
   })
   ```

   - md5 에서 sha256으로 변경해주고, node에서 암호화된 (약간 긴) password를 수정해주면 됨

   ​

