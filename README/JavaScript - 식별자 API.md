# JavaScript - 식별자 API

1. ### Element.tagName

   - `document.getElementById('active')`
     - HTMLLIElement
     - HTMLElement
     - Element
       - tagName : Element의 태그이름을 알 수 있음
       - 읽기전용이며, 마음대로 수정할 수 없음

2. ### Element.id

   > 문서에서 단 한번만 등장 할 수 있는 식별자
   >
   > 태그가 이름을 가질 수 있음
   >
   > 같은 이름을 가진 태그는 존재할 수 없음

   ```html
   <ul>
       <li>html</li>
       <li>css</li>
       <li id="active">JavaScript</li>
   </ul>
   <script>
   var active = document.getElementById('active');
   console.log(active.id);
   active.id = 'deactive';
   console.log(active.id);
   </script>
   ```

   - id 를 변경하는 코드

3. ### Element.className

   ```html
   <ul>
       <li>html</li>
       <li>css</li>
       <li id="active">JavaScript</li>
   </ul>
   <script>
   var active = document.getElementById('active');
   // class 값을 변경할 때는 프로퍼티의 이름으로 className을 사용한다.
   active.className = "important current";
   console.log(active.className);
   // 클래스를 추가할 때는 아래와 같이 문자열의 더한다.
   active.className += " readed"
   </script>
   ```

   - active.className = active.className + " current";
   - javaScript의 예약어 경우에는 이름이 다를 수 있음
   - 기존에 있는지 없는지 확인해야 하고, 추가 삭제에 대한 불편함이 존재
   - 그래서 나온것이 classList

4. ### Element.classList

   ```html
   <ul>
       <li>html</li>
       <li>css</li>
       <li id="active" class="important current">JavaScript</li>
   </ul>
   <script>
   function loop(){
       for(var i=0; i<active.classList.length; i++){
           console.log(i, active.classList[i]);
       }
   }
   // 클래스를 추가
   </script>
   <input type="button" value="DOMTokenList" onclick="console.log(active.classList);" />
   <input type="button" value="조회" onclick="loop();" />
   <input type="button" value="추가" onclick="active.classList.add('marked');" />
   <input type="button" value="제거" onclick="active.classList.remove('important');" />
   <input type="button" value="토글" onclick="active.classList.toggle('current');" />
   ```

   - 편리한만큼 사용하기가 약간 까다로움
   - var active = document.getElementById('active');
   - active
     - `<li id="active" class="marked">JavaScript</li>`
   - active.classList
     - DOMTokenList
       - class 가 여러개 있을 경우 모든 class를 담아놓은 객체
       - 유사 배열
     - DOMTokenList[0~]
       - 담고있는 클래스의 첫번 째 네임을 리턴함
   - active.classList.add('important');
   - active.classList.remove('important');
   - active.classList.toggle('important');
     - 존재하면 삭제하고 없다면 추가해주는
     - toggle 방식
     - true / false 를 리턴함