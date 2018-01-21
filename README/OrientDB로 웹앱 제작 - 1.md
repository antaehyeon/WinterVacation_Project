# OrientDB로 웹앱 제작

### 서버 측 JS - 데이터베이스 수업 소개

- Database 는 특정한 제품이 아니라, 어떠한 제품들을 아우르는 **제품군**을 의미
- Relational Database (관계형 데이터베이스)
  - ORACLE
  - MYSQL
  - SQL SERVER
- noSQL (not only SQL) Database
  - 관계형 데이터베이스만으로는 현재의 복잡한 세계를 담아낼 수 없었음



### 서버 측 JS - 데이터베이스 - [orientdb](http://orientdb.com/orientdb/)로 웹앱제작 1 : 소개

- noSQL Database
  - Graph Database
    - 관계성을 훨씬 더 잘 처리할 수 있음
    - 관계성이 중요한 시대 
      - Facebook(사람-사람), Google(사이트-사이트)
    - 관계성을 더 잘 처리하는 데이터베이스가 필요하고
    - 이러한 것을 Graph Database
  - Document Database
    - noSQL Database 가 가지고있는 중요한 특성
    - 기존의 관계형 데이터베이스들은 기존의 데이터를 **하나의 '표'**로 표현
    - 그러나 해당 데이터베이스는 하나의 **'문서(형)'**으로 표현
      - 정보를 유연하게 저장하고 유연하게 가져올 수 있음
  - Object-Oriented Concepts
    - 관계형 데이터베이스는 테이블이 끝
    - Oriented DB는 '글' 이라는 테이블이 있으면 자식으로 '댓글' 테이블이 있는 방식으로
    - 테이블이란 표현 대신 Class 라는 표현을 사용 (상속관계를 통한 재사용성)
  - Schema-full, Schema-less, Schema mix
    - 관계형 데이터베이스는 표(구조)를 먼저 작성
    - noSQL 은 구조를 아예 가지고 있지 않음
    - Orient DB는 구조를 가지고 있어도 되고, 안가지고 있어도 되는 유연함
  - User and Role Security, Record Level Security
    - 데이터베이스는 보통 사용자 인증체계를 가지고 있음 (보안기능을 제공)
    - orient DB 는 사용자 인증체계를 가지고 있으면서 **'행 단위'** 로 구분할 수 있음
    - 일반적인 데이터베이스는 테이블로 권한을 가지기 마련임
      - 테이블에 대한 모든정보를 활용할 수 있기 때문에 애플리케이션을 구현하는데 있어서
        데이터베이스가 제공하는 기본적인 사용자기능을 통해 인증을 해결하기 어려움
    - 행 단위의 Security Level을 제공하기 떄문에 하나의 테이블 안에서 여러 사용자들이 글을 작성할 경우 글을 쓴 사람이 자신이 쓴 글에 대해서만 권한을 부여할 수 있는 기능을 내재화 되어있기 때문에 사용자 인증,관리와 같은 부분을 데이터베이스에게 위임시킬 수 있는 잠재적인 기능
  - 일반적으로 orient DB 는 noSQL 이라고 지정함
    - 그러나 SQL 구문도 지원하기 때문에 SQL 에 익숙한 개발자들을 위해 사용될 수 있음
  - Relationships (Traversing)
    - Graph Database 의 특성 중 관계를 JOIN 할 때, 성능상의 차이가 O(1) 으로 뛰어나다라는 것을 표현
    - 데이터가 아무리 많아도 검색할 때, 동일한 성능을 제공할 수 있다
  - Multi-Master Replication
    - 데이터베이스의 규모가 커지면 여러대로 데이터베이스를 분할시키는데
    - 읽기는 크게 상관이 없지만, 쓰기일 경우 데이터가 꼬이고 얽히는 문제가 발생할 수 있음
    - 이런 것을 지원하는 기능 (보통은 쓰기 데이터베이스를 한개로 지정시켜버림)
  - Sharding
    - 처리량이 많아짐에 따라서 데이터를 어떻게 분산할 것인가
    - orientDB 는 자동으로 진행함
  - Elastic Scalability with Zero Configuration
    - 설정(Multi-Master Replication, Sharding)
  - Native HTTP Rest/JSON
    - orient DB 는 기본적으로 RestFul 한 API를 제공
    - middleWare가 없이 Java Script 를 통해서 직접 접근해 조회,수정,삭제 등을 진행할 수 있음
  - Commercial Friendly License
    - 자유로운 라이센스를 지향함