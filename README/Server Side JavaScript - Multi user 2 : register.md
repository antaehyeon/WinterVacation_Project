# Server Side JavaScript - Multi user 2 : register

1. ### app_multi_user_file.js 생성 (based on app_session_file.js)

2. ### register 태그 구현

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

3. ### /auth/register 에 대한 GET Route 코드 구성

   ```js
   app.get('/auth/register', function(req, res) {
     var output = `
       <h1>Register</h1>
       <form action="/auth/register" method="post">
         <p>
           <input type="text" name="username" placeholder="username"/>
         </p>
         <p>
           <input type="password" name="password" placeholder="password"/>
         </p>
         <p>
           <input type="text" name="displayName" placeholder="displayName"/>
         </p>
         <p>
           <input type="submit" value="SUBMIT"/>
       </form>
     `;
     res.send(output);
   })
   ```

   - form 태그는 POST 방식으로 /auth/register 로 선언

4. ### 전역변수로 사용자 배열 생성

   ```js
   var users = [
     {
       username:'hyeon',
       password:'111',
       displayName:'HYEON'
     }
   ]
   ```

5. ### /auth/register 에 대한 POST Route 코드 구성

   ```js
   app.post('/auth/register', function(req, res) {
     var user = {
       username: req.body.username,
       password: req.body.password,
       displayName: req.body.displayName
     }
     users.push(user);
     res.send(users);
   })
   ```

6. ### 결과

   ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%ED%9B%84%202.04.01.png)

   - 새로운 TEST 계정이 추가되어 있음



































