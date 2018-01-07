# Server Side JavaScript - session 7 : login 4

1. #### /welcome 에 대한 GET ROUTE 코드 구현

   ```js
   app.get('/auth/logout', function(req, res) {
     delete res.session.displayName;
     res.redirect('/welcome');
   })
   ```

   - **delete** res.session.displayName

     - 해당 명령은 javaScript 문법
     - **res.session.displayName을 삭제**함

   - 이후, res.redirect('/welcome') 에 대한 구문이 실행되면서

     - **req.session.displayName이 존재하지 않으므로** else문에 걸리게 될 것임

       ```js
       else {
           res.send(`
             <h1>WELCOME</h1>
             <a href="/auth/login">LOGIN</a>
           `);
         }
       ```

       ​

