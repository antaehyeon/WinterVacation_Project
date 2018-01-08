# Server Side JavaScript - Multi user 3

> 추가된 사용자 중에서 로그인 할 때 같은 사용자가 있는지 없는지 판단

1. ### auth/login 에 대한 POST 방식 코드 수정

   ```js
   app.post('/auth/login', function(req, res) {
     var uname = req.body.username;
     var pwd = req.body.password;
     for (var i = 0; i < users.length; i++) {
       var user = users[i];
       if (uname == user.username && pwd == user.password) {
         req.session.displayName = user.displayName;
         return req.session.save(function(){
           res.redirect('/welcome');
         });
       }
     }
     res.send('Who are you ? <a href="/auth/login">login</a>');
   })
   ```

   - for문을 이용해 users의 배열을 모두 순차적으로 탐색한다

   - 기존의 코드를 변경시키지 않게하기 위해 **' var user = users[i] '** 를 통해 user를 받아온다

   - 그리고 req.session.save(function() { }) 을 이용해 session이 save가 됬다는 것을 확신하고 '/welcome' 페이지로 redirect 시킨다

     ```js
         if (uname == user.username && pwd == user.password) {
     		req.session.displayName = user.displayName;
             req.session.save(function(){
             res.redirect('/welcome');
           });
         }
       }
       res.send('Who are you ? <a href="/auth/login">login</a>');
     ```

     - 기존의 코드였는데 call-back 함수로 동작하다 보니 로그인이 성공해도 맨 아래의 **res.send** 부분이 먼저 동작하게 됨
     - 그래서 위와 같이 return 을 이용해서 먼저 리턴되게 처리해놓고 그 이후에 함수가 실행되도록 코드를 수정
     - JavaScript(node js) 특성상 비동기 방식이 많기 때문에 사람이 생각하는 의식의 흐름이 아닐 수 있음을 항상 중시

2. ### /auth/register 에 대한 POST 방식 코드 수정

   ```js
   app.post('/auth/register', function(req, res) {
     var user = {
       username: req.body.username,
       password: req.body.password,
       displayName: req.body.displayName
     }
     users.push(user);
     req.session.displayName = req.body.displayName;
     req.session.save(function() {
       res.redirect('/welcome');
     })
   })
   ```

   - 회원가입이 완료된 후 session 데이터를 가져와서, session의 저장이 완료된 후 /welcome 페이지로 redirection 시킨다