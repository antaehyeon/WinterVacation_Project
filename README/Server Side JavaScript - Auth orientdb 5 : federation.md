# Server Side JavaScript - Auth orientdb 5 : federation

> 로그인 옵션 중 페이스북에 대한 데이터를 데이터베이스에 저장하는 코드를 구현

1. ### Facebook 은 맨 처음 /auth/facebook 에 대한 GET Route 코드를 동작시킨다

   ```js
   app.get( // get-facebook
     '/auth/facebook',
     passport.authenticate(
         'facebook',
         {scope: 'email'}
       )
     );
   ```

   - 위의 코드가 맨 처음 동작하게 되고 해당 코드는 passport의 FacebookStrategy 코드를 동작시키게 됨

   ```js
   passport.use(new FacebookStrategy({
       clientID: '2023046454641372',
       clientSecret: 'afa28eae335a8fee5d66fcbc10c597a4',
       callbackURL: "/auth/facebook/callback",
       profileFields: ['id', 'email', 'gender', 'link', 'locale',
       'name', 'timezone', 'updated_time', 'verified', 'displayName']
     },
     function(accessToken, refreshToken, profile, done) {
       console.log(profile);
       var authId = 'facebook:' + profile.id;
       for(var i=0; i<users.length; i++) {
         var user = users[i]; 
         if(user.authId === authId) {
           return done(null, user);
         }
       }
       var newuser = {
         'authId': authId,
         'displayName': profile.displayName,
         'emails': profile.emails[0].value
       };
       users.push(newuser);
       done(null, newuser);
     }
   ));
   ```

   - 이후 Facebook 사이트로 이동을 해서 인증을 처리하고 다시 돌아올 때 콜백함수가 동작
   - 콜백함수의 인자로는 accessToken, refreshToken, profile 같은 정보를 가져오는데(받아오는데)
   - 기존 코드에서는 authId를 만든다
     - 'facebook:' + profile.id
       - profile 은 facebook 에서 받아온 데이터
   - 해당 authId를 사용자의 정보가 담겨있는 배열(users)의 데이터와 비교해서 일치하는 정보가 있는지 확인
   - 로그인이 됬는데 HELLO 가 안뜨는 부분

2. ### 개인적인 문제

   - 개인적으로 welcome 페이지에서 이메일도 추가했었는데, 이메일이 자꾸 undefined 로 뜨는 문제를 발견

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%EC%A0%84%202.40.55.png)

   - 분명 페이스북에서 맨 처음 받아올 때는 email이 존재하지만
   - welcome 페이지로 가면서 SELECT 쿼리문을 날렸을 때, email 항목이 none 로 받아오는 것을 확인하였음
   - orient DB 에서도 email 항목에 데이터가 INSERT 되지 않음

   ```js
   var sql = 'INSERT INTO user (authId, displayName, email) VALUES (:authId, :displayName, :emails)';
   ```

   - 알고보니 email PROPERTY에 :emails 가 아닌 :email 로 되어있어서 none 값이 전달된 것

   > ### 결론 : 오타 죽이고 싶다

   ​

   ​

   ​

   ​