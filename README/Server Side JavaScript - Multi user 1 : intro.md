# Server Side JavaScript - Multi user 1 : intro

> 한명의 사용자가 있는 시스템에서, 다중사용자가 있는 시스템으로
>
> 다중사용자 시스템은 어떻게 바뀌는가
>
> 회원가입을 받아서 사용자가 등록하는 과정을 보일 것

- Register 에 대한 링크를 구성 (/auth/register)
  - get route (/auth/register) 코드 구성
- push
  - javaScript 의 배열에서 맨 끝에 추가하는 함수
- users의 배열을 전역변수로 변환
- 로그인 페이지에서 사용자가 로그인 버튼을 누르면 '/auth/login' 페이지에 대한 POST 방식 route 구성
- users의 배열을 순차적으로 탐색하면서, 존재하는 계정인지 확인