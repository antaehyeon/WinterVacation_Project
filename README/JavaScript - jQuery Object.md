# JavaScript - jQuery Object

1. ### 특성

   ![](https://i.imgur.com/0IDiGSv.png)

   - `$('li')` 는 함수(function) 이고
   - 반환되는 `li` 는 jQuery Obejct 이다

   ![](https://i.imgur.com/jd85mZA.png)

   - `li.css('text-decoration', 'underline');`
   - 내부적으로 `li` 태그를 순회하면서 underline 속성을 지정한다
   - 우리 눈에는 보이지 않는 `암시적 반복`

   ![](https://i.imgur.com/p1x8Ijq.png)

   - jQuery의 문법상 2개 이상의 인자가 있으면 `설정하는 형식`이고
   - 1개만 존재하면 `가져오는` 형식임
   - 그리고 text-decoration 이 적용된 `첫번째 태그만` 가져옴

2. ### 엘리먼트 정보

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="utf-8">
       <title></title>
     </head>
     <body>
       <ul>
       <li>html</li>
       <li>css</li>
       <li>JavaScript</li>
   </ul>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   <script>
       console.log($('li').length);
       console.log($('li')[0]);
       var li = $('li');
       for(var i=0; i<li.length; i++){
           console.log(li[i]);
       }
   </script>
     </body>
   </html>
   ```

   - `var li = $('li');`

   ![](https://i.imgur.com/CoTRxic.png)

   - 각각의 객체는 HTMLLIElement 이기 때문에 **jQuery 객체가 아님!**
   - `console.log(li[i].css('color', 'red'));`
     - 그렇기 때문에, 위와 같은 코드를 작성했을 시
     - undefined is not a function 이라는 메세지가 리턴됨
   - 다시 jQuery 객체로 만들어주면 됨
   - `console.log($(li[i]).css('color', 'red'));`
     - `$(li[i])` 가 jQuery **객체를 리턴**함

   ![](https://i.imgur.com/wLwVfsq.png)

   - 위는 DOM 객체를 리턴받은 것이고
   - 아래는 jQuery 객체를 리턴받은 것

3. ### .map()

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="utf-8">
       <title></title>
     </head>
     <body>
       <ul>
         <li>html</li>
         <li>css</li>
         <li>JavaScript</li>
       </ul>
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
       <script>
           var li = $('li');
           li.map(function(index, elem){
               console.log(index, elem);
               $(elem).css('color', 'red');
           })
       </script>
     </body>
   </html>
   ```

   - map 함수

     - `function(index, elem)`
       - index 에는 element 전달
       - elem 에는 DOM Object 전달

     ![](https://i.imgur.com/v6j1ENp.png)

     - console.log(index, elem)
       - 0, 1, 2 는 **element** (index)
       - 뒤의 `<li>` 는 DOM **Object** (elem)
     - `$(elem).css('color', 'red');`
       - **뒤의 DOM 객체를 jQuery ($) 형식으로 감싸서 사용**

4. ### API

   - Application Program Interface

   - [JQuery API](http://api.jquery.com/)

     - [CSS](http://api.jquery.com/category/css/)

       - [.css()](http://api.jquery.com/css/)

       ![](https://i.imgur.com/W3pzaOY.png)

       - propertyName 을 인자로 받고 있음

   - API 의 모든것을 보는것은 추천하지 않음

   - 중요하고 반복적으로 사용되는 (예 : css) 의 API를 보면서 어떻게 쓰는지 익히는 방식을 추천

   - 이런식으로 API 보는법에 대해서 익숙해진 후 나중에 필요한 정보를 얻어가는 방식으로 진행