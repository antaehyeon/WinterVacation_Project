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

      ```js
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