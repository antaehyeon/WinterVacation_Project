# Server Side JavaScript - Security Password 5

> PBKDF2 를 이용해 로그인이 되도록 수정

1. ### /auth/login 에 대한 POST 코드 수정

   ```js
   var hasher = bkfd2Password();
   ```

   - 만약 hasher 에 대한 변수가 선언되어 있지 않다면 선언

   ```js
   app.post('/auth/login', function(req, res) {
     var uname = req.body.username;
     var pwd = req.body.password;
     for (var i = 0; i < users.length; i++) {
       var user = users[i];
       if(uname === user.username) {
         return hasher({password:pwd, salt:user.salt}, function(err, pass, salt, hash){
           if(hash === user.password) {
             req.session.displayName = user.displayName;
             req.session.save(function() {
               res.redirect('/welcome');
             })
           } else {
             res.send('Who are you ? <a href="/auth/login">login</a>');
           }
         });
       }
     }
   })
   ```

   - 예전과 같은 이유로 call-back 함수가 있을 때에는 먼저 실행 될 수 있는 코드들을 확인한 후,
   - 안전하게 처리해주어야 함 (save function, return)

2. ### 로그인