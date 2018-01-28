# JavaScript - 이벤트전파

![](https://i.imgur.com/pAszCIk.png)

> 이벤트가 중복적으로 적용되었고, 버튼을 클릭했을 때 어떤 반응이 일어날 것인가 (?)

- ### 캡처링 (capturing)

  > event가 위에서 아래로 발생할 때

  ```html
  <html>
      <head>
          <style>
              html{border:5px solid red;padding:30px;}
              body{border:5px solid green;padding:30px;}
              fieldset{border:5px solid blue;padding:30px;}
              input{border:5px solid black;padding:30px;}
          </style>
      </head>
      <body>
          <fieldset>
              <legend>event propagation</legend>
              <input type="button" id="target" value="target">
          </fieldset>
          <script>
          function handler(event){
              var phases = ['capturing', 'target', 'bubbling']
              console.log(event.target.nodeName, this.nodeName, phases[event.eventPhase-1]);
          }
          document.getElementById('target').addEventListener('click', handler, true);
          document.querySelector('fieldset').addEventListener('click', handler, true);
          document.querySelector('body').addEventListener('click', handler, true);
          document.querySelector('html').addEventListener('click', handler, true);
          </script>
      </body>
  </html>
  ```

  `document.getElementById('target').addEventListener('click', handler, true);`

  - **RETURN** `INPUT INPUT target`

  ```javascript
  document.getElementById('target').addEventListener('click', handler, true);
  document.querySelector('fieldset').addEventListener('click', handler, true);
  ```

  - **RETURN** 
    INPUT FIELDSET capturing
    INPUT INPUT target

  ```javascript
  document.getElementById('target').addEventListener('click', handler, true);
  document.querySelector('fieldset').addEventListener('click', handler, true);
  document.querySelector('body').addEventListener('click', handler, true);
  ```

  - **RETURN**
    INPUT BODY capturing
    INPUT FIELDSET capturing
    INPUT INPUT target

  ```javascript
  document.getElementById('target').addEventListener('click', handler, true);
  document.querySelector('fieldset').addEventListener('click', handler, true);
  document.querySelector('body').addEventListener('click', handler, true);
  document.querySelector('html').addEventListener('click', handler, true);
  ```

  - **RETURN**
    INPUT HTML capturing
    INPUT BODY capturing
    INPUT FIELDSET capturing
    INPUT INPUT target
  - 바깥쪽에 있는 Handler (부모에서)
  - 안쪽에 있는 Handler (자식까지)
  - **발생하는 이벤트 흐름을 `capturing` 이라고 함**
    - 그러나 옛 브라우저에서는 지원이 잘 안됨

- ### **버블링 (bubbling)**

  > event가 아래에서 위로 발생할 때
  >
  > 안쪽에 있는 core부터 바깥쪽으로 거품이 난다고 표현

  ```javascript
  document.getElementById('target').addEventListener('click', handler, false);
  document.querySelector('fieldset').addEventListener('click', handler, false);
  document.querySelector('body').addEventListener('click', handler, false);
  document.querySelector('html').addEventListener('click', handler, false);
  ```

  - 위와 같이 코드를 변경하게 되면
  - 아래와 같은 결과값이 출력됨

  ```
  INPUT INPUT target
  INPUT FIELDSET bubbling
  INPUT BODY bubbling
  INPUT HTML bubbling
  ```

  -  버블링으로 동작하게 하고 싶다면, 세번 째 인자를 false
  - 만약 true로 설정한다면 캡처링으로 동작함

- **어떤식으로 이벤트를 호출할 것인가 (전파할 것인가) 에 대한 방식**을 정하는 것이 캡처링과 버블링

- 특정 태그에서 이벤트를 멈추는 것은 `event.stopPropagation();`

  `document.querySelector('body').addEventListener('click', stopHandler, false);`

  - handler대신 stopHandler

  ```
  INPUT INPUT target
  INPUT FIELDSET bubbling
  INPUT BODY bubbling
  ```

  - 그러면 위와 같이 body 태그에서 멈춰버림