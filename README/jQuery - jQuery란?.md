# jQuery - jQuery란?

- 라이브러리란 ? (도서관 같이 생각)

  자주 사용하는 코드들을 재사용할 수 있는 형태로 가공해서 **프로그래밍 효율을 높여주는 코드**들

- jQuery란 ?

  > 어쨌든 jQuery도 JavaScript 기반이기 때문에, javaScript로 하지 못하는 일들을 할 수 없음

  1. 엘리먼트를 선택하는 강력한 방법
     - 제어하고자 하는 엘리먼트들을 찾고, 선택해야하는 부분을 DOM 보다 훨씬 간편하게 제공
  2. 선택된 엘리먼트들을 효율적으로 제어할 수 있는 다양한 수단을 제공
  3. JavaScript Library

- jQuery Hello World

  ```javascript
  <body>
    <div class="welcome"></div>
    <div class="welcome"></div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script type="text/javascript">
      $('.welcome').html('hello world! coding everybody!').css('background-color', 'yellow');
    </script>
  </body>
  ```

  - jQuery는 어떤 함수에 대해서 사용했던 객체를 리턴함 (Chain)

