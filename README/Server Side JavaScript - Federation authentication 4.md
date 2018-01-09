# Server Side JavaScript - Federation authentication 4

- 실제로 로그인이 끝났을 때는

  ```js
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

  - /auth/facebook/callback 으로 최종적으로 동작하며, 해당 사용자의 데이터가 이쪽으로 들어옴

1. ### FacebookStrategy 로 동작

   ```js
   passport.use(new FacebookStrategy({
       clientID: '2023046454641372',
       clientSecret: 'afa28eae335a8fee5d66fcbc10c597a4',
       callbackURL: "/auth/facebook/callback"
     },
     function(accessToken, refreshToken, profile, done) {
       // User.findOrCreate({facebookId: profile.id}, function(err, user) {
       //   if (err) { return done(err); }
       //   done(null, user);
       // });
     }
   ));
   ```

   - 앱에서 페이스북에 대한 정보 (clientID, clientSecret, callbackURL) 가 들어오고
   - accessToken, refreshToken
     - 나중에 페이스북 API를 사용할 때, 사용하는 인자들
     - profile
       - 우리에게 중요한 정보
     - done
       - 사용자가 있다면 done 이라는 객체로 사용자의 정보(데이터)가 넘어감
       - 사용자가 없어도 사용자를 생성해서 user라는 객체를 done의 두번째 인자인 user 로 넘겨줌

2. ### profile 를 탐색해보자 !

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%ED%9B%84%2010.36.18.png)

   - 그전에 위와 같은 에러메세지가 출력된다면 아래와 같이 설정할 것

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%ED%9B%84%2010.39.52.png)

   - 클라이언트 OAuth 로그인, 웹 OAuth 로그인 을 ' 예 ' 로 설정

   - 유효한 OAuth 리디렉션 URI

     ```js
     http://localhost:3003
     ```

   - 에러를 해결하고 계속을 클릭하면 profile 에 대한 정보가 아래와 같이 출력됨

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%ED%9B%84%2010.43.07.png)

   - id 는 페이스북의 사용자 식별자를 뜻한다 (매우 중요한 데이터)

     - 기존에는 users 라는 배열에 사용자의 정보를 Local 로 가지고 있었음

     - 이제는 페이스북에서 받아온 정보를 이용해서 이용자를 추가할 것

       ```js
       아까의 FacebookStrategy 기능을 이용해서
       function(accessToken, refreshToken, profile, done) {
           console.log(profile);
           var authId = 'facebook:' + profile.id;
           users.push({
             'authId': authId,
             'displayName': profile.displayName,
           });
       ```

       위와 같은 코드를 구성한다

     - 사용자 별로 어떤 인증체계를 사용하냐에 따라서 획득하는 정보는 다름

     - 우리 애플리케이션에서 사용자에게 필요한 정보들은

     - 모든 사용자가 페이스북, 로컬 어떤 방식으로 로그인 하든 공통적으로 사용할 수 있도록 설계해야함

   - 그런데, 처음 사용자 말고 이미 추가된 사용자라면 (이미 회원가입을 끝낸 상태)

     ```js
       function(accessToken, refreshToken, profile, done) {
         console.log(profile);
         var authId = 'facebook:' + profile.id;
         for(var i=0; i<users.length; i++) {
           var user = users[i]; 
           if(user.authId === authId) {
             return done(null, user);
           }
         }
     ```

   - 해당 return (if문) 에 걸리지 않는다면 새로운 사용자임을 판단하고

     ```js
         var newuser = {
           'authId': authId,
           'displayName': profile.displayName
         };
         users.push(newuser);
         done(null, newuser);
       }
     ));
     ```

   - 위와 같이 newuser 의 객체를 이용해 done 의 2번째 인자값으로 넘겨준다

3. ### 식별자가 다르네?

   - 로컬에서 사용했던 사용자의 식별자는 username 이지만
   - Facebook 에서 사용했던 사용자의 식별자는 authId 이다
   - 둘중의 한 곳에서 식별자를 변경해야 함
   - 일단은 local 쪽을 변경하는 식으로 코드를 구성해보겠음
   - 기존의 users의 배열을 변경하고

   ```js
   var users = [
     {
       authId:'local:hyeon',
       username:'hyeon',    							    password:'tL9xX3mhlfbH0yU7f7ytgBXDE3baE4WN/WI3cs+dkHRvlEXFZkyvvMhpx3uFqgYMSF5TVYTKFhr49Vzf1I7oMjZ6ItMS7ZVtGROjXqfi4oyPmVZwCqcJdhGdtfsNfQAxrQ6CP26stKZWLSgAZwV8f2wIhqrpuzH4AwJh0vbXJW4=',
       salt: 'RzPygEXkljP8LqC5l4tz+RVosr1fMW2qJZmAxp70wTEnVexfN8lpRr3UTJ4d2mSyJHziV9j4TqWH69WKM9KiQw==',
       displayName:'HYEON'
     }
   ];
   ```

   - authId 객체가 추가됨

   ```js
   var user = {
         authId: 'local:' + req.body.username,
         username: req.body.username,
         password: hash,
         salt: salt,
         displayName: req.body.displayName
       };
   ```

   -  그리고 Local 로 회원가입 하는 부분에 (POST 방식으로 받는 코드 부분)도 authId의 값을 구성해야함
   - 그러면 이제 **사용자에 대한 식별자**는 **' auth.id '** 가 되는 것임
   - 사용자의 식별자를 등록하는 부분 passport.serializeUser 부분을 수정

   ```js
   user.username => user.authId
   ```

   - 이후 로그인 할 때는 passport.deserializeUser 부분으로 접근될테니

   ```js
   if(user.username === id) => if(user.authId === id)
   ```

4. ### 로그인

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%ED%9B%84%2011.14.05.png)









