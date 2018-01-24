# [JavaScript - HTML에서 JavaScript를 로드 (1/4) : inline 방식](https://opentutorials.org/course/1375/6620)

> HTML 과 JavaScript를 구분할 수 있는 기준들

1. ### inline

   ![](https://i.imgur.com/yUO0cod.png)

   ```html
   <!DOCTYPE html>
   <html>
   <body>
       <input type="button" onclick="alert('Hello world')" value="Hello world" />
   </body>
   </html>
   ```

   - 장점
     - button에 대한 동작이 코드상에 분명히 드러남
   - 단점
     - 같은 코드에 있다는 점
     - 정보와 제어가 같이 섞여있다는 것
     - 코딩하는 사람 입장에서 **유지보수가 쉽지 않음**
       - HTML은 HTML 끼리
       - JavaScript 는 JavaScript 끼리

   ​

2. # [JavaScript - HTML에서 JavaScript를 로드 (2/4) : script 방식](https://opentutorials.org/course/1375/6620)

   ![](https://i.imgur.com/cicCJIw.png)

   ```html
   <!DOCTYPE html>
   <html>
   <body>
       <input type="button" id="hw" value="Hello world" />
       <script type="text/javascript">
           var hw = document.getElementById('hw');
           hw.addEventListener('click', function(){
               alert('Hello world');
           })
       </script>
   </body>
   </html>
   ```

   - `<script type="text/javascript">` 도 가능하고 `<script>` 도 가능
     - HTML5 부터 없애도 상관 없음
   - script 태그 안에 JavaScript 코드가 들어간다는 것만 중요!
   - script 태그는 HTML
     - `이제 JavaScript 코드가 시작됩니다` 라는것을 알려줌
   - 장점
     - HTML코드 안에 JavaScript의 코드가 더이상 존재하지 않음
   - inline 방식보다는 확실하게 구분되었지만, 더 분리될 수 있음

3. # [JavaScript - HTML에서 JavaScript를 로드 (3/4) : 외부 파일 로드](https://opentutorials.org/course/1375/6620)

   ```html
   script_separation.html

   <!DOCTYPE html>
   <html>
   <body>
       <input type="button" id="hw" value="Hello world" />
       <script src="./script.js"></script>
       </script>
   </body>
   </html>
   ```

   ```js
   script.js

   var hw = document.getElementById('hw');
   hw.addEventListener('click', function(){
       alert('Hello world');
   })
   ```

   - 장점
     - HTML 코드에서 JavaScript를 완전히 분리해낼 수 있다
     - 효율적임 - 유지보수의 편의성 (중복을 제거)
     - Cache 기능에 의해서 JS의 코드를 미리 받음
     - 클라이언트와 서버간 HTML의 용량 경량화

4. # [JavaScript - HTML에서 JavaScript를 로드 (4/4) : onload 방식](https://opentutorials.org/course/1375/6620)

   - script 태그는 head 태그에 위치시키는 것 보다 body가 끝나는 부분에 위치시키는 것이 더 좋음

   ![](https://i.imgur.com/tcqaB23.png)

   - script2.js 는 아래의 script 태그로 대체될 수 있음

   ![](https://i.imgur.com/lem2S9e.png)

   - HTML이 실행될 때, hw 변수에 getElementById를 통해 `hw` 라는 id를 가진 태그를 찾음
   - 그러나 `hw` 라는 id 를 가진 input 태그는 아래에 위치함
   - **그러므로 hw.addEventListener 부분에서 Error !**
   - 해결법 (window.onload 사용)

   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <script src="./script.js"></script>
     <script>
       window.onload = function () {
         var hw = document.getElementById('hw');
         hw.addEventListener('click', function(){
             alert('Hello world');
         })
       }
     </script>
   </head>
   <body>
       <input type="button" id="hw" value="Hello world" />
   </body>
   </html>

   ```

   - onload
     - 웹페이지의 모든 코드가 모두 읽힌 후, 다운로드가 끝나서 웹페이지가 완성 되었을 때
     - window의 onload가 마지막으로 실행됨
     - 자바스크립트를 따로 분리했을 경우에도
     - js 파일에서 맨 위에 `window.onload = function () {}` 형식으로 써주면 됨

   ```html
   <!DOCTYPE html>
   <html>
   <head>

   </head>
   <body>
       <input type="button" id="hw" value="Hello world" />
       <script>
         var hw = document.getElementById('hw');
         hw.addEventListener('click', function(){
             alert('Hello world');
         })
       </script>
   </body>
   </html>
   ```

   - body 태그의 마지막에 구성시키면 onload가 필요하지 않기 때문에, body태그 끝 부분에 위치시키는 것이 좋다고 한 것
   - script 태그가 head에 위치하고 있다면 JavaScript를 전부 분석해야 하기 때문에
   - 사용자에게 제공되는 지연이 있을 수 있음
   - **그래서 body 태그가 끝나는 부분에 위치시키는 것이 좋음**

   ​

   ​

   ​

   ​

   ​

   ​

   ​