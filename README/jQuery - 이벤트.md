# jQuery - 이벤트

- 시스템에서 `일어나는` 사건

- javaScript 나 jQuery 에서는 `시스템 = 브라우저`

  - 클릭, 마우스 이동, 타이핑, 페이지 로딩 등

- 이벤트가 발생했을 때의 로직을 설치하면, 시스템은 그 로직을 실행함

- jQuery 이벤트

  - 크로스브라우징 문제 해결

  ```html
  <html>
      <head>
          <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
          <script type="text/javascript">
              function clickHandler(e){
                  alert('thank you');
              }
              $(document).bind('ready', function(){
                   $('#click_me').bind('click', clickHandler);
                   $('#remove_event').bind('click', function(e){
                       $('#click_me').unbind('click', clickHandler);
                   });
                   $('#trigger_event').bind('click', function(e){
                       $('#click_me').trigger('click');
                   });
               })
          </script>
      </head>
      <body>
          <input id="click_me" type="button" value="click me" />
          <input id="remove_event" type="button" value="unbind" />
          <input id="trigger_event" type="button" value="trigger" />
      </body>
  </html>
  ```

  - `bind` : 이벤트 핸들러 **설치**
  - `unbind` : 이벤트 핸들러 **제거**
  - `trigger` : 이벤트를 **강제로 실행**

  ```html
  <html>
      <head>
          <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
          <script type="text/javascript">
              function clickHandler(e){
                  alert('thank you');
              }
              $(document).ready(function(){
                   $('#click_me').click(clickHandler);
                   $('#remove_event').click(function(e){
                       $('#click_me').unbind('click', clickHandler);
                   });
                   $('#trigger_event').click(function(e){
                       $('#click_me').trigger('click');
                   });
               })
          </script>
      </head>
      <body>
          <input id="click_me" type="button" value="click me" />
          <input id="remove_event" type="button" value="unbind" />
          <input id="trigger_event" type="button" value="trigger" />
      </body>
  </html>
  ```

  - `ready` : 웹페이지가 전부 호출되면 실행됨
  - `click` : click Handler
  - `clickHandler` : 사용자 지정 함수 ( `alert('thank you')` )

  ```html
  <html>
      <head>
          <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
          <script type="text/javascript">
              function clickHandler(e) {
                  alert('thank you');
              }
              $('#click_me').live('click', clickHandler);
              $('#remove_event').live('click', function(e) {
                  $('#click_me').die('click', clickHandler);
              });
              $('#trigger_event').live('click', function(e) {
                  $('#click_me').trigger('click');
              });
          </script>
      </head>
      <body>
          <input id="click_me" type="button" value="click me" />
      <input id="remove_event" type="button" value="unbind" />
      <input id="trigger_event" type="button" value="trigger" />
      </body>
  </html>
  ```

  - live 는 현재 사용할 수 없어서, on으로 대체
  - 화면상에 존재하지 않는 엘리먼트에게도 이벤트를 붙일 수 있음
  - 굳이 필요하지 않다면 2번째 타입을 추천