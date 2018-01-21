# URL을 이용한 정보의 전달

- ### 서버 측 JS - Express, URL을 이용한 정보의전달 1: 쿼리스트링 소개
  - 사용자의 조작(사용자가 입력하는 경로)에 따라서 다른 결과를 보여준다
    - http://a.com/topic
    - http://a.com/home
    - http://a.com/login
  - 단 하나의 path에 대해서는 동일한 결과를 보여준다
  - topic route를 가지고 있다면, 동일한 경로에서도 다양한 결과를 보여줄 수 있다 = Query String
  - http://a.com/topic?id=1
  - http://a.com/topic?id=2
  - http://a.com/topic?id=3
    - ? 뒤의 내용을 **'query string'** 이라 부른다
    - http : 프로토콜
    - 전체 : URL
    - // 뒤의 내용은 **'Domain'

- ### 서버 측 JS - Express, URL을 이용한 정보의 전달 2 : query 객체 사용법

  ```js
  app.get('/topic', function(req, res) {
  	res.send('Hello');
  });
  ```

  - query string 은 요청(req)이다

  ```js
  app.get('/topic', function(req, res) {
  	res.send(req.query.id);
  });
  ```

  - http://localhost:3000/topic?id=1000
  - RETURN **1000**
  - [API reference (ExpressJS) - req.query](http://expressjs.com/en/4x/api.html#req.query)

  ```js
  // GET /search?q=tobi+ferret
  req.query.q
  // => "tobi ferret"
  ```

  - API를 통해서 Express - Request - req.query 를 통해서 req.query.q가 search?q=tobi+ferret를
  - 사용자에게 tobi ferret 로 보여준다는 것을 파악

  ```js
  app.get('/topic', function(req, res) {
  	res.send(req.query.id+','+req.query.name);
  });
  ```

  - http://localhost:3000/topic?id=1&name=hyeon
  - RETURN **1,hyeon**
  - application 에게 전달할 수 있는 값은 한개가 아닌 여러개가 될 수 있음
  - 값과 값을 구분하는 구분자는 **'&'**

- ### 서버 측 JS - Express, URL을 이용한 정보의 전달 3 : query 객체의 이용

  ```js
  app.get('/topic', function(req, res) {
  	var topics = [
  		'Javascript is ...',
  		'Nodejs is ...',
  		'Express is ...'
  	];
  	var output = `
  		<a href="/topic?id=0">JavaScript</a><br>
  		<a href="/topic?id=1">Nodejs</a><br>
  		<a href="/topic?id=2">Express</a><br><br>
  		${topics[req.query.id]}
  	`
  	res.send(output);
  });
  ```

  - query string을 express에서 다루는 방법
  - query string은 어떤 Application에게 정보를 전달할 때 사용하는 URL이 약속되어 있는 국제적인 표준
  - query string은 request(req) 영역
    - req에서도 query
      - query에서도 id를 통해서 전달
      - 그에 대한 API reference 는 [이곳](http://expressjs.com/en/4x/api.html#req.query)을 참고

- ### 서버 측 JS - Express, URL을 이용한 정보의 전달 4 : 시멘틱 URL

  - Query string 이 아닌 http://localhost:3000/topic?id=2 가 아닌 http://localhost:3000/topic/2 로 바꿔주는 것이 **시멘틱(뜻 : 의미론적) URL** 이다.

    ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-30%20%EC%98%A4%EC%A0%84%206.43.58.png)

  - 의미에 조금 더 부합하는 URL 체계 ([Wikipedia](https://en.wikipedia.org/wiki/Semantic_URL))

  ```js
  app.get('/topic/:id', function(req, res) {
  	var topics = [
  		'Javascript is ...',
  		'Nodejs is ...',
  		'Express is ...'
  	];
  	var output = `
  		<a href="/topic?id=0">JavaScript</a><br>
  		<a href="/topic?id=1">Nodejs</a><br>
  		<a href="/topic?id=2">Express</a><br><br>
  		${topics[req.params.id]}
  	`
  	res.send(output);
  });
  ```

  - ​	뒤의 주소를 받기 위해서는 get에서 해당 주소형식으로 받아야함

    - get 에서 '/topic/:id' 로 받고
      아래의 ${topics[req.params.id]} 에서 사용됨
      그럼 주소 형식은 
      http://localhost:3000/topic/1 (RETURN JavaScript)
      http://localhost:3000/topic/2 (RETURN Nodejs)
      http://localhost:3000/topic/3 (RETURN Express)
      형식으로 제공됨

    - 마찬가지로 Semantic URL은 복수적으로도 가능한데

      ```js
      app.get('/topic/:id/:mode', function(req, res) {
      	res.send(req.params.id+','+req.params.mode);
      })
      ```

      위와 같이 코드를 구성할 경우, http://localhost:3000/id/mode 형식으로 제공된다

    - http://localhost:3000/1/hyeon
      RETURN 1,hyeon