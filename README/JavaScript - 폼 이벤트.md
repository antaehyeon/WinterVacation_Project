# JavaScript - 이벤트 타입

  1. ### form

     > 사용자가 입력한 정보를 서버로 전송할 때 사용 '폼(form)'

  - submit

    ```javascript
    var t = document.getElementById('target');
    t.addEventListener('submit', function(event) {
      if (document.getElementById('name').value.length === 0) {
        alert('Name 필드의 값이 누락 되었습니다');
        event.preventDefault();
      }
    });
    ```

    - value의 length를 체크해서
    - 경고문을 출력하고
    - event를 취소시킨다 (event.preventDefault)

  - change

    ```javascript
    var t = document.getElementById('target');
    t.addEventListener('change', function(event) {
      document.getElementById('result').innerHTML = event.target.value;
    });
    ```

  - blur, focus

    ```javascript
    var t = document.getElementById('target');
    t.addEventListener('blur', function(event) {
      alert('blur');
    });
    t.addEventListener('focus', function(event) {
      alert('focus');
    });
    ```

2. ### 문서로드 이벤트

   ```html
   <html>
       <head>
           <script>
           var t = document.getElementById('target');
           console.log(t);
           </script>
       </head>
       <body>
           <p id="target">Hello</p>
       </body>
   </html>
   ```

   - 해당 문서는 **javaScript가 먼저 실행**되기 때문에 **log에 null 이 출력됨**
   - JavaScript 구문을 뒤로 옮겨도 되지만, onload 이벤트를 사용하면 됨

   ```html
   <html>

   <head>
     <script>
       window.onload = function() {
         var t = document.getElementById('target');
         console.log(t);
       }
     </script>
   </head>

   <body>
     <p id="target">Hello</p>
   </body>

   </html>
   ```

   - 위와 같이 onload 이벤트를 사용하면 JavaScript를 먼저 실행하는 것이 아닌
   - 최종으로 실행됨

   ```javascript
   window.addEventListener('load', function() {
     var t = document.getElementById('target');
     console.log(t);
   })
   ```

   - 위와 같이 JavaScript 형식으로 변경할 수 있음

   ```javascript
   window.addEventListener('DOMContentLoaded', function() {
     var t = document.getElementById('target');
     console.log(t);
   })
   ```

   - 화면의 처리가 끝난 다음에 발생하는 이벤트 (DOMContentLoaded)
     - DOM에 대한 처리가 끝나면 발생
   - IE9 이상부터 동작하는 기능이지만, 요즘에는 라이브러리가 처리해줌

3. ### 마우스

   `var info = document.getElementById('elm' + event.type);`

   - 어떤 이벤트가 발생되었는지 `event.type` 으로 판별

   ![](https://i.imgur.com/lva792x.gif)

   - alt, ctrl, shift 키를 누른 상태도 감지할 수 있음
   - contextMenu 는 오른쪽 키를 클릭