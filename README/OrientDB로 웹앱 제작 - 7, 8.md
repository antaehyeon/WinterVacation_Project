- ### Orientdb로 웹 애플리케이션 제작 7 : 구현 계획

  ```tex
  get('topic/') : view.jade
  get('topic/:id') : view.jade
  get('topic/add') : add.jade
    post('topic/add')
    get('topic/:id')
  get('topic/:id/edit') : edit.jade
    post('topic/:id/edit')
    get('topic/:id')
  get('topic/:id/delete') : delete.jade
    post('topic/:id/delete');
    get('topic/')
  ```

- ### Orientdb로 웹앱 제작 8 : 읽기 1 글목록

  - [Initializaing the Server API](http://orientdb.com/docs/last/OrientJS-Server.html#initializing-the-server-api)

    ```js
    var OrientDB = require('orientjs');

    var server = OrientDB({
       host:       'localhost',
       port:       2424,
       username:   'root',
       password:   'root_passwd'
    });

    var db = server.use('o2')
    console.log('Using Database:', db.name);
    ```

    ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-05%20%EC%98%A4%ED%9B%84%208.46.46.png) 

  - orient DB가 웹이랑 붙이기에는 아직까지 특수기호들이 많이 사용되서 이상한 에러를 뿜을 수 있음

    ```js
    var a = {name: 'hyeon'};
    a.name
    RETURN 'hyeon'
    a['name']
    RETURN 'hyeon'
    ```

    같은 결과를 리턴함

    ```js
    app_orientdb.js
    app.get(['/topic', '/topic/:id'], function(req, res) {
      var sql = 'SELECT FROM topic';
      db.query(sql).then(function(_topics) {
        res.render('view', {topics:_topics});
      });
    ```

    ```jade
    view.jade
    doctype html
    html
      head
        meta(charset ='utf-8')
      body
        h1
          a(href='/topic') server Side JavaScript
        ul
          each topic in topics
            li
              - rid = encodeURIComponent(topic['@rid'])
              a(href='/topic/' + rid)= topic.title
              // a(href='/topic/' + topic['@rid'])= topic.title
        article
          h2= title
          = description
        div
          a(href='/topic/new') new
    ```

    - 기존의 코드( topic['@rid'] )는 링크를 접속했을 때, 뒤의 queryString 이 **#형식**으로 출력됨

      - 해당 **#**은 웹에서 특정점으로 스크롤하는 특수문자이기 때문에

        ```jade
        - rid = encondeURIComponent(topic['@rid'])
        ```

        형식(JavaScript로 인식, 함수)으로 바꿔주고, 아래서 rid 로 사용한다