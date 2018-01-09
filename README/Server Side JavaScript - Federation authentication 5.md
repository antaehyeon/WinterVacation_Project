# Server Side JavaScript - Federation authentication 5

1. ### 페이스북 로그인이 된 상태에서 서버를 재시작 (종료-시작) 해보자

   ```js
   http://localhost:3003/welcome#_=_
   ```

   - 그리고 현재의 링크로 재접속(새로고침) 하면 **무한로딩**이 발생함

   - 콘솔에서도 deserializerUser 의 값밖에 출력이 안됨

     ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%ED%9B%84%2011.30.28.png)

   - 이유는 서버를 껐다 켜도, session 파일은 살아있음

   - 하지만 사용자의 정보 (users) 라고 하는 것은 Memory 상태에 있고, 애플리케이션을 끄면 날라가기 때문에

   - session 정보는 살아있는데 사용자에 대한 정보가 없어진 상태

   - 그러면 passport.deserializeUser 코드는 사용자를 비교하다가 사용자를 찾지 못하므로

   - 코드가 끝나고 대기상태로 빠져버림

   - 이것이 우리가 볼때에는 무한로딩이 발생하는 것임

   - 이것을 완화하는 방법으로

     ```js
     passport.deserializeUser(function(id, done) {
       console.log('deserializeUser ', id);
       for (var i = 0; i < users.length; i++) {
         var user = users[i];
         if(user.authId === id) {
           return done(null, user);
         }
       }
       done('There is no User');
     });
     ```

     - done 함수의 첫번 째 인자로 ERROR 메세지를 전달

     ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%ED%9B%84%2011.38.45.png)

     - 임시 방편일뿐, 다시 로그인을 진행하려면 session 파일을 삭제해야함

2. ### 사용자의 정보를 더 받고싶다면

   ```js
   passport.use(new FacebookStrategy({...}))

       var newuser = {
         'authId': authId,
         'displayName': profile.displayName
       };
   ```

   - 현재는 newuser 에서 authId와 displayName 값만 받음

   - 만약 사용자의 이메일 정보를 받고싶다

     - Passport Js doc 에서 [Permission](http://www.passportjs.org/docs/facebook/) 참고

     ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%ED%9B%84%2011.54.44.png)

     - 사용자의 정보를 가져오는 것이므로, 사용자에게 동의(허락)를 받아야 함

     - 페이스북의 정보가 돌아오기 전에, 사용자에게 요청해야 하는 부분이므로

     - /auth/facebook 에 대한 GET ROUTE 코드에서 작업

       ```js
       app.get( // get-facebook
         '/auth/facebook',
         passport.authenticate(
             'facebook',
             {scope: 'email'}
           )
         );
       ```

       - 대신 우리는 사용자의 email을 받기 때문에, scope 의 값으로 read_stream 대신 [email](https://developers.facebook.com/docs/facebook-login/permissions/#reference-email) 을 입력
       - 다른 정보를 알아보려면 [facebook login scope](https://www.google.co.kr/search?q=facebook+login+scope&ie=utf-8&oe=utf-8&client=firefox-b-ab&gfe_rd=cr&dcr=0&ei=bNpUWr7oDrDD8AetgZPwCQ) 라고 검색
       - 그러면 facebook 에 대한 [scope](https://developers.facebook.com/docs/facebook-login/permissions/) 데이터를 알 수 있음

       ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%EC%A0%84%2012.07.09.png)

     - 해당 코드로 수정 후, 다시 FACEBOOK 으로 접속하면

       ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%EC%A0%84%2012.09.12.png)

       - 이미 세션으로 인증된 상태라고 하더라도 새로운 데이터를 요청해야 하므로
       - **회원님의 이메일 주소** 라는 부분으로 허락받는 창이뜸

     - 하지만 Terminal 에서는 회원에 대한 Email 정보가 출력되지 않음

       - profile을 로그로 출력했을 때

     - 이에 대한 해결방법으로는 passport.use(new FacebookStrategy({...})) 에서

       ```js
       passport.use(new FacebookStrategy({
           clientID: '2023046454641372',
           clientSecret: 'afa28eae335a8fee5d66fcbc10c597a4',
           callbackURL: "/auth/facebook/callback",
           profileFields: ['id', 'email', 'gender', 'link', 'locale',
           'name', 'timezone', 'updated_time', 'vertified', 'displayName']
         },
       ```

       - profileFields 항목을 이용해서 profile 정보로 들어올 값들을 명시적으로 표시할 수 있음
         - 여기에 email 이 명시되어있어야 함
         - displayName

     - 그리고 세션을 삭제 후 다시 FACEBOOK 의 링크를 동작시키면

       ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%EC%A0%84%2012.16.26.png)

     - 이메일의 정보가 들어오는것을 확인할 수 있음

     - 그리고 new user의 코드에 사용자의 이메일의 정보를 포함해서 

       ```js
       var newuser = {
         'authId': authId,
         'displayName': profile.displayName,
         'emails': profile.emails[0].value
       };
       ```

     - 위와 같이 추가해주는 식으로 수정

     - 코드를 잠깐 수정해서

       ```js
       <h1>YOUR EMAIL : ${req.user.emails}</h1>
       ```

     - 아래와 같이 EMAIL의 정보도 확인할 수 있음

       ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%EC%A0%84%2012.22.49.png)

     - 나중에 만약에 FACEBOOK 이 사라질 때, email 같이 사용자의 유일한 식별자(강력한 식별자)를 Local Strategy 로 전환하거나 하는식으로 유연하게 대처할 수 있음