# Server Side JavaScript - CRUD & Auth : orientdb 5 (Crud routes)

> 라우트쪽 분할

1. ### /topic 독립

   - /routes/orientdb/topic.js 생성
   - app_orientdb.js 에서 /topic/ 에 대한 Route들을 topic.js 의 별도파일로 구성
   - 이후, route 에 대한 코드 선언  `var route = require('express').Router();`
   - app 대신 route 로 구성
   - `return route;`
   - app_orientdb.js 에서
     - `var topic = require('./routes/orientdb/topic')();` 형식으로 topic 에 대한 새 객체 선언
   - 그리고 분할 후 db 에 대한 객체를 찾을 수 없다고 에러를 출력
     - db 는 이미 /config/orientdb/db 쪽에 만들어놨으므로, 
     - `var db = require('../../config/orientdb/db')();` 코드를 topic.js 에 삽입

2. ### localhost:3000/topic/ 접속

   - 성공

   ​