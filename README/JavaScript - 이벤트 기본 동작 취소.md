# JavaScript - 이벤트 기본 동작 취소

> 웹브라우저의 구성요소들은 각각 기본적인 동작 방법을 가지고 있음
>
> 이러한 기본동작 방법을 최소화 시키는 방법

```html
<a href="http://opentutorials.org" onclick="if(document.getElementById('prevent').checked) return false;">opentutorials</a>
<form action="http://opentutorials.org" onsubmit="if(document.getElementById('prevent').checked) return false;">
```

- event 에 대한 취소를 위해서는 `return false` 속성을 같이 주면 됨

- property 방식

  ```javascript
  document.querySelector('a').onclick = function(event) {
  if (document.getElementById('prevent').checked)
  return false;
  };
  ```

  - 반환값으로 false를 제공하면 됨

- addEventListener 방식

  ```javascript
  document.querySelector('a').addEventListener('click', function(event) {
    if (document.getElementById('prevent').checked)
      event.preventDefault();
  });

  document.querySelector('form').addEventListener('submit', function(event) {
    if (document.getElementById('prevent').checked)
      event.preventDefault();
  });
  ```

  - event에 대한 **preventDefault 함수를 호출**