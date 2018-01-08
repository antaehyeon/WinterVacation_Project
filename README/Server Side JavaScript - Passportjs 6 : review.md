# Server Side JavaScript - Passportjs 6 : review

> ### Passport 에 대한 복습

1. ### passport 변수 선언

   ```js
   var passport = require('passport');
   var LocalStrategy = require('passport-local').Strategy;
   ```

   - 해당 passport 가 깔려있고, 그 위로의 **Strategy(전략)** 들을 사용할 수 있음
     - **인증 방식에 따라**서 Facebook, Google, Naver, Kakao 등..

2. ### app.use

   ```js
   app.use(passport.initialize());
   ```

   - passport 를 **사용하기 위해서 등록**하는 과정

   ```js
   app.use(passport.session());
   ```

   - 옵션이긴 하나, **로그인**과 관련된 부분에서 **session을 무조건 사용**하기 때문에 **passport에 대한 session 코드 삽입**

   - 반드시 **앞쪽**에서 **session middleware 을 선언한 코드**가 있어야 함

     ```js
     app.use(session({
       saveUninitialized: true,
       store: new FileStore()
     }));
     ```

3. ### /auth/login 에 대한 POST 코드

   ```js
   app.post('/auth/login', passport.authenticate(
   	'local', {
         successRedirect: '/welcome',
         failureRedirect: '/auth/login',
         failureFlash: falsh
   	}
     )
   );
   ```

   - form 에서 /auth/login 으로 username과 password를 POST방식으로 전달하게 되면

   - passport.authenticate (middleWare) 가 받아서

   - username과 password를 가지고 인증작업을 처리하게 됨

   - 'local' 타입에 해당하는 방식으로 인증하게 됨

     - 이 부분에는 다른 Type(Strategy) 을 사용할 수 있음

     - Passport.use (Passport 에 붙이다)

     - new LocalStrategy (Strategy, 전략추가)

       - 해당 전략이 'local' 타입에 해당하는 것

       - 해당 LocalStrategy 는 콜백함수를 인자를 받는데

         - function(username, password, done)

           - form에서 전달된 username과 password 가 해당됨

           - 해당 내부 함수에서 해당 username과 password가 있는지 비교한 후

           - 세번째 인자로 전달된 done 이라고 하는 함수를 호출해서

           - done(null, user) 의 두번 째 인자로 사용자의 정보를 담고있는 객체(user)를 호출

             - 로그인 성공

               - passport.serializeUser 함수를 호출하면서 콜백함수(user, done)가 실행됨

                 - 첫번 째 인자 (user)
                   - 위의 done 의 두번째로 전달한 user의 데이터가 들어오도록 약속됨
                   - 사용자의 식별자(id 등, 고유번호)라고 하는 정보(user.username)를 추출해서
                   - done 함수의 두번 째 인자로 넘겨줌
                   - 해당 done 함수를 호출하면
                     - session에 현재 해당 웹브라우저로 접속한 식별자 쿠키를 가지고 있는 user.username 이다 라고 하는 정보가 session에 저장되는 것임
                 - 그래서 맨 처음 접속했을 때 (딱 한번) 만 실행되는 함수

               - 그 다음에 접속을 하면 passport.deserializeUser 함수를 호출하면서 콜백함수(id, done) 이 실행됨

                 - 첫번 째 인자 (id)

                   - passport.serializeUser에서 done의 두번째 인자로 전달한 식별자(user.username)의 데이터가 전달되는 것

                   - 그래서 deserializeUser 함수에서 해당 id 의 값을 가지고 구체적인 사용자를 찾아내고

                     ```js
                     var user = users[i];
                     if(users.username == id) {
                       return done(null, user);
                     }
                     ```

                   - passport.serializeUser의 done 의 두번 째 인자로 전달(user) 하면

                     - /welcome 에 대한 GET 코드에서 req 객체의 user 라고 하는 약속된 이름의 객체가 Passport에 의해서 추가가 되고
                     - user 객체를 통해서 사용자의 정보에 접근할 수 있게 되는 것임
                     - 이전에는 session을 직접접근(req.session.) 했었지만
                     - passport가 만들어준 user 객체를 통해서 접근하는 방식 (THE END)

           - 만약에 그런 사용자가 없다면 done(null, false)

             - 두번 째 인자로 false (에러 메세지) 를 주면 됨
             - 로그인 실패

   - 다시 원래대로 돌아와서 로그인이 성공하였을 경우

   - successRedirect 로 설정된 '/welcome' 으로 redirect

   - 로그인이 실패하였을 경우

   - failureRedirect 로 설정된 '/auth/login' 으로 redirect

4. ### 해당 작업을 반복적으로 진행하면서, 복잡한 것들을 다소 수련이 필요함

   - 새로운 애플리케이션을 구축하려고 할 때, 주저하지 않게 됨