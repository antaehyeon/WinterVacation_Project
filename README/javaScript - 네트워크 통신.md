# javaScript - 네트워크 통신

1. ### Ajax

   1. ### 소개

      - Asynchronous JavaScript and XML

   2. ### 기본 동작 방법

      > 해당 코드는 서버가 구성되어 있어야 함

      - XMLHttpRequest 객체 생성

      ```html
      <body>
        <p>time : <span id="time"></span></p>
        <input type="button" id="execute" value="execute" />
        <script>
          document.querySelector('input').addEventListener('click', function(event) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', './time.php');
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4 && xhr.status === 200) {
                document.querySelector('#time').innerHTML = xhr.responseText;
              }
            }
            xhr.send();
          });
        </script>
      </body>
      ```

      - `xhr.open` 후 `xhr.send` 형식으로 진행
      - `xhr.open('GET', './time.php');`
        - GET 방식으로 같은 경로(`./`) 에 있는 `time.php` 에 접속
      - `readyState === 4` : 통신이 성공 / `xhr.status === 200` : response 정상
        - 위의 p태그의 내용에 responseText(시간 내용) 추가
      - `xhr.send`

   3. ### POST 방식

      - `xhr.open('POST', './time2.php');`
        - GET방식이 아닌 **POST 방식**으로 진행
      - `xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");`
        - 서버로 전송할 **데이터 타입의 형식(MIME)** 를 지정

      ```html
      var data = '';
      data += 'timezone='+document.getElementById('timezone').value;
      data += '&format='+document.getElementById('format').value;
      ```

      - 데이터 타입의 형식을 `이름=값&이름=값` 형식으로 지정
      - `xhr.send(data);`
        - 데이터 전송


2. ### JSON

   1. ### 소개

      > JavaScript Object Notation

      `var person = {"height":174, "job":"programmer"}`

      - 클라이언트와 서버간 다른 언어로 구성되어 있는 환경에서
      - JavaScript의 배열구문을 서버쪽에서 그대로 사용할 수가 없음
      - 그래서 만들어진 것이 `JSON`
      - **서버와 클라이언트 간 통신할 때 매우 편하고, 많이 사용됨**

   2. ### API

      - JSON

        - JavaScript 안 중요한 객체
        - JSON에는 중요한 함수 2가지가 존재 (parse, stringify)

      - ### JSON.parse

        - 텍스트로 전달된 데이터를 JSON 형식에 맞게 만들어줌

      - ### stringify

        - 인자로 전달된 값은 객체를 JSON 포맷에 맞는 텍스트로 리턴함

   3. ### JSON 이 없을 때

      - PHP에서는 JavaScript 에게 배열을 직접적으로 전달할 수 없기 때문에
      - PHP에서 배열을 텍스트형식으로 만듬 (콤마를 구분자로)
      - JavaScript 에서는 텍스트형식에서 콤마를 구분해서 배열로 만듬
      - 어차피 JavaScript에서 필요한것은 배열이였음
      - 간단한 프로그램에서는 문제가 되지 않지만, 규모가 조금 큰 프로그램에서는 난리남
      - **JSON은 모든 언어에서 사용할 수 있는 표준**

   4. ### JSON의 적용

      - [JSON 개요](https://www.json.org/json-ko.html)
      - JavaScript 안에 JSON이 부분집합으로 포함되어 있음
      - 데이터의 크기가 한참 큰 형식을 `JSON` 으로 완벽히 해결할 수 있음

3. ### jQuery Ajax

   1. ### 소개

      > 크로스 브라우징의 문제를 jQuery가 알아서 해결해줌

      - [jQuery.ajax()](http://api.jquery.com/jquery.ajax/)

      - [jQuery.Global Ajax Event Handlers](http://api.jquery.com/category/ajax/global-ajax-event-handlers/)

        > 글로벌하게 적용할 수 있는 Ajax Event Handler

      - Helper Functions

        > 통신과 직접적으로 관여는 아니지만, 통신에 있어서 편리한 기능을 제공

      - Low-Level Interface

        - jQuery.ajax()

   2. ### API 사용법

      ```javascript
      $.ajax({
        url: "http://fiddle.jshell.net/favicon.png",
        beforeSend: function( xhr ) {
          xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
        }
      })
        .done(function( data ) {
          if ( console && console.log ) {
            console.log( "Sample of data:", data.slice( 0, 100 ) );
          }
        });
      ```

      - data
        - 서버로 데이터를 전송할 때 해당 옵션을 사용
      - dataType
        - 서버측에서 전송한 데이터를 어떤 형식의 데이터로 해석할 것인가 지정
        - XML, JSON, SCRIPT, HTML
        - 형식을 지정하지 않으면 jQuery가 알아서 판단
      - success
        - 성공했을 때 호출할 콜백을 지정
        - Function(PlainObject data, String textStatus, jqXHR jqXHR)
      - type
        - 데이터를 전송하는 방법을 지정
        - GET, POST

      ```javascript
      $('#execute').click(function(){
        $.ajax({
          url:'./time2.php',
          type:'post',
          data:$('form').serialize(),
          success:function(data){
            $('#time').text(data);
          }
        })
      })
      ```

      ```javascript
      <script>
          $('#execute').click(function(){
              $.ajax({
                  url:'./time3.php',
                  dataType:'json',
                  success:function(data){
                      var str = '';
                      for(var name in data){
                          str += '<li>'+data[name]+'</li>';
                      }
                      $('#timezones').html('<ul>'+str+'</ul>');
                  }
              })
          })
      </script>
      ```

      ​