# Server Side JavaScript - Create module 1

> 모듈에 대한 이야기
>
> 모듈을 만드는 방법
>
> 여러 애플리케이션에서 재사용 할 수 있는 방법

1. ### module.js

   - 프로젝트가 복잡해진 상황
   - 복잡도를 낮추기 위해서는 코드를 잘 정리정돈 할 필요가 있음

2. ### module2.js

   ```js
   var sum = function sum(a, b) {
     return a+b;
   }

   console.log(sum(1, 2));
   ```

   - sum 이라는 변수가 엄청 복잡하다고 가정

3. ### lib 디렉토리 생성

   - sum.js 파일 생성

     ```js
     module.exports = function sum(a, b) {
       return a+b;
     }
     ```

   - module2.js 파일 수정

     ```js
     var sum = require('./lib/sum');
     console.log(sum(1, 2));
     ```

   - require 는 module.exports 로 치환되도록 약속되어 있음

   - require('./lib/sum') 은 module.exports 로 받아지는 함수라고 생각하면 됨

4. ### 함수를 감춰보자

   ```js
   sum.js
   function _sum(a, b) {
     return a + b;
   }

   module.exports = function sum(a, b) {
     return _sum(a, b);
   }
   ```

   - module2.js 에서는 절대 _sum 함수를 접근/조회 할 수 없음
     - 숨겨져 있다고 표현
   - module.exports 는 인터페이스