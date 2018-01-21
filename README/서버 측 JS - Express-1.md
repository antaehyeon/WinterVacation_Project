# 서버 측 JS - express 도입

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {		// request, response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {		// listen이 비동기적으로 작동되는 부분
  console.log(`Server running at http://${hostname}:${port}/`);
});

```

- 특정포트가 웹서버를 바라보고 있게 설정하면, 웹서버의 포트를 통해서 웹서버로 접근할 수 있게됨
- 서버는 여러개의 IP를 가지고 있을 수 있음 - 어떤 IP를 타고 들어온 사용자를 수용할 것인가
- listen은 여러가지 이유로 시간이 많이 걸릴 수 있는 작업이기 때문에 비동기적으로 작동됨( fucntion() { } )
- 어떤것을 응답할 것인가에 대해서는 응답(res)을 가지고 있는 함수에서 진행함



# 서버 측 JS - express 설치

- npm init
- npm install —save express
  - dependencies
    - express : "^4.16.2"



# 서버 측 JS - Express, 간단한 웹앱 만들기

- vim app.js

  - 해당 애플리케이션을 실행시킬 때 최초로 실행되는(최초의 진입점) 애플리케이션 (main, entry)
  - Express에서 권장하는 해당 파일을 app.js 라고 명칭한다 (개인 프로젝트 이름을 사용해도 상관 없음)

  ```js
  app.js
  var express = require('express');
  var app = express();
  app.listen(3000, function() {
          console.log('Connected 3000 port !');
  });
  ```

  - 해당 코드를 node로 동작시킬 시, 3000번 포트가 바라보고 있기 때문에 localhost:3000 하면 접속이 됨
    (단, 파일이 아무것도 없기 때문에 Error Page, Cannot GET / 이라는 메세지가 출력됨)

  ```js
  app.js
  var express = require('express');
  var app = express();
  app.get('/');		// 사용자가 홈페이지에 접속했다 라는 것을 알려주기 위함
  app.listen(3000, function() {
          console.log('Connected 3000 port !');
  });
  ```

  - 사용자가 웹서버에 접속할 때 GET/POST 방식이 존재
  - URL을 치고 들어가는것은 GET방식으로 접속하는 것임
  - GET방식일 경우에 app.get()을 통해서 사용자가 홈페이지에 접속했을 때 행동을 취할 수 있음

  ```js
  var express = require('express');
  var app = express();
  app.get('/', function(req, res) {
          res.send('Hello home page');
  });
  app.get('/login', function(req, res) {
          res.send('<h1>Login please</h1>');
  });
  app.listen(3000, function() {
          console.log('Connected 3000 port !');
  });
  ```

  - 사용자가 어떠한 경로로 들어왔을 때, 어떤것을 실행할 것인가를 결정하는것이 get Method 가 하는 일
  - get Method 를 Route 라고 부르며, 하는 일을 Routing 이라고 부름

  ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-29%20%EC%98%A4%ED%9B%84%2011.38.55.png)

  - get이 하는일이 사용자의 요청과 요청에 대한 처리(Controller)를 중재하는 역할을 함
  - **Router는 가장 중요한 것 중에 한 부분이며, 위의 코드를 무조건 숙지할 것**