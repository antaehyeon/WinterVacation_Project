# Server Side JavaScript - Auth orientdb 1

> 세션과 사용자의 정보를 각각 다른곳에 저장하는 바람에 계속해서 세션을 지워줘야 했었음
>
> 이 부분을 데이터베이스로 해결할 것 (전환하는 작업)

1. ### DB 관리자페이지에 로그인해서 SCHEMA 에 로그인

   - orientDB 는 기본적으로 사용자에 대한 정보를 담기 위해 OUser 라는 클래스(테이블)를 가지고 있음
   - ORestricted 는 행단위로 사용자를 구분(식별)할 수 있는 체계를 지니고 있음
     - 사용자와 관련된 것을 구축하는 노력을 훨씬 줄일 수 있음
     - node JS 는 PHP, Python(Django) 없이도 웹브라우저에 동작하는 JS 를 통해서 데이터베이스의 추가/삭제 등
       회원과 관련된 작업을 진행할 수 있음
     - 해당 과정중에서 사용하는 것이 OUser 및 ORestricted 임
     - 웹 애플리케이션을 구축한다고 했을 때, 일반적으로 사용하는 방식을 구현할 것
       - 사용자 테이블을 직접 만들어서 사용하는 방법

2. ### User Class 생성

   - NEW PROPERTY

     ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%EC%A0%84%201.11.28.png)

     - 여기에 해당하는 정보는 서버에서 배열로 구현했던 정보들을 넣어주면 됨

       ```j
       Name : authId
       Type : STRING
       Mandatory, Not Null 체크
       ```

     ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%EC%A0%84%201.15.32.png)

     - 사용자의 정보를 담을 수 있는 **Properties** 들을 선언해놓고

     ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-10%20%EC%98%A4%EC%A0%84%201.16.43.png)

     - **user.authId** 에 대한 **Type**을 **UNIQUE** 로 지정
       - **Index 를 만드는 의의**
         - authId를 통해서 어떤 데이터를 조회할 때 **빠르게 조회**할 수 있다
         - **중복**적인 부분을 Indexes 를 통해서 디비 자체적으로 **거부**할 수 있도록 계획