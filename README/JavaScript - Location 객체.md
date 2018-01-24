# JavaScript - Location 객체

1. ### 문서의 주소정보를 알아내기

   > 열려있는 문서의 URL을 알려주는 객체
   >
   > 자바스크립트가 브라우저를 제어하기 위해서는 모든 것이 객체화 되어있어야 한다
   >
   > URL 도 객체화 되어있음을 알 수 있다

   - `console.log(location.toString(), location.href);`

     - 윈도우의 문서가 위치하는 URL을 알아내는 방법

     ![](https://i.imgur.com/8myfAuv.png)

     - location.toString() 또는 location.href 모두 같은 값을 리턴하지만
     - location.href 를 사용하는게 더 일반적임

   - `console.log(location)`

     ![](https://i.imgur.com/mWX3ehk.png)

     - console.log는 location 에 대한 부분을 분석해서 뿌려줌

   - `alert(location)` = `alert(location.toString())`

     ![](https://i.imgur.com/7zSTHVF.png)

     - alert() 안에는 문자열만 들어갈 수 있으므로, 현재의 경로(텍스트)만 뿌려줌

   - `console.log(location.protocol, location.host, location.port, location.pathname, location.search, location.hash)`

     - 예시 접속 주소 : https://opentutorials.org/course/1?id=10

     - console.log(protocol)

       - 현재 접속한 웹페이지의 프로토콜을 알아낼 수 있음
         - file, http, https 등
       - 리턴 값 : https

     - console.log(location.host)

       - 리턴 값 : opentutorials.org

     - console.log(location.port)

       - 연결되어 있는 포트를 출력


       - 기본 포트(80, 8080) 이라면 리턴되지 않음

     - console.log(location.pathname)

       - 구체적인 정보를 리턴함
       - 리턴 값 : /course/1

     - console.log(location.search)

       - ? 뒤의 문자를 리턴함
       - 리턴 값 : ?id=10

     - console.log(location.hash)

     ![](https://i.imgur.com/dgGZSN8.png)

2. ### 문서의 주소를 변경하기

   - location 객체는 URL을 조작할 수 있음
   - `location.href = 'http://naver.com';`
     - http://naver.com 으로 이동함
     - `location = 'http://naver.com'` 동일
   - `location.reload()`
     - `location.href = locaiton.href` 동일

















