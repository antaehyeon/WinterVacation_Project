var OrientDB = require('orientjs');

// Server API
var server = OrientDB({
   host:       'localhost',
   port:       2424,
   username:   'root',
   password:   '111111'
});

// Database API
var db = server.use('o2');
console.log('Using Database:'  + db.name);

/*
// Record API
var rec = db.record.get('#1:1')
 .then(
   function(record){
     console.log('Loaded Record:', record);
 });
*/

/* CRUD
 * CREATE
 * READ
 * UPDATE
 * DELETE
 *
 * CURD
 */

// CREATE
// var sql = 'SELECT FROM topic';
// db.query(sql).then(function(results){
// 	console.log(results);
// })

// SELECT
// var sql = 'SELECT FROM topic WHERE @rid=:id';
// var param = {
//   params:{
//     id:'#18:0'
//   }
// };
//
// db.query(sql, params).then(function(results){
// 	console.log(results);
// })

// INSERT
// var sql = "INSERT INTO topic (title, description) VALUES(:title, :desc)";
// // var param = {
// //     params:{
// //       title:'Express',
// //       desc:'Express is framework for web'
// //     }
// // }
//
// db.query(sql, {
//     params:{
//       title:'Express',
//       desc:'Express is framework for web'
//     }
// }).then(function(results) {
//   console.log(results);
// });

// UPDATE
// var sql = "UPDATE topic SET title=:title WHERE @rid=:rid"
// db.query(sql, {params:{title:'Expressjs', rid:'#18:1'}}).then(function(results) {
//   console.log(results);
// });

// DELETE
var sql = "DELETE FROM topic WHERE @rid=:rid";
db.query(sql, {params:{rid:'#18:1'}}).then(function(results) {
  console.log(results);
});
