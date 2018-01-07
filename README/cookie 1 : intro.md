# cookie 1 : intro

- 과자
- 웹사이트를 로그인 했을 때, 로그인 상태를 유지하는 것
- HTTP 라고 하는 프로토콜은 '상태가 없다' 고 표현
  - 이전에 접속했던 상태를 다음접속이 알 수 없다
- 너무 제약이 크기 때문에 'Cookie' 를 개발
- 활용도가 높은 편
- Cookie 를 기반으로 Session 을
- Session 을 기반으로 Authentication 을 배우기 때문에
- Cookie 는 가장 기본적인 개념
- 접속한 브라우저마다 다른 상태를 유지할 수 있다 (장점 또는 단점)
- 검사 - Network 에서 Cookie 를 확인할 수 있고
- Resources 탭의 Cookies 에서 Cookie 를 삭제할 수 있음
- Request Header (웹브라우저가 웹서버에게 보내는)
  - Cookie: count=1
- Response Header (웹서버가 웹브라우저에게 보내는)
  - Set-Cookie: count=1; Path=/
    - Set-Cookie 는 약속되어 있는 표준에서 count=1 값을 보낸 것
- node JS 를 통해서 받은 정보(**Request Header-Cookie**) 에서 +1 을 한 후 Set-Cookie 값으로 웹브라우저에게 전송(**Response Header**)