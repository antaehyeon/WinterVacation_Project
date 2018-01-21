# KAKAO TALK WEB SERVICE

- 기획안을 README 로 관리할 예정이며, 배운 것 들을 실시간으로 기록할 예정입니다.
- 카카오톡의 웹버전을 구현 할 예정이며, 기반 기술은 Samsung Flow를 이용할 것 입니다.
- 안드로이드 Application (Service), Server 및 Web Front 및 CSS 등 전반적으로 이용 될 것 입니다.
- 서버에 대한 기초와 데이터베이스 선택시 사용한 이유 등을 관리할 예정입니다.
- 자세한 내용은 기획안을 작성할 때 추가하도록 하겠습니다.



- ## 기술조사 및 프로젝트 계획 세우기

- ### [Samsung Flow](http://www.samsung.com/sec/support/samsungflow/)

  - Android 에서 Samsung Flow 를 설치 후, Window 환경 Store에서 Samsung Flow를 설치
  - 초반 Bluetooth 연결과정이 필수이며, 기능에 따른 Wi-Fi 연결이 필수 (파일전송, 사진전송)
  - 카카오톡의 기존 메세지를 받아오는 기능은 구현되어 있지 않음

  ![안드로이드 미리보기](https://github.com/antaehyeon/PersonalProject_KAKAOTALK_WEB/blob/master/Image/Screenshot_20171228-170223.png)

  - 안드로이드의 미리보기의 데이터를 긁어와 블루투스로 연결된 PC로 데이터를 전송하는 것 같음 

  ![Samsung Flow 데이터 전송](https://github.com/antaehyeon/PersonalProject_KAKAOTALK_WEB/blob/master/Image/2017-12-28_170148.png)

  - 일단 전송되는 데이터는 카카오톡 프로필 사진, 카카오톡 내용, 이름을 Samsung Flow 에 리스트 형식으로 뿌려줌

  ![Samsung Flow에서 메세지 전송](https://github.com/antaehyeon/PersonalProject_KAKAOTALK_WEB/blob/master/Image/Video_2017-12-28_173742.wmv_20171228_180137.gif)

  - Samsung Flow에서 메세지를 보내면 카카오톡으로 메세지가 대신 전송됨

  - 메세지가 많이 Push될 경우 Samsung Flow에서 처리하는 Delay가 존재함

    ```
    GCM이나 FCM을 통해 Client App으로 제공된 Push 메세지의 데이터를 받아와 
    블루투스(또는 Wi-Fi)를 통해 PC의 App으로 뿌려주는 것
    ```

  - #### 구조도

  ![구조도](https://github.com/antaehyeon/PersonalProject_KAKAOTALK_WEB/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-29%20%EC%98%A4%ED%9B%84%202.55.12.png)