# Server Side JavaScript - Federation authentication 1 : intro

> 타사인증이라고 하는 방식에 대해서 알아볼 것

![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-08%20%EC%98%A4%ED%9B%84%208.13.33.png)

- 기본적으로 사용자가 입력한 데이터를 서버에 저장해서 진행하는 Local 방식 외에
- Facebook 이나 Naver Google Kakao 등 다른 업체에서 저장된 사용자 데이터를 확인하는 것을 통해서 인증하는 방식
  - 서버에 직접적으로 저장을 하지 않는다
- 사용자가 회원가입을 위해 복잡한 과정을 거치지 않아도 됨
- 서비스를 하는 입장에서 사용자의 정보를 가지고 있는 것은 굉장히 부담스러운 일
- 해당 방식을 통해서, 안전하게 서비스를 진행할 수 있음
- 다른 서비스에 종속되는 듯한 느낌이 단점