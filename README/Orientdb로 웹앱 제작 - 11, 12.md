# Orientdb로 웹앱제작 11 : 편집 1

> 편집은 읽기를 기본적으로 포함하고 있다

```jade
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
        div= 'by ' + topic.author
      else
        h2 Welcome
        | This is server side javascript tutorial.
    ul
      li
        a(href='/topic/add') add
      if topic
        li
          - rid = encodeURIComponent(topic['@rid'])
          a(href='/topic/' + rid + '/edit') edit
```

- topic 에 대한 예외처리를 추가
  글을 선택했을 때에만 edit 버튼이 제공됨
- 글을 선택하지 않았다면, @rid 에 대한 값이 없으므로, ERROR을 출력

# Orientdb로 웹앱제작 12 : 편집 2

> Cannot GET /topic/@rid/edit

```jade
doctype html
html
  head
    meta(charset='utf-8')
  body
    h1
      a(href='/topic') Server Side JavaScript
    ul
      each topic in topics
        li
          - rid = encodeURIComponent(topic['@rid'])
          a(href='/topic/' + rid)= topic.title
    article
      - rid = encodeURIComponent(topic['@rid'])
      form(action='/topic/' + rid + '/add' method='post')
        p
          input(type='text' name='title' placeholder='title' value=topic.title)
        p
          textarea(name='description' placeholder='description')
            = topic.description
        p
          input(type='text' name='author' placeholder='author' value=topic.author)
        p
          input(type='submit')

```

- HTML 문법 중 textarea는 value가 적용되지 않음 (소스보기를 하면 태그 사이에 데이터가 삽입되어있음)
- 그래서 = topic.description 구문을 사용

```js
app.get('/topic/:id/edit', function(req, res) {
  var sql = 'SELECT FROM topic';
  var id = req.params.id;
  db.query(sql).then(function(_topics) {
    var sql = 'SELECT FROM topic WHERE @rid=:rid';
    db.query(sql, {params:{rid:id}}).then(function(topic) {
        console.log(topic[0]);
        res.render('edit', {topics: _topics, topic:topic[0]});
    });
  });
});
```

```js
app.post('/topic/:id/add', function(req, res) {
  var sql = 'UPDATE topic SET title=:t, description=:d, author=:a WHERE @rid=:rid';
  var id = req.params.id;
  var title = req.body.title;
  var desc = req.body.description;
  var author = req.body.author;
  db.query(sql, {
    params:{
      t:title,
      d:desc,
      a:author,
      rid:id
    }
  }).then(function(_topics) {
    res.redirect('/topic/' + encodeURIComponent(id));
  });
});
```

- UPDATE 구문을 실행시키면, 몇개의 행을 UPDATE 했는지가 출력됨
- 그래서, topics[0]\['@rid'] 로는 rid를 가져올 수 없음
- 그래서 대신 id 값으로 대체하는 것임 (req.params.id)
- **만약, WHERE 절이 없다면 모든 데이터를 전부 UPDATE 시키기 때문에 이렇게 명령을 수행하는 코드들은 항상 주의할것 (데이터가 하나만 남고 전부 날라간다고 상상해보면 됨)**