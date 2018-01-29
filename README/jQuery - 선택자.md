# jQuery - 선택자

> jQuery wrapper 은 CSS 선택자가 위치할 수 있음
>
> 이를 통해서 제어하려고 하는 엘리먼트를 빠르고 정확하게 지정할 수 있음

- ### 기본

  ![](https://i.imgur.com/kEUCk9g.gif)

- ### Filter

  ![](https://i.imgur.com/NJcBFHW.gif)

  - 인덱스는 항상 0부터 시작함
  - gt : greate then
  - lt : less then
  - even : 홀수
  - odd : 짝수
  - first : 첫번째
  - last : 마지막

- ### 속성

  ![](https://i.imgur.com/h6D4bYa.gif)

  - BC를 찾음
  - DEFG 를 찾음 (! DEFG 말고 나머지)
  - `^` 는 뒤의 문자로 **시작하는 단어**를 찾음
  - `$` 는 뒤의 문자로 **끝나는 단어**를 찾음
  - 속성이 존재하는 것을 모두 찾음 (target을 가지고 있는)
  - 속성들이 존재하는 것을 모두찾음 (target 및 id를 가지고 있는)

- ### FORM

  ![](https://i.imgur.com/amH5bRd.gif)

  - **Form의 경우**에는 `속성 셀렉터`를 사용
  - ​