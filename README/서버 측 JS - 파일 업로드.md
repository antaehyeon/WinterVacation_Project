# 파일 업로드

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

  ```js
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

      ```js
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