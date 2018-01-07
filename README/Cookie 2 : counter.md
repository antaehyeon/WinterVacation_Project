# Cookie 2 : counter

- 기본 express node js 코드 구성

  ```js
  var express = require('express');
  var app = express();

  // listen
  app.listen(3003, function() {
      console.log('Connected 3003 Port :)');
  });
  ```

- cookie 에 대한 내용을 찾기 위해 cookie 내용을 API 참조문서에서 검색

- [req.cookies](http://expressjs.com/ko/4x/api.html#req.cookies)

  - [cookie-parser](https://www.npmjs.com/package/cookie-parser) 에 대한 middleware 사용
  - 쿠키 정보를 가지고 있는 요청(Request) 가 들어오면 cookieParser (middleware) 가 cookie를 가로채서 처리

  ```js
  var express = require('express');
  var app = express();

  var cookieParser = require('cookie-parser');

  // listen
  app.listen(3003, function() {
      console.log('Connected 3003 Port :)');
  });

  // use
  app.use(cookieParser());

  // get
  app.get('/count', function(req, res) {
    res.send('COUNT : ');
  })
  ```

- res.cookie('count', 1);

  - 응답할 때(res) 보내기 위해 res를 사용
  - 요청할 때(req)

  ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%2012.42.14.png)

  - **Set-Cookie 에 count=1 의 정보**가 담겨져있는 것을 확인할 수 있음

- 다시한번 요청하면 (웹페이지에 접속) 웹 브라우저는 웹 서버에게 Request 할 때 Cookie 에 대한 데이터를 보냄

- 그러면, js 코드에서는 **요청**에 대한 코드이므로 **req** 사용

  ```js
  res.send('COUNT : ' + req.cookies.count);
  ```

  ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%2012.48.45.png)

- 쿠키(cookie) 는 **같은 주소**에서만 같은 cookie를 가짐

  ```js
  app.get('/count', function(req, res) {
    if (req.cookies.count)
      var count = parseInt(req.cookies.count);
    else
      var count = 0;

    count += 1;

    res.cookie('count', count);
    res.send('COUNT : ' + req.cookies.count);
  })
  ```

  - 기본적으로 req.cookies.count 의 값은 STRING (문자열) 임
  - 그래서 Int형으로 변형시켜주는 parseInt 함수를 이용

  ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%2012.53.58.png)

- 각 Request Header 와 Response Header 의 **Set-Cookie 필드와 Cookie 필드의 데이터가 다르다는 것을 확인**할 수 있음

