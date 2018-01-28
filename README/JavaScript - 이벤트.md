# JavaScript - 이벤트

> 이벤트는 어떤 사건(event)을 의미
>
> 사용자가 클릭했을 때
>
> 스크롤을 했을 때
>
> 필드의 내용을 바꿨을 때

```html
<!DOCTYPE html>
<html>
<body>
    <input type="button" onclick="alert(window.location)" value="alert(window.href)" />
    <input type="button" onclick="window.open('bom.html')" value="window.open('bom.html')" />
</body>
</html>
```

- event type

  - onclick : 클릭했을 때
  - onchange : 무엇인가가 바뀌었을 때

- event handler

  - 이벤트가 발생했을 때 동작하는 코드

- ### 등록 방법

  - ### 인라인(inline) 방식

    > 이벤트를 이벤트 대상의 태그속성으로 지정하는 것

    `<input type="button" onclick="alert('Hello world'); value="button />`

    ```javascript
    <!--자기 자신을 참조하는 불편한 방법-->
    <input type="button" id="target" onclick="alert('Hello world, '+document.getElementById('target').value);" value="button" />
    <!--this를 통해서 간편하게 참조할 수 있다-->
    <input type="button" onclick="alert('Hello world, '+this.value);" value="button" />
    ```

    - this 는 자기자신의 객체를 가리키기 때문에 어떤 코드에서도 똑같이 동작
    - HTML, CSS 따로 / JavaScript 따로 분리하는 방식으로 진행

  - ### 프로퍼티 리스너 방식

    > 이벤트 대상에 해당하는 객체의 프로퍼티로 이벤트를 등록하는 방식

    ```javascript
    <input type="button" id="target" value="button" />
    <script>
        var t = document.getElementById('target');
        t.onclick = function(){
            alert('Hello world');
        }
    </script>
    ```

    - event handler
      - function() { alert('Hello world'); }

    ```javascript
    <body>
        <input type="button" id="target" value="button" />
    <script>
        var t = document.getElementById('target');
        t.onclick = function(event){
            alert('Hello world, '+event.target.value)
        }
    </script>
    ```

    - function(event) { }
      - 함수의 인자로 event 를 넣었을 때, 이벤트 객체에 대한 정보를 얻을 수 있음
      - event.target
        - 이벤트가 어디서 발생했는지에 대해서 알아낼 수 있는 property
      - console.dir(event)
        - event에 대한 부분을 자세하게 볼 수 있음

  - ### addEventListener 방식

    >이벤트 방식 중 가장 권장되는 방식임

    ```javascript
    <input type="button" id="target" value="button" />
    <script>
        var t = document.getElementById('target');
        t.addEventListener('click', function(event){
            alert('Hello world, '+event.target.value);
        });
    </script>
    ```

    - click 이라는 이벤트를 발생했을 때, 두번 째 인자로 전달한 이벤트 리스너가 호출되면서 실행됨

    - event 인자를 받기 때문에 위의 함수와 동일하게 동작

    - cross browsing Issue

      - 위의 코드가 IE8 에서는 동작하지 않음

      ```javascript
      var t = document.getElementById('target');
      if(t.addEventListener){
          t.addEventListener('click', function(event){
              alert('Hello world, '+event.target.value);
          }); 
      } else if(t.attachEvent){
          t.attachEvent('onclick', function(event){
              alert('Hello world, '+event.target.value);
          })
      }
      ```

      - attachEvent 를 사용하면 IE8에서도 동작가능하지만 on_ 접미사를 붙여주어야 함

    - property 방식으로 event를 붙여버리면, event를 중복적으로 추가할 수 없음

    - 그래서 addEventListener을 통해서 event를 중복적으로 적용

    ```javascript
    <input type="button" id="target1" value="button1" />
    <input type="button" id="target2" value="button2" />
    <script>
        var t1 = document.getElementById('target1');
        var t2 = document.getElementById('target2');
        function btn_listener(event){
            switch(event.target.id){
                case 'target1':
                    alert(1);
                    break;
                case 'target2':
                    alert(2);
                    break;
            }
        }
        t1.addEventListener('click', btn_listener);
        t2.addEventListener('click', btn_listener);
    </script>
    ```

    - event Listener 을 재활용하여 사용할 수 있음
    - 하나의 함수에서 동작할 때, 어디서 발생한 것인지 확인해야 함
    - 그때 사용하는 것이 `event.target.id` 임
      - 어디서 호출되었는지 알아낼 수 있음