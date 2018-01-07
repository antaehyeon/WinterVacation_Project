# Server Side JavaScript - session 4 : login 1

> Login 기능을 Session을 이용해서 만들 것

1. id, pw 의 HTML 구성

   ```js
   app.get('/auth/login', function(req, res) {
     var output = `
     <form action="/auth/login" method="post">
       <p>
         <input type="text" name="id" placeholder="username"/>
       </p>
       <p>
         <input type="password" name="pw" placeholder="password"/>
       </p>
       <p>
         <input type="submit" value="SUBMIT"/>
     </form>
     `;
     res.send(output);
   })
   ```

   ​