var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');		// jade Template Engine 과 Express를 연결하는 코드
app.set('views', './views');		// Express는 views를 기본으로 찾음
app.use(express.static('public'));

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
})

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
