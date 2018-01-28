# JavaScript - jQuery와 none jQuery의 비교

> jQuery에서 event를 다루는 방법

- 순수하게  button 을 구현했을 때

  ```javascript
  var target = document.getElementById('pure');
  if (target.addEventListener) {
    target.addEventListener('click', function(event) {
      alert('pure');
    });
  } else {
    target.attachEvent('onclick', function(event) {
      alert('pure');
    });
  }
  ```

- 객체를 찾을 때

  - 순수 javaScript

    `var target = document.getElementById('pure');`

  - jQuery

    `$('#jquery')`

- eventHandler 등록

  - 순수 javaScript

    `target.addEventListener`

    `target.attachEvent`

  - jQuery

    `.on('click',`

- 결론

  - javaScript

    ```javascript
        var target = document.getElementById('pure');
        if (target.addEventListener) {
          target.addEventListener('click', function(event) {
            alert('pure');
          });
        } else {
          target.attachEvent('onclick', function(event) {
            alert('pure');
          });
        }
    ```

  - jQuery

    ```javascript
    $('#jquery').on('click', function(event) {
      alert('jQuery');
    })
    ```

    ​