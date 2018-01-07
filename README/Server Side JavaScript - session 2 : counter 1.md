# Server Side JavaScript - session 2 : counter 1

> cookie와 함께 session 이 어떤 차이가 있는지

- cookie 방식 (직접 저장)
  - **Set-Cookie** (쿠키를 저장(set)하라) 구문자가 존재
    - 안에 **count 의 데이터**가 존재
    - 암호화가 되어도 일단은 count=암호화된 데이터 방식으로 찍힘
- Session (사용자의 식별자만 저장)
  - set-cookie 구문이 똑같이 존재하지만
    - count의 데이터는 찾아볼 수 없고 **connect.sid=데이터(고유 데이터) 가 존재**함
    - connect.sid 값을 **서버는 id 라고 판별**하고
    - 웹브라우저가 서버에게 해당 connect.sid 값으로 요청함
    - 서버쪽 (Database, File, Memory)  은 **connect.sid 를 저장**함
      - 예를 들어 count 값 (Session은 count라고 표시되지 않음)
    - **사용자 컴퓨터 자체에 cookie 가 저장되지 않기 때문에 훨씬 더 안전하다**
- cookie를 통해서 사용자의 정보(ID, PA)를 저장하지 않고(위험) session 방식으로 사용자의 식별자만 저장해놓고
  사용자가 오게되면 그 식별자에 해당하는 사용자라는것을 알고 이미 로그인 상태라면 화면에 로그인상태임을 보여주는
  방식이 일반 사이트가 구현하는 방식임
- **cookie를 기반으로 고도화된 기술이 올라간 것이 Session !**

