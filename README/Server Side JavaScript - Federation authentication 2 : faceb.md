# LServer Side JavaScript - Federation authentication 2 : facebook

- ### [Passport js Packages (STRATEGIES)](http://www.passportjs.org/packages/)

  - 다양한 형태의 인증을 제공함
  - Facebook, twitter, google, kakao, naver 등

1. ### [Facebook Developers](https://developers.facebook.com/)

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%ED%9B%84%208.28.05.png)

   - 주소는 localhost:3003 까지만 설정하고 만들었던 서비스의 **설정 - 기본설정**을 클릭

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%ED%9B%84%208.32.08.png)

   - 앱 ID 는 노출되어도 상관없지만, **앱 시크릿 코드는 절대 노출되면 안됨**

2. ### Install passport-facebook

   > [Passport JS - PROVIDERS - Facebook](http://www.passportjs.org/docs/facebook/)

   ```js
   npm install passport-facebook --save
   ```

   - #### Configuration

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%ED%9B%84%208.36.07.png)

   - 이후 passport 가 공통적인 요소가 되는 것이고
   - LocalStrategy (아이디와 비밀번호를 직접 입력하는 방식)
   - FacebookStrategy (페이스북 타사 인증 시스템)
   - 사용자에게 2가지의 선택지를 줄 수 있는 환경을 구성할 수 있음
   - Facebook 이외에도 다른 회사들의 인증 시스템을 사용하고 구현할 때 코드들이 굉장히 복잡해질 수 있는 부분을
   - 구조화 되게 관리해 줄 수 있는 것이 Passport JS 이다