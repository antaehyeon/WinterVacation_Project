// server.js

// 초기 셋팅
// =================================================================

// 필요한 패키지 호출
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Bear       = require('/models/bear');
var API_CALL   = require('/API_CALL')('another');

// mongoDB 접속
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/');

// app에 use할 bodyparser 설정
// POST 로부터의 데이터를 얻을 수 있도록 함
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;          // 포트 설정

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
  res.json({ message: 'WELCOME API'});
});

// API를 위한 라우터 선언부
// =================================================================
router.post('/login/another/api', function (req, res) {
  console.log(req.body);
})

// bears 경로에 대한 라우트
// =================================================================
router.route('/bears')

  // bear 생성 (http://localhost:8080/api/bears POST 접근)
  .post(function(req, res) {
    var bear = new Bear();
    bear.name = req.body.name;

    // bear 저장 및 에러체크
    bear.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Bear created!' });
    });
  });

// 라우터 등록
// /api 에 대한 라우트 설정
app.use('/api', router);

// 서버 시작
// =================================================================
app.listen(port);
console.log('RUN SERVER on PORT ' + port);
