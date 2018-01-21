# 서버 측 JS - Express, POST 방식을 이용한 정보의 전달 3 : POST

- 생각의 방법

  - 자 우리는, 여태까지 app.js(JavaScript)에서 app뒤에 get 을 붙여

    ```js
    app.get('/form_receiver?', function(req, res) {
    	var title = req.query.title;
    	var description = req.query.description;

    	res.send(title + ',' + description);
    });
    ```

    위와 같이 작성해 왔는데

  - method='post' 방식이므로, app.post() 형식으로 작성하면 되지 않을까?

    ```js
    app.post('/form_receiver', function(req, res) {
    	res.send('HELLO, POST :)');
    });
    ```

  - 그리고 localhost:3000/form_receiver 으로 접속한다면

  - HELLO, POST :) 가 정상적으로 출력됨

- Post 방식에서도 똑같이 정보를 받으면 되지 않을까

  ```js
  app.post('/form_receiver', function(req, res) {
  	var title = req.body.title;
  	var description = req.body.description;
  	res.send(title + ',' + description);
  });
  ```

  - 했지만, 'TypeError: Cannot read property 'title' of undefined' 에러를 출력함

- API 문서를 찾자

  - [req.body](http://expressjs.com/en/4x/api.html#req.body)

    ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-01%20%EC%98%A4%ED%9B%84%2011.48.23.png)

  - 기본적으로 POST방식으로 전달된 데이터는 정의되어있지 않다(Undefiend)
    사용하고 싶다면 body-parser나 multer을 사용하세요

  - [body-parser](https://www.npmjs.com/package/body-parser) 

    ```js
    npm install body-parser --save

    app.js
    var bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: false }))
    ```

    - 해당 애플리케이션으로 들어오는 모든 요청들은 bodyParser 라는 middleware 을 거쳐 사용자가 **POST방식으로 전송한 데이터를 사용할 수 있도록 하는 Module(body-parser)**
    - 사용자가 POST방식으로 전송한 데이터가 있다면, 해당 Application 안에서 request 객체 (function-req)가 **원래 가지고 있지 않았던 body 라고 하는 객체를 bodyParser 가 추가함**
    - var title = req.body.title;
      - body라는 객체 안 title 이라는 property 가 title에 담겨 **최종적으로는 사용자에게 데이터를 보여줄 수 있음**
    - app.use(bodyParser.urlencoded({ extended: false }))
      - use : **붙인다** 는 느낌으로 이해