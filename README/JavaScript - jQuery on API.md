# JavaScript - jQuery on API

1. ### 소개

   > jQuery가 제공하는 API중에 가장 중요하고 자유도가 높은 API

   [jQuery .on](http://api.jquery.com/on/)

   ![](https://i.imgur.com/dBQTZAN.png)

   - 대괄호는 생략가능

     ```javascript
     $('#jquery').on('click', function(event) {
     alert('jQuery');
     })
     ```

     - `'click'` : events

2. ### 필터링

   ```javascript
   $('ul').on('click', 'a, li', function(event) {
     console.log(this.tagName);
   })
   ```

   - event Handler (click) 과 함수 (function(event)) 사이에 **selector ('a, li')** 가 위치함

   - 실질적으로 `ul` 태그를 클릭했을 때 이벤트가 발생하는 것이 아닌

   - `a` 및 `li` 의 필터링에 걸려서 동작함

   - late binding

     ```html
     <body>
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
       <script>
         $('ul').on('click', 'a, li', function(event) {
           console.log(this.tagName);
         })
       </script>
       <ul>
         <li><a href="#">HTML</a></li>
         <li><a href="#">CSS</a></li>
         <li><a href="#">JavaScript</a></li>
       </ul>
     </body>
     ```

     - 현재 위 상태는 `ul` 태그가 나오기 전에 `script` 구문이 있으므로 **정상적으로 실행되지 않음**

     - 그래서 대상을 `ul` 태그가 아닌 `body` 태그에 설정

       ```javascript
       $('body').on('click', 'a, li', function(event) {
         console.log(this.tagName);
       })
       ```

     - 그러면 body 태그에 이벤트를 장착할 수 있고

     - selector 을 통해서 나중에 나오는 `a` 또는 `li` 태그에 이벤트를 추후로 장착할 수 있음

     - 즉, **아직 존재하지 않는 태그들에 대해서도 장착**할 수 있다는 것!

3. ### 다중등록(다중 Binding)

   > 정식 명칭은 아님

   ![](https://i.imgur.com/c1IJ0X9.png)

   - focus와 blur사이의 공백을 통해서

   - focus, blur event type 에 동일한 event Handler 을 연결

     ```javascript
         var handler = function(e) {
           $('#status').html(e.type);
         }
         $('#target').on({
           'focus': handler,
           'blur': handler
         })
     ```

     ```javascript
         var handler = function(e) {
           $('#status').html(e.type);
         }
         $('#target').on('focus', handler).on('blur', handler);
     ```

4. ### 이벤트 제거

   ```javascript
       $('#remove').on('click', function(e) {
         $('#target').off('focus blur', handler);
         console.log(32);
       })
   ```

   - 이벤트를 제거하는 방법은 `off`
     - `$('#target').off('focus')` 만 지정한다면 `focus` 에 대한 이벤트가 전부 제거됨
     - `$('#target').off('focus blur', handler)` 처럼 두번 째 인자까지 추가된다면
       - 해당 handler 가 **연결되어 있는 이벤트만 제거됨**
     - ​
   - 하나의 이벤트에 2개의 포커스를 연결