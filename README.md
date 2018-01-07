
- # WinterVacation Project

  ### 2017.12월 말 ~ 2018.02월 말 까지(방학동안) 진행할 안태현 개인 프로젝트에 대한 내용 및 기타 내용들을 관리할 README 입니다!

  ```
  스펙, 학교, 영어 큰 의미 없습니다. 

  자료구조, 운영체제, 네트워크, 알고리즘을 잘 알고 있는지 봅니다. 스프링? 그런 것 묻지 않습니다. 
  스프링 잘하는 사람 뽑을거면 경력 사원 뽑지요.
  ```

  ​

  - ### [개발자 로드맵 (2018년)](http://iviettech.vn/tin-tuc/9192-web-developer-roadmap-2018.html)

    ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/Roadmap_2-738x1024.png)

  - ### 2018년 계획

    ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-02%20%EC%98%A4%ED%9B%84%203.22.44.png)

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

      ![Samsung Flow 데이터 전송](https://github.com/antaehyeon/PersonalProject_KAKAOTALK_WEB/blob/master/Image/2017-12-28_170148.png)

    - 일단 전송되는 데이터는 카카오톡 프로필 사진, 카카오톡 내용, 이름을 Samsung Flow 에 리스트 형식으로 뿌려줌

      ![Samsung Flow에서 메세지 전송](https://github.com/antaehyeon/PersonalProject_KAKAOTALK_WEB/blob/master/Image/Video_2017-12-28_173742.wmv_20171228_180137.gif)

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

  - 각 기수마다의 자료를 그때그때 보관한다면 추후의 특정 기수뿐만 아니라 몇 기수 건너서 자료를 참고할 수 있도록 제공할 예정입니다

    - #### 프로젝트에 필요한 것

      - **HTML, CSS**
        - **기본 레이아웃, 디자인**
        - **반응형 웹**
          - 모바일 지원
      - JS, Server, DB
        - 파일관리
          - **다운로드, 업로드**
            - **Drag & Drop**
          - 공유
            - URL
          - 검색 (알고리즘)
          - 미리보기(썸네일)
          - 뷰어 연동 (?)
        - 회원관리 (Server)
          - **로그인**
          - **회원정보 및 등급**
        - 권한
          - 파일 및 폴더에 대한 접근권한
        - 디렉토리 구조
          - 스크롤
          - 정렬 (알고리즘)
          - 이름, 생성일, 저자

  - #### 목표

    - HTML, CSS, JS의 기초
    - Server 에 대한 개념과 구현 (경험)
    - 2월을 지나서도 꾸준하게 발전시키고 관리
      - 그에대한 초석을 다져놓는 작업까지가 2월까지의 목표
    - Computer Science


- # 서버

  - ### [Node JS](https://nodejs.org/ko/)

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

      ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-29%20%EC%98%A4%ED%9B%84%206.17.25.png)

      - 클라이언트는 인터넷을 통해 서버에 접속하는데, 도메인(IP)을 통해서 접속

        ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-29%20%EC%98%A4%ED%9B%84%206.19.50.png)

      - 서버는 다양한 서버를 가지고 있을 수 있는데 그 중 어떤 서버를 사용자에게 제공할 것인가를 결정

      ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-29%20%EC%98%A4%ED%9B%84%206.12.19.png)

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

        - **npm init**

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

          - 현재의 디렉토리를 npm의 디렉토리로 변경

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

  - ### 콜백(callback) 함수 (중요하게 사용되는 개념이니 익숙해질 것)

    - [JavaScript Sort](https://www.w3schools.com/jsref/jsref_sort.asp)

      ![스크린샷 2017-12-29 오후 9.57.55](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-29%20%EC%98%A4%ED%9B%84%209.57.55.png)

      ```js
      a = [3, 1, 2]; a.sort(); console.log(a);
      [1, 2, 3]

      a = [3, 1, 2]; function b(v1, v2){ return v2-v1; }; a.sort(b); console.log(a);
      [3, 2, 1]

      a = [3, 1, 2]; function b(v1, v2){ return v1-v2; }; a.sort(b); console.log(a);
      [1, 2, 3]

      a = [3, 1, 2]; function b(v1, v2){ return 0; }; a.sort(b); console.log(a);
      [3, 1, 2]

      a = [3, 1, 2]; function b(v1, v2){ console.log('c', v1, v2); return 0; }; a.sort(b); console.log(a);
      c 3 1
      c 1 2
      [3, 1, 2]

      a = [3, 1, 2]; a.sort(function(v1, v2){return v2-v1}); console.log(a); // 익명함수
      [3, 2, 1]
      ```

      - 콜백함수는 function b 이며, sort라는 함수가 필요할 때 마다 내부적으로 호출함
      - 사용자가 호출하는 함수가 아닌, 누군가에 의해서 호출당하는 함수이므로 Call-Back 함수라고 불릴수도 있지 않을까 (이고잉님 생각)

  - ### 동기와 비동기 프로그래밍

    - Synchronous

    - **A**synchronous

    - [readFIle](https://nodejs.org/dist/latest-v9.x/docs/api/fs.html#fs_fs_readfile_path_options_callback)

    - [readFileSync](https://nodejs.org/dist/latest-v9.x/docs/api/fs.html#fs_fs_readfilesync_path_options)

      ```js
      data.txt
      Hello Sync And Async

      sync_async.js
      var fs = require('fs');

      // Sync
      console.log(1);
      var data = fs.readFileSync('data.txt', {encoding:'utf8'});
      console.log(data); // 위에 readFileSync가 끝날 때 까지 실행되지 않음

      // ASync
      // 실행순서 2-4-3
      console.log(2);
      fs.readFile('data.txt', {encoding:'utf8'}, function(err, data) { 
        console.log(3);
        console.log(data);
      });
      console.log(4); // 위의 readFile이 실행되기 전에 먼저 실행되고 백그라운드에서 readFileSync가 동작함
      ```

      - node JS는 Single Thread로 동작되는 언어임
      - 웹 애플리케이션 안에서 어떤 파일을 읽는작업이 10분이 걸린다면 10분동안 아무도 웹사이트에 접속을 못하는 상황이 발생할 수 있음
      - 비동기적인 방식이 무엇인가에 대한 대략적인 이해는 반드시 필요

  - ### 서버 측 JS - express 도입

    ```Js
    const http = require('http');

    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.createServer((req, res) => {		// request, response
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World\n');
    });

    server.listen(port, hostname, () => {		// listen이 비동기적으로 작동되는 부분
      console.log(`Server running at http://${hostname}:${port}/`);
    });

    ```

    - 특정포트가 웹서버를 바라보고 있게 설정하면, 웹서버의 포트를 통해서 웹서버로 접근할 수 있게됨
    - 서버는 여러개의 IP를 가지고 있을 수 있음 - 어떤 IP를 타고 들어온 사용자를 수용할 것인가
    - listen은 여러가지 이유로 시간이 많이 걸릴 수 있는 작업이기 때문에 비동기적으로 작동됨( fucntion() { } )
    - 어떤것을 응답할 것인가에 대해서는 응답(res)을 가지고 있는 함수에서 진행함

  - ### 서버 측 JS - express 설치

    - npm init
    - npm install —save express
      - dependencies
        - express : "^4.16.2"

  - ### 서버 측 JS - Express, 간단한 웹앱 만들기

    - vim app.js

      - 해당 애플리케이션을 실행시킬 때 최초로 실행되는(최초의 진입점) 애플리케이션 (main, entry)
      - Express에서 권장하는 해당 파일을 app.js 라고 명칭한다 (개인 프로젝트 이름을 사용해도 상관 없음)

      ```js
      app.js
      var express = require('express');
      var app = express();
      app.listen(3000, function() {
              console.log('Connected 3000 port !');
      });
      ```

      - 해당 코드를 node로 동작시킬 시, 3000번 포트가 바라보고 있기 때문에 localhost:3000 하면 접속이 됨
        (단, 파일이 아무것도 없기 때문에 Error Page, Cannot GET / 이라는 메세지가 출력됨)

      ```js
      app.js
      var express = require('express');
      var app = express();
      app.get('/');		// 사용자가 홈페이지에 접속했다 라는 것을 알려주기 위함
      app.listen(3000, function() {
              console.log('Connected 3000 port !');
      });
      ```

      - 사용자가 웹서버에 접속할 때 GET/POST 방식이 존재
      - URL을 치고 들어가는것은 GET방식으로 접속하는 것임
      - GET방식일 경우에 app.get()을 통해서 사용자가 홈페이지에 접속했을 때 행동을 취할 수 있음

      ```Js
      var express = require('express');
      var app = express();
      app.get('/', function(req, res) {
              res.send('Hello home page');
      });
      app.get('/login', function(req, res) {
              res.send('<h1>Login please</h1>');
      });
      app.listen(3000, function() {
              console.log('Connected 3000 port !');
      });
      ```

      - 사용자가 어떠한 경로로 들어왔을 때, 어떤것을 실행할 것인가를 결정하는것이 get Method 가 하는 일
      - get Method 를 Route 라고 부르며, 하는 일을 Routing 이라고 부름

      ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-29%20%EC%98%A4%ED%9B%84%2011.38.55.png)

      - get이 하는일이 사용자의 요청과 요청에 대한 처리(Controller)를 중재하는 역할을 함
      - **Router는 가장 중요한 것 중에 한 부분이며, 위의 코드를 무조건 숙지할 것**

  - ### 서버 측 JS - 연결성

    - 단어 : 의미를 전달하고 의미를 만들어내는 역할

    - 하나의 단어가 여러가지 의미를 가지게 됨

    - 단어 + 단어 = 문법의 규칙에 의거해 새로운 의미를 만들어 냄 (문장)

    - 단어 10 = 의미 10

    - 명사 10 + 동사 10 = 단어 20 …

    - **무엇인가를 결합하고, 조합하는것이 대단한 것**

    - JavaScript + Nodejs

      - JavaScript - Nodejs [FS, HTTP, OS]
      - Module - NPM [Express, Underscore, Jade]
      - Router - Controller [회원가입, 홈페이지, 에러화면]
        - 사용자의 접속(요청)을 어떤 Controller에 전송해 줄 것인가 (연결자, 전송자)

      ```
      JavaScript, NPM, Router
      Nodejs, Module, Controller
      ```

  - ### 서버 측 JS - Express, 정적파일을 서비스하는 법

    - app.use(express.static('public'));

      - public/route.png 가 위치해 있어야 함
      - public 란 디렉토리를 정적인 파일이 위치한 디렉토리로 지정하겠다
      - 사용자에게 정적인 파일을 제공할 수 있음

      ```js
      var express = require('express');
      var app = express();
      app.use(express.static('public'));		// 정적인 파일이 위치한 디렉토리를 설정
      app.get('/', function(req, res) {
              res.send('Hello home page');
      });
      app.get('/route', function(req, res) {
              res.send('Hello Router, <img src="/route.png">');
      });
      app.get('/login', function(req, res) {
              res.send('<h1>Login please</h1>');
      });
      app.listen(3000, function() {
              console.log('Connected 3000 port !');
      });
      ```

      - 두번째의 app.get 처럼 함수 내에서 최상위 경로가 public 이 되는 것임 (public 내의 route)

  - ### Express-웹페이지를 표현하는 방법(trade-off)

    - #### 정적(최상위 경로 안에 html 파일로 구성)

      - 장점
        - 서버를 재가동 시키지 않더라도 경로에 있는 html만 바꿔주면, 내용이 바뀜
      - 단점
        - 프로그래밍적으로 HTML을 구성할 수 없음
        - HTML라는 플랫폼의 한계에 갇힐 수 있음 (현재 시간들을 표현하기 힘듬)

    ```js
    app.get('/dynamic', function(req, res) {
    	var lis = '';
    	for (var i=0; i<5; i++) {
    		lis = lis + '<li>coding</li>';
    	}
    	var time = Date();
    	var output = `			//변수에 HTML코드를 넣기 위해서는 `` 사이에 구성함
    	<!DOCTYPE html>
    	<html>
    	  <head>
    	    <meta charset="utf-8">
    	    <title></title>
    	  </head>
    	  <body>
    	    Hello, Dynamic!
    			<ul>
    				${lis}		// 변수를 사용하기 위한 규격 ${}
    			</ul>
    			${time}
    	  </body>
    	</html>`;
    	res.send(output);
    });
    ```

    - #### 동적

      - 장점
        - 프로그래밍적으로 웹페이지를 구성할 수 있음
        - 시간이나, 문자를 여러번 반복해서 표시하는 방법
      - 단점
        - 서버를 재가동 시켜야 변경된 사항이 적용됨

  - ### 서버 측 JS - Express, 템플릿 엔진 1 : 소개

  - ### 서버 측 JS - Express, 템플릿 엔진 2 : 사용법

    - 템플릿 엔진 ? 특정한 기술, 상품을 의미하는것이 아닌 기술'들', 기술'군'을 의미
    - views 폴더를 구성하여야 함

    ```
    app.set('view engine', 'jade');		// jade Template Engine 과 Express를 연결하는 코드
    app.set('views', './views');		// 생략되어도 무방 (Express는 views를 기본으로 찾음)

    app.get('/template', function(req, res) {
    	res.render('temp');		// 소스코드를 가져와서 웹페이지를 만들어 내는 'render'
    							// temp라고 하는 템플릿 파일을 render을 통해서 전달된다
    });
    ```

    - views 폴더 안에는 .jade 파일로 구성

    ```
    temp.jade
    html
    ```

    - 해당 파일이 views 에 위치해있고 template로 접근했을 시

      ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-30%20%EC%98%A4%EC%A0%84%201.38.31.png)

  - ### 서버 측 JS - Express, 템플릿 엔진 3 : Jade의 문법

    - 들여쓰기를 통해 문법을 작성함

    ```jade
    temp.jade
    html
    	head
    	body
    ```

    ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-30%20%EC%98%A4%EC%A0%84%201.55.50.png)

    - 그렇지만 코드가 너무 ugly 하기 때문에 [jade express code pretty](https://www.google.co.kr/search?q=jade+express+code+pretty&oq=jade+express+code+pretty&aqs=chrome..69i57.4824j0j1&sourceid=chrome&ie=UTF-8) !

    ```js
    app.locals.pretty = true;
    ```

    ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-30%20%EC%98%A4%EC%A0%84%201.56.04.png)

    - 줄바꿈을 하면 다음 단어가 TAG가 되버림

    ```Jade
    temp.jade
    html
    	head
    	body
    		h1
    			Hello Jade (X)
    			
            h1 Hello Jade (O)
    ```

    - for 같이 프로그래밍적으로 제어하고 싶은 코드는 맨 앞에 -(마이너스)를 붙임

    ```jade
    temp.jade
    html
    	head
    	body
    		h1 Hello Jade
    		ul
    			-for(var i=0; i<5; i++)
    				li coding
    ```

    - 만약, 저번에 했던 것 처럼 현재시간을 표시하고 싶다면

    ```jade
    temp.jade
    html
    	head
    	body
    		h1 Hello Jade
    		ul
    			-for(var i=0; i<5; i++)
    				li coding
            div= time
    ```

    - 이런식으로 jade 파일을 수정한다
    - **여기서 주의할 점은 time이라는 변수는 app.js 에서 render 해줘야 함**

    ```js
    app.js
    ...
    app.get('/template', function(res, req) {
      res.render('temp', {time:'hello'});
      또는 res.render('temp', {time:Date()});
      또는 res.render('temp', {time:Date(), _title:'HELLO JADE :)'});
    });
    ...
    ```

    - render 함수 뒤에 property를 제공 {변수명: '변수 데이터'}
      - 현재는 웹페이지에 hello 라고 뜨겠지만, 저 위치에 **Date() 를 대신 넣는다면** 현재시간이 출력됨
      - render을 통해서 jade로 흘러들어간다 라고 표현
    - [jade template Engine](http://jadelang.net/)

  - ### 서버 측 JS - Express, URL을 이용한 정보의전달 1: 쿼리스트링 소개

    - 사용자의 조작(사용자가 입력하는 경로)에 따라서 다른 결과를 보여준다
      - http://a.com/topic
      - http://a.com/home
      - http://a.com/login
    - 단 하나의 path에 대해서는 동일한 결과를 보여준다
    - topic route를 가지고 있다면, 동일한 경로에서도 다양한 결과를 보여줄 수 있다 = Query String
    - http://a.com/topic?id=1
    - http://a.com/topic?id=2
    - http://a.com/topic?id=3
      - ? 뒤의 내용을 **'query string'** 이라 부른다
      - http : 프로토콜
      - 전체 : URL
      - // 뒤의 내용은 **'Domain'**

  - ### 서버 측 JS - Express, URL을 이용한 정보의 전달 2 : query 객체 사용법

    ```js
    app.get('/topic', function(req, res) {
    	res.send('Hello');
    });
    ```

    - query string 은 요청(req)이다

    ```js
    app.get('/topic', function(req, res) {
    	res.send(req.query.id);
    });
    ```

    - http://localhost:3000/topic?id=1000
    - RETURN **1000**
    - [API reference (ExpressJS) - req.query](http://expressjs.com/en/4x/api.html#req.query)

    ```js
    // GET /search?q=tobi+ferret
    req.query.q
    // => "tobi ferret"
    ```

    - API를 통해서 Express - Request - req.query 를 통해서 req.query.q가 search?q=tobi+ferret를
    - 사용자에게 tobi ferret 로 보여준다는 것을 파악

    ```js
    app.get('/topic', function(req, res) {
    	res.send(req.query.id+','+req.query.name);
    });
    ```

    - http://localhost:3000/topic?id=1&name=hyeon
    - RETURN **1,hyeon**
    - application 에게 전달할 수 있는 값은 한개가 아닌 여러개가 될 수 있음
    - 값과 값을 구분하는 구분자는 **'&'**

  - ### 서버 측 JS - Express, URL을 이용한 정보의 전달 3 : query 객체의 이용

    ```js
    app.get('/topic', function(req, res) {
    	var topics = [
    		'Javascript is ...',
    		'Nodejs is ...',
    		'Express is ...'
    	];
    	var output = `
    		<a href="/topic?id=0">JavaScript</a><br>
    		<a href="/topic?id=1">Nodejs</a><br>
    		<a href="/topic?id=2">Express</a><br><br>
    		${topics[req.query.id]}
    	`
    	res.send(output);
    });
    ```

    - query string을 express에서 다루는 방법
    - query string은 어떤 Application에게 정보를 전달할 때 사용하는 URL이 약속되어 있는 국제적인 표준
    - query string은 request(req) 영역
      - req에서도 query
        - query에서도 id를 통해서 전달
        - 그에 대한 API reference 는 [이곳](http://expressjs.com/en/4x/api.html#req.query)을 참고

  - ### 서버 측 JS - Express, URL을 이용한 정보의 전달 4 : 시멘틱 URL

    - Query string 이 아닌 http://localhost:3000/topic?id=2 가 아닌 http://localhost:3000/topic/2 로 바꿔주는 것이 **시멘틱(뜻 : 의미론적) URL** 이다.

      ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-30%20%EC%98%A4%EC%A0%84%206.43.58.png)

    - 의미에 조금 더 부합하는 URL 체계 ([Wikipedia](https://en.wikipedia.org/wiki/Semantic_URL))

    ```js
    app.get('/topic/:id', function(req, res) {
    	var topics = [
    		'Javascript is ...',
    		'Nodejs is ...',
    		'Express is ...'
    	];
    	var output = `
    		<a href="/topic?id=0">JavaScript</a><br>
    		<a href="/topic?id=1">Nodejs</a><br>
    		<a href="/topic?id=2">Express</a><br><br>
    		${topics[req.params.id]}
    	`
    	res.send(output);
    });
    ```

    - ​	뒤의 주소를 받기 위해서는 get에서 해당 주소형식으로 받아야함

      - get 에서 '/topic/:id' 로 받고
        아래의 ${topics[req.params.id]} 에서 사용됨
        그럼 주소 형식은 
        http://localhost:3000/topic/1 (RETURN JavaScript)
        http://localhost:3000/topic/2 (RETURN Nodejs)
        http://localhost:3000/topic/3 (RETURN Express)
        형식으로 제공됨

      - 마찬가지로 Semantic URL은 복수적으로도 가능한데

        ```js
        app.get('/topic/:id/:mode', function(req, res) {
        	res.send(req.params.id+','+req.params.mode);
        })
        ```

        위와 같이 코드를 구성할 경우, http://localhost:3000/id/mode 형식으로 제공된다

      - http://localhost:3000/1/hyeon
        RETURN 1,hyeon

  - ### 서버 측 JS - Express-POST 방식을 이용한 정보의 전달

    > POST방식이라는 것을 통해서 GET방식을 더 잘 이해하게 될 것

    - #### GET

      - 사용자들은 어떤 정보를 얻기 위해서 Application 에 접속

      - Application 은 정보를 사용자에게 제공

      - **사용자의 입장에서는 정보를  GET**

      - query string 이나, HTTP 기본이 GET 방식

        우리가 어떤 정보를 서버에게 요청해서 가져오는 것

    - #### POST

      - 우편물을 보낸다, 어떤 정보를 전송한다 정도로 이해
      - Application은 **사용자의 정보를 서버로 전송**하는 기능을 가지고 있음
        - 로그인을 하는 과정에서는 사용자의 아이디와 비밀번호(데이터)를 서버로 전송하는 것

  - ### 서버 측 JS - Express, POST 방식을 이용한 정보의 전달 2 : form

    - jade 에서 해당 태그의 속성을 추가하고싶다 라고 한다면 아래와 같이 진행하면 됨

      ```jade
      DOCTYPE html
      html
        head
          meta(charset ='utf-8')
        body
      ```

    - 사용자가 입력한 정보들을 서버 어디로 전송할지가 애매함 = form 태그로 묶음

    - 서버의 어디로 전송될 것인가를 웹브라우저에 알려주는 것

      - form(action='/form_receiver')

        ```jade
          body
            form(action='/form_receiver')
              p
                input(type='text')
              p
                textarea
              p
                input(type='submit')
        ```

      - 이후 제출버튼을 클릭하게 되면 주소가

      - http://localhost:3000/form 에서 http://localhost:3000/form_receiver? 으로 변경됨 (query string)

      - RETURN **Cannot GET /form_receiver**

      - 사용자의 정보를 /form_receiver으로 전송할 준비는 끝

    - 그런데 데이터를 입력하는 필드가 여러개 있다면, 각각의 필드에 대한 ID(name)를 서버가 알 수 있어야 함

      ```jade
      DOCTYPE html
      html
        head
          meta(charset ='utf-8')
        body
          form(action='/form_receiver')
            p
              input(type='text' name='title')
            p
              textarea(name='description')
            p
              input(type='submit')
      ```

      - 각 필드에 대한 name을 지정 (title, description)
      - 그리고 제출을 클릭하면 URL은
        http://localhost:3000/form_receiver?title=hello&description=world 로 변경됨

    - 그러면, JavaScript 에서 form_receiver에 대한 get 코드를 삽입

      ```jade
      app.get('/form_receiver?', function(req, res) {
      	var title = req.query.title;
      	var description = req.query.description;

      	res.send(title + ',' + description);
      })
      ```

    - HTML에서 form 이라는 것은 URL을 생성해주는 작은 Application 이 되는것임

    - 웹브라우저는 form 태그에 의해 입력된 데이터에 의해 적당한 URL을 자동으로 생성해서 서버에게 보내주는 역할

    - 서버 (form_receiver) 은 사용자가 보낸 title, description 값을 저장할 수 있게 되는 것

    - 아직까지는 GET방식

      ```jade
      form(action='/form_receiver' method='get')

      form(action='/form_receiver' method='post')
      ```

      - 만약 form 태그에 method를 명시하지 않았을 경우 자동으로 설정되는 것은 get 방식임

      - 그런데 method='post' 라고 명시할 경우

        ```
        http://localhost:3000/form_receiver

        RETURN Cannot POST /form_receiver
        ```

        - query string이 생성되지 않으며, 내용또한 Error 을 리턴함

      - 일단 서버에 데이터가 전송이 되지 않는것은 아님

      - method='post' 일 경우, URL 로 전송하는 것이 아닌 우리눈에 보이지 않는 다른 방식으로 전송

      - 방식의 차이 (POST는 query string 을 이용하지 않음)

  - ### 서버 측 JS - Express, POST 방식을 이용한 정보의 전달 3 : POST

    - 생각의 방법

      - 자 우리는, 여태까지 app.js(JavaScript)에서 app뒤에 get 을 붙여

        ```Js
        app.get('/form_receiver?', function(req, res) {
        	var title = req.query.title;
        	var description = req.query.description;

        	res.send(title + ',' + description);
        });
        ```

        위와 같이 작성해 왔는데

      - method='post' 방식이므로, app.post() 형식으로 작성하면 되지 않을까?

        ```js
        app.post('/form_receiver', function(req, res) {
        	res.send('HELLO, POST :)');
        });
        ```

      -  그리고 localhost:3000/form_receiver 으로 접속한다면

      - HELLO, POST :) 가 정상적으로 출력됨

    - Post 방식에서도 똑같이 정보를 받으면 되지 않을까

      ```js
      app.post('/form_receiver', function(req, res) {
      	var title = req.body.title;
      	var description = req.body.description;
      	res.send(title + ',' + description);
      });
      ```

      - 했지만, 'TypeError: Cannot read property 'title' of undefined' 에러를 출력함

    - API 문서를 찾자

      - [req.body](http://expressjs.com/en/4x/api.html#req.body)

        ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-01%20%EC%98%A4%ED%9B%84%2011.48.23.png)

      - 기본적으로 POST방식으로 전달된 데이터는 정의되어있지 않다(Undefiend)
        사용하고 싶다면 body-parser나 multer을 사용하세요

      - [body-parser](https://www.npmjs.com/package/body-parser) 

        ```js
        npm install body-parser --save

        app.js
        var bodyParser = require('body-parser');
        app.use(bodyParser.urlencoded({ extended: false }))
        ```

        - 해당 애플리케이션으로 들어오는 모든 요청들은 bodyParser 라는 middleware 을 거쳐 사용자가 **POST방식으로 전송한 데이터를 사용할 수 있도록 하는 Module(body-parser)**
        - 사용자가 POST방식으로 전송한 데이터가 있다면, 해당 Application 안에서 request 객체 (function-req)가 **원래 가지고 있지 않았던 body 라고 하는 객체를 bodyParser 가 추가함**
        - var title = req.body.title;
          - body라는 객체 안 title 이라는 property 가 title에 담겨 **최종적으로는 사용자에게 데이터를 보여줄 수 있음**
        - app.use(bodyParser.urlencoded({ extended: false }))
          - use : **붙인다** 는 느낌으로 이해

  - ### 서버 측 JS - Express, POST 방식을 이용한 정보의 전달 4 : GET과 POST 용도

    - #### GET

      > GET방식은, 하나의 라우터가 GET방식을 통해서 전송된 query string에 따라서 다른 데이터를 보여줄 수 있다

      - 링크를 클릭했을 때, 원하는 것은 주소가 바뀌는 것
      - 누군가에게 링크를 공유했을 때 자신이 보는 정보를 그대로 보여주고 싶다
        URL에 모든 정보를 담고 있어야 함

    - #### POST

      > URL 에 데이터가 포함되지 않고 조용히 암시적으로 전송되기 때문에 불필요하게 정보가 노출되지 않는다 라는 장점, 용량이 큰 데이터를 전송하는데도 제한이 없다는 그러한 장점을 갖는다

      - 로그인 했을 때 ID와 PA가 URL에 표시되므로, 보안적으로 GET보다 그나마 나음
      - POST가 GET방식보다 보안적으로 안전하다 라는 느낌은 아님 ! (HTTPS, SSL)

    - #### URL을 통해서 어떤 정보를 전달한다

      - 굉장히 긴 글을 URL을 통해서 query string에 담아 GET 방식을 사용한다면 브라우저 자체에서 데이터를 버려버릴 수 있음
      - 제목과 본문일 경우 데이터가 없어질 수 있으므로 POST 방식을 사용하는 것이 맞음

    - #### 결론

      > GET방식은 Express가 기본적으로 제공하지만 POST방식은 Express가 기본적으로 제공하는 방식이 아니기 때문에, bodyParser 라는 middleware를 Load하고 Use를 통해 붙이고, 사용자의 요청을 중간에서 function의 req 에 body 라고 하는 객체를 추가시켜주는 역할을 한다.

      > body라는 객체는 form으로 전송될 때, name의 값으로 전달된 데이터의 이름이 body 객체의 property 로 들어오기 때문에 form의 이름을 통해서 사용자가 전달한 데이터를 받을 수 있다.

  - ### 서버 측 JS - 팁 [Supervisor](https://www.npmjs.com/package/supervisor)

    >자신의 삶의 맥락에서(일의 맥락에서) 필요하지 않은 도구를 처음부터 다루는 것은 그 도구와 멀어지는 길이 될 수 있다고 생각합니다
    >
    >적재적소에 도구가 있을 수 밖에 없는 이유가 성숙된 순간에 도구를 만나면 눈이 맞는 것 처럼 :)

    ```
    supervisor app.js
    ```

    - app.js 가 변경되었음을 감지(해당 기능을 Watcher라고 표현)하고 서버를 다시 재시작 해주는 Module
    - **supervisor을 사용하는 방법에는 여러가지가 있고, 기본적으로 되지 않을 때 document 를 항상 참고할 것!**
      **예제들을 보면서 자기에게 어떻게 적용하는지 궁리해서 스스로 알아낼 수 있어야 함 !**

  - ### 서버 측 JS - 웹앱 제작 1 : 오리엔테이션

    - #### 파일 (삽)

      - 굉장히 간편하다

    - #### 데이터베이스 (포크레인)

      - 전문적으로 사용하기 위해서 배움의 과정을 거쳐야 한다

    - 현재 시스템에서는 데이터베이스 보다 파일을 사용할 예정

  - ### 서버 측 JS - 웹앱 제작 2 : 라우팅

  - ### 서버 측 JS - 웹앱 제작 3 : 본문 저장

    ```js
    app.post('/topic', function(req, res) {
      var title = req.body.title;
      var description = req.body.description;
      fs.writeFile('data/' + title, description, function(err) {
        if(err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        }
        res.send('Success :)');
      })
    })
    ```

    - [body-parser Express/Connect top-level generic](https://github.com/expressjs/body-parser#expressconnect-top-level-generic)
    - [nodejs fs module](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)
    - writeFile이 정상적으로 수행되지 않았다면 Call-back 함수의 err 변수를 통해서 에러내용을 출력할 수 있음
      예를들어, writeFile 경로가 존재하지 않는다면('dataa/' + 라던지) if(err) 구문으로 빠지는 것
      해당 에러의 내용(err)은 사용자에게 보여주는 것이 아닌 console.log(err); 정도로 처리 (보안 문제, 보여지는 것 문제)

  - ### 서버 측 JS - 웹앱 제작 4 : 글 목록 만들기

    ```js
    app.get('/topic/new', function(req, res) {
      res.render('new');
    })
    app.get('/topic', function(req, res) {
      fs.readdir('data', function(err, files) {
        if (err) {
          res.status(500).send('Internal Server Error');
        }
        res.render('view', {topics:files});
      })
    })
    ```

    ```express
    doctype html
    html
      head
        meta(charset ='utf-8')
      body
        h1 Server Side JavaScript
        ul
          each topic in topics
            li
              a(href='/topic/'+topic)= topic
    ```

    - [fs.readdir(path[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
    - [Jade - Language Reference - iteration](http://jadelang.net/reference/iteration/)
      ![스크린샷 2018-01-02 오후 10.18.43](/Users/hyeon/WinterVacation_Project/Image/스크린샷 2018-01-02 오후 10.18.43.png)
    - [res.render](http://expressjs.com/ko/api.html#res.render)![스크린샷 2018-01-02 오후 10.15.38](/Users/hyeon/WinterVacation_Project/Image/스크린샷 2018-01-02 오후 10.15.38.png)
      - template 파일의 이름, template 파일 안으로 주입하고자 하는 데이터를 객체에 담아 표기하면 됨

  - ### 서버 측 JS - 웹앱 제작 5 : 본문 읽기

    ```js
    // get
    app.get('/topic/new', function(req, res) {
      res.render('new');
    })
    app.get('/topic', function(req, res) {
      fs.readdir('data', function(err, files) {
        if (err) {
          res.status(500).send('Internal Server Error');
        }
        res.render('view', {topics:files});
      })
    })
    app.get('/topic/:id', function(req, res) {
      var id = req.params.id;
      fs.readdir('data', function(err, files) {
        if (err) {
          res.status(500).send('Internal Server Error');
        }
        fs.readFile('data/'+id, 'utf8', function(err, data) {
          if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          }
          res.render('view', {topics:files, title:id, description:data});
        })
      })
    })
    ```

    ```Express
    doctype html
    html
      head
        meta(charset ='utf-8')
      body
        h1 Server Side JavaScript
        ul
          each topic in topics
            li
              a(href='/topic/'+topic)= topic
        article
          h2= title
          = description
    ```

    - 위까지 진행하면 본문에는 ii-a-href 링크들이 생성이됨

    - http://localhost:3000/topic/JavaScript

    - http://localhost:3000/topic/nodejs

    - [fs.readFile(path[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)

    - 순차적으로 진행되는 부분을 꼭 기억할 것

      - readdir 의 Call-back 함수를 통해서
        - if (err) 에러처리;
        - 그리고 fs.readFile을 한번 더 처리한 후
          - if (err) 에러처리;
          - **res.render('view', {topics:files, title:id, description:data});**
            - files(topics) 는 맨 처음의 readdir 의 call-back함수 인자
            - id(title) 는 get 방식으로 받아온 사용자의 입력데이터(:id)
            - data(description) 는 readFile의 call-back함수 인자

      > 단계적으로 맨 아래에서 코드가 들어가지 않는다면, express 단에서 error 출력
      >
      > 변수를 찾을 수 없으므로

  - ### 서버 측 JS - 웹앱 제작 6 : 코드의 개선

    > 중복해서 등장하는 코드를 정리할 수 있다
    >
    > IMPORTANT : 중복의 제거 !

    ```js
    app.get('/topic/new', function(req, res) {
      fs.readdir('data', function(err, files) {
        if (err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        }
        res.render('new', {topics:files});
      })
    })
    ```

    ```js
    app.get(['/topic', '/topic/:id'], function(req, res) {
      fs.readdir('data', function(err, files) {
        if (err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        }
        var id = req.params.id;
        if (id) {
          // id 값이 있을 때
          fs.readFile('data/'+id, 'utf8', function(err, data) {
            if(err) {
              console.log(err);
              res.status(500).send('Internal Server Error');
            }
            res.render('view', {topics:files, title:id, description:data});
          })
        } else {
          // id 값이 없을 때
          res.render('view', {topics:files, title:'Welcome :)', description:'Hello JavaScript For Server :)'});
        }
      })
    });
    ```

    ```js
    app.post('/topic', function(req, res) {
      var title = req.body.title;
      var description = req.body.description;
      fs.writeFile('data/' + title, description, function(err) {
        if(err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        }
        res.redirect('/topic/' + title);
      })
    })
    ```

    - express의 get은 주소를 여러개 받을 수 있음

      ```js
      app.get(['/topic', '/topic/:id'], function(req, res) {
      ```

      위와같이 배열형태로 진행해주면 됨

    - 그리고 해당 주소에 대한 결과를 다르게 처리하려면

      ```js
      var id = req.params.id;
      ```

      사용자가 입력한 주소의 id를 받고

      ```js
      if (id) {
            // id 값이 있을 때
            fs.readFile('data/'+id, 'utf8', function(err, data) {
              if(err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
              }
              res.render('view', {topics:files, title:id, description:data});
            })
          } else {
            // id 값이 없을 때
            res.render('view', {topics:files, title:'Welcome :)', description:'Hello JavaScript For Server :)'});
          }
      ```

      id가 존재한다면 (JavaScript에서는 값이 없을경우 FALSE 로 RETURN 됨) /topic/:id 로 접근되는 경우이므로 그에대한 코드를 작성하고

      그것이 아니라면(else) /topic 으로 접근되는 경우(홈)이므로, 이에 맞는 코드를 작성하면 된다

    - view.jade

      ```express
      doctype html
      html
        head
          meta(charset ='utf-8')
        body
          h1
            a(href='/topic') Server Side JavaScript
          ul
            each topic in topics
              li
                a(href='/topic/' + topic)= topic
          article
            h2= title
            = description
          div
            a(href='/topic/new') new
      ```

    - new.jade

      ```express
      doctype html
      html
        head
          meta(charset='utf-8')
        body
          h1
            a(href='/topic') Server Side JavaScript
          ul
            each topic in topics
              li
                a(href='/topic/' + topic)= topic
          article
            form(action='/topic' method='post')
              p
                input(type='text' name='title' placeholder='title')
              p
                textarea(name='description')
              p
                input(type='submit')
      ```

      - 각각 HTML을 구성할 수 있는 Express 단을 작성해주면 됨

  - ### 서버 측 JS - 파일업로드 1 : 소개 및 준비

    > Express 는 기본적으로 파일 업로드를 지원하지 않음
    >
    > Module을 설치해서 사용자가 전송한 파일을 처리하는 작업을 해야함

  - ### 서버 측 JS - 파일업로드 2 : 업로드폼

    ```js
    app.get('/upload', function(req, res) {
      res.render('upload');
    })
    ```

    ```jade
    doctype html
    html
      head
        meta(charset='utf-8')
      body
        form(action='upload' method='post' enctype="multipart/form-data")
          input(type='file' name='userfile')
          input(type='submit')
    ```

    - 파일을 선택 후 업로드를 진행하게 되면 **Cannot POST /upload** 메세지가 리턴됨
    - **enctype="multipart/form-data"**
      - 사용자의 데이터를 주고받기 위한 **필수 속성**

    ```js
    app.post('/upload', function(req, res) {
      res.send('Upload Success !')
    })
    ```

    - 이후 POST 에서 처리를 해주면 됨

  - ### 서버 측 JS - 파일업로드 3 : [multer](https://github.com/expressjs/multer) 사용법

    ```Js
    var multer = require('multer');
    var upload = multer ({ dest: 'uploads/' });
    ```

    - multer라는 모듈이 함수이며, **함수에 대한 설정(옵션)값 ( dest : 'uploads/' )** 즉, 인자를 제공하면 
      해당 함수는 upload를 받아낼 수 있는 **미들웨어 라고 하는것을 리턴**해줌

    - dest : destination : 경로가 설정됨

    - [multer Usage](https://github.com/expressjs/multer)

      ```js
      app.post('/profile', upload.single('avatar'), function (req, res, next) {
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any
      })
      ```

      - 일반 POST 방식과 규격이 약간 다름

      - 두번 째 인자로 미들웨어를 구성

        - 뒤에 있는 function 이 실행되기 전에 먼저 실행됨
        - 사용자가 전송한 데이터에서 파일이 포함되어 있다면 그것을 가공해서 request 객체의 file 이라는 property를 암시적으로 추가하도록 약속되어있는 함수 (미들웨어)
        - function 이 실행되면 request 안에 file 이라는 property 가 포함되어짐

      - 이후 다시 Upload 를 진행하면

        ```
        Error: Unexpected field
        ```

        라는 ERROR가 출력됨

      - 원인 : upload.single('avatar')

        - jade 를 구성했을 때 file 을 받는 input 의 name 은 userfile 임
        - single 의 속성은 avatar 대신 userfile 이 되어야 함

        ```
        Uploaded : [object Object]
        ```

      - 그럼 이제 conlose에 log를 찍어보면

        ```js
        app.post('/upload', upload.single('userfile'), function(req, res, next) {
          console.log(req.file);
          res.send('Uploaded : ' + req.file.filename);
        })
        ```

        ```c
        { fieldname: 'userfile',
          originalname: '네이버 인턴 4일 정도 하면서 공유할 만한 것들.docx',
          encoding: '7bit',
          mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          destination: 'uploads/',
          filename: '3ebc45e620d70be7c3db1e6f486c0220',
          path: 'uploads/3ebc45e620d70be7c3db1e6f486c0220',
          size: 300789 }
        ```

        올라간 파일에 대한 정보들이 출력됨 (req 에 담겨져있는)

      - 해당 파일들의 속성에 대해서 코드를 구성할 수 있음

  - ### 서버 측 JS - 파일업로드4 : multer 심화

    - [multer API (File information)]()

      - [multer(opts)](https://github.com/expressjs/multer#multeropts) , storage

        ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-04%20%EC%98%A4%ED%9B%84%206.00.37.png)

        multer의 (opts) 에는 여러가지 Key(dest, storage, fileFilter, limits, perservePath) 로 구성될 수 있음

        ```js
        var multer = require('multer');
        var upload = multer ({ dest: 'uploads/' });
        ```

        ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-05%20%EC%98%A4%ED%9B%84%201.35.54.png)

        기존의 dest: 'uploads'/ 코드는 

        ```js
        var multer = require('multer');
        var storage = multer.diskStorage({
          destination: function (req, file, cb) {
            cb(null, '/tmp/my-uploads')
          },
          filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now())
          }
        });
        var upload = multer({ storage: storage });
        ```

        위와같이 변경됨

        - 객체 리터럴 (객체를 표현)
          - destination (함수) : 어느 경로에 저장할 것인가
          - filename (함수) : 파일의 이름은 무엇인가
        - 를 쓰도록 약속되어 있는 것 (storage)
        - multer 가 실행되면서 diskStorage 의 destination 과 filename 의 함수를 각각 참조 (Call-Back)

      - 그리고 해당 [API (File information)]() 를 참조해 originalname 이 원래의 파일명을 받아오는 것이구나 라는것을 참고하여, 아래와 같이 코드를 수정

        ```Js
        var _storage = multer.diskStorage({
          destination: function (req, file, cb) {
            cb(null, 'uploads/')
          },
          filename: function (req, file, cb) {
            cb(null, file.originalname);
          }
        });
        ```

      - 이후, 파일의 형식에 따라서 다른곳에 저장하게 하고 싶다면

        ```js
        var _storage = multer.diskStorage({
          destination: function (req, file, cb) {
            if (파일의 형식이 이미지면)
        	    cb(null, 'uploads/')
            else if (파일의 형식이 텍스트면)
          },
          filename: function (req, file, cb) {
            if (만약 파일이 이미 존재한다면)
        	  cb(null, file.originalname에 동일 이름의 파일중 가장 큰 숫자를 끝에 붙인다);
            else
              cb(null, file.originalname);
          }
        });
        ```

      - [Express Static File](http://expressjs.com/ko/starter/static-files.html)

        ```js
        app.use('/user', express.static('uploads'));
        ```

        위와같이 사용하게 되면 localhost:3000/user/ 에서 뒤의 파일명으로 uploads 안에 있는 파일로 접근이 가능

  - ### 서버 측 JS - 데이터베이스 수업 소개

    - Database 는 특정한 제품이 아니라, 어떠한 제품들을 아우르는 **제품군**을 의미
    - Relational Database (관계형 데이터베이스)
      - ORACLE
      - MYSQL
      - SQL SERVER
    - noSQL (not only SQL) Database
      - 관계형 데이터베이스만으로는 현재의 복잡한 세계를 담아낼 수 없었음

  - ### 서버 측 JS - 데이터베이스 - [orientdb](http://orientdb.com/orientdb/)로 웹앱제작 1 : 소개

    - noSQL Database
      - Graph Database
        - 관계성을 훨씬 더 잘 처리할 수 있음
        - 관계성이 중요한 시대 
          - Facebook(사람-사람), Google(사이트-사이트)
        - 관계성을 더 잘 처리하는 데이터베이스가 필요하고
        - 이러한 것을 Graph Database
      - Document Database
        - noSQL Database 가 가지고있는 중요한 특성
        - 기존의 관계형 데이터베이스들은 기존의 데이터를 **하나의 '표'**로 표현
        - 그러나 해당 데이터베이스는 하나의 **'문서(형)'**으로 표현
          - 정보를 유연하게 저장하고 유연하게 가져올 수 있음
      - Object-Oriented Concepts
        - 관계형 데이터베이스는 테이블이 끝
        - Oriented DB는 '글' 이라는 테이블이 있으면 자식으로 '댓글' 테이블이 있는 방식으로
        - 테이블이란 표현 대신 Class 라는 표현을 사용 (상속관계를 통한 재사용성)
      - Schema-full, Schema-less, Schema mix
        - 관계형 데이터베이스는 표(구조)를 먼저 작성
        - noSQL 은 구조를 아예 가지고 있지 않음
        - Orient DB는 구조를 가지고 있어도 되고, 안가지고 있어도 되는 유연함
      - User and Role Security, Record Level Security
        - 데이터베이스는 보통 사용자 인증체계를 가지고 있음 (보안기능을 제공)
        - orient DB 는 사용자 인증체계를 가지고 있으면서 **'행 단위'** 로 구분할 수 있음
        - 일반적인 데이터베이스는 테이블로 권한을 가지기 마련임
          - 테이블에 대한 모든정보를 활용할 수 있기 때문에 애플리케이션을 구현하는데 있어서
            데이터베이스가 제공하는 기본적인 사용자기능을 통해 인증을 해결하기 어려움
        - 행 단위의 Security Level을 제공하기 떄문에 하나의 테이블 안에서 여러 사용자들이 글을 작성할 경우 글을 쓴 사람이 자신이 쓴 글에 대해서만 권한을 부여할 수 있는 기능을 내재화 되어있기 때문에 사용자 인증,관리와 같은 부분을 데이터베이스에게 위임시킬 수 있는 잠재적인 기능
      - 일반적으로 orient DB 는 noSQL 이라고 지정함
        - 그러나 SQL 구문도 지원하기 때문에 SQL 에 익숙한 개발자들을 위해 사용될 수 있음
      - Relationships (Traversing)
        - Graph Database 의 특성 중 관계를 JOIN 할 때, 성능상의 차이가 O(1) 으로 뛰어나다라는 것을 표현
        - 데이터가 아무리 많아도 검색할 때, 동일한 성능을 제공할 수 있다
      - Multi-Master Replication
        - 데이터베이스의 규모가 커지면 여러대로 데이터베이스를 분할시키는데
        - 읽기는 크게 상관이 없지만, 쓰기일 경우 데이터가 꼬이고 얽히는 문제가 발생할 수 있음
        - 이런 것을 지원하는 기능 (보통은 쓰기 데이터베이스를 한개로 지정시켜버림)
      - Sharding
        - 처리량이 많아짐에 따라서 데이터를 어떻게 분산할 것인가
        - orientDB 는 자동으로 진행함
      - Elastic Scalability with Zero Configuration
        - 설정(Multi-Master Replication, Sharding)
      - Native HTTP Rest/JSON
        - orient DB 는 기본적으로 RestFul 한 API를 제공
        - middleWare가 없이 Java Script 를 통해서 직접 접근해 조회,수정,삭제 등을 진행할 수 있음
      - Commercial Friendly License
        - 자유로운 라이센스를 지향함

  - ### 서버 측 JS - 데이터베이스 - orientdb로 웹앱제작 2 : 설치

    - [orient DB Download Page](http://orientdb.com/download-2/)

    - bin 폴더 안의 server.sh 를 실행시켜주면 됨

      ```js
      sudo ./server.sh
      ```

      해당 Console에서 Listening binary connections on 주소:포트 로 접속하게 되면 (localhost:포트)

      orient DB Studio로 접속할 수 있다

      ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-05%20%EC%98%A4%ED%9B%84%203.30.32.png)

      - 해당 orient DB Studio 에서 New DB 를 통해 새 DB를 만든다
      - DB Name : o2

  - ### 서버 측 JS - 데이터베이스 - orientdb로 웹앱제작 2 : 기본 사용법

    ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-05%20%EC%98%A4%ED%9B%84%203.45.33.png)

    - make Class(Table) = 구조를 만든다

      - ex. topic
      - Properties = Table Field ( Column )
        - Name, Type
          - title, STRING
          - description, STRING
        - Mandatory : 필수로 입력하는 ( 강제적인 )

    - 테이블의 구조를 정의하는 방식

    - 구조를 정의한다면 (정보만을 입력한다면) 구조를 완전하게 사용한다 : Schema-full

    - 구조가 없이 데이터를 넣는대로 넣고싶다 ( 어떤행에는 있고 어떤행에는 있고 ) : Schema-less

    - 구조를 조합해서 사용 (어떤 Column은 반드시 Schema를 지키고, 어떤것은 없고) : Schema-mix

    - #### NEW SCHEMA

      ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-05%20%EC%98%A4%ED%9B%84%203.48.57.png)

      아까 추가했던 Properties(Field, Column)에 따라서 title(*) 과 description 의 데이터를 추가할 수 있음

      - ADD FIELD 를 통해서 현재 있던 구조의 다른 구조를 임시적으로도 추가할 수 있음 (author)

      ```sql
      SELECT * FROM topic;
      ```

      ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-05%20%EC%98%A4%ED%9B%84%203.51.31.png)

      위와같이 데이터들이 출력되고 author의 Properties가 임시적으로 추가된것을 확인할 수 있음

    - 관계성(Graph Database)

      - Logout 후, Main Console(orientDB Studio)에서 orientDB가 기본적으로 제공하는 GratefulDeadConcerts 로 접속한다

        - 데이터베이스에 샘플데이터가 구성되어 있음

      - Graph

        ```sql
        SELECT FROM V
        ```

      ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-05%20%EC%98%A4%ED%9B%84%203.51.31.png)

      - 점 하나는 Table의 행 하나
      - song Table과 artist Table 이 written_by 에 의해서 연결되어 있음
        - 즉, 관계형 데이터베이스를 표현해줌

  - ### 서버 측 JS - 데이터베이스 - orientdb로 웹앱제작 4 : orientjs설정

    - [orientdb javascript sdk node js](https://github.com/orientechnologies/orientjs)

    - [INSTALL](https://github.com/orientechnologies/orientjs#installation)

      ```js
      npm install orientjs --save
      ```

    - orientDB 는 Database Server

    - 우리가 만드는 Web Application 은 WEB 입장에서는 SERVER 가 되며

    - Database 에게는 Client가 됨 (Web Application 입장에서 데이터를 요청하므로)

    - [Initializing the Server API](http://orientdb.com/docs/last/OrientJS-Server.html#initializing-the-server-api)

      ```js
      database_orientdb.js
      var OrientDB = require('orientjs');

      var server = OrientDB({
         host:       'localhost',
         port:       2424,
         username:   'root',
         password:   'root_passwd'
      });
      ```

      OrientDB 는 약속되어 있는 Property 를 가지고 있음
      각각의 정보를 맞게 입력해주면 OrientDB 라는 함수가 실행되면서 객체가 전달되고 서버가 리턴되는 방식임

    - [Database API](http://orientdb.com/docs/last/OrientJS-Database.html)

      - 어떤 애플리케이션의 정보가 저장되어 있는 그룹

      ```js
      var db = server.use('o2');
      console.log('Using Database:'  + db.name);
      ```

      해당 db를 통해서 o2라는 데이터베이스를 사용할 수 있게 됨

    - [Record API](http://orientdb.com/docs/last/OrientJS-Record.html)

      - Record : 하나의 행

      ```Js
      var rec = db.record.get('#1:1')
       .then(
         function(record){
           console.log('Loaded Record:', record);
       });
      ```

      위의 코드에서 db.record.get('#1:1') 부분 중 인자로 구성되는 부분인 '#1:1' 은 db에 접속해서 알아낼 수 있다

      ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-05%20%EC%98%A4%ED%9B%84%204.40.57.png)

      - SELECT FROM topic 에 대한 명령어를 실행했을 때,
        orientDB는 기본적으로 @rid 라는 유일한 데이터(KEY)를 제공함
      - 해당 값을 위의 get() 에 넣는다면 그에 대한 행(Record)을 가져올 수 있음

      ```
      var rec = db.record.get('#21:1')
      ```

  - ### 서버 측 JS - 데이터베이스 - orientdb로 웹앱제작 5 : SELECT

    - 데이터를 입력하는 것 (CURD)

      - 추가 (CREATE)
      - 조회 (SELECT)

      ```js
      var sql = 'SELECT FROM topic';
      db.query(sql).then(function(results){
      	console.log(results);
      })
      ```

      - then (promise)

        ```Js
        node database_orientdb.js
        var sql = 'SELECT FROM topic';
        db.query(sql).then(function(results){
        	console.log(results);
        })
        ```

        ```js
        node database_orientdb.js
        ```

        ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-05%20%EC%98%A4%ED%9B%84%205.34.25.png)

        - 데이터베이스에 있는 데이터가 배열 형식으로 데이터가 리턴됨


      - 갱신 (UPDATE)
      - 삭제 (DELETE)
    
    - 데이터를 가져오는 것

  - ### 서버 측 JS - 데이터베이스 - orientdb로 웹앱제작 6 : INSERT&UPDATE&DELETE

    - #### INSERT

    ```js
    var sql = "INSERT INTO topic (title, description) VALUES(:title, :desc)";
    var param = {
        params:{
          title:'Express',
          desc:'Express is framework for web'
        }
    }

    db.query(sql, param).then(function(results) {
      console.log(results);
    });
    ```

    - 위와 같은 코드를 아래와 같이 변경할 수 있음

    ```js
    var sql = "INSERT INTO topic (title, description) VALUES(:title, :desc)";

    db.query(sql, {
        params:{
          title:'Express',
          desc:'Express is framework for web'
        }
    }).then(function(results) {
      console.log(results);
    });
    ```

    - INSERT 를 한 다음에 function 이 호출되면서, results로 INSERT한 Data가 출력된다

    - #### Update

      ```js
      var sql = "UPDATE topic SET title=:title WHERE @rid=:rid"
      db.query(sql, {params:{title:'Expressjs', rid:'#18:1'}}).then(function(results) {
        console.log(results);
      });
      ```

      - 위에서 INSERT 결과로 새로운 Properties 가 생성됨 (@rid = #18:1)
      - 그에 대한 Update를 진행하고 다시 새로 SELECT 할 경우
        title이 Express에서 Expressjs로 변경됨

      ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-05%20%EC%98%A4%ED%9B%84%206.51.42.png)

      - 업데이트된 갯수를 출력하는가 보다 라고 추측할 수 있음

    - #### DELETE

      ```js
      var sql = "DELETE FROM topic WHERE @rid=:rid";
      db.query(sql, {params:{rid:'#18:1'}}).then(function(results) {
        console.log(results);
      });
      ```

      - 위에서 DELETE 결과로 기존의(#18:1) Properties 가 삭제됨

        ​	![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-05%20%EC%98%A4%ED%9B%84%207.00.56.png) 

      - 기존의 출력문과 같이 DELETE 갯수를 출력하는가 보다 라고 추측할 수 있음 !

  - ### Orientdb로 웹 애플리케이션 제작 7 : 구현 계획

    ```tex
    get('topic/') : view.jade
    get('topic/:id') : view.jade
    get('topic/add') : add.jade
      post('topic/add')
      get('topic/:id')
    get('topic/:id/edit') : edit.jade
      post('topic/:id/edit')
      get('topic/:id')
    get('topic/:id/delete') : delete.jade
      post('topic/:id/delete');
      get('topic/')
    ```

  - ### Orientdb로 웹앱 제작 8 : 읽기 1 글목록

    - [Initializaing the Server API](http://orientdb.com/docs/last/OrientJS-Server.html#initializing-the-server-api)

      ```js
      var OrientDB = require('orientjs');

      var server = OrientDB({
         host:       'localhost',
         port:       2424,
         username:   'root',
         password:   'root_passwd'
      });

      var db = server.use('o2')
      console.log('Using Database:', db.name);
      ```

      ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-05%20%EC%98%A4%ED%9B%84%208.46.46.png) 

    - orient DB가 웹이랑 붙이기에는 아직까지 특수기호들이 많이 사용되서 이상한 에러를 뿜을 수 있음

      ```js
      var a = {name: 'hyeon'};
      a.name
      RETURN 'hyeon'
      a['name']
      RETURN 'hyeon'
      ```

      같은 결과를 리턴함

      ```js
      app_orientdb.js
      app.get(['/topic', '/topic/:id'], function(req, res) {
        var sql = 'SELECT FROM topic';
        db.query(sql).then(function(_topics) {
          res.render('view', {topics:_topics});
        });
      ```

      ```jade
      view.jade
      doctype html
      html
        head
          meta(charset ='utf-8')
        body
          h1
            a(href='/topic') server Side JavaScript
          ul
            each topic in topics
              li
                - rid = encodeURIComponent(topic['@rid'])
                a(href='/topic/' + rid)= topic.title
                // a(href='/topic/' + topic['@rid'])= topic.title
          article
            h2= title
            = description
          div
            a(href='/topic/new') new
      ```

      - 기존의 코드( topic['@rid'] )는 링크를 접속했을 때, 뒤의 queryString 이 **#형식**으로 출력됨

        - 해당 **#**은 웹에서 특정점으로 스크롤하는 특수문자이기 때문에

          ```jade
          - rid = encondeURIComponent(topic['@rid'])
          ```

          형식(JavaScript로 인식, 함수)으로 바꿔주고, 아래서 rid 로 사용한다

  - ### Orientdb로 웹앱제작 9 : 읽기 2 상세보기

    - 기존의 '/topic', 'topic/:id' 으로 접속해도 똑같은 SELECT 코드이기 때문에, 똑같은 페이지의 결과만 제공

    ```js
    app_orientdb.js
    app.get(['/topic', '/topic/:id'], function(req, res) {
      var sql = 'SELECT FROM topic';
      db.query(sql).then(function(_topics) {
        var sql = 'SELECT FROM topic WHERE @rid=:rid';
        var id = req.params.id;
        db.query(sql, {params:{rid:id}}).then(function(topic) {
            console.log(topic[0]);
            res.render('view', {topics: _topics, topic:topic[0]});
        });
      });
    ```

    ```jade
    view.jade
    doctype html
    html
      head
        meta(charset ='utf-8')
      body
        h1
          a(href='/topic') server Side JavaScript
        ul
          each topic in topics
            li
              - rid = encodeURIComponent(topic['@rid'])
              a(href='/topic/' + rid)= topic.title
        article
          h2= topic.title
          = topic.description
        div
          a(href='/topic/new') new
    ```

    - req.params.id 를 통해 id를 가져오고 해당 id를 jade에게 넘겨준다

    - 하지만 처음에는 제대로 뜨지 않음

      - 그래서 console.log(topic) 코드를 이용해서 console 에 띄워보면
        ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-05%20%EC%98%A4%ED%9B%84%209.37.05.png)
        위와 같이 topic에 대한 데이터가 출력됨

      - 여기서, topic는 괄호를 통해 여러개의 데이터로 구성되어 있음

      - 그러므로 배열이라는 것을 알 수 있음

        ```js
        res.render('view', {topics: _topics, topic:topic[0]}
        ```

        형식으로 수정됨

    - 그리고 해당 페이지에서 홈으로 가기위해 'server Side JavaScript' 를 클릭한다면
      **Cannot read property 'title' of undefined** 라는 에러메세지를 볼 수 있음

    - 해당 메세지는 **var id = req.params.id** 를 받아올 수 없는 것임
      (topic 최상위 경로로 가기때문에 id Property 가 제공되지 않는 것)

      ```Js
      app_orientdb.js
      app.get(['/topic', '/topic/:id'], function(req, res) {
        var sql = 'SELECT FROM topic';
        db.query(sql).then(function(_topics) {
          var id = req.params.id;
          if(id) {
            var sql = 'SELECT FROM topic WHERE @rid=:rid';
            db.query(sql, {params:{rid:id}}).then(function(topic) {
                console.log(topic[0]);
                res.render('view', {topics: _topics, topic:topic[0]});
            });
          } else {
              res.render('view', {topics:_topics});
          }
        });
      });
      ```

      ```jade
      view.jade
      doctype html
      html
        head
          meta(charset ='utf-8')
        body
          h1
            a(href='/topic') server Side JavaScript
          ul
            each topic in topics
              li
                - rid = encodeURIComponent(topic['@rid'])
                a(href='/topic/' + rid)= topic.title
          article
            if topic
              h2= topic.title
              = topic.description
            else
              h2 Welcome
              | This is server side javascript tutorial.
          div
            a(href='/topic/new') new

      ```

      - 그래서 id에 대한 값을 판별하기 위해 app_orientdb.js 에서 if문으로 id를 판별함
      - 하지만 view.jade 에서도 topic의 데이터가 없기 때문에 if 문을 이용해 판별함

      - ### Orientdb로 웹앱제작 10 : 글추가

          - **route 의 순서**는 때에따라 중요할 수도 있음

            ```js
            app.get('/topic/add', function(req, res){})

            app.get(['/topic', '/topic/:id'], function(req, res){})
            ```

            이런 코드가 있는 상태에서 add 에 대한 링크를 클릭하게 되면 app.get('/topic/add') 의 route에 걸리게됨

            ```js
            app_orientdb.js
            app.post('/topic/add', function(req, res) {
              var title = req.body.title;
              var description = req.body.description;
              var author = req.body.author;
              var sql = 'INSERT INTO topic (title, description, author) VALUES(:title, :desc, :author)';
              db.query(sql, {
                params:{
                  title: title,
                  desc: description,
                  author: author
                }
              }).then(function(results){
                  // res.send(results[0]['@rid']);
                  res.redirect('/topic/' + encodeURIComponent(results[0]['@rid']));
              });
            })
            ```

            정보를 입력하고  제출을 눌렀을 경우, **POST 방식으로 제공**되므로, app.post 에 대한 코드를 수정

            - sql문 추가
            - db.query(sql ...)
            - res.redirect('/topic/' + encodeURIComponent(results[0]\['@rid']));
              - 해당 부분에 대해서 **#**을 변환하기 위해 **encodeURIComponent** 를 사용
              - 그리고 반환되는 results는 배열이므로 0번째 배열의 @rid 값(행)을 가져오면 됨
                - res.send(results[0]\['@rid'])를 통해서 **배열**임을 알 수 있음

    - ### Orientdb로 웹앱제작 11 : 편집 1

      > 편집은 읽기를 기본적으로 포함하고 있다

      ```jade
      doctype html
      html
        head
          meta(charset ='utf-8')
        body
          h1
            a(href='/topic') server Side JavaScript
          ul
            each topic in topics
              li
                - rid = encodeURIComponent(topic['@rid'])
                a(href='/topic/' + rid)= topic.title
          article
            if topic
              h2= topic.title
              = topic.description
              div= 'by ' + topic.author
            else
              h2 Welcome
              | This is server side javascript tutorial.
          ul
            li
              a(href='/topic/add') add
            if topic
              li
                - rid = encodeURIComponent(topic['@rid'])
                a(href='/topic/' + rid + '/edit') edit
      ```

      - topic 에 대한 예외처리를 추가
        글을 선택했을 때에만 edit 버튼이 제공됨
      - 글을 선택하지 않았다면, @rid 에 대한 값이 없으므로, ERROR을 출력

    - ### Orientdb로 웹앱제작 12 : 편집 2

      > Cannot GET /topic/@rid/edit

      ```jade
      doctype html
      html
        head
          meta(charset='utf-8')
        body
          h1
            a(href='/topic') Server Side JavaScript
          ul
            each topic in topics
              li
                - rid = encodeURIComponent(topic['@rid'])
                a(href='/topic/' + rid)= topic.title
          article
            - rid = encodeURIComponent(topic['@rid'])
            form(action='/topic/' + rid + '/add' method='post')
              p
                input(type='text' name='title' placeholder='title' value=topic.title)
              p
                textarea(name='description' placeholder='description')
                  = topic.description
              p
                input(type='text' name='author' placeholder='author' value=topic.author)
              p
                input(type='submit')

      ```

      - HTML 문법 중 textarea는 value가 적용되지 않음 (소스보기를 하면 태그 사이에 데이터가 삽입되어있음)
      - 그래서 = topic.description 구문을 사용

      ```js
      app.get('/topic/:id/edit', function(req, res) {
        var sql = 'SELECT FROM topic';
        var id = req.params.id;
        db.query(sql).then(function(_topics) {
          var sql = 'SELECT FROM topic WHERE @rid=:rid';
          db.query(sql, {params:{rid:id}}).then(function(topic) {
              console.log(topic[0]);
              res.render('edit', {topics: _topics, topic:topic[0]});
          });
        });
      });
      ```

      ```js
      app.post('/topic/:id/add', function(req, res) {
        var sql = 'UPDATE topic SET title=:t, description=:d, author=:a WHERE @rid=:rid';
        var id = req.params.id;
        var title = req.body.title;
        var desc = req.body.description;
        var author = req.body.author;
        db.query(sql, {
          params:{
            t:title,
            d:desc,
            a:author,
            rid:id
          }
        }).then(function(_topics) {
          res.redirect('/topic/' + encodeURIComponent(id));
        });
      });
      ```

      - UPDATE 구문을 실행시키면, 몇개의 행을 UPDATE 했는지가 출력됨
      - 그래서, topics[0]\['@rid'] 로는 rid를 가져올 수 없음
      - 그래서 대신 id 값으로 대체하는 것임 (req.params.id)
      - **만약, WHERE 절이 없다면 모든 데이터를 전부 UPDATE 시키기 때문에 이렇게 명령을 수행하는 코드들은 항상 주의할것 (데이터가 하나만 남고 전부 날라간다고 상상해보면 됨)**

    - ### Orientdb로 웹앱 제작 13 : 글 삭제

      1. jade 파일 구성

      2. delete로 들어오는 GET (Route) 구성

         - Add, Update, Delete 기능을 사용하기 위해 어떤 페이지로 접근하는 것은 GET방식을 사용
         - 명령을 내리는것(글을써라, 삭제해라 등)은 반드시 POST방식을 사용해야 함
         - 왜냐하면 확장기능중 LINK 에 대해서 미리 접근해보는 기능들이 존재함 (구글 봇처럼)
         - 만약 그럴 때, 삭제기능이 LINK 형식으로 되어있다면, 삭제명령이 해당 미리접근에 의해서 수행될 수 있음
         - **그러므로 반드시 명령을 수행하는 기능들에 대해서는  POST 방식을 사용해야 함**

      3. delete기능이 수행되는 POST 구성

         ```js
         app.post('/topic/:id/delete', function(req, res) {
           var sql = 'DELETE FROM topic WHERE @rid=:rid';
           var id = req.params.id;
           db.query(sql, {
             params:{
               rid:id
             }
           }).then(function(_topics) {
             res.redirect('/topic');
           });
         });
         ```

    - ### MySQL 소개 및 기본 사용법

      - [MySQL 소개](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/%EC%84%9C%EB%B2%84%20%EC%B8%A1%20JS%20-%20%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4%20-%20MySQL%201%20:%20%EC%86%8C%EA%B0%9C.md)
      - MySQL 설치 - 맥 (OSX)
      - MySQL 구조
      - MySQL 사용하기
      - MySQL - UPDATE & DELETE
      - node-mysql 1 : 접속
      - node-mysql 2 : SELECT & INSERT
      - node-mysql 3 : UPDATE & DELETE

    - ### MySQL로 웹 애플리케이션 구현

      - 글 목록
      - 글 상세보기 구현
      - 글 추가기능 구현
      - 글 편집기능 구현 1
      - 글 편집기능 구현 2
      - 글 삭제 구현

    - ### [http](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/HTTP.md)

    - ### cookie1

      - [intro](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/cookie%201%20:%20intro.md)
      - [counter](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/cookie%202%20%3A%20counter.md)

    - ### cookie2

      - [shopping cart 1](https://github.com/antaehyeon/WinterVacation_Project/tree/master/README/cookie%203%20%3A%20shopping%20cart%201.md)
      - [shopping cart 2](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/cookie%204%20:%20shopping%20cart%202.md)
      - [shopping cart 3](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/cookie%205%20:%20shopping%20cart%203.md)
      - [cookie & Security](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/cookie%206%20:%20cookie%20%26%20security.md)

    - ### Session 1

      - [intro](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/%EC%84%9C%EB%B2%84%20%EC%B8%A1%20JS%20-%20%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4%20-%20MySQL%201%20:%20%EC%86%8C)
      - [counter 1](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/Server%20Side%20JavaScript%20-%20session%202%20:%20counter%201.md)
      - [counter 2](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/Server%20Side%20JavaScript%20-%20session%203%20:%20counter%202.md)

    - ### Session 2

      - [login 1](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/Server%20Side%20JavaScript%20-%20session%204%20:%20login%201.md)
      - [login 2](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/Server%20Side%20JavaScript%20-%20session%205%20:%20login%202.md)
      - [login 3](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/Server%20Side%20JavaScript%20-%20session%206%20:%20login%203.md)
      - [login 4](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/Server%20Side%20JavaScript%20-%20session%207%20:%20login%204.md)

    - ### Session 3

      - [Session store - file](https://github.com/antaehyeon/WinterVacation_Project/blob/master/README/Server%20Side%20JavaScript%20-%20session%208%20:%20session%20store%20-%20file.md)
      - Session store - mysql
      - Session store - orientdb

    - ### Multi user (다중 사용자)

      - intro
      - register
      - authentication

    - ### Security - Password (비밀번호 보안)

      - Security Password 1
      - Security Password 2
      - Security Password 3 : salt
      - Security Password 4 : pbkdf2
      - Security Password 5
      - Security Password 6 : register

    - ### Passportjs

      - Passport Introduction (패스포트 소개)
      - Configuration
      - Route
      - Serialize
      - logout(로그아웃)
      - review(복습)

    - ### Federation Authentication (타사 인증)

      - Intro (소개)
      - Facebook (페이스북 연동)
      - Route
      - login
      - Facebook permission (페이스북 세부 권한 설정)

    - ### Auth - Orientdb

      - Intro
      - Session store
      - Reigster (회원 등록)
      - login
      - federation auth (타사 인증)

    - ### Auth - MySQL

      - authentication MySQL 1
      - Session store
      - register
      - login
      - federation

    - ### 정리 정돈의 기술

      - #### jade - extends

        - jade extends 1
        - Jade extends 2

      - #### 사용자 정의모듈 만들기

        - Create module 1
        - Create module 2

      - ### 라우트 분리하기

        - Routes separate 1
        - Routes separate 2
        - Routes separate 3

      - #### 글작성+인증(CRUD+Auth) - MySQL 1

        - CRUD + Auth - mysql 1 (Auth views)
        - CRUD + Auth - mysql 2 (Auth route)
        - CRUD + Auth - mysql 3 (Auth config)

      - #### 글작성+인증(CRUD+Auth) - MySQL 2

        - CRUD + Auth - mysql 4 (CRUD views)
        - CRUD + Auth - mysql 5 (CRUD route)
        - CRUD + Auth - mysql 6 

      - #### 글작성+인증(CRUD+Auth) - Orient DB 1

        - CRUD + Auth - Orient DB 1 (Auth views)
        - CRUD + Auth - Orient DB 2 (Auth route)
        - CRUD + Auth - Orient DB 3 (Auth config)

      - #### 글작성+인증(CRUD+Auth) - Orient DB 2

        - CRUD + Auth - Orient DB 4 (crud views)
        - CRUD + Auth - Orient DB 5 (Crud routes)
        - CRUD + Auth - Orient DB 6 (final)


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
    자료구조, 운영체제, 네트워크, 알고리즘을 잘 알고 있는지 봅니다. 스프링? 그런 것 묻지 않습니다. 
    스프링 잘하는 사람 뽑을거면 경력 사원 뽑지요.

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

  - [오마이랩 웹프론트 (경력직) 채용기준](https://htmlpreview.github.io/?https://github.com/antaehyeon/WinterVacation_Project/blob/master/%EB%A7%81%ED%81%AC%20HTML/%EC%98%A4%EB%A7%88%EC%9D%B4%EB%9E%A9%20%EC%B1%84%EC%9A%A9%EC%A1%B0%EA%B1%B4/Recruit.html)


  # 일정기록

  - #### 0주차

    >2017.12.28(목) ~ 2017.12.31(일)

    - 2017.12.27(수) 오후 10시 : 제주도 도착
    - 2017.12.28(목) : 자리 셋팅 및 프로젝트 기술조사
      - 2017.12.29(금) : 기술조사 및 한웅이형에게 프로젝트에 대한 조언
        ​				생활코딩 서버 강의 수강중 (Express-템플릿 엔진(Jade)까지 수강)
        ​				알고리즘 (백준, 프로그래밍 대회에서 사용하는 Java) 결제 및 1강 수강
      - 2017.12.30(토) : 
      - 2017.12.31(일) : 

  - #### 1주차

    - 2017.01.01(월) ~ 2017.01.07(일)

      - 2017.01.01(월) : 새해 첫날
      - 2017.01.02(화) : 2018년 일정 수립
        - 일주일동안 진행해보면서 나만의 일정 찾기 및 수립
        - 피드백
          - 서버의 기간을 정확히 파악하고, 요금에 대한 부분을 체크할 것
            - 데이터베이스 특성상 서버의 기간이 끝난 후 파일을 옮기는데 비용이 발생할 수 있는 부분 고려
          - github 기술 블로그
          - 학생의 운영경험에 대한 부분을 충족할 수 있는 기회를 찾아라
          - 사용자가 많지 않더라도 그것에 대한 경험을 기록하고 잘 관리할것
          - 클라우드 프로젝트를 기획하면서 Module을 만드는 것으로 기획을 해볼 것
            - 시작은 Ensharp 이지만, 어쨌든 Cloud Opensource 를 만드는 것 (최종목표)
            - 재사용성을 기반으로 Module에 대한 부분을 생각하면서 (예: 다운로드 및 업로드) 구현해볼 것
            - DevOps
            - 주마다 평가할 것
            - 벌칙은 나중에 생각
            - 우선순위를 잘 파악할 것
      - 2017.01.03(수) : 여행
      - 2017.01.04(목) : 여행
      - 2017.01.05(금) : 서버 공부
        - 파일업로드 4 : multer 심화
        - 데이터베이스 수업 소개
        - 데이터베이스 - Orient DB 로 웹앱제작 1 : 소개
        - 데이터베이스 - Orient DB 로 웹앱제작 2 : 설치
        - 데이터베이스 - Orient DB 로 웹앱제작 3 : 기본 사용법
        - 데이터베이스 - Orient DB 로 웹앱제작 4 : orient js 설정
        - 데이터베이스 - Orient DB 로 웹앱제작 5 : SELECT
        - 데이터베이스 - Orient DB 로 웹앱제작 6 : INSERT & UPDATE & DELETE
        - 데이터베이스 - Orient DB 로 웹앱제작 7 : 구현 계획
        - 데이터베이스 - Orient DB 로 웹앱제작 8 : 읽기 1 - 글목록
        - 데이터베이스 - Orient DB 로 웹앱제작 9 : 읽기 2 - 상세보기
      - 2017.01.06(토) : 서버 공부 및 휴식
        - 데이터베이스 - Orient DB 로 웹앱제작 10 : 글추가
        - 데이터베이스 - Orient DB 로 웹앱제작 11 : 편집1
        - 데이터베이스 - Orient DB 로 웹앱제작 12 : 편집2
        - 데이터베이스 - Orient DB 로 웹앱제작 13 : 글삭제
        - 데이터베이스 - MySQL 1 : 소개
        - 최신표준 HTML + CSS 디자인 전체적인 내용 파악
        - 모던웹을 위한 JavaScript jQuery 입문 전체적인 내용 파악
        - 책 스캔 사이트 조사
          - [스캔365](https://www.scan365.co.kr/)
          - [이지북스캔](http://ezbookscan.co.kr/Default.aspx)
      - 2017.01.07(일) : 서버 공부
        - ​



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

