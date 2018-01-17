# Github 데이터 파싱과정

1. ### [Github Developer API](https://developer.github.com/v4/)

2. ### REST API vs Graph QL

   1. [Graph QL](https://blog.risingstack.com/graphql-overview-getting-started-with-graphql-and-nodejs/)

   2. [GraphQL 강좌 1편: GraphQL이 무엇인가?](https://velopert.com/2318)

   3. [Graph QL OverView](https://blog.risingstack.com/graphql-overview-getting-started-with-graphql-and-nodejs/)

      - ### What is GraphQL?

        - 페이스북이 2012년도에 만든 쿼리 언어로 클라이언트와 서버사이에서 데이터를 가져오고 조작하기 위한 공통 인터페이스를 제공
        - 클라이언트는 쿼리를 통해 GraphQL 서버에서 다양한 데이터를 요청
          - 쿼리는 클라이언트가 정의 (client-specified queries)
        - 구조가 하드코딩 되어있지 않음, 굉장히 유연(flexible)한 특징을 가지고 있음
          - 클라이언트의 입장에서 서버의 데이터를 효율적으로 검색할 수 있음

      - ### GraphQL overview

        - GraphQL은 특정 언어가 아니며, 단지 클라이언트와 서버사이의 명세일뿐
          - GraphQL을 사용하면 클라이언트는 어떤 서버와도 통신이 가능
        - GraphQL의 중요 컨셉
          - 계층적(Hierarchical)

      - ### Where is it useful ?

        - GraphQL은 추가적인 쿼리 및 대규모 데이터 변환을 피하기 위해 유연한 응답 형식이 필요한 곳에서 사용
          - client needs a flexible response
        - GraphQL 서버를 사용하면 클라이언트 측 개발자가 백엔드를 변경하지 않고도 응답 형식을 쉽게 변경할 수 있음
        - GraphQL 을 사용하면 자연스럽게 필요한 데이터를 설명할 수 있음
          - React의 하향식 렌더링(top-down rendering)과 같은 애플리케이션 구조
          - 필요한 데이터 구조가 유사하므로 개발속도를 높일 수 있음

      - ### Differences with REST

        - REST API는 리소스 기반
          - 일반적으로 `GET /users/1/friends` 와 같은 형태로 요청함
        - REST API의 장점은 캐시를 사용하며, 동작이 명확함
        - REST API의 단점은 포함된 리소스, 제외된 리소스, 특히 연결된 리소스를 사용하여 고급요청을 지정 및 구현하기 어렵다는 것
          - `GET /users/1/friends/1/dogs/1?include=user.name,dog.age`
        - GraphQL은 이것들을 해결하고자 했음
          - `user` 와 `dog` 사이의 관계가 정의되어 있으면, 데이터를 얻기위해 모든 종류의 쿼리문을 작성할 수 있음

3. ### fetching

4. ### overfetch / underfetch

5. ### [Getting Started (REST API v3)](https://developer.github.com/v3/guides/getting-started/)

   1. `curl https://api.github.com/`
      ![](https://i.imgur.com/eKll9Pj.png)


   2. `curl https://api.github.com/uesrs/antaehyeon`
      ![](https://i.imgur.com/dpw2CA9.png)

      1. login : 아이디
      2. id : 깃허브 각 고유 아이디
      3. avatar_url : 깃허브 사진
      4. followers_url : 팔로우 한 깃허브계정을 전부출력
      5. starred_url : 스타 한 Repository 전부 출력
      6. repos_url : 해당 계정의 Repository 전부 출력
      7. name : 이름
      8. company : 다니는 곳
      9. location : 위치
      10. bio : 인물 소개
      11. public_repos : public 한 Repository 갯수
      12. created_at : 계정 최초 생성일
      13. updated_at : 계정 업데이트일

   3. `curl https://api.github.com/repos/antaehyeon/WinterVacation_Project`

      ![](https://i.imgur.com/HVQUK9G.png)
      ![](https://i.imgur.com/4nsuQFF.png)

      1. 해당 Repository 정보에 대한 것을 출력해줌

      2. language : 레파지토리에서 가장 많이 사용한 언어를 출력해줌

         ![](https://i.imgur.com/ltukU7j.png)

         각 Repository 에 어떤 언어를 몇% 사용했는지에 대한 정보는 코드라인 줄수로 계산해서 뿌려줌

      3. `curl https://api.github.com/repos/antaehyeon/WinterVacation_Project/languages`

         ![](https://i.imgur.com/87tSKK6.png)

         해당 언어에 대한 코드 줄을 파악할 수 있음, 해당 정보를 백분율로 계산하면 HTML 은 91.9% JavaScript 는 8.1%가 출력됨

         ![](https://i.imgur.com/iuLyXXy.png)

      4. 일단 Commit 갯수에 대해서 뿌려주는것은 없는 것 같음, 대신 git의 갯수가 배열로 반환되므로 반복문을 통해 충분히 계산 가능할듯 함

4. ### endPoint

5. ### [Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)

   6. ### Issue

      - 서버 강의를 다 듣긴했지만, GitHub의 API 서버에서 데이터를 받아와서 웹에 뿌려주어야 하는 일련의 과정 중 무엇부터 시작해야 할지 막막했음
      - 일단 구조도를 명확히 세워보자 생각해서 그림을 그림

      ![](https://i.imgur.com/yg97m59.png)

      - 나의 서버는 SERVER 및 CLIENT의 역할을 동시에 수행하고 있고

      - 첫번 째로 수행해야 할 부분은 나의 node JS 서버에서 GitHub API 에게 데이터를 요청하고 받아오는 부분임을 파악함

      - 그래서 node JS 와 Express 및 MongoDB, Postman 을 이용한 [자료](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)를 참고하면서 API 부분을 테스트

      - #### node js 에 대한 초기 코드

        ```js
        // server.js

        // 초기 셋팅
        // =================================================================

        // 필요한 패키지 호출
        var express    = require('express');
        var app        = express();
        var bodyParser = require('body-parser');

        // app에 use할 bodyparser 설정
        // POST 로부터의 데이터를 얻을 수 있도록 함
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        var port = process.env.PORT || 8080;          // 포트 설정

        // API를 위한 라우트
        // =================================================================
        var router = express.Router();                // express 라우트 대신

        // 어떤것이든 동작하는지에 대한 라우트 테스트 (GET localhost:8080/api)
        router.get('/', function(req, res) {
          res.json({ message: 'WELCOME API'});
        });

        // API를 위한 라우터 선언부
        // =================================================================

        // 라우터 등록
        // /api 에 대한 라우트 설정
        app.use('/api', router);

        // 서버 시작
        // =================================================================
        app.listen(port);
        console.log('RUN SERVER on PORT ' + port);
        ```

      - #### Postman 에서 테스트

        ![](https://i.imgur.com/p3TMzZZ.png)

         `res.json({ message: 'WELCOME API' })` 코드로 인해서 http://localhost:8080/api/ 에 GET Request를 보냈을 때, `"message": "WELCOME API"` 라는 메세지를 확인할 수 있음 

      - #### mongoDB 설치 (Homebrew)

        해당내용은 [이곳](https://nesoy.github.io/articles/2017-04/MongoDB) 을 참고하였음!

        ​

        ​