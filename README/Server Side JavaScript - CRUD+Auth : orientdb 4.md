# Server Side JavaScript - CRUD+Auth : orientdb 4 (crud views)

> app_orientdb 에 대한 단순화 작업을 진행할 것

1. ### VIEW

   - views_orientdb 폴더 안의 파일들을 /views/orientdb/topic 폴더로 옮긴다
   - app_orientdb.js 파일에서
     - `app.set('views', './views_orientdb');` 의 경로를 `views/orientdb` 로 수정함
     - res.render 에 대한 부분에 대한 경로를 수정
       - `res.render('add', {topics: _topics});` 에서 `topic/add` 로 수정

2. ### ROUTE

3. ### app_orientdb.js 에 app_passport_orientdb.js 를 합치는 작업을 진행할 것

