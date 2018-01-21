# 서버 측 JS - 웹앱 제작 6 : 코드의 개선

> 중복해서 등장하는 코드를 정리할 수 있다
>
> IMPORTANT : 중복의 제거 !

```js
app.get('/topic/new', function(req, res) {
  fs.readdir('data', function(err, files) {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('new', {topics:files});
  })
})
```

```js
app.get(['/topic', '/topic/:id'], function(req, res) {
  fs.readdir('data', function(err, files) {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    var id = req.params.id;
    if (id) {
      // id 값이 있을 때
      fs.readFile('data/'+id, 'utf8', function(err, data) {
        if(err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        }
        res.render('view', {topics:files, title:id, description:data});
      })
    } else {
      // id 값이 없을 때
      res.render('view', {topics:files, title:'Welcome :)', description:'Hello JavaScript For Server :)'});
    }
  })
});
```

```js
app.post('/topic', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/' + title, description, function(err) {
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.redirect('/topic/' + title);
  })
})
```

- express의 get은 주소를 여러개 받을 수 있음

  ```js
  app.get(['/topic', '/topic/:id'], function(req, res) {
  ```

  위와같이 배열형태로 진행해주면 됨

- 그리고 해당 주소에 대한 결과를 다르게 처리하려면

  ```js
  var id = req.params.id;
  ```

  사용자가 입력한 주소의 id를 받고

  ```js
  if (id) {
        // id 값이 있을 때
        fs.readFile('data/'+id, 'utf8', function(err, data) {
          if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          }
          res.render('view', {topics:files, title:id, description:data});
        })
      } else {
        // id 값이 없을 때
        res.render('view', {topics:files, title:'Welcome :)', description:'Hello JavaScript For Server :)'});
      }
  ```

  id가 존재한다면 (JavaScript에서는 값이 없을경우 FALSE 로 RETURN 됨) /topic/:id 로 접근되는 경우이므로 그에대한 코드를 작성하고

  그것이 아니라면(else) /topic 으로 접근되는 경우(홈)이므로, 이에 맞는 코드를 작성하면 된다

- view.jade

  ```express
  doctype html
  html
    head
      meta(charset ='utf-8')
    body
      h1
        a(href='/topic') Server Side JavaScript
      ul
        each topic in topics
          li
            a(href='/topic/' + topic)= topic
      article
        h2= title
        = description
      div
        a(href='/topic/new') new
  ```

- new.jade

  ```express
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
            a(href='/topic/' + topic)= topic
      article
        form(action='/topic' method='post')
          p
            input(type='text' name='title' placeholder='title')
          p
            textarea(name='description')
          p
            input(type='submit')
  ```

  - 각각 HTML을 구성할 수 있는 Express 단을 작성해주면 됨