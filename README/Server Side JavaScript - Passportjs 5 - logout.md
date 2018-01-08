# Server Side JavaScript - Passportjs 5 - logout

> Login 을 했는데 왠 Welcome 페이지가 뜨는것일까

1. ### /welcome 에 대한 GET Route 코드 확인

  ```js
  app.get('/welcome', function(req, res) {
    if(req.session.displayName) {
      res.send(`
        <h1>HELLO, ${req.session.displayName}</h1>
        <a href="/auth/logout">logout</a>
      `);
    } else {
      res.send(`
        <h1>WELCOME</h1>
        <ul>
          <li><a href="/auth/login">LOGIN</a></li>
          <li><a href="/auth/register">Register</a></li>
        </ul>
      `);
    }
  });
  ```

  - req.session.displayName 이 세션에 저장되어 있다면
    - HELLO, + displayName 이 출력됨
  - 우리는 **Passport**를 사용
  - **Passport 는 Session을 사용**하기 때문에
  - Session 에 직접 접근하는 것이 아니라 **Passport 를 통해서 접근**하는 것이 바람직함

2. ### Reload(재 접속)

   - 정상적으로 로그인된 화면이 출력
   - Passport는 원래 Express가 가지고 있지 않은 user 라는 객체를 request 객체(req) 의 멤버(소속)로 만들어줍니다
   - 그 안에 user 라는 정보가 담겨져 있는데
   - 해당 user는 deserializeUser 의 done 함수의 두번 째 인자로 전달된 user 라는 값이
   - req의 user 객체가 되는 것임

3. ### Logout 코드 구성

   ```js
   app.get('/auth/logout', function(req, res) {
     delete req.session.displayName;
     res.redirect('/welcome');
   })
   ```

   ```js
   delete req.session.displayName; => req.logout();
   ```

4. ### 회원가입 진행

   - 회원가입 진행은 정상적으로 진행되지만, 회원가입 후 Welcome 화면이 출력됨 (원래 우리가 구현한 방식이 아님)

     ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%EC%A0%84%201.13.51.png)

   - /auth/register 에 대한 POST 코드에서 req.session (session을 직접접근) 했기 때문에 위 방식을 Passport 방식으로 접근해야 함

   - 첫번째로 어떤 사용자가 로그인했는지에 대한 정보를 넘겨주면 됨 (user)

   - 뒤의 콜백함수에는 이후 실행될 redirect 코드를 삽입

5. ### 기타

   - 로그아웃이 됬을 때, Passport의 코드인 req.logout() 이 실행될 것임

     - 해당 코드는 우리가 기존의 session에 접근해서 delete 하는 방식을 대신해주는 코드

   - 제거한 상태가 끝났다면 (안전한 상태)

     ```js
     req.session.save(funmction() {
       res.redirect('/welcome');
     })
     ```

     ​

   ​