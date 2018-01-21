# OrientDB로 웹앱 제작 - 설치, 기본사용법

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

- ### 서버 측 JS - 데이터베이스 - orientdb로 웹앱제작 3 : 기본 사용법

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