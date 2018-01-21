# Orientdb로 웹앱제작 10 : 글추가

- **route 의 순서**는 때에따라 중요할 수도 있음

  ```js
  app.get('/topic/add', function(req, res){})

  app.get(['/topic', '/topic/:id'], function(req, res){})
  ```

  이런 코드가 있는 상태에서 add 에 대한 링크를 클릭하게 되면 app.get('/topic/add') 의 route에 걸리게됨

  ```js
  app_orientdb.js
  app.post('/topic/add', function(req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var author = req.body.author;
    var sql = 'INSERT INTO topic (title, description, author) VALUES(:title, :desc, :author)';
    db.query(sql, {
      params:{
        title: title,
        desc: description,
        author: author
      }
    }).then(function(results){
        // res.send(results[0]['@rid']);
        res.redirect('/topic/' + encodeURIComponent(results[0]['@rid']));
    });
  })
  ```

  정보를 입력하고  제출을 눌렀을 경우, **POST 방식으로 제공**되므로, app.post 에 대한 코드를 수정

  - sql문 추가
  - db.query(sql ...)
  - res.redirect('/topic/' + encodeURIComponent(results[0]\['@rid']));
    - 해당 부분에 대해서 **#**을 변환하기 위해 **encodeURIComponent** 를 사용
    - 그리고 반환되는 results는 배열이므로 0번째 배열의 @rid 값(행)을 가져오면 됨
      - res.send(results[0]\['@rid'])를 통해서 **배열**임을 알 수 있음