# Server Side JavaScript - Federation authentication 3

1. ### Facebook URL 태그 추가

   ```js
   <li><a href="/auth/register">Register</a></li>
   ```

2. ### Route 코드 추가

   ```js
   // Redirect the user to Facebook for authentication.  When complete,
   // Facebook will redirect the user back to the application at
   //     /auth/facebook/callback
   app.get('/auth/facebook', passport.authenticate('facebook'));

   // Facebook will redirect the user to this URL after approval.  Finish the
   // authentication process by attempting to obtain an access token.  If
   // access was granted, the user will be logged in.  Otherwise,
   // authentication has failed.
   app.get('/auth/facebook/callback',
     passport.authenticate('facebook', { successRedirect: '/',
                                         failureRedirect: '/login' }));
   ```

   - 첫번 째 인자는 어떤 로그인 방식을 쓸 것인가

   - 기존은 Local 방식이였음

     ```js
     app.get( // get-facebook
       '/auth/facebook',
       passport.authenticate(
           'facebook'
         )
       );
     ```

3. ### Facebook 에 대한 전략(Strategy) 추가

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%ED%9B%84%208.36.07.png)

   ```js
   passport.use(new FacebookStrategy({
       clientID: FACEBOOK_APP_ID,
       clientSecret: FACEBOOK_APP_SECRET,
       callbackURL: "http://www.example.com/auth/facebook/callback"
     },
     function(accessToken, refreshToken, profile, done) {
       User.findOrCreate(..., function(err, user) {
         if (err) { return done(err); }
         done(null, user);
       });
     }
   ));
   ```

   - clientID 에 아까 Facebook Developers 에서 발급받은 ' 앱 ID ' 와 ' 앱 시크릿 코드 ' 로 코드를 구성하면 됨

   - callbackURL 이라는 것은 타사인증을 하는 일 자체는 굉장히 위험한 일이기 때문에

     - 이 사람이 맞는지, 해당 서비스가 맞는지, 플랫폼이 맞는지 물밑에서 굉장히 복잡한 작업으로 이뤄짐

   - facebook 에서는 단계가 하나 더 들어감 (callbackURL)

     - 기존 local 에서는 /auth/login 단계만 존재했지만
     - facebook 에서는 /auth/facebook 과 /auth/facebook/callback 2 단계로 나눠짐
     - /auth/facebook
     - /auth/facebook/callback
     - 인증을 하는 과정에서 우리의 애플리케이션과 페이스북 인증서버를 왔다갔다 하는 과정이 2번이기 때문
     - 인증이 가장어렵고 인증이 가장 중요함
       - 나중에 한번 파보는 것을 추천

   - … 부분이 에러가 나는데, 현재 코드에서 동작하지 않음

     - 일단 구글링 해본 결과
     - facebookId: profile.id 를 인자값으로 전달해주니 일단 서버동작은 되는데
     - 알아보고 수정해야 할 부분임

     ```js
     app.get( // get-facebook
       '/auth/facebook',
       passport.authenticate(
           'facebook'
         )
       );

     app.get(
       '/auth/facebook/callback',
       passport.authenticate(
         'facebook',
         {
           successRedirect: '/welcome',
           failureRedirect: '/auth/login'
         }
       )
     );
     ```

     - successRedirect
       - 성공했을 경우 (successRedirect)
         - /welcome 페이지로 redirect
       - 실패했을 경우 (failureRedirect)
         - /auth/login 페이지로 redirect

4. ### facebook 링크 클릭

   - 하기 전에 개발자 도구(요소 검사) 를 통해서 네트워크에 필터(/auth) 를 넣고 facebook 링크 클릭

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%ED%9B%84%209.54.54.png)

   - 그러면 passport 가 facebook 으로 링크를 redirect 시킴 (몇몇 정보를 포함시켜서)
   - GET facebook 을 통해서 페이스북 인증서버에게 정보를 전달

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%ED%9B%84%209.56.46.png)

   - GET callback? 으로 정보가 되돌아옴
   - 그렇기 때문에 코드에 app.get('/auth/facebook/callback') 에 대한 코드가 구성되어 있는 것임