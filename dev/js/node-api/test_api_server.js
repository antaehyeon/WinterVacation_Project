// server.js

// 초기 셋팅
// =================================================================

// 필요한 패키지 호출
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var request    = require('request');

var options = {
  url: 'https://api.github.com/users/antaehyeon',
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    info = JSON.parse(body);
    console.log(info.login);
  }
}

request(options, callback);

// app에 use할 bodyparser 설정
// POST 로부터의 데이터를 얻을 수 있도록 함
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

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
  next();
});

router.get('/', function(req, res) {
  res.render('index');
  // res.render('/index.html')
});

// api 경로에 대한
// GitHub 데이터 처리하는 라우트
router.get('/api', function(req, res) {
  res.send('name: ' + info.name + ' company: ' + info.company);
});

// api 경로에 대한 POST 라우트 처리
//
router.post('/', function(req, res) {

})

// API를 위한 라우터 선언부
// =================================================================

// 라우터 등록
// /api 에 대한 라우트 설정
app.use('/', router);

// 서버 시작
// =================================================================
app.listen(port);
console.log('RUN SERVER on PORT ' + port);
