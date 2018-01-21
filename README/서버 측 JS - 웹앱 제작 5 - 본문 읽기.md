- # 서버 측 JS - 웹앱 제작 5 : 본문 읽기

  ```js
  // get
  app.get('/topic/new', function(req, res) {
    res.render('new');
  })
  app.get('/topic', function(req, res) {
    fs.readdir('data', function(err, files) {
      if (err) {
        res.status(500).send('Internal Server Error');
      }
      res.render('view', {topics:files});
    })
  })
  app.get('/topic/:id', function(req, res) {
    var id = req.params.id;
    fs.readdir('data', function(err, files) {
      if (err) {
        res.status(500).send('Internal Server Error');
      }
      fs.readFile('data/'+id, 'utf8', function(err, data) {
        if(err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        }
        res.render('view', {topics:files, title:id, description:data});
      })
    })
  })
  ```

  ```express
  doctype html
  html
    head
      meta(charset ='utf-8')
    body
      h1 Server Side JavaScript
      ul
        each topic in topics
          li
            a(href='/topic/'+topic)= topic
      article
        h2= title
        = description
  ```

  - 위까지 진행하면 본문에는 ii-a-href 링크들이 생성이됨

  - http://localhost:3000/topic/JavaScript

  - http://localhost:3000/topic/nodejs

  - [fs.readFile(path[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)

  - 순차적으로 진행되는 부분을 꼭 기억할 것

    - readdir 의 Call-back 함수를 통해서
      - if (err) 에러처리;
      - 그리고 fs.readFile을 한번 더 처리한 후
        - if (err) 에러처리;
        - **res.render('view', {topics:files, title:id, description:data});**
          - files(topics) 는 맨 처음의 readdir 의 call-back함수 인자
          - id(title) 는 get 방식으로 받아온 사용자의 입력데이터(:id)
          - data(description) 는 readFile의 call-back함수 인자

    > 단계적으로 맨 아래에서 코드가 들어가지 않는다면, express 단에서 error 출력
    >
    > 변수를 찾을 수 없으므로