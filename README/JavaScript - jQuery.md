# JavaScript - jQuery

1. ### 라이브러리와 jQuery

   > 원하는 Element를 조회하고, 제어하는 방법들을 훨씬 쉽게 제어
   >
   > DOM을 이용하면 10줄이 되는것을 jQuery는 1~2줄로 구현할 수 있음
   >
   > 라이브러리 라는것은 결국 DOM이나 BOM을 기반으로 만드는 것이기 때문에
   >
   > DOM, BOM으로 구현하지 못하는 것은 절대 할 수 없음
   >
   > 라이브러리만 배우면 라이브러리에 갇힐 수 있음
   >
   > 하지만 생산성과 편리성에 의해서 라이브러리를 사용함
   >
   > 라이브러리를 사용하는 것이 훨씬 더 많은 결과를 내기 때문

2. ### jQuery 기본 사용법

   1. jQuery 포함시키기

      - download에 가서 'Using jQuery with a CDN' 항목에서 참고
      - `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>`
      - 스크립트 태그를 이용해서 HTML 본문에 포함시킨다

      ```html
      <script>
        jQuery( document ).ready(function ( $ ) {
          $('body').prepend('<h1>Hello World</h1>');
        });
      </script>
      ```

      - $('body') 는 body 태그를 선택하는 부분
      - `.prepend` : 선택한 태그 앞쪽에 뒤의 인자로 온 태그를 추가시킨다
        - 즉, `<h1>Hello World</h1>` 이 추가됨

      ![](https://i.imgur.com/Xs4r5cH.png)

   ​