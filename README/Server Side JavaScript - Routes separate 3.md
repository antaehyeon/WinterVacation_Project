# Server Side JavaScript - Routes separate 3

> 좋은것에는 댓가가 따른다

1. ### 고립되어 있다

   - 현재 app_routes.js 와 p1.js, p2.js 는 각각의 파일로 분리되어 있는데
   - p1 이라고 하는것은 **' 완전한 고립상태 '** 가 됨
   - p1 에서 만들어진 함수와 변수같은 것들을 app_routes.js 에 전혀 영향을 주지 않기 때문에
   - **문제**를 일으킬 부분을 **감소**시키는 역할을 함
   - 그러나, 반대로 또 하나의 **불편함**이 될 수도 있음
   - app_routes.js (Main) 에서 선언한 `app(express)` 을 p1.js 나 p2.js 에서 **사용할 수 없음**

2. ### 우리는 언제나 그랬듯 방법을 찾을것이다

   ```js
   var p1 = require('./routes/p1')(app);
   ```

   - require를 통해서 가져온
   - p1.js의 `module.exports` 에 해당하는 `route` 가 함수라는 것 (함수를 호출)
   - 함수를 호출할 때 `app` 이라는 객체를 전달하는 것이다

3. ### p1.js 의 `module.exports = route` 의 구조를 변경

   ```js
   module.exports = function(app) {
     var express = require('express');
     var route = express.Router();

     route.get('/r1', function(req, res) {
       res.send('HELLO /p1/r1 :)');
     });
     route.get('/r2', function(req, res) {
       res.send('HELLO /p1/r2 :)');
     });
     return route;
   };
   ```

   - module.exports 의 구조를 함수화로 만들어서 app 이라는 매개변수를 받는다
   - 기존에는 module.exports = route 의 구조에서 어차피 route를 리턴해주는 것은 동일하므로
   - 맨 마지막에 `return route;` 를 삽입한다
   - 우리는 app (express()) 을 받아왔으므로, p1.js 안에서도 **app 을 이용해 GET Route를 구성할 수 있음**