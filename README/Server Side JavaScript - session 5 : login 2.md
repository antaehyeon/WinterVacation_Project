# Server Side JavaScript - session 5 : login 2

> 기존의 login 1 에서 <form action="/auth/login" 이라고 했으므로, method="post" 방식의 코드를 구성하여야함

1. /auth/login 으로 접속하는 POST 방식의 코드 작성

   ```js
   app.post('/auth/login', function(req, res) {
     var user = {
       username:'hyeon',
       password:'111'
     };
     var uname = req.body.username;
     var pwd = req.body.password;
     res.send(req.body.id);
   })
   ```
   - master 계정을 설정하기 위해서 user를 선언 (단, 소스코드에 로그인 정보를 심는 것은 좋지 않은 방식임)
   - POST 방식은 body 방식으로 받아오며, 그 뒤의 id는 HTML코드의 name 값에 해당

2.  각각의 로그인 아이디에 따라서 다른 event 발생

   ```js
   if (uname == user.username && pwd == user.password) {
       res.redirect('/welcome');
     } else {
       res.send('Who are you ? <a href="/auth/login">login</a>');
     }
     res.send(req.body.id);
   ```

   - master ID/PW 일 경우 'Cannot GET /welcome'

   ​

   ​


