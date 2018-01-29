# jQuery - ajax

> Asynchoronous JavaScript and XML
>
> 자바스크립트를 통해서 비동기적으로 서버와 통신하는 방식이며<br>이때 XML을 이용함
>
> 꼭 XML 을 이용할 필요는 없고, JSON을 더 많이 이용함

```javascript
      $.ajax({
        url: 'http://opentutorials.org/example/jquery/example.jquery.ajax.php',
        dataType: 'json',
        type: 'POST',
        data: {
          'msg': $('#msg').val()
        },
        success: function(result) {
          if (result['result'] == true) {
            $('#result').html(result['msg']);
          }
        }
      });
```

- ### $.ajax(settings)

  - data : 서버에 전송할 데이터 (KEY/VALUE 형식)

    `'msg': $('#msg').val()`

  - dataType : 서버가 리턴하는 데이터 타입

    > xml, json, script, html

  - type : 서버로 전송하는 데이터 타입

    > GET, POST

  - url : 데이터를 전송할 URL

  - success : ajax 통신에 **성공했을 때**, **호출**될 **이벤트 핸들러**

    ```javascript
    success: function(result) {
      if (result['result'] == true) {
        $('#result').html(result['msg']);
      }
    }
    ```

    - result['result'] 가 존재한다면
    - result 를 가진 id 에 html 형식으로 제공