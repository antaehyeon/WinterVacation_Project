
- # WinterVacation Project

  ### 2017.12월 말 ~ 2018.02월 말 까지(방학동안) 진행할 안태현 개인 프로젝트에 대한 내용 및 기타 내용들을 관리할 README 입니다!

  ```
  스펙, 학교, 영어 큰 의미 없습니다. 

  자료구조, 운영체제, 네트워크, 알고리즘을 잘 알고 있는지 봅니다. 스프링? 그런 것 묻지 않습니다. 스프링 잘하는 사람 뽑을거면 경력 사원 뽑지요.
  ```

  ​

  # KAKAO TALK WEB SERVICE

  - 기획안을 README 로 관리할 예정이며, 배운 것 들을 실시간으로 기록할 예정입니다.
  - 카카오톡의 웹버전을 구현 할 예정이며, 기반 기술은 Samsung Flow를 이용할 것 입니다.
  - 안드로이드 Application (Service), Server 및 Web Front 및 CSS 등 전반적으로 이용 될 것 입니다.
  - 서버에 대한 기초와 데이터베이스 선택시 사용한 이유 등을 관리할 예정입니다.
  - 자세한 내용은 기획안을 작성할 때 추가하도록 하겠습니다.

  ​

  - ## 기술조사 및 프로젝트 계획 세우기

  - ### [Samsung Flow](http://www.samsung.com/sec/support/samsungflow/)

    - Android 에서 Samsung Flow 를 설치 후, Window 환경 Store에서 Samsung Flow를 설치

    - 초반 Bluetooth 연결과정이 필수이며, 기능에 따른 Wi-Fi 연결이 필수 (파일전송, 사진전송)

    - 카카오톡의 기존 메세지를 받아오는 기능은 구현되어 있지 않음

    - ![안드로이드 미리보기](https://github.com/antaehyeon/PersonalProject_KAKAOTALK_WEB/blob/master/Image/Screenshot_20171228-170223.png)

    - 안드로이드의 미리보기의 데이터를 긁어와 블루투스로 연결된 PC로 데이터를 전송하는 것 같음 

    - ![Samsung Flow 데이터 전송](https://github.com/antaehyeon/PersonalProject_KAKAOTALK_WEB/blob/master/Image/2017-12-28_170148.png)

    - 일단 전송되는 데이터는 카카오톡 프로필 사진, 카카오톡 내용, 이름을 Samsung Flow 에 리스트 형식으로 뿌려줌

    - ![Samsung Flow에서 메세지 전송](https://github.com/antaehyeon/PersonalProject_KAKAOTALK_WEB/blob/master/Image/Video_2017-12-28_173742.wmv_20171228_180137.gif)

    - Samsung Flow에서 메세지를 보내면 카카오톡으로 메세지가 대신 전송됨

    - 메세지가 많이 Push될 경우 Samsung Flow에서 처리하는 Delay가 존재함

      ```
      GCM이나 FCM을 통해 Client App으로 제공된 Push 메세지의 데이터를 받아와 
      블루투스(또는 Wi-Fi)를 통해 PC의 App으로 뿌려주는 것
      ```

    - #### 구조도

    ![구조도](https://github.com/antaehyeon/PersonalProject_KAKAOTALK_WEB/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-29%20%EC%98%A4%ED%9B%84%202.55.12.png)

  # ENSHARP CLOUD

  - 엔샵 동아리 내에서 자료를 관리하기 위해 제작할 웹 클라우드 서비스 입니다.

  - 해당 기수가 활동했던 자료들이 시간이 지남에 따라 뒤섞이고, 관리가 제대로 되지 않는다는 점에 착안하였습니다.

  - 각 기수마다의 자료를 그때그때 보관한다면 추후의 특정 기수뿐만 아니라 몇 기수 건너서 자료를 참고할 수 있습니다.

    - #### 프로젝트에 필요한 것

      - HTML, CSS
        - 기본 레이아웃, 디자인
        - 반응형 웹
          - 모바일 지원
      - JS
        - 파일관리
          - **다운로드, 업로드**
            - **Drag & Drop**
          - 공유
            - URL
          - 검색 (알고리즘)
          - 미리보기(썸네일)
          - 뷰어 연동 (?)
        - 회원관리
          - **로그인**
          - **회원정보 및 등급**
        - 권한
          - 파일 및 폴더에 대한 접근권한
        - 디렉토리 구조
          - 스크롤
          - 정렬 (알고리즘)
          - 이름, 생성일, 저자




- # 서버

  - [Node JS](https://nodejs.org/ko/)

    - V8 (Google Engine)
    - event-driven (JS 개발방식)
    - non-blocking 10 (컴퓨터의 입력과 출력을 처리)

  - JavaScript를 이용해서 Web Browser 이나 Node JS를 다룰 수 있다

    - alert('Hello world')
      - Web Browser 에서는 경고창을 나타내는 기능
      - Node JS 에서는 알 수 없는 구문

  - Node JS의 장점

    - 속도가 빠르다 (V8)
    - 하나의 언어(Java Script)로 다양한 것을 다룰 수 있다

  - ### [Node JS 실행](https://opentutorials.org/course/2136/11852)

    - ls -al : 현재의 디렉토리를 출력

    - node hello.js

      ```js
      hello.js
      console.log('Hello world');	
      ```

  - ### [간단한 웹 애플리케이션 만들기](https://opentutorials.org/course/2136/11853)

    ```js
    const http = require('http');		// node JS에서 제공하는 http라는 모듈이 필요하다(require - return 값으로 제공되는 것을 가지고 활용)
    									// const : 상수 (바뀌지 않는다)
     
    const hostname = '127.0.0.1';
    const port = 1337;
     
    http.createServer((req, res) => {		// 서버를 만든다
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World\n');		// 여기까지 http.Server(Class)을 리턴시킴
    }).listen(port, hostname, () => {		// 포트가 해당 IP주소를 Listen 하게 설정
      										// 해당 http.Server의 함수인 listen을 이용
      console.log(`Server running at http://${hostname}:${port}/`);
    });
    ```

    - http://127.0.0.1:1337

    - **서버쪽에 위치하면서 빠르고 편리하게 서버로 들어오는 요청을 응답하는 애플리케이션을 만들 수 있는 기반시스템을 제공**

    - [Node JS Document](https://nodejs.org/dist/latest-v9.x/docs/api/)

      - [http.createServer([requestListener])](https://nodejs.org/dist/latest-v9.x/docs/api/http.html#http_http_createserver_requestlistener)

        ```html
        Added in: v0.1.13
        requestListener <Function>

        Returns: <http.Server>

        Returns a new instance of http.Server.

        The requestListener is a function which is automatically added to the 'request' event.
        ```

      - [Class: http.Server](https://nodejs.org/dist/latest-v9.x/docs/api/http.html#http_class_http_server)

        ```html
        Starts the HTTP server listening for connections. This method is identical to server.listen() from net.Server.
        ```

      - [os.platform()](https://nodejs.org/dist/latest-v9.x/docs/api/os.html#os_os_platform)

        ```html
        Added in: v0.5.0
        Returns: <string>
        The os.platform() method returns a string identifying the operating system platform as set during compile time of Node.js.

        Currently possible values are:

        'aix'
        'darwin'
        'freebsd'
        'linux'
        'openbsd'
        'sunos'
        'win32'
        Equivalent to process.platform.

        Note: The value 'android' may also be returned if the Node.js is built on the Android operating system. However, Android support in Node.js is considered to be experimental at this time.
        ```

        ```Js
        module.js
        var o = require('os');
        console.log(o.platform());
        ```

        - Mac OS 에서의 return은 'darwin'이 출력되며, 윈도우는 'win32'가 출력된다.

    - #### 인터넷의 동작방법

      ![](/Users/hyeon/WinterVacation_Project/Image/스크린샷 2017-12-29 오후 6.17.25.png)

      - 클라이언트는 인터넷을 통해 서버에 접속하는데, 도메인(IP)을 통해서 접속

        ![](/Users/hyeon/WinterVacation_Project/Image/스크린샷 2017-12-29 오후 6.19.50.png)

      - 서버는 다양한 서버를 가지고 있을 수 있는데 그 중 어떤 서버를 사용자에게 제공할 것인가를 결정

      ![](/Users/hyeon/WinterVacation_Project/Image/스크린샷 2017-12-29 오후 6.12.19.png)

      - 특정 포트(80)를 웹 서버가 **Listening** 하게 한다

  - ### [NPM(Node Package Manager)](https://www.npmjs.com/)

    - HTTP, OS 는 Node JS가 제공하는 모듈

    - Date, String, Array, Math 등은 JavaScript언어가 제공하는 모듈

    - 기본적인 기능들을 결합해서 다양한 것들을 만들 수 있음

    - 타인의 모듈을 사용할 것인데 'NPM' 을 사용할 것. 

    - NPM = Node계의 앱스토어

      - 설치, 삭제, 업그레이드, 의존성 관리

    - ##### [uglify-js](https://www.npmjs.com/package/uglify-js)

      - 설치시 맨 뒤에 -g 의 차이는

        - global : 컴퓨터 전역에서 사용하는 독립적인 장치로 설치됨
        - non global : 패키지를 설치하고 있는 디렉토리의 부품으로 설치됨

      - permission error 가 난다면 맨 앞에 sudo를 붙일 것

        ```Js
        pretty.js
        function hello(name) {
          console.log('Hi, ' + name);
        }
        hello('egoing');
        ```

        - uglifyjs pretty.js

          ```
          function hello(name){console.log("Hi, "+name)}hello("egoing");
          uglifyjs pretty.js -m
          function hello(o){console.log("Hi, "+o)}hello("egoing");
          uglifyjs pretty.js -o uglified.js -m
          uglifyjs pretty.js -o pretty.**min**.js -m
          ```

        - npm init

          ```
          package.json
          {
            "name": "server_side_javascript",
            "version": "1.0.0",
            "description": "Server side javascript tuotirals",
            "main": "hello.js",
            "scripts": {
              "test": "echo \"Error: no test specified\" && exit 1"
            },
            "author": "",
            "license": "ISC"
          }
          ```

          - 패키지에 대한 여러가지 정보 기록

          - 작업한 프로젝트를 npm에 등록하여 다른사람들도 쉽게 설치할 수 있도록 하는 초석

          - npm install underscore —save

            ```
            license 아래에 dependencies 항목이 추가됨
            "dependencies": {
            "underscore": "^1.8.3"
            }
            ```

            - 새로운 폴더에 다시 시작한다고 하더라도, dependencies에 포함되어 있기 때문에 쉽게 가져올 수 있음 (의존성을 명시적으로 표시)
            - 일시적으로 사용하는 것들은 save를 제외하고 설치함
            - 반드시 필요하고 무조건 같이 있어야 한다고 하면 save를 넣어서 설치

    - [Underscore](http://underscorejs.org/)

      ```
      var _ = require('underscore');
      var arr = [3,6,9,1,12];
      console.log(arr[0]);
      console.log(_.first(arr));
      console.log(arr[arr.length-1]);
      console.log(_.last(arr));
      ```

      - [Underscore first](http://underscorejs.org/#first)



- # 학습법 및 방향성에 도움되는 글

  - ### [학습에 실패한 이야기](http://woowabros.github.io/experience/2017/12/11/how-to-study.html)

    - Study, Read, Do, 나중에 볼 것으로 분류

    - #### **의식적인 연습**

      - 단순히 많이 걷는것만으로는 자세가 교정되지 않는다
      - 단순히 행위를 반복하는것은 연습이 되지 않으며, 실력이 늘지 않는다. 노하우가 생기는 것일뿐

    - 자신의 약점을 고치기 위해 노력해야 한다

    - 집중하고, 고치고, 반복하라

  - ### [네이버 오픈소스 가이드](https://naver.github.io/OpenSourceGuide/book/)

  - ### 데이터베이스 선택

  - ### 서버 선택

  - ### Firebase

    - 클라우드 서비스 제공자이며 동시에 백엔드의 기능을 가지고 있음

  - ### [신입의 자세](https://okky.kr/article/314296?note=1036129)

    - [네이버의 채용기준](http://digital.mk.co.kr/premium/share.php?no=10139)

    ```
    스펙, 학교, 영어 큰 의미 없습니다. 
    자료구조, 운영체제, 네트워크, 알고리즘을 잘 알고 있는지 봅니다. 스프링? 그런 것 묻지 않습니다. 스프링 잘하는 사람 뽑을거면 경력 사원 뽑지요.

    학벌 스펙 결과보다 학부생이 전공을 너무 좋아하고 욕심 내어 '교수님들이 하라는 것'만 하지 않고 B/C 학점을 맞더라도 완벽하게 100+알파% 학과 공부에 충실/치열하게 공부하는 학생들이 많아졌으면 정말 좋겠습니다.

    저희 회사는 엄격한 선발 기준과 체계적인 신입 교육 과정을 갖추고 기본기가 탄탄한 (기본기에 대해서는 위의 cybaek님의 글 중에 있습니다) 신입들을 기다리고 있습니다.

    신입은 뽑는데 완전 공채보다는 대부분 인턴하고 평가 좋아서 들어오는 케이스가 많음. 일단새로 들어온 아는 신입 몇 명 있음. 

    공채 아니더라도 신입이 들어오는거 작년에 몇번 봤습니다. 옆에 앉아서 같이 일하기도 ㅋㅎ
    경력같이 뚜렷한 커리어가 없는데도 뽑는건 들어와도 충분히 극복할만한 기본기가 중요하다는게 새삼스런...
    진짜 잘하는 신입들이 많더라구요...
    sky냐 석사냐는 이제 별 의미 없구요.

    ```

  - #### [2017년 회고](http://blog.devjoshua.me/2017/12/28/171228-2017%EB%85%84%ED%9A%8C%EA%B3%A0/)

  - [TOAST Meetup](http://meetup.toast.com/)

  - [KAKAO Tech Blog](http://tech.kakao.com/)

  - [우아한형제들 기술블로그](http://woowabros.github.io/)

  ​

  # 일정관리

  - #### 1주차

    - 2017.01.01(월) ~ 2017.01.07(일)
      - 2017.01.03(수)~2017.01.05(금) : 여행

  - #### 2주차

    - 2017.01.08(월) ~ 2017.01.14(일)

  - #### 3주차

    - 2017.01.15(월) ~ 2017.01.21(일)

  - #### 4주차

    - 2017.01.22(월) ~ 2017.01.28(일)
      - 2017.01.26(금) : D2 Front End Tech meet up

  - #### 5주차

    - 2017.01.29(월) ~ 2017.02.04(일)

  - #### 6주차

    - 2017.02.05(월) ~ 2017.02.11(일)

  - #### 7주차

    - 2017.02.12(월) ~ 2017.02.18(일)

  - #### 8주차

    - 2017.02.19(월) ~ 2017.02.25(일)

  - #### 9주차

    - 2017.02.26(월) : 개강일

