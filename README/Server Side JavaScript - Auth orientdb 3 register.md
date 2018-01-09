# Server Side JavaScript - Auth orientdb 3 register

> orient DB 를 이용해서 사용자를 추가하고 로그인 하는 방법을 살펴볼 것
>
> **Session store 는 단지 설정**일 뿐이고, **data를 handling 하는 것은 별도로 처리**해줘야 하는 것을 기억

1. ### orient DB 셋팅

   ```js
   var OrientDB = require('orientjs');
   var server = OrientDB({
      host:       'localhost',
      port:       2424,
      username:   'root',
      password:   '111111'
   });
   var db = server.use('o2');
   ```

2. ### /auth/register 에 대한 POST Route 코드 구성

   >사용자의 정보를 입력하고 submit 할 때 orient db 로 저장하는 코드를 구현

   ```js
   app.post('/auth/register', function(req, res) {
     hasher({password: req.body.password}, function(err, pass, salt, hash) {
       var user = {
         authId: 'local:' + req.body.username,
         username: req.body.username,
         password: hash,
         salt: salt,
         displayName: req.body.displayName
       };
       var sql = 'INSERT INTO user (authId, username, password, salt, displayName) VALUES(:authId, :username, :password, :salt, :displayName)';
       db.query(sql, {
         params:user
       }).then(function(results) {
         // push
         res.redirect('/welcome');
       })
       // req.login(user, function(err) {
       //   req.session.save(function() {
       //     res.redirect('/welcome');
       //   });
       // });
     });
   })
   ```

   - 기존코드는 주석처리
   - sql문을 이용해서 db에 query를 날리는 방식으로 진행
   - 이후 코드는 일단 /welcome 페이지로 redirect

3. ### 회원가입 후 Orient DB 관리자페이지에서 확인

   ```js
   SELECT * FROM user;
   ```

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%EC%A0%84%202.07.14.png)

   - 해당 user 테이블(Class)에 입력한 사용자의 정보가 제대로 들어오는것을 확인할 수 있음

4. ### 만약 INSERT 과정에서 문제가 있었다면

   > 성공했을 시 동작하는 콜백함수 외에 실패했을 시 동작하는 콜백함수를 추가

   ```js
   db.query(sql, {
     params:user
   }).then(function(results) {
     // push
     res.redirect('/welcome');
   }, function(error) {
     console.log(error);
     res.status(500);
   });
   ```

   - console.log 를 통해 에러를 출력하고
   - 응답으로 status 에 500을 제공
     - 서버에서 처리한 결과를 알려주는 코드