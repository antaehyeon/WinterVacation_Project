# Server Side JavaScript - Auth orientdb 4 login

> 로그인에 대한 부분을 데이터베이스 이용해 처리

1. ### 로그인

   - 로그인을 진행했을 때 해당 정보를 받는 곳은 주소로 확인할 수 있음

   ```
   http://localhost:3003/auth/login
   ```

   - 이므로 /auth/login GET Route 가 받는다는 것을 확인할 수 있음

     ```js
   app.post('/auth/login', passport.authenticate('local',
       {
         successRedirect: '/welcome',
         failureRedirect: '/auth/login',
         failureFlash: false
       }
     )
   );
     ```

     - GET Route 에 대한 부분을 보면 passport.authenticate 가 local 방식으로 받는다는 것을 확인
   - 그러면 로컬에 해당하는 부분은 아래 코드와 같음

   ```js
   passport.use(new LocalStrategy(
     function(username, password, done) {
       var uname = username;
       var pwd = password;
       for (var i = 0; i < users.length; i++) {
         var user = users[i];
         if(uname === user.username) {
           return hasher({password:pwd, salt:user.salt}, function(err, pass, salt, hash){
             if(hash === user.password) {
               console.log('LocalStrategy', user);
               done(null, user);
             } else {
               done(null, false);
             }
           });
         }
       }
       done(null, false);
     }
   ));
   ```

   - 로컬에서 배열(메모리)에 저장되어 있던 정보를 비교하는 부분을 orientDB로 접근해서 비교하는 부분으로 변경
   - 쿼리를 요청하는 방법으로 바꿀 때 아래의 done은 지워야 함
     - 쿼리는 콜백함수로 동작하기 때문에 done이 먼저 호출될 것이기 때문에

   ```js
   passport.use(new LocalStrategy(
     function(username, password, done) {
       var uname = username;
       var pwd = password;
       var sql = 'SELECT * FROM user WHERE authId=:authId';
       db.query(sql, {params:{
         authId:'local:'+uname}}).then(function(results){
           if(results.length === 0) {
               return done(null, false);
         }
         var user = results[0];
         return hasher({password:pwd, salt:user.salt},
         function(err, pass, salt, hash){
           if(hash === user.password) {
             console.log('LocalStrategy', user);
             done(null, user);
           } else {
             done(null, false);
           }
         });
       })
     }
   ));
   ```

   - 그리고 로그인을 실행했을 때, 콘솔에 아래와 같은 정보(results)를 얻을 수 있음

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%EC%A0%84%202.40.55.png)

   - 해당 부분이 results의 0번째에 해당하므로, 그것을 user에 담고

   - hasher 부분의 salt 값에 user의 salt 를 담고

   - 콜백함수로 동작하는 hash 값이 유저가 입력한 password와 같다면

     - done(null, user) 가 동작하면서 위에서 results의 0번째 데이터를 받은 user의 객체가
     - done의 2번째 함수로 넘어가게 되고
     - passport.serializeUser(function(user, done)) 함수가 동작하게 됨
       - 그러면 results 의 0번째 인자로 받은 user의 데이터가
       - serializeUser 함수의 1번째 인자 (user) 로 넘어오게 되고
       - 해당 인자에서의 authId 값을 serializeUser 함수의 두번 째 인자로 넘겨주게 되면
       - orient db 로 만들어진 session store 안에 authId 라는 값이 저장이 되서
       - 해당 authId(식별자) 를 통해 데이터를 가져올 수 있게 되는 것

   - 만약 다르다면

     - done의 2번째 인자로 false를 넘겨주면 로그인이 실패했다는 것을 알 수 있음

   - 그리고 이후 로그인 부터는 deserializerUser 함수가 동작하게 될텐데

     - 여기서도 반복문으로 비교하는 것이 아닌 쿼리를 날려서 데이터를 비교

     ```js
     passport.deserializeUser(function(id, done) {
       console.log('deserializeUser ', id);
       var sql = 'SELECT FROM user WHERE authId=:authId';
       db.query(sql, {params:{authId:id}}).then(function(results){
         if (results.length === 0) {
           done('There is no USER :()');
         } else {
           done(null, results[0]);
         }
       });
     });
     ```

     - 단 여기서 쿼리문을 날릴 때, SELECT FROM 으로 날려도 괜찮지만 특정 Column 을 정의하는게 좋음
       - **SELECT displayName FROM user WHERE authId=:authId**
       - 이러면 불필요한 데이터(비밀번호)를 읽지 않고 특정 Column 에 있는 데이터만 읽게 됨(좋은 코드)

2. ### 회원가입 코드 수정

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
         req.login(user, function(err) {
           req.session.save(function() {
             res.redirect('/welcome');
           });
         });
       }, function(error) {
         console.log(error);
         res.status(500);
       });
     });
   })
   ```

   - 쿼리를 날린 후 콜백함수가 동작하면서 응답에 대한 세션을 저장하고, 세션이 안전하게 저장된 후 
     **/welcome 페이지로 redirect !!**

