# Server Side JavaScript - Passportjs 3 : route

> Passport 를 이용해 로그인을 구현

- Passport 는 기본의 체계가 존재함
- 해당 체계 위에서 Facebook 이나 Google, Local (Strategy, 전략)
- 해당 수업에서는 사용자의 데이터 (Username, PW) 를 입력하는 'Local' 을 이용

1. ### [Username & Password](http://www.passportjs.org/docs/username-password/)

   - #### Form

     ```js
     <form action="/login" method="post">
         <div>
             <label>Username:</label>
             <input type="text" name="username"/>
         </div>
         <div>
             <label>Password:</label>
             <input type="password" name="password"/>
         </div>
         <div>
             <input type="submit" value="Log In"/>
         </div>
     </form>
     ```

     - 사용자의 ID에 대한것은 반드시 ' username ' 으로 PW는 ' password ' 로 설정해야 함!

   - #### Route

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

     - passport.authenticate ~ 구문은 express 에서 **middleware** 라고 지칭 (authenticate 라고하는 middleware)
     - 함수라고 생각하고 리턴값으로 **call-back함수를 리턴**함
       - 해당 call-back 함수에 **로그인과 관련된 기능들이 구현되어 있다**
     - 기존의 **로그인 성공 시** 사용자를 /welcome 페이지로 **redirect** 시키는데 그 부분이 위의 코드에서는
       **successRedirect 값과 동일**함
     - **로그인 실패** 시는 **failureRedirect** 값으로 설정
     - failureFlash : 사용자에게 딱 한번 메세지를 보여 줄 수 있는 기능 (중요도에 비해 복잡도가 높아서 아직은 설명X)
     - /auth/login 에 대한 POST 방식으로 동작하며
     - passport.authenticate 부분에서 'local' 방식(전략) 으로 동작
       - 이 부분에 facebook 이나 google이 들어감

   - #### Configuration

     ```js
     var passport = require('passport')
       , LocalStrategy = require('passport-local').Strategy;

     passport.use(new LocalStrategy(
       function(username, password, done) {
         User.findOne({ username: username }, function(err, user) {
           if (err) { return done(err); }
           if (!user) {
             return done(null, false, { message: 'Incorrect username.' });
           }
           if (!user.validPassword(password)) {
             return done(null, false, { message: 'Incorrect password.' });
           }
           return done(null, user);
         });
       }
     ));
     ```

     - passport.use(new LocalStrategy());
       - 객체와 전략을 만드는 코드
     - 이후, passport.authenticate 가 실행 될 때 LocalStrategy 의 객체를 이용해 로그인 과정을 진행함
     - LocalStrategy 는 call-back 함수를 가지고 있음
     - /auth/login 으로 데이터를 전송하게 되면
     - passport.authenticate 에 의해서 ' Local ' 전략이 실행될 때 LocalStrategy 의 등록되어 있는 Call-back 함수가 호출되도록 약속되어 있음

     ```js
     passport.use(new LocalStrategy(
       function(username, password, done) {
             var uname = username;
         var pwd = password;
         for (var i = 0; i < users.length; i++) {
           var user = users[i];
           if(uname === user.username) {
             return hasher({password:pwd, salt:user.salt}, 
             function(err, pass, salt, hash){
               if(hash === user.password) {
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

     - 3가지의 인자(입력값)를 결합해서 사용자의 로그인 상태를 판별하고, 실제 사용자를 판별하는 역할을 함

     - call-back 함수안에 기존의 사용자가 맞는지 확인하는 코드가 필요

     - done (완료, 끝났다)

       - 함수가 담겨져 있음 (함수가 담겨지도록 약속되어 있는 변수임)

       - 1st Parameter : null

         - 로그인 프로세스를 진행하는 과정에서 에러가 발생할 수 있는데
         - 해당 부분을 통해서 에러처리를 진행할 수 있음

       - 2st Parameter : 로그인 된 사용자의 정보를 담고 있는 객체 (user)

         ```js
         req.session.displayName = user.displayName;
         req.session.save(function() {
           res.redirect('/welcome');
         }
         ```

         의 코드가

         ```js
         done(null, user);
         ```

         로 대체될 수 있음 (로그인 절차가 끝났는데 user (성공) 했다)

       - 만약 사용자가 아니라면

         ```js
         res.send('Who are you ? <a href="/auth/login">login</a>');
         ```

         위와 같이 사용자에게 메세지를 출력하였는데, done 함수를 이용해서

         ```js
         done(null, false);
         ```

         로그인 절차가 끝났는데 false (실패) 했다

       - 만약 FOR문이 전부 돌아서 일치하는 사람이 없다면

         ```js
         done(null, false);
         ```

         로 동일하게 처리

       - 3st Parameter : 메세지를 담고있는 객체들을 만들어서 done 함수의 인자로 넘겨주고 있음

         - 해당 값은 /login 에 대한 POST 방식에서 authenticate 의  failureFlash 값과 관련되어 있음
         - 메세지를 전달 할 수 있는데, 해당 메세지를 다음 페이지에서 1회 보여줄 수 있는가