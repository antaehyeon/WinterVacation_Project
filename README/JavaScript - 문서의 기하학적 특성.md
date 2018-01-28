# JavaScript - 문서의 기하학적 특성

> 문서의 엘리먼트들의 크기, 위치, 화면에 표시하기 위해서 사용하는 스크롤

1. ### 엘리먼트의 위치와 크기

   > 어떤 특정 엘리먼트가 존재할 때 해당 엘리먼트의 위치(X, Y 좌표) 와 크기(Width, Height)를 알아내는 법

   ![](https://i.imgur.com/0fiBjQO.png)

   ```javascript
   var t = document.getElementById('target');
   console.log(t.getBoundingClientRect());
   ```

   - LOG

     ![](https://i.imgur.com/GhSa9oG.png)

     - top : 엘리먼트가 문서의 최상단에서 까지의 거리
     - left : 엘리먼트가 문서의 최좌측에서의 까지의 거리
     - width : 객체의 가로
     - height : 객체의 세로
     - right : 엘리먼트가 문서의 출발(좌측)에서 객체포함된 것 까지의 거리

   - **Element는 margin 값을 포함하지 않음**

   - 엘리먼트가 중첩되어 있다면 어떻게 될까?

   ![](https://i.imgur.com/uwd3dHM.png)

   ![](https://i.imgur.com/g53XEo8.png)

   - DOMRect

     - top 과 left 가 200px 임
     - 즉, 전체 문서(body)와 특정 엘리먼트 사이의 어떤 엘리먼트가 존재하던 상관없음을 의미

   - 즉, 엘리먼트의 위치를 의미하는 top, right의 값을 통해서 기준이 그 부모가 아니라 body라는 것을 알 수 있음

   - 이를 명시적으로 확인할 수 있는 방법은 offsetParent 속성을 호출

   - 만약 부모 중 **CSS position의 값이 static인 td, th, table 엘리먼트가 있다면** 이 엘리먼트가 **offsetParent**가 됨

     > 오래된 브라우저에서는 getBoundingClientRect를 지원하지 않을 수 있기 때문에 이런 경우 offsetLeft와 offsetTop 프로퍼티를 사용

   - 테두리를 제외한 엘리먼트의 크기를 알고 싶다면  **ClientWidth, ClientHeight**를 사용

2. ### Viewport

   > 스크롤이 존재하면 복잡해짐
   >
   > 스크롤이 동작해서 사용자에게 보여지는 영역을 뜻함 (실제 문서의 크기)

   ```javascript
   setInterval(function() {
   console.log('getBoundingClientRect : ', t.getBoundingClientRect().top, 'pageYOffset:', window.pageYOffset);
   }, 1000)
   ```

   - 함수를 1초에 한번씩 반복적으로 호출하는 명령 (반복문과 비슷하지만 시간을 지정할 수 있음)

   ![](https://i.imgur.com/oSViJ8X.gif)

   - pageYOffset
     - 페이지를 스크롤 한 만큼의 px 을 리턴함
   - getBoundingClientRect
     - Viewport 에서 Element 까지의 거리
     - Viewport 의 좌표
   - getBoundingClientRect + pageYOffset
     - element와 body 사이의 거리를 알아낼 수 있음
     - **즉, top 의 크기**

3. ### 스크롤 제어

   > 스크롤을 특정 위치로 보내버리는 스크롤 제어

   ```javascript
   document.getElementById('scrollBtn').addEventListener('click', function() {
   window.scrollTo(0, 1000);
   })
   ```

   - `window.scrollTo(X, Y)` 형식으로 지정
   - 해당 X, Y 좌표로 보내게 됨

4. ### 스크린의 크기

   ```javascript
     <script>
       console.log('window.innerWidth:', window.innerWidth, 'window.innerHeight:', window.innerHeight);
       console.log('screen.width:', screen.width, 'screen.height:', screen.height);
     </script>
   ```

   - `window.innerWidth, innerHeight` 는 **윈도우 창 크기**
   - `screen.width, height` 는 사용자가 사용하는 **모니터의 크기**