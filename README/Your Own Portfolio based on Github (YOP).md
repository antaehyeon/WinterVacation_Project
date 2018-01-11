# Your Own Portfolio (YOP)

> ### Based on Github

- ### 개요

  > ###  Github 주소를 통해서 나만의 포트폴리오(WEB)를 만들어주는 서비스

  - **기존 서비스**가 존재할 수 있으니, 조사한 결과 아직은 **없었음** (하지만, 더 상세하게 찾아볼 예정)
  - 해당 조사 과정에서 사람들이 **포트폴리오에 대한 생각**을 볼 수 있었음
    - 자신의 포트폴리오를 **어떻게** 만들어야 하는가
      - **시작**에 대한 **어려움**
      - **어떤 내용**이 들어가야 하는지에 대한 **난해**함
      - **디자인**에 대한 **취약**
    - 포트폴리오를 **무엇**으로 만들어야 하는가
      - 깃허브
      - 웹
      - PPT

- ### 필요한 데이터

  - #### Basic

    - ##### 커밋 수

      ![스크린샷 2018-01-11 오후 4.50.50](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-11%20%EC%98%A4%ED%9B%84%204.50.50.png)

      - **그래프**를 **이용**해서, 한눈에 파악할 수 있도록 하기 위함

    - ##### Repasitories 갯수

      ![스크린샷 2018-01-11 오후 5.06.47](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-11%20%EC%98%A4%ED%9B%84%205.06.47.png)

    - ##### github 사용자 정보(사진 및 프로필 데이터)

      ![스크린샷 2018-01-11 오후 5.07.32](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-11%20%EC%98%A4%ED%9B%84%205.07.32.png)

    - ##### Repositories 에 대한 언어타입 (%)

      ![스크린샷 2018-01-11 오후 4.52.22](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-11%20%EC%98%A4%ED%9B%84%204.52.22.png)

      ![스크린샷 2018-01-11 오후 4.56.44](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-11%20%EC%98%A4%ED%9B%84%204.56.44.png)

      ![스크린샷 2018-01-11 오후 5.01.12](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-11%20%EC%98%A4%ED%9B%84%205.01.12.png)

  - #### Pro

    - 일단은 **about.me** 의 Pro 정책을 참고

      ![스크린샷 2018-01-11 오후 4.24.36](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-11%20%EC%98%A4%ED%9B%84%204.24.36.png)

  - #### More

    - **사용자의 입력 데이터**가 필요할 수 있음

      - 나를 소개합니다 의 정보들

        - 자기소개, 상세정보, 일생, 수상내역, 활동사항 등

        ![스크린샷 2018-01-11 오후 5.10.51](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-11%20%EC%98%A4%ED%9B%84%205.10.51.png)

        ![스크린샷 2018-01-11 오후 5.28.44](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-11%20%EC%98%A4%ED%9B%84%205.28.44.png)

        ![스크린샷 2018-01-11 오후 5.29.00](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-11%20%EC%98%A4%ED%9B%84%205.29.00.png)

        ​

      - 특정 프로젝트에 대한 **설명** 및 **이미지** 추가

      - **수정**을 할 수 있도록 페이지를 설계

      - 맨 처음에 깃허브 주소만 입력하고 나서, 깃허브 데이터로만 페이지를 구성하고
        이후, 약간 비어보이거나 사용자가 추가하고 싶은 내용들을 추가할 수 있도록

- #### 개발 방식

  - **[GitHub Developer](https://developer.github.com/)** 의 API문서를 참고해 제공받을 수 있는 데이터를 조사하는 단계필요
  - 만약, 필요한 데이터가 제공되지 않는다면 서버를 따로 구축해 **[Crawling](https://namu.wiki/w/%ED%81%AC%EB%A1%A4%EB%A7%81)** 필요
  - HTML, CSS
  - 데이터베이스


- ### 프로젝트 시안

  - 고용주가 당신의 포트폴리오를 볼 때 **많은 시간을 들이지 않는다** (1분 이내)

    - **첫 화면**은 **임팩트** 있으면서도 **필요한 정보만 보여주는 것**이 가장 중요한 관점

  - **1분** 내에 나를 **표현**할 수 있는 **포트폴리오**가 필요하다

    - 하지만, 정보를 더 원할 수 있는 점을 고려하여 설계

  - #### Intro Layout

    - 초기 시안

      ![스크린샷 2018-01-11 오후 5.11.52](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-11%20%EC%98%A4%ED%9B%84%205.11.52.png)

      - Background

        ![1월-11-2018 15-21-43](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/1%EC%9B%94-11-2018%2015-21-43.gif)

        - 동영상 (또는 GIF) 을 이용해서 Background 구성
          - 코딩이나 포트폴리오와 관련된 이미지 및 동영상(또는 GIF)

      - Effect

        ![1월-11-2018 15-30-54](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/1%EC%9B%94-11-2018%2015-30-54.gif)

        - 무슨 사이트인지 모션(글씨가 써지는, 지워지는)을 이용해 설명


    - 목표 시안

      ![Intro시안](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/Intro%EC%8B%9C%EC%95%88.png)

      - 해당 시안보다는 조금 더 깔끔하게 구성할 예정

  - #### After Layout

    - ##### 목표 시안

      - 모든 정보를 한 스크롤을 이용해서 보여줄지
        - Template 1
        - Template 2
      - 페이지를 이동하면서 보여줄지

    - ##### 더 세분화 필요

      - 사용자의 **Commit, Repositories 에 대한 정보** 표현

        - **카운트** 애니메이션 이용

          ![1월-11-2018 15-08-32](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/1%EC%9B%94-11-2018%2015-08-32.gif)

          ![1월-11-2018 15-18-45](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/1%EC%9B%94-11-2018%2015-18-45.gif)

          ​

      - 사용자의 Repositories 의 언어타입을 기반으로 능력치를 계산

        ![1월-11-2018 15-10-31](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/1%EC%9B%94-11-2018%2015-10-31.gif)

        [출처](https://sandrig.github.io/about.html)

  ​


- ### 기타

  - 도메인 생성



