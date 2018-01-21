- # 서버 측 JS - 데이터베이스 - orientdb로 웹앱제작 4 : orientjs설정

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

    ```js
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

- ### 