# 모듈 1 : 기초

### [NPM(Node Package Manager)](https://www.npmjs.com/)

- HTTP, OS 는 Node JS가 제공하는 모듈

- Date, String, Array, Math 등은 JavaScript언어가 제공하는 모듈

- 기본적인 기능들을 결합해서 다양한 것들을 만들 수 있음

- 타인의 모듈을 사용할 것인데 'NPM' 을 사용할 것. 

- NPM = Node계의 앱스토어

  - 설치, 삭제, 업그레이드, 의존성 관리

- ### [uglify-js](https://www.npmjs.com/package/uglify-js)

  - 설치시 맨 뒤에 -g 의 차이는

    - global : 컴퓨터 전역에서 사용하는 독립적인 장치로 설치됨
    - non global : 패키지를 설치하고 있는 디렉토리의 부품으로 설치됨

  - permission error 가 난다면 맨 앞에 sudo를 붙일 것

    ```js
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