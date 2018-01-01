var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');		// jade Template Engine 과 Express를 연결하는 코드
app.set('views', './views');		// Express는 views를 기본으로 찾음
app.use(express.static('public'));
// body parser
// use : 붙인다
// 해당 애플리케이션으로 들어오는 모든 요청들은 bodyParser 라는 middleWare 을 거치고
// 사용자가 POST방식으로 전송한 데이터를 사용할 수 있도록 하는 Module
app.use(bodyParser.urlencoded({ extended: false }))

// post - 1
app.get('/form', function(req, res) {
	 res.render('form');
})

app.get('/form_receiver?', function(req, res) {
	var title = req.query.title;
	var description = req.query.description;
	res.send(title + ',' + description);
});

app.post('/form_receiver', function(req, res) {
	var title = req.body.title;
	var description = req.body.description;
	res.send(title + ',' + description);
});

//query string
app.get('/topic/:id', function(req, res) {
	var topics = [
		'Javascript is ...',
		'Nodejs is ...',
		'Express is ...'
	];
	var output = `
		<a href="/topic?id=0">JavaScript</a><br>
		<a href="/topic?id=1">Nodejs</a><br>
		<a href="/topic?id=2">Express</a><br><br>
		${topics[req.params.id]}
	`
	res.send(output);
});

// Semantic URL
app.get('/topic/:id/:mode', function(req, res) {
	res.send(req.params.id+','+req.params.mode);
});

app.get('/template', function(req, res) {
	res.render('temp', {time:Date(), _title:'HELLO JADE :)'});		// 소스코드를 가져와서 웹페이지를 만들어 내는 'render'
												// temp라고 하는 템플릿 파일을 render을 통해서 전달된다
});
app.get('/', function(req, res) {
	res.send('Hello home page');
});
app.get('/dynamic', function(req, res) {
	var lis = '';
	for (var i=0; i<5; i++) {
		lis = lis + '<li>coding</li>';
	}
	var time = Date();
	var output = `
	<!DOCTYPE html>
	<html>
	  <head>
	    <meta charset="utf-8">
	    <title></title>
	  </head>
	  <body>
	    Hello, Dynamic!
			<ul>
				${lis}
			</ul>
			${time}
	  </body>
	</html>`;
	res.send(output);
});
app.get('/route', function(req, res) {
	res.send('Hello Router, <img src="/route.png">');
});
app.get('/login', function(req, res) {
	res.send('<h1>Login please</h1>');
});
app.listen(3000, function() {
	console.log('Connected 3000 port !');
});
