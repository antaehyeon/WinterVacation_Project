var fs = require('fs');

// Sync
console.log(1);
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data); // 위에 readFileSync가 끝날 때 까지 실행되지 않음

// ASync
// 실행순서 2-4-3
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data) { 
  console.log(3);
  console.log(data);
});
console.log(4); // 위의 readFile이 실행되기 전에 먼저 실행되고 백그라운드에서 readFileSync가 동작함
