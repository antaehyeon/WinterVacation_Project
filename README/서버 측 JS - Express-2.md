# 서버 측 JS - Express, 정적파일을 서비스하는 법

- app.use(express.static('public'));

  - public/route.png 가 위치해 있어야 함
  - public 란 디렉토리를 정적인 파일이 위치한 디렉토리로 지정하겠다
  - 사용자에게 정적인 파일을 제공할 수 있음

  ```js
  var express = require('express');
  var app = express();
  app.use(express.static('public'));		// 정적인 파일이 위치한 디렉토리를 설정
  app.get('/', function(req, res) {
          res.send('Hello home page');
  });
  app.get('/route', function(req, res) {
          res.send('Hello Router, <img src="/route.png">');
  });
  app.get('/login', function(req, res) {
          res.send('<h1>Login please</h1>');
  });
  app.listen(3000, function() {
          console.log('Connected 3000 port !');
  });
  ```

  - 두번째의 app.get 처럼 함수 내에서 최상위 경로가 public 이 되는 것임 (public 내의 route)





# Express-웹페이지를 표현하는 방법(trade-off)

- #### 정적(최상위 경로 안에 html 파일로 구성)

  - 장점
    - 서버를 재가동 시키지 않더라도 경로에 있는 html만 바꿔주면, 내용이 바뀜
  - 단점
    - 프로그래밍적으로 HTML을 구성할 수 없음
    - HTML라는 플랫폼의 한계에 갇힐 수 있음 (현재 시간들을 표현하기 힘듬)

```js
app.get('/dynamic', function(req, res) {
	var lis = '';
	for (var i=0; i<5; i++) {
		lis = lis + '<li>coding</li>';
	}
	var time = Date();
	var output = `			//변수에 HTML코드를 넣기 위해서는 `` 사이에 구성함
	<!DOCTYPE html>
	<html>
	  <head>
	    <meta charset="utf-8">
	    <title></title>
	  </head>
	  <body>
	    Hello, Dynamic!
			<ul>
				${lis}		// 변수를 사용하기 위한 규격 ${}
			</ul>
			${time}
	  </body>
	</html>`;
	res.send(output);
});
```

- #### 동적

  - 장점
    - 프로그래밍적으로 웹페이지를 구성할 수 있음
    - 시간이나, 문자를 여러번 반복해서 표시하는 방법
  - 단점
    - 서버를 재가동 시켜야 변경된 사항이 적용됨