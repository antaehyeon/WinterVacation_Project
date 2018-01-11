# Server Side JavaScript - CRUD+Auth : orientdb 4 (crud views)

> app_orientdb 에 대한 단순화 작업을 진행할 것

1. ### VIEW

   - views_orientdb 폴더 안의 파일들을 /views/orientdb/topic 폴더로 옮긴다

   - app_orientdb.js 파일에서
     - `app.set('views', './views_orientdb');` 의 경로를 `views/orientdb` 로 수정함
     - res.render 에 대한 부분에 대한 경로를 수정
       - `res.render('add', {topics: _topics});` 에서 `topic/add` 로 수정
       - 모든 경로에 `topic/` 추가

   - `app.set('views', './views/orientdb/')`  로 수정

     - views 에 대한 경로 수정

   - views/orientdb/topic/add.jade 및 view.jade 파일의 중복적인 부분을 views/orientdb/layout.jade로 구성

     ```jade
     doctype html
     html
       head
         meta(charset='utf-8')
       body
         h1
           a(href='/topic') Server Side JavaScript
         ul
           each topic in topics
             li
               - rid = encodeURIComponent(topic['@rid'])
               a(href='/topic/' + rid)= topic.title
         block content
     ```

     ```jade
     extends ../layout
     block content
       article
         form(action='/topic/add' method='post')
           p
             input(type='text' name='title' placeholder='title')
           p
             textarea(name='description' placeholder='description')
           p
             input(type='text' name='author' placeholder='author')
           p
             input(type='submit')
     ```

     ```jade
     extends ../layout
     block content
       article
         if topic
           h2= topic.title
           = topic.description
           div= 'by ' + topic.author
         else
           h2 Welcome
           | This is server side javascript tutorial.
       ul
         li
           a(href='/topic/add') add
         if topic
           - rid = encodeURIComponent(topic['@rid'])
           li
             a(href='/topic/' + rid + '/edit') edit
           li
             a(href='/topic/' + rid + '/delete') delete
     ```

     - 공통적인 레이아웃을 layout.jade 로 구성하고 맨 아래의 block content 부분이
     - add.jade 와 view.jade 의 block content로 치환되는 구조

   - 나머지 add, delete, edit, view 에 대한 파일들도 같은 구조로 변경하면

   - layout.jade 를 한번만 수정하면 모든 페이지에서 전부 바뀜

2. ### ROUTE

3. ### app_orientdb.js 에 app_passport_orientdb.js 를 합치는 작업을 진행할 것

