# JavaScript - 속성 API

1. ### attribute

   ```html
   <a id="target" href="http://opentutorials.org">opentutorials</a>
   <script>
   var t = document.getElementById('target');
   console.log(t.getAttribute('href')); //http://opentutorials.org
   t.setAttribute('title', 'opentutorials.org'); // title 속성의 값을 설정한다.
   console.log(t.hasAttribute('title')); // true, title 속성의 존재여부를 확인한다.
   t.removeAttribute('title'); // title 속성을 제거한다.
   console.log(t.hasAttribute('title')); // false, title 속성의 존재여부를 확인한다.
   </script>
   ```

   - 태그의 이름만으로 어떤 정보를 표현하는것이 부족할 때
   - 속성을 이용해서 정보를 표현함 (attribute)
   - `var t = document.getElementById('target')`
     - undefined
   - `t.getAttribute('href')`
     - http://opentutorials.org
   - `t.getAttribute('id')` == `t.id`
     - target
   - `t.setAttribute('href', 'http://opentutorials.org/course/1')`
     - undifined
     - 실시간으로 속성을 변경할 수 있음
   - `t.setAttribute('title', 'opentutorials')`
     - 만약에 존재하지 않는 속성이라면 추가됨
   - `t.removeAttribute('title')`
     - 해당 속성이 제거됨
   - `t.hasAttribute('title')`
     - 해당 속성이 있는지 없는지 true/false 로 리턴함

2. ### attribute vs property

   ```html
   <p id="target">
       Hello world
   </p>
   <script>
       var target = document.getElementById('target');
       // attribute 방식
       target.setAttribute('class', 'important');
       // property 방식
       target.className = 'important';
   </script>
   ```

   - attribute
   - property
     - 평균적으로 attribute 보다 속도가 빠르고 간편함
   - setAttribute 및 getAttribute (attribute) 방식으로 접근하는 것과
   - property (className) 방식으로 접근하는 것은
   - 차이가 존재함
     - property 는 전체주소가 리턴됨
     - attribute 는 직접 기술한 경로 그대로가 리턴됨