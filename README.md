# PersonalProject_KAKAOTALK_WEB

### 2017.12월 말 ~ 2018.02월 말 까지 진행할 안태현 개인 프로젝트 입니다

* 기획안을 README 로 관리할 예정이며, 배운 것 들을 실시간으로 기록할 예정입니다.
* 카카오톡의 웹버전을 구현 할 예정이며, 기반 기술은 Samsung Flow를 이용할 것 입니다.
* 안드로이드 Application (Service), Server 및 Web Front 및 CSS 등 전반적으로 이용 될 것 입니다.
* 서버에 대한 기초와 데이터베이스 선택시 사용한 이유 등을 관리할 예정입니다.
* 자세한 내용은 기획안을 작성할 때 추가하도록 하겠습니다.



- 0주차 
  - 2017.12.28(목) ~ 2017.12.31(일)

  - 기술조사 및 프로젝트 계획 세우기

  - ### [Samsung Flow](http://www.samsung.com/sec/support/samsungflow/)

    - Android 에서 Samsung Flow 를 설치 후, Window 환경 Store에서 Samsung Flow를 설치

    - 초반 Bluetooth 연결과정이 필수이며, 기능에 따른 Wi-Fi 연결이 필수 (파일전송, 사진전송)

    - 카카오톡의 기존 메세지를 받아오는 기능은 구현되어 있지 않음

    - ![안드로이드 미리보기](https://github.com/antaehyeon/PersonalProject_KAKAOTALK_WEB/blob/master/Image/Screenshot_20171228-170223.png)

    - 안드로이드의 미리보기의 데이터를 긁어와 블루투스로 연결된 PC로 데이터를 전송하는 것 같음 

    - ![Samsung Flow 데이터 전송](https://github.com/antaehyeon/PersonalProject_KAKAOTALK_WEB/blob/master/Image/2017-12-28_170148.png)

    - 일단 전송되는 데이터는 카카오톡 프로필 사진, 카카오톡 내용, 이름을 Samsung Flow 에 리스트 형식으로 뿌려줌

    - ![Samsung Flow에서 메세지 전송](https://github.com/antaehyeon/PersonalProject_KAKAOTALK_WEB/blob/master/Image/Video_2017-12-28_173742.wmv_20171228_180137.gif)

    - Samsung Flow에서 메세지를 보내면 카카오톡으로 메세지가 대신 전송됨

    - 메세지가 많이 Push될 경우 Samsung Flow에서 처리하는 Delay가 존재함

    - #### 결론 ()

      ```
      GCM이나 FCM을 통해 Client App으로 제공된 Push 메세지의 데이터를 받아와 블루투스(또는 Wi-Fi)를 통해 PC의 App으로 뿌려주는 것
      ```

      ​

  - ### 구조도

    - Android : 안드로이드 시스템에서 제공되는 미리보기 데이터(Clouding Message) Parsing
    - Server : Android 에서 Parsing된 데이터를 서버에서 관리 (각 ID별로)
    - Web : Server 의 데이터를 웹에 뿌려줌

  - ### [학습에 실패한 이야기](http://woowabros.github.io/experience/2017/12/11/how-to-study.html)

    - Study, Read, Do, 나중에 볼 것으로 분류
    - **의식적인 연습** 
      - 단순히 많이 걷는것만으로는 자세가 교정되지 않는다
      - 단순히 행위를 반복하는것은 연습이 되지 않으며, 실력이 늘지 않는다. 노하우가 생기는 것일뿐
    - 자신의 약점을 고치기 위해 노력해야 한다
    - 집중하고, 고치고, 반복하라

  - ### [네이버 오픈소스 가이드](https://naver.github.io/OpenSourceGuide/book/)

  - ### 데이터베이스 선택

  - ### 서버 선택

  - ### Firebase

    - 클라우드 서비스 제공자이며 동시에 백엔드의 기능을 가지고 있음


- 1주차
  - 2017.01.01(월) ~ 2017.01.07(일)
    - 2017.01.03(수)~2017.01.05(금) : 여행
- 2주차
  - 2017.01.08(월) ~ 2017.01.14(일)
- 3주차
  - 2017.01.15(월) ~ 2017.01.21(일)
- 4주차
  - 2017.01.22(월) ~ 2017.01.28(일)
    - 2017.01.26(금) : D2 Front End Tech meet up
- 5주차
  - 2017.01.29(월) ~ 2017.02.04(일)
- 6주차
  - 2017.02.05(월) ~ 2017.02.11(일)
- 7주차
  - 2017.02.12(월) ~ 2017.02.18(일)
- 8주차
  - 2017.02.19(월) ~ 2017.02.25(일)
- 9주차
  - 2017.02.26(월) : 개강일
