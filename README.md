
- # WinterVacation Project

  ### 2017.12월 말 ~ 2018.02월 말 까지(방학동안) 진행할 안태현 개인 프로젝트에 대한 내용 및 기타 내용들을 관리할 README 입니다!

  ```
  스펙, 학교, 영어 큰 의미 없습니다. 

  자료구조, 운영체제, 네트워크, 알고리즘을 잘 알고 있는지 봅니다. 스프링? 그런 것 묻지 않습니다. 스프링 잘하는 사람 뽑을거면 경력 사원 뽑지요.
  ```

  ​

  # KAKAO TALK WEB SERVICE

  - 기획안을 README 로 관리할 예정이며, 배운 것 들을 실시간으로 기록할 예정입니다.
  - 카카오톡의 웹버전을 구현 할 예정이며, 기반 기술은 Samsung Flow를 이용할 것 입니다.
  - 안드로이드 Application (Service), Server 및 Web Front 및 CSS 등 전반적으로 이용 될 것 입니다.
  - 서버에 대한 기초와 데이터베이스 선택시 사용한 이유 등을 관리할 예정입니다.
  - 자세한 내용은 기획안을 작성할 때 추가하도록 하겠습니다.

  ​

  - ## 기술조사 및 프로젝트 계획 세우기

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

      ```
      GCM이나 FCM을 통해 Client App으로 제공된 Push 메세지의 데이터를 받아와 
      블루투스(또는 Wi-Fi)를 통해 PC의 App으로 뿌려주는 것
      ```

    - #### 구조도

    ![구조도](https://github.com/antaehyeon/PersonalProject_KAKAOTALK_WEB/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-29%20%EC%98%A4%ED%9B%84%202.55.12.png)

    - ​	Android : 안드로이드 시스템에서 제공되는 미리보기 데이터(Clouding Message) Parsing
      - Server : Android 에서 Parsing된 데이터를 서버에서 관리 (각 ID별로)
      - Web : Server 의 데이터를 웹에 뿌려줌

  # ENSHARP CLOUD

  - 엔샵 동아리 내에서 자료를 관리하기 위해 제작할 웹 클라우드 서비스 입니다.

  - 해당 기수가 활동했던 자료들이 시간이 지남에 따라 뒤섞이고, 관리가 제대로 되지 않는다는 점에 착안하였습니다.

  - 각 기수마다의 자료를 그때그때 보관한다면 추후의 특정 기수뿐만 아니라 몇 기수 건너서 자료를 참고할 수 있습니다.

    - #### 프로젝트에 필요한 것

      - HTML, CSS
        - 기본 레이아웃, 디자인
        - 반응형 웹
          - 모바일 지원
      - JS
        - 파일관리
          - **다운로드, 업로드**
            - **Drag & Drop**
          - 공유
            - URL
          - 검색 (알고리즘)
          - 미리보기(썸네일)
          - 뷰어 연동 (?)
        - 회원관리
          - **로그인**
          - **회원정보 및 등급**
        - 권한
          - 파일 및 폴더에 대한 접근권한
        - 디렉토리 구조
          - 스크롤
          - 정렬 (알고리즘)
          - 이름, 생성일, 저자




- # 서버

  - [Node JS](https://nodejs.org/ko/)
    - V8 (Google Engine)
    - event-driven (JS 개발방식)
    - non-blocking 10 (컴퓨터의 입력과 출력을 처리)
  - JavaScript를 이용해서 Web Browser 이나 Node JS를 다룰 수 있다
    - alert('Hello world')
      - Web Browser 에서는 경고창을 나타내는 기능
      - Node JS 에서는 알 수 없는 구문
  - Node JS의 장점
    - 속도가 빠르다 (V8)
    - 하나의 언어(Java Script)로 다양한 것을 다룰 수 있다




- # 학습법 및 방향성에 도움되는 글

  - ### [학습에 실패한 이야기](http://woowabros.github.io/experience/2017/12/11/how-to-study.html)

    - Study, Read, Do, 나중에 볼 것으로 분류

    - #### **의식적인 연습**

      - 단순히 많이 걷는것만으로는 자세가 교정되지 않는다
      - 단순히 행위를 반복하는것은 연습이 되지 않으며, 실력이 늘지 않는다. 노하우가 생기는 것일뿐

    - 자신의 약점을 고치기 위해 노력해야 한다

    - 집중하고, 고치고, 반복하라

  - ### [네이버 오픈소스 가이드](https://naver.github.io/OpenSourceGuide/book/)

  - ### 데이터베이스 선택

  - ### 서버 선택

  - ### Firebase

    - 클라우드 서비스 제공자이며 동시에 백엔드의 기능을 가지고 있음

  - ### [신입의 자세](https://okky.kr/article/314296?note=1036129)

    - [네이버의 채용기준](http://digital.mk.co.kr/premium/share.php?no=10139)

    ```
    스펙, 학교, 영어 큰 의미 없습니다. 
    자료구조, 운영체제, 네트워크, 알고리즘을 잘 알고 있는지 봅니다. 스프링? 그런 것 묻지 않습니다. 스프링 잘하는 사람 뽑을거면 경력 사원 뽑지요.

    학벌 스펙 결과보다 학부생이 전공을 너무 좋아하고 욕심 내어 '교수님들이 하라는 것'만 하지 않고 B/C 학점을 맞더라도 완벽하게 100+알파% 학과 공부에 충실/치열하게 공부하는 학생들이 많아졌으면 정말 좋겠습니다.

    저희 회사는 엄격한 선발 기준과 체계적인 신입 교육 과정을 갖추고 기본기가 탄탄한 (기본기에 대해서는 위의 cybaek님의 글 중에 있습니다) 신입들을 기다리고 있습니다.

    신입은 뽑는데 완전 공채보다는 대부분 인턴하고 평가 좋아서 들어오는 케이스가 많음. 일단새로 들어온 아는 신입 몇 명 있음. 

    공채 아니더라도 신입이 들어오는거 작년에 몇번 봤습니다. 옆에 앉아서 같이 일하기도 ㅋㅎ
    경력같이 뚜렷한 커리어가 없는데도 뽑는건 들어와도 충분히 극복할만한 기본기가 중요하다는게 새삼스런...
    진짜 잘하는 신입들이 많더라구요...
    sky냐 석사냐는 이제 별 의미 없구요.

    ```

  - #### [2017년 회고](http://blog.devjoshua.me/2017/12/28/171228-2017%EB%85%84%ED%9A%8C%EA%B3%A0/)

  - [TOAST Meetup](http://meetup.toast.com/)

  - [KAKAO Tech Blog](http://tech.kakao.com/)

  - [우아한형제들 기술블로그](http://woowabros.github.io/)

  ​

  # 일정관리

  - #### 1주차

    - 2017.01.01(월) ~ 2017.01.07(일)
      - 2017.01.03(수)~2017.01.05(금) : 여행

  - #### 2주차

    - 2017.01.08(월) ~ 2017.01.14(일)

  - #### 3주차

    - 2017.01.15(월) ~ 2017.01.21(일)

  - #### 4주차

    - 2017.01.22(월) ~ 2017.01.28(일)
      - 2017.01.26(금) : D2 Front End Tech meet up

  - #### 5주차

    - 2017.01.29(월) ~ 2017.02.04(일)

  - #### 6주차

    - 2017.02.05(월) ~ 2017.02.11(일)

  - #### 7주차

    - 2017.02.12(월) ~ 2017.02.18(일)

  - #### 8주차

    - 2017.02.19(월) ~ 2017.02.25(일)

  - #### 9주차

    - 2017.02.26(월) : 개강일

