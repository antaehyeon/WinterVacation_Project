# Server Side JavaScript - Security Password 4 : pbkdf2

> key stretching : 암호화 된 해쉬값을 몇번(수천번 까지도)씩 암호화 하는 기법
>
> 이것을 하기가 매우 어렵기 때문에(구현하는 부분) 이것을 해주는 함수(PBKDF2)를 배워볼 것

1. ### [nodejs PBKDF2 password npm](https://www.npmjs.com/package/pbkdf2-password)

   - #### Installation

     ```js
     npm install --svae pbkdf2-password
     ```

     ​

   - #### Usage

     ```js
     var bkfd2Password = require("pbkdf2-password");
     var hasher = bkfd2Password();
     var assert = require("assert");
     var opts = {
       password: "helloworld"
     };
      
     hasher(opts, function(err, pass, salt, hash) {
       opts.salt = salt;
       hasher(opts, function(err, pass, salt, hash2) {
         assert.deepEqual(hash2, hash);
      
         // password mismatch 
         opts.password = "aaa";
         hasher(opts, function(err, pass, salt, hash2) {
           assert.notDeepEqual(hash2, hash);
           console.log("OK");
         });
       });
     });
     ```

     - hasher 에서 구성된 opts 를 참고해 opts 에는 비밀번호가 구성되어 있으면 된다는 것을 유추할 수 있음
     - pass : 사용자가 입력한 패스워드를 담고있는 변수
     - salt : hasher이 자동으로 salt값을 생성함

   - ### node TEST

     ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%ED%9B%84%203.45.35.png)

     - node로 hasher에 대한 테스트를 진행해보면 (2번 실시) 함수가 실행될 때 마다 동일한 패스워드를 가지고 다른 해쉬 데이터를 뿌려주는것을 알 수 있음

2. ### 코드 수정

   ```js
   var salt = '@!3@#GDVAEfB%^%@!$';
   var users = [
     {
       username:'hyeon',
       password:'tL9xX3mhlfbH0yU7f7ytgBXDE3baE4WN/WI3cs+dkHRvlEXFZkyvvMhpx3uFqgYMSF5TVYTKFhr49Vzf1I7oMjZ6ItMS7ZVtGROjXqfi4oyPmVZwCqcJdhGdtfsNfQAxrQ6CP26stKZWLSgAZwV8f2wIhqrpuzH4AwJh0vbXJW4=',
       salt: 'RzPygEXkljP8LqC5l4tz+RVosr1fMW2qJZmAxp70wTEnVexfN8lpRr3UTJ4d2mSyJHziV9j4TqWH69WKM9KiQw==',
       displayName:'HYEON'
     }
   ];
   ```

    