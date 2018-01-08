# Server Side JavaScript - Security Password 1

> 사용자의 비밀번호는 절대 외부에 노출되서는 안된다

- 암호화 기법을 이용해서 사용자의 비밀번호가 탈취되어도 해당 원본의 문자가 무엇인지 모르도록 하는 것



# Server Side JavaScript - Security Password 2

> 암호화가 생소하게 느껴질 수도 있다

1. ### md5 Module 설치

   ```
   npm install md5
   ```

2. ### node 로 단방향 암호화 방법

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%ED%9B%84%202.42.42.png)

   - javascript 라는 문자를 md5 방식을 이용해서 암호화 한 것임
   - 하지만 결과로 나온 암호화된 문자를 javaScript 라는 문자로 원복시키기는 매우어렵거나 불가능한 일
   - 이것을 **단방향 암호화** 라고 함
   - 하지만 현재 md5는 쓰지 않음

3. ### Init

   ```js
   var md5 = require('md5')
   ```

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%ED%9B%84%202.42.42.png)

   - 111 이라는 비밀번호를 md5 방식으로 변경

   - 코드에서 password 부분에 111 대신 698d51a19d8a121ce581499d7b701668 문자를 삽입

     ```js
     var users = [
       {
         username:'hyeon',
         password:'698d51a19d8a121ce581499d7b701668',
         displayName:'HYEON'
       }
     ];
     ```

     - 해당 소스코드가 유출된다 하더라도, 원래의 password 가 111 임을 알기가 쉽지 않음

4. ### 로그인

   - 일반적으로 로그인이 안됨 (존재하지 않는 사용자)

   - 그래서 로그인이 실행될 때 (사용자가 정보를 입력하고 로그인 버튼을 눌렀을 때) 의 코드는 app.post('/auth/login') 이므로 해당 부분의 코드를 수정

     ```js
     app.post('/auth/login', function(req, res) {
       var uname = req.body.username;
       var pwd = req.body.password;
       for (var i = 0; i < users.length; i++) {
         var user = users[i];
         if (uname == user.username && md5(pwd) == user.password) {
           req.session.displayName = user.displayName;
           return req.session.save(function(){
             res.redirect('/welcome');
           });
         }
       }
       res.send('Who are you ? <a href="/auth/login">login</a>');
     })
     ```

     - pwd 와 user.password 를 비교하는 부분에서 pwd를 md5로 수정

   - 결국은 실제 비밀번호를 확인하는 것이 아닌 둘다 암호화된 문자열을 비교

5. ### 결국은 안쓰는 이유

   > md5 dictionary online

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%ED%9B%84%202.59.09.png)