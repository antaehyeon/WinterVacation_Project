# Server side javascript - jade extends1

> ### [jade extends](http://jade-lang.com/reference/extends) 에 대해서 알아볼 것

![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%EC%A0%84%205.04.28.png)

- 복잡도를 낮추기 위한 기술들이 존재
- Extends (상속)

1. ### jade Extends (jade 폴더 생성)

   1. #### view.jade

      ```jade
      html
        head
        body
          ul
            li JavaScript
            li nodejs
            li expressjs
          article JavaScript is ....
      ```

   2. #### add.jade

      ```jade
      html
        head
        body
          ul 
            li JavaScript
            li nodejs
            li expressjs
          article
            form
              input(type="text")
              input(type="submit")
      ```

      - **두개의 jade 파일에서 중복이 발생한다는 문제를 인식**

2. ### jade_extends.js

   ```js
   var express = require('express');
   var app = express();

   // listen
   app.listen(3003, function() {
     console.log('CONNECT 3003 PORT SUCCESS :)');
   });

   // set
   app.set('view engine', 'jade');
   app.set('views', 'jade');

   // get
   app.get('/view', function(req, res) {
     res.render('view');
   });
   app.get('/add' ,function(req, res) {
     res.render('add');
   });
   ```

   - set 은 약속되어 있는 것

     `app.set('view engine')`

     - view engine 을 jade 폴더로 접근하라

     `app.set('views', jade)`

     - views 를 jade 폴더로 접근하라

   -  /view 로 접근했을 경우(GET)

   - res(ponse) 가 view.jade 파일을 render 해서 보여줌 