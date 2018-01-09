# Server Side JavaScript - Create module 2

> 모듈이 여러개의 함수로 이루어져 있는 경우

1. module2.js 에 코드추가

   ```js
   var cal = require('./lib/calculator');
   console.log(cal.sum(1, 2));
   console.log(cal.avg(1, 2));
   ```

2. calculator.js 코드 추가 (/lib)

   ```js
   module.exports.sum = function(a, b){
     return a + b;
   }

   module.exports.avg = function(a, b){
     return (a + b) / 2;
   }
   ```

   - 각각의 exports 뒤의 인자로 구분해서 함수를 여러개 만들 수 있음
   - 해당 모듈(module2.js) 에서 함수를 불러오듯이 사용할 수 있음

   **모듈을 분해해서 소프트웨어의 복잡도를 낮추는 것이 모듈을 분해하는 이유이다**

