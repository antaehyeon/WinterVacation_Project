### 동기와 비동기 프로그래밍

- Synchronous

- **A**synchronous

- [readFIle](https://nodejs.org/dist/latest-v9.x/docs/api/fs.html#fs_fs_readfile_path_options_callback)

- [readFileSync](https://nodejs.org/dist/latest-v9.x/docs/api/fs.html#fs_fs_readfilesync_path_options)

  ```js
  data.txt
  Hello Sync And Async

  sync_async.js
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
  ```

  - node JS는 Single Thread로 동작되는 언어임
  - 웹 애플리케이션 안에서 어떤 파일을 읽는작업이 10분이 걸린다면 10분동안 아무도 웹사이트에 접속을 못하는 상황이 발생할 수 있음
  - 비동기적인 방식이 무엇인가에 대한 대략적인 이해는 반드시 필요