# JavaScript - 문자열로 노드변경

> 조금 더 편리하게 노드를 조작하는 방법을 알아보자

```html
  <ul id="target">
    <li>HTML</li>
    <li>CSS</li>
  </ul>
```

```javascript
    function get() {
      var target = document.getElementById('target');
      alert(target.innerHTML);
    }
```

![](https://i.imgur.com/aaP2yee.png)

- 태그 전체를 출력함
- id로 지정한 target의 하위 Element 를 리턴함

```javascript
    function set() {
      var target = document.getElementById('target');
      target.innerHTML = "<li>JavaScript Core</li><li>BOM</li><li>DOM</li>";
    }
```

- innerHTML의 태그를 수정함

  ![](https://i.imgur.com/NUHbIkT.png)

- ### outerHTML

  ```javascript
      function get() {
        var target = document.getElementById('target');
        alert(target.outerHTML);
      }
  ```

  ![](https://i.imgur.com/rboD3Zc.png)

  - **자기 자신을 포함**한 태그를 리턴함

  ```javascript
      function set() {
        var target = document.getElementById('target');
        target.outerHTML = "<ol><li>JavaScript Core</li><li>BOM</li><li>DOM</li></ol>";
      }
  ```

  - ol 태그의 형식대로 **숫자순으로 변경**됨

- ### innerText, outerText

  ```javascript
      function get() {
        var target = document.getElementById('target');
        alert(target.innerText);
      }
  ```

  ```
  RETURN

  HTML
  CSS
  ```

  ```javascript
      function set() {
        var target = document.getElementById('target');
        target.innerText = "<li>JavaScript Core</li><li>BOM</li><li>DOM</li>";
      }
  ```

  ```
  RETURN

  <li>JavaScript Core</li><li>BOM</li><li>DOM</li>
  ```

- ### insertAdjacentHTML

  > 좀 더 정교하게 문자열을 이용해서 노드를 변경하고 싶을 때 사용

  ![](https://i.imgur.com/Kle3DHx.png)

  - beforebegin()
    - `ul` 태그 시작하기 전에 삽입
  - afterbegin()
    - `ul` 태그에 일단 들어와서 최상단에 삽입
  - beforeend()
    - `ul` 태그에 들어와서 최하단에 삽입
  - afterend()
    - `ul` 태그가 끝나는 지점에 삽입

  ![](https://i.imgur.com/cBoZJd8.gif)