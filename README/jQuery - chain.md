# jQuery - chain

> jQuery의 메소드들은 반환값으로 자기 자신을 반환하는 규칙을 가짐
>
> 연속적인(chain) 제어를 할 수 있음

1. ### jQuery 코딩

   ```javascript
   jQuery('#tutorial').attr('href', 'http://jquery.org').attr('target', '_blank').css('color', 'red');
   ```

   - `.` 을 통해서 chain 형식으로 연속적인 제어가 가능함

2. ### javaScript DOM 코딩

   ```javascript
   <script type="text/javascript">
     var tutorial = document.getElementById('tutorial');
   tutorial.setAttribute('href', 'http://jquery.org');
   tutorial.setAttribute('target', '_blank');
   tutorial.style.color = 'red';
   </script>
   ```

   -  객체를 찾고, 각 객체의 함수들을 이용해서 제어

3. ### chain의 장점

   - 코드가 간결해짐
   - 인간의 언어와 유사
     - 자연스러운 사고가 가능

4. ### 탐색 (traversing)

   > chain의 대상을 바꿔서 체인을 계속 연장시키는 방법

   [jQuery API Traversing](http://api.jquery.com/category/traversing/)

   [jQuery traverse 강좌](http://www.taeyo.pe.kr/Columns/View.aspx?SEQ=375&PSEQ=29)

   - 너무 복잡한 chain의 코드는 가독성을 떨어트릴 수 있음

   ```html
   <html>
       <body>
           <ul class="first">
               <li class="foo"> list item 1 </li>
               <li> list item 2 </li>
               <li class="bar"> list item 3 </li>
           </ul>
           <ul class="second">
               <li class="foo"> list item 1 </li>
               <li> list item 2 </li>
               <li class="bar"> list item 3 </li>
           </ul>
           <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
           <script type="text/javascript">$('ul.first').find('.foo').css('background-color', 'red').end().find('.bar').css('background-color', 'green');</script>
       </body>
   </html>
   ```

   ​