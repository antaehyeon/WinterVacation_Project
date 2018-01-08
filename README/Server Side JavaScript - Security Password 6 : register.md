# Server Side JavaScript - Security Password 6 : register

> 회원가입을 진행할 때 PBKDF2 방식을 이용해 비밀번호를 저장하는 기능 구현

- [pbkdf2-password usage](https://www.npmjs.com/package/pbkdf2-password) 는 항상 참고

1. ### /auth/register 에 대한 POST 코드 수정

```js
app.post('/auth/register', function(req, res) {
  hasher({password: req.body.password}, function(err, pass, salt, hash) {
    var user = {
      username: req.body.username,
      password: hash,
      salt: salt,
      displayName: req.body.displayName
    };
    users.push(user);
    req.session.displayName = req.body.displayName;
    req.session.save(function() {
      res.redirect('/welcome');
    });
  });
})
```

- pbkdf2 를 사용할 때 항상 salt 값이 있어야 함을 생각하기 !

2. ### 로그인 / 로그아웃

   - 정상적으로 실행됨