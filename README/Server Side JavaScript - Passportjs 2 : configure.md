# Server Side JavaScript - Passportjs 2 : configure

> [Passport 공식홈페이지](http://www.passportjs.org/)
>
> 여러가지 인증방식을 통합한 도구
>
> 통합은 항상 얻는것과 잃는것이 공존

- 인증절차는 다소 긴 편이다
- 1번, 2번, 3번 반복해서 학습해볼 것

1. ### app_passport_file.js (based on app_multi_user_file.js)

2. ### [Passport Configure](http://www.passportjs.org/docs/configure/)

   ```js
   var passport = require('passport')
     , LocalStrategy = require('passport-local').Strategy;
   ```

   - 여기서 Strategy 는 '연합' 이라는 의미

   - #### [STRATEGIES](http://www.passportjs.org/packages/)

     - Passport는 페이스북에 인증하는 기능을 가지고 있지 않음
     - 페이스북 인증에 대한 전략(구현)을 담고 있는 **passport-facebook 모듈을 설치**해서 페이스북의 인증을 처리

   - 페이스북이나 구글을 사용하지 않고, 사용자의 데이터 (ID, PW) 를 직접 입력받아서 구현할 때에는 **' passport-local '** 을 사용하는 것

3. ### npm 설치

   ```js
   npm install --save passport passport-local
   ```

4. Middleware
   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%ED%9B%84%209.14.01.png)

   - Documentation 에서 Configure 부분 중 **Middleware** 참고

   ```js
   app.use(passport.initialize());
   app.use(passport.session());
   ```

   - 해당 코드는 반드시 session 을 사용한 코드 뒤쪽에 위치해 있어야 함
   - session을 사용하는 코드인데, 아직 셋팅이 안되어 있다면 문제가 발생하기 때문

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%ED%9B%84%209.15.42.png)

   ​









