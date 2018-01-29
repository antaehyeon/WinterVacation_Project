# jQuery - javascript VS jquery

- ### javaScript - 어디에서부터 코드가 시작되는가

  ```javascript
  addEvent(window, 'load', function(eventObj) {
    var nav = document.getElementById('navigation');
    for (var i = 0; i < nav.childNodes.length; i++) {
      var child = nav.childNodes[i];
      if (child.nodeType == 3)
        continue;
      addEvent(child, 'click', clickHandler);
    }
  })
  ```

  - window.load 와 같은 기능

  ```javascript
  function addEvent(target, eventType, eventHandler, useCapture) {
    if (target.addEventListener) { // W3C DOM
      target.addEventListener(eventType, eventHandler, useCapture ? useCapture : false);
    } else if (target.attachEvent) { // IE DOM
      var r = target.attachEvent("on" + eventType, eventHandler);
    }
  }
  ```

  ```javascript
  function clickHandler(event) {
    var nav = document.getElementById('navigation');
    for (var i = 0; i < nav.childNodes.length; i++) {
      var child = nav.childNodes[i];
      if (child.nodeType == 3)
        continue;
      child.className = '';
    }
    event.target.className = 'selected';
  }
  ```

  - navigation 객체를 찾고
  - nav 의 childNodes 를 통해서 child 유사배열을 생성
  - nodeType 이 3 이면 (공백이라면) `continue`
  - 아니면 객체이므로 `clickHandler` 호출

  ```javascript
  function clickHandler(event) {
    var nav = document.getElementById('navigation');
    for (var i = 0; i < nav.childNodes.length; i++) {
      var child = nav.childNodes[i];
      if (child.nodeType == 3)
        continue;
      child.className = '';
    }
    event.target.className = 'selected';
  }
  ```

  - `vent.target.className = 'selected';`
    - 어떤 `li` 객체인지 알 수 있게끔 `selected` 값을 전달

- jQuery

```html
<html>

<head>
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script type="text/javascript">
    $('#navigation li').on('click', function() {
      $('#navigation li').removeClass('selected');
      $(this).addClass('selected');
    })
  </script>
  <style type="text/css">
    #navigation li {
      list-style: none;
      float: left;
      padding: 5px;
    }

    #navigation {
      cursor: pointer;
    }

    #navigation .selected {
      background-color: red;
      color: white;
    }
  </style>
</head>

<body>
  <ul id="navigation">
    <li>HTML</li>
    <li>CSS</li>
    <li>javascript</li>
    <li class="selected">jQuery</li>
    <li>PHP</li>
    <li>mysql</li>
  </ul>
</body>

</html>
```

- javaScript 의 함수부분보다 코드가 최소화됨 (4줄)