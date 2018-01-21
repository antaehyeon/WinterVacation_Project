# 서버 측 JS - 웹앱 제작 4 : 글 목록 만들기

```js
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
```

- [fs.readdir(path[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
- [Jade - Language Reference - iteration](http://jadelang.net/reference/iteration/)
  ![스크린샷 2018-01-02 오후 10.18.43](/Users/hyeon/WinterVacation_Project/Image/스크린샷 2018-01-02 오후 10.18.43.png)
- [res.render](http://expressjs.com/ko/api.html#res.render)![스크린샷 2018-01-02 오후 10.15.38](/Users/hyeon/WinterVacation_Project/Image/스크린샷 2018-01-02 오후 10.15.38.png)
  - template 파일의 이름, template 파일 안으로 주입하고자 하는 데이터를 객체에 담아 표기하면 됨