- ### Orientdb로 웹앱 제작 13 : 글 삭제

  1. jade 파일 구성

  2. delete로 들어오는 GET (Route) 구성

     - Add, Update, Delete 기능을 사용하기 위해 어떤 페이지로 접근하는 것은 GET방식을 사용
     - 명령을 내리는것(글을써라, 삭제해라 등)은 반드시 POST방식을 사용해야 함
     - 왜냐하면 확장기능중 LINK 에 대해서 미리 접근해보는 기능들이 존재함 (구글 봇처럼)
     - 만약 그럴 때, 삭제기능이 LINK 형식으로 되어있다면, 삭제명령이 해당 미리접근에 의해서 수행될 수 있음
     - **그러므로 반드시 명령을 수행하는 기능들에 대해서는  POST 방식을 사용해야 함**

  3. delete기능이 수행되는 POST 구성

     ```js
     app.post('/topic/:id/delete', function(req, res) {
       var sql = 'DELETE FROM topic WHERE @rid=:rid';
       var id = req.params.id;
       db.query(sql, {
         params:{
           rid:id
         }
       }).then(function(_topics) {
         res.redirect('/topic');
       });
     });
     ```