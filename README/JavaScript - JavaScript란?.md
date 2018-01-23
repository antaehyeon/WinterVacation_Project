# JavaScript - JavaScript란?

- HTML, CSS, JS 의 기술들이 유기적으로 결합해서 웹페이지를 만드는 것

- HTML

  > 정보

  - 웹브라우저와 웹서버간 통신되는 정보
  - 정보를 담아내는, 표현하는 언어

  ```html
  <!DOCTYPE html>
  <html>
  <body>
      <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
      </ul>
  </body>
  </html>
  ```

- CSS

  > 정보를 꾸며주는, 디자인하는 역할

  ```html
  <!DOCTYPE html>
  <html>
  <head>
      <style type="text/css">
          #selected{
              color:red;
          }
      </style>
  </head>
  <body>
      <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li id="selected">JavaScript</li>
      </ul>
  </body>
  </html>
  ```

- JavaScript

  > JavaScript가 웹페이지를 제어한다

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <style type="text/css">
    #selected {
      color:red;
    }
    .dark {
      background-color: black;
      color: white;
    }
    .dark #selected {
      color: yellow;
    }
    </style>
  </head>
  <body>
      <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li id="selected">JavaScript</li>
      </ul>
      <input type="button" value="dark" onclick="document.body.className ='dark';" />
  </body>
  </html>
  ```

  - onclick 메소드는 body 태그의 속성 `body class="dark"` 을 지정
  - 위의 dark class `.dark` 의 속성들이 적용됨

- 정리

  - HTML : 정보
  - CSS : 디자인
  - JavaScript : 웹브라우저, HTML 을 프로그래밍적으로 제어