# JavaScript - 노드 변경 API

1. ### 노드 변경 API

   - 노드 추가와 관련된 API
     - appendChild
     - insertBefore
   - 노드를 추가하기 위해서 Element 를 생성해야 하는데 이것은 `document 객체의 기능`임

   ```html
     <ul id="target">
       <li>HTML</li>
       <li>CSS</li>
     </ul>
   ```

   - ### **목표 : ul태그 맨 밑에 `<li>JavaScript</li>` 를 추가**

   `<input type="button" onclick="callAppendChild();" value="appendChild()" />`

   - 해당 버튼이벤트를 통해서 **callAppendChild() 함수가 동작**함

   ```javascript
       function callAppendChild() {
         var target = document.getElementById('target');
         var li = document.createElement('li');
         var text = document.createTextNode('JavaScript');
         li.appendChild(text);
         target.appendChild(li);
       }
   ```

   - target 변수에 target의 객체를 담음

   - li 변수에 `li` 태그 객체를 생성함

     - 어떤 특정 태그가 `li` 태그를 생성하는 것이 아닌 `문서(document)` 가 생성하는 것이므로 **document. 로 시작**
     - `<li>       </li>` 형식만 생성한 것이고, 내용은 아직 비어있음

   - text 변수에 `JavaScript` 라는 텍스트(내용)를 생성

   - `li.appendChild(text)` 를 통해 내용이 `<li>         </li>` 안쪽으로 들어가게 되는 것

   - `target.appendChild(li)` 를 통해서 `target` id 를 가진 `ul` 태그의 마지막에 추가됨

   - ### append 처럼 맨 마지막에만 추가하는 것이 아닌 맨 앞이나, 태그 사이에 넣고싶을 때는 insert 를 사용

     `  <input type="button" onclick="callInsertBefore();" value="insertBefore()" />`

     ```javascript
         function callInsertBefore() {
           var target = document.getElementById('target');
           var li = document.createElement('li');
           var text = document.createTextNode('jQuery');
           li.appendChild(text);
           target.insertBefore(li, target.firstChild);
         }
     ```

     - `target.insertBefore(li, target.firstChild);`
     - `li` 변수를 **target.firstChild (맨 처음부분) 에 위치**

     ![](https://i.imgur.com/dSctiuB.gif)

2. ### 노드 제거

   > ul 태그 안의 target id를 가진 li태그 (내용 : JavaScript) 를 삭제

   `  <input type="button" onclick="callRemoveChild();" value="removeChild()" />`

   ```javascript
     <script>
       function callRemoveChild() {
         var target = document.getElementById('target');
         target.parentNode.removeChild(target);
       }
     </script>
   ```

   - `target.parentNode` : 어떤 태그를 삭제하기 위해서는 부모 엘리먼트를 알아야 함
   - `.removeChild` 
   - DOM이 비판받는 이유
     - 삭제해야 하는 대상도 알아야하고, 부모도 알아야 하는 설계상의 문제점에 대해 비판

3. ### 노드 교체

   `  <input type="button" onclick="callReplaceChild();" value="replaceChild()" />`

   ```javascript
         var a = document.createElement('a');
         a.setAttribute('href', 'http://opentutorials.org/module/904/6701');
         a.appendChild(document.createTextNode('Web browser JavaScript'));
   ```

   - 해당 태그를 바꿀 태그에 대한 사전작업을 진행
     - 엘리먼트를 생성하고
     - 속성을 부여하고
     - 내용을 추가하고

   ```javascript
         var target = document.getElementById('target');
         target.replaceChild(a, target.firstChild);
   ```

   - `replaceChild`  함수를 이용해서 a 객체를 target.firstChild 에 변경한다