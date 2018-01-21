# [서버 측 JS - 간단한 웹앱 만들기 1 : 실행](https://opentutorials.org/course/2136/11853)

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

    ```js
    module.js
    var o = require('os');
    console.log(o.platform());
    ```

    - Mac OS 에서의 return은 'darwin'이 출력되며, 윈도우는 'win32'가 출력된다.