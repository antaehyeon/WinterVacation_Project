# cookie 6 : cookie & security

![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%202.17.59.png)
- cookie 에 민감한 내용이 포함되어 있다면, 도중에 원치않는 제 3자가 정보를 도청할 수 있음

```js
app.use(cookieParser('23123129831824912@!@#$'));
```

- 맨 처음에 cookieParser 에 인자를 주게되면 해당 데이터가 KEY가 됨

- GET /count 에 대한 원본코드

  ```js
  app.get('/count', function(req, res) {
    if (req.cookies.count)
      var count = parseInt(req.cookies.count);
    else
      var count = 0;

    count += 1;

    res.cookie('count', count);
    res.send('COUNT : ' + req.cookies.count);
  })
  ```

- GET /count 에 대한 암호화 코드

  ```js
  app.get('/count', function(req, res) {
    if (req.signedCookies.count)
      var count = parseInt(req.cookies.count);
    else
      var count = 0;

    count += 1;

    res.cookie('count', count, {signed:true});
    res.send('COUNT : ' + req.cookies.count);
  })
  ```

  ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%202.25.22.png)

  - 쿠키에 대한 암호화가 진행된 것을 확인할 수 있음

- req.signedCookies.count

- res.cookie( … , {signed:true})