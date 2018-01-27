# JavaScript - jQuery 조회범위를 제한

> 선택된 엘리먼트를 문서전체에서 찾는 것이 아니라 특정범위에서 찾고싶을 때

- ### getElementBy*

```html
<ul>
    <li class="marked">html</li>
    <li>css</li>
    <li id="active">JavaScript
        <ul>
            <li>JavaScript Core</li>
            <li class="marked">DOM</li>
            <li class="marked">BOM</li>
        </ul>
    </li>
</ul>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
    $( ".marked", "#active").css( "background-color", "red" );
</script>
```

- ul 엘리먼트
  - li 엘리먼트
    - javaScript 태그
      - ul
        - li
          - Core
          - DOM
          - BOM

- marked 의 class 들을 변경하고자 함
  - `$(".marked", "#active").css("background-color", "red")`
    - 첫번째 인자 : 제어하고자 하는 엘리먼트
    - 두번째 인자 : 범위를 지정
    - 즉, active 라는 **id 값을 가지고 있는 하위의 marked class 에만 적용**
  - `$(#active .marked").css("background-color", "red")`
    - 더욱 코드를 간단하게 구성할 수 있음 ( 같은 의미 )

- ### .find()

  > find의 인자로 전달되어 있는 선택자에 해당되는 엘리먼트들만을 찾는 함수

  - `$('#active').find('.marked').css("background-color", "red")`
    - find가 속해있는 jQuery 객체 = active
    - .marked (요소) 를 찾는다

- ### 그럼 어떨 때 무엇을 써야하나?

  - `$("#active").css('color', 'blue').find('.marked').css('background-color', 'red')`

  ![](https://i.imgur.com/lRYVOoh.png)

  - 전체적으로 **CSS를 중복적으로 적용**할 때 사용
  - `#active` 의 css를 한번 적용
  - 이후의 `.marked` 에 대한 css를 한번 더 적용
  - 즉, **조회 범위를 제한**

