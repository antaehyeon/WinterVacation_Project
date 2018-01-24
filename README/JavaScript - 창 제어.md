# JavaScript - 창 제어

> 자바스크립트를 이용해서 새로운 창을 열고 닫는방법
>
> 창과 창 사이에 커뮤니케이션을 하는 방법

1. ### window open

   - window : 전역객체
     - 가장 큰 단위를 제어하는 객체
   - `window.open('demo2.html')`
     - 새로운 윈도우를 오픈하는 역할을 담당
   - `window.open('demo2.html', '_self')`
     - _self 라는 인자값을 넘겨주게 되면 새로운 창이 뜨는것이 아닌
     - 현재의 창에서 redirection 됨
   - `window.open('demo2.html', '_blank')`
     - _blank : 약속되어 있는 값 (새창을 의미)
     - <a target = "해당 값"/>
   - `window.open('demo2.html', 'ot')`
     - 새창을 띄우지만
     - 이미 열린 창이 있다면
     - 그 창으로 전환됨 (창이 계속해서 뜨지 않음)
   - `window.open('demo2.html', '_blank', 'width=200, height=200, resizable=yes')`
     - 세번 째 인자를 통해서 새 창의 레이아웃을 지정할 수 있음
     - 브라우저 보안 상 옵션을 제한하는 경우가 있음

2. ### 상호작용

   > 새로운 창을 띄우고 창끼리 상호작용하는 것을 익힐 것

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="utf-8">
       <title></title>
     </head>
     <body>
       <div id="message">
         Hello World
       </div>
     </body>
   </html>

   ```

   ![](https://i.imgur.com/zLZbdPM.png)

   - `<input onkeypress="winmessage(this.value)" type="text">`

   - `function winmessage(msg) { win.document.getElementById('message').innerText=msg; }`

     ![](https://i.imgur.com/ZRvLCKF.gif)

   - win = window.open 을 통해

   - win 변수로 다른 브라우저를 제어할 수 있다는 것을 확인할 수 있음

   - close

     - 연 창을 닫을수도 있음

3. ### 보안

   - 자바스크립트가 브라우저를 제한할 때
   - 특정한 파일을 읽어서 자신의 서버로 전송한다는 등
   - 이러한 행동들이 보안 취약점이 됨
   - 이러한 부분을 최대한 제한함
   - 같은 도메인인 경우에만 원격으로 제어할 수 있음
   - 다른 도메인은 차단됨 (다른 도메인의 페이지를 원격으로 제어하면 문제가 생기므로)
   - 팝업
     - 사용자가 선택했을 때 (버튼을 눌렀을 때)
       - 팝업이 차단되지 않음
     - 사용자가 선택하지 않는데도 자동적으로 열릴 때
       - 팝업이 차단됨 (브라우저 단에서)