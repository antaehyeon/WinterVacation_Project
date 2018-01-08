# Server Side JavaScript - Passportjs 4 : serialize

```js
passport.use(new LocalStrategy(
  function(username, password, done) {
    var uname = username;
    var pwd = password;
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if(uname === user.username) {
        return hasher({password:pwd, salt:user.salt}, function(err, pass, salt, hash){
          if(hash === user.password) {
            done(null, user);
          } else {
            done(null, false);
          }
        });
      }
    }
    done(null, false);
  }
));
```

- 로그인 화면에서 정보들이 입력되면, LocalStrategy 의 function 중 username과 password 항목에 인자로 받게됨

- #### Sessions

  > 사용자 인증과 관련된 것을 할 때, session을 통해서 유지함

  - passport 를 통해서 session을 사용하려면

    ```js
    passport.serializeUser(function(user, done) {
      // done(null, user.id);
      done(null, user.username);
    });
    ```

    - **serializeUser(function(user, done))**

      - done 에서 실행된 결과가 성공 이라면 (두번 째 인자가 false가 아니라면) done(null, user.id) 가 실행됨

      - 해당 콜백함수의 첫번 째 인자(user)는 passport.use 에서 사용된 done(null, user)의 두번 째 인자(user)가 넘어옴

      - user 에는 우리가 만들었던 사용자의 정보가 들어가 있음

        - username, password(암호화 된), salt, displayName

      - 복수 사용자 중에서 사용자 별로 구분하기 위해 ' 식별자 ' 를 추가해야 함 (현 코드에서는 username)

        - 해당 식별자를 두번 째 인자인 done 으로 넘겨

        - 해당 콜백함수 내의 done 함수에서의 두번 째 인자로 식별자를 넘겨주면 됨

          ```js
          user.id => user.username
          ```

    - 그러면 최종 콜백함수 내의 done 함수에 의해서 session이 등록되는 것임

    ```js
    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
        done(err, user);
      });
    });
    ```

    - **deserializeUser**

      - serializeUser 에 의해서 지금 로그인한 사용자의 session 의 user id 값 (예. hyeon) 이 저장되어 있다면
      - 그 다음에 사용자가 접근(페이지에 접속)할 때는 deserializeUser 가 실행되도록 약속되어 있음
      - serializeUser 의 콜백함수 중 done 함수의 인자로 넘긴 user.username의 값이
      - 콜백함수의 첫번 째 인자인 id 값으로 들어가게 됨
      - 해당 id 값을 통해서 사용자를 검색하는 작업을 진행해야함

    - **Log**

      ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%EC%A0%84%2012.08.26.png)

      ```js
      console.log('LocalStrategy', user);
      ```

      - 맨 첫번째로 실행되는 LocalStrategy

      - 해당 데이터는

        ```js
        { username: 'hyeon',
          password: 'tL9xX3mhlfbH0yU7f7ytgBXDE3baE4WN/WI3cs+dkHRvlEXFZkyvvMhpx3uFqgYMSF5TVYTKFhr49Vzf1I7oMjZ6ItMS7ZVtGROjXqfi4oyPmVZwCqcJdhGdtfsNfQAxrQ6CP26stKZWLSgAZwV8f2wIhqrpuzH4AwJh0vbXJW4=',
          salt: 'RzPygEXkljP8LqC5l4tz+RVosr1fMW2qJZmAxp70wTEnVexfN8lpRr3UTJ4d2mSyJHziV9j4TqWH69WKM9KiQw==',
          displayName: 'HYEON' }
        ```

      ```js
      console.log('serializeUser ', user);
      ```

      - 두번째로 실행된 serializeUser
      - 해당 데이터는 LocalStrategy 의 데이터와 동일
      - app.user 의 new LocalStrategy 의 콜백함수 인자인 done 과
        passport.serializeUser(function(user, done)) 중 인자인 done 은 **다른 것** 임!

      ```js
      console.log('deserializeUser ', id);
      ```

      - deserializeUse 에서는 id 값이 찍히기 때문에 ' **hyeon** ' 만 찍힘

      - deserializeUse 구문에서 FOR문이 돌아가면서

      - if(user.username == id) 값 구문에 해당된다면 (해당 아이디는 **hyeon**)

        - done(null, user) 가 실행되는 것임

          ```js
          return done(null, user);
          ```

    - 그리고 재 접속을 하게 되면 터미널에 아래와 같이 찍힘
      ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-09%20%EC%98%A4%EC%A0%84%2012.20.23.png)

    - 즉, deserializeUse 만 실행(호출)된다는 결과

      - 이유는 ? serializeUser 를 호출할 때 done 이 실행되면서 두번 째 인자인 user.username 이 session 에 저장되고, 사용자가 재 방문할 때 deserializeUser이 실행(호출)되도록 약속되어 있는데
        저장된 사용자의 식별자가 해당 콜백함수의 id로 받아지게 되고, 그 id 값을 username과 비교하게 되면서
        done 함수를 호출