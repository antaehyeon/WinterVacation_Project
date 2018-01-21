- # 서버 측 JS - Express, 템플릿 엔진 1 : 소개

- # 서버 측 JS - Express, 템플릿 엔진 2 : 사용법

  - 템플릿 엔진 ? 특정한 기술, 상품을 의미하는것이 아닌 기술'들', 기술'군'을 의미
  - views 폴더를 구성하여야 함

  ```
  app.set('view engine', 'jade');		// jade Template Engine 과 Express를 연결하는 코드
  app.set('views', './views');		// 생략되어도 무방 (Express는 views를 기본으로 찾음)

  app.get('/template', function(req, res) {
  	res.render('temp');		// 소스코드를 가져와서 웹페이지를 만들어 내는 'render'
  							// temp라고 하는 템플릿 파일을 render을 통해서 전달된다
  });
  ```

  - views 폴더 안에는 .jade 파일로 구성

  ```
  temp.jade
  html
  ```

  - 해당 파일이 views 에 위치해있고 template로 접근했을 시

    ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-30%20%EC%98%A4%EC%A0%84%201.38.31.png)

- # 서버 측 JS - Express, 템플릿 엔진 3 : Jade의 문법

  - 들여쓰기를 통해 문법을 작성함

  ```jade
  temp.jade
  html
  	head
  	body
  ```

  ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-30%20%EC%98%A4%EC%A0%84%201.55.50.png)

  - 그렇지만 코드가 너무 ugly 하기 때문에 [jade express code pretty](https://www.google.co.kr/search?q=jade+express+code+pretty&oq=jade+express+code+pretty&aqs=chrome..69i57.4824j0j1&sourceid=chrome&ie=UTF-8) !

  ```js
  app.locals.pretty = true;
  ```

  ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-30%20%EC%98%A4%EC%A0%84%201.56.04.png)

  - 줄바꿈을 하면 다음 단어가 TAG가 되버림

  ```jade
  temp.jade
  html
  	head
  	body
  		h1
  			Hello Jade (X)
  			
          h1 Hello Jade (O)
  ```

  - for 같이 프로그래밍적으로 제어하고 싶은 코드는 맨 앞에 -(마이너스)를 붙임

  ```jade
  temp.jade
  html
  	head
  	body
  		h1 Hello Jade
  		ul
  			-for(var i=0; i<5; i++)
  				li coding
  ```

  - 만약, 저번에 했던 것 처럼 현재시간을 표시하고 싶다면

  ```jade
  temp.jade
  html
  	head
  	body
  		h1 Hello Jade
  		ul
  			-for(var i=0; i<5; i++)
  				li coding
          div= time
  ```

  - 이런식으로 jade 파일을 수정한다
  - **여기서 주의할 점은 time이라는 변수는 app.js 에서 render 해줘야 함**

  ```js
  app.js
  ...
  app.get('/template', function(res, req) {
    res.render('temp', {time:'hello'});
    또는 res.render('temp', {time:Date()});
    또는 res.render('temp', {time:Date(), _title:'HELLO JADE :)'});
  });
  ...
  ```

  - render 함수 뒤에 property를 제공 {변수명: '변수 데이터'}
    - 현재는 웹페이지에 hello 라고 뜨겠지만, 저 위치에 **Date() 를 대신 넣는다면** 현재시간이 출력됨
    - render을 통해서 jade로 흘러들어간다 라고 표현
  - [jade template Engine](http://jadelang.net/)