# jQuery - wrapper

- ### 레퍼(wrapper) 란?

  - 인자로 전달된 요소들에 **jQuery의 기능성을 부가**해서 반환

  ![](https://i.imgur.com/qZFvH9d.png)

- ### 레퍼(wrapper)의 안전한 사용

  > $를 사용하는 다른 라이브러리들과 충돌 가능성이 존재함

  ```javascript
  <script type="text/javascript">
  //$ 대신 jQuery를 사용
  jQuery('body').html('hello world');
  </script>
  ```

  - jQuery 는 고유명사이기 때문에 충돌할 부분이 없지만, 타이핑이 늘어남

  ```javascript
  <script type="text/javascript">
  //$를 함수의 지역변수로 선언해서 외부에 있을지 모르는 타 라이브러리의 $와의 충돌을 예방
  (function($){
      $('body').html('hello world');
  })(jQuery)
  </script>
  ```

  - $를 인자로 전달하여, 지역변수로 사용하면 외부의 라이브러리들과 충돌이 없어짐

- ### 제어 대상을 지정하는 방법

  - `jQuery( selector, [context] )`

    ```html
    <html>
        <body>
            <ul>
                <li>test2</li>
            </ul>
            <ul class="foo">
                <li>test</li>
            </ul>
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
            <script type="text/javascript">
                (function($){            
                    $('ul.foo').click( function() {
                        $('li', this).css('background-color','red');
                    });
                })(jQuery)
            </script>
        </body>
    </html>
    ```

    - `ul` 태그의 `foo` 객체를 찾음 
    - click event 를 붙이고
    - li 태그의 `background-color` 를 `red` 로 변경

    ```html
    <html>
        <body>
            <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
            <script type="text/javascript">
                jQuery(document.body).css( "background-color", "black" );
            </script>
        </body>
    </html>
    ```

    - `document.body` (전체문서) 의 background-color을 black으로 변경
    - $ 대신 `jQuery` 구문을 사용