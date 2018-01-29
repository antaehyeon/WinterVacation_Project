# jQuery - 에니메이션

> javaScript 와 CSS를 이용해서 애니메이션을 구현할 수 있지만 어려움
>
> jQuery에서 메소드를 호출하는 것으로 간단하게 효과를 줄 수 있음

- `$('input[type="button"]').click(function(e) {`
  - type이 button인 객체를 전달하고 click event 를 붙임
- `var $this = $(e.target);`
  - 인자로 넘어온 객체가 `e` 에 담김
- `switch ($this.attr('id')) {`
  - 각 속성의 `id` 를 통해서 기능들을 실행시킴

![](https://i.imgur.com/87PKCiu.gif)

- 디테일하게 애니메이션 효과를 적용

  ![](https://i.imgur.com/PN1OKKs.gif)

  ```javascript
    <button id="go">
             &raquo; Run
         </button>
  ```

  ```javascript
      $("#go").click(function() {
        $("#block").animate({
          width: "300px",
          opacity: 0.4,
          marginLeft: "50px",
          fontSize: "30px",
          borderWidth: "10px"
        }, 3000);
      });
  ```

  - 최종  크기를 적용하고
  - 수치를 적용하면 해당 3000ms 동안 jQuery가 분할해서
  - `애니메이션` 처럼 보여주는 방식임

