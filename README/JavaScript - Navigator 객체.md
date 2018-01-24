# JavaScript - Navigator 객체

> JavaScript를 이용해서 브라우저의 제품명, 기능을 알 수 있는 객체
>
> 브라우저 특성에 맞는 코딩을 할 수 있게 제공함

1. ### 크로스브라우징(cross browsing) 이란?

   - IE
   - FireFox
   - Chrome
   - Safari
   - Opera
   - W3C
     - ECMA
   - 표준화 기구에 따른 브라우저를 제작함
   - 스펙이 정의하지 않는 디테일한 부분은 각자 전략에 맞게 구현
   - 브라우저마다 동일한 코드지만 다른 결과를 낼 때가 존재함
   - **크로스브라우징 이슈**
   - Netscape
     - JavaScript
     - addEventListener
   - Internet Explorer (IE)
     - OS에 번들개념으로 탑재
     - attachEvent
   - 두 브라우저간 무질서한 경쟁이 일어남
   - 그래서 `웹 표준`이 세워짐

2. ### Navigator 객체

   > Navigator 객체가 하는일은 무엇일까?

   - `console.dir(navigator);`

     ![](https://i.imgur.com/cCa7891.png)

     - Navigator에 대한 Property를 제공

   - `console.dir(navigator.appName)`

     - 웹 브라우저의 이름
     - IE는 Microsoft Internet Explorer
       - 2018년 01월 24일 현재는 IE, Edge도 Nescape 로 출력된다고 함 (생활코딩 띠링님의 댓글)
     - 파이어폭스, 크롬은 Nescape

   - `console.dir(navigator.appVersion)`

     - 브라우저의 버전을 리턴

   - `console.dir(navigator.userAgent)`

     - 브라우저가 서버측으로 전송하는 User Agent HTTP 헤더에 대한 내용 (appVersion 과 비슷)

3. ### 기능 테스트

   > 작성한 코드가 브라우저에서 동작될텐데 사용할 기능이 동작되는지 테스트 하는 방법을 알아볼 것

   - 브라우저 마다 다르게 동작하는 기능을 보정해줄수는 없음
   - navigator 객체를 통해서 브라우저의 종류를 알아내고
   - object.key 의 구문을 통해서 브라우저에 따라 다르게 동작하는 처리가 필요한 것