// server.js

// 초기 셋팅
// =================================================================

// 필요한 패키지 호출
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var request    = require('request');
request('https://api.github.com', function (error, response, body){
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});

// app에 use할 bodyparser 설정
// POST 로부터의 데이터를 얻을 수 있도록 함
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;          // 포트 설정

// github Custom HTTP Headers
var options = {
  url: 'https://api.github.com/repos/request/request',
  headers: {
    'User-Agent': 'request'
  }
};


// API를 위한 라우트
// =================================================================
var router = express.Router();                // express 라우트 대신

// 모든 요청을 위한 미들웨어 사용
router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

// 어떤것이든 동작하는지에 대한 라우트 테스트 (GET localhost:8080/api)
router.get('/', function(req, res) {
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
