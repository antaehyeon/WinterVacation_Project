# Server Side JavaScript - CRUD + Auth : orientdb 1 (Auth views)

> Orient DB 로 만든 예제와 CRUD, 인증기능을 합치는 프로젝트를 만들 것

- 현재는 코드가 매우 복잡해져있는 상태
  - 복잡해져 있는 상태에서 바로 연동하는 것은 매우 어려운일
  - CRUD와 인증(Auth)의 복잡도를 낮추는 것임
- app_passport_orientdb.js
- VIEW 부분을 해결
- route 부분을 파일로 분리
- express, database 를 파일로 분리

1. ### /auth/login 에 대한 GET Route 코드 분리 (VIEW)

   ```js
   app.get('/auth/login', function(req, res) {
     var output = `
     <h1>LOIGN</h1>
     <form action="/auth/login" method="post">
       <p>
         <input type="text" name="username" placeholder="username"/>
       </p>
       <p>
         <input type="password" name="password" placeholder="password"/>
       </p>
       <p>
         <input type="submit" value="SUBMIT"/>
     </form>
     <a href="/auth/facebook">FACEBOOK</a>
     `;
     res.send(output);
   })
   ```

   - [HTML to jade](http://html2jade.org/) 을 이용해서 HTML 코드를 jade로 변환

   - /views/orientdb 폴더 생성

   - 해당 jade 파일을 /views/orientdb/auth/login.jade 로 구성

     ```jade
     h1 LOGIN
     form(action='/auth/login', method='post')
       p
         input(type='text', name='username', placeholder='username')
       p
         input(type='password', name='password', placeholder='password')
       p
         input(type='submit', value='SUBMIT')
     a(href='/auth/facebook') FACEBOOK
     ```

   - views와 view engine에 대한 set 코드구성

     ```js
     app.set('views', './views/orientdb');
     app.set('view engine', 'jade');
     ```

   - /auth/login 에 대한 GET Route 코드 구성

     ```js
     app.get('/auth/login', function(req, res) {
       res.render('auth/login');
     })
     ```

     - jade 파일을 render 한다
     - 슬러시 구문 조심할 것
       - /auth/login X
       - auth/login O

2. ### /auth/register 에 대한 GET Route 코드 분리

   - views/orientdb/auth/register.jade

     ```jade
     h1 Register
     form(action='/auth/register', method='post')
       p
         input(type='text', name='username', placeholder='username')
       p
         input(type='password', name='password', placeholder='password')
       p
         input(type='text', name='displayName', placeholder='displayName')
       p
         input(type='submit', value='SUBMIT')
     ```

   - /auth/register에 대한 GET Route 코드 구성

     ```js
     app.get('/auth/register', function(req, res) {
       res.render('auth/register');
     })
     ```

   - 결과에는 어떤 변화도 없지만, app_passport_orientdb.js 를 최적화 할 수 있다