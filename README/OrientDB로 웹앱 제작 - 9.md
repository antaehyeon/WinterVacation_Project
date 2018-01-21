# Orientdb로 웹앱제작 9 : 읽기 2 상세보기

- 기존의 '/topic', 'topic/:id' 으로 접속해도 똑같은 SELECT 코드이기 때문에, 똑같은 페이지의 결과만 제공

```js
app_orientdb.js
app.get(['/topic', '/topic/:id'], function(req, res) {
  var sql = 'SELECT FROM topic';
  db.query(sql).then(function(_topics) {
    var sql = 'SELECT FROM topic WHERE @rid=:rid';
    var id = req.params.id;
    db.query(sql, {params:{rid:id}}).then(function(topic) {
        console.log(topic[0]);
        res.render('view', {topics: _topics, topic:topic[0]});
    });
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
    article
      h2= topic.title
      = topic.description
    div
      a(href='/topic/new') new
```

- req.params.id 를 통해 id를 가져오고 해당 id를 jade에게 넘겨준다

- 하지만 처음에는 제대로 뜨지 않음

  - 그래서 console.log(topic) 코드를 이용해서 console 에 띄워보면
    ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-05%20%EC%98%A4%ED%9B%84%209.37.05.png)
    위와 같이 topic에 대한 데이터가 출력됨

  - 여기서, topic는 괄호를 통해 여러개의 데이터로 구성되어 있음

  - 그러므로 배열이라는 것을 알 수 있음

    ```js
    res.render('view', {topics: _topics, topic:topic[0]}
    ```

    형식으로 수정됨

- 그리고 해당 페이지에서 홈으로 가기위해 'server Side JavaScript' 를 클릭한다면
  **Cannot read property 'title' of undefined** 라는 에러메세지를 볼 수 있음

- 해당 메세지는 **var id = req.params.id** 를 받아올 수 없는 것임
  (topic 최상위 경로로 가기때문에 id Property 가 제공되지 않는 것)

  ```js
  app_orientdb.js
  app.get(['/topic', '/topic/:id'], function(req, res) {
    var sql = 'SELECT FROM topic';
    db.query(sql).then(function(_topics) {
      var id = req.params.id;
      if(id) {
        var sql = 'SELECT FROM topic WHERE @rid=:rid';
        db.query(sql, {params:{rid:id}}).then(function(topic) {
            console.log(topic[0]);
            res.render('view', {topics: _topics, topic:topic[0]});
        });
      } else {
          res.render('view', {topics:_topics});
      }
    });
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
      article
        if topic
          h2= topic.title
          = topic.description
        else
          h2 Welcome
          | This is server side javascript tutorial.
      div
        a(href='/topic/new') new

  ```

  - 그래서 id에 대한 값을 판별하기 위해 app_orientdb.js 에서 if문으로 id를 판별함
  - 하지만 view.jade 에서도 topic의 데이터가 없기 때문에 if 문을 이용해 판별함