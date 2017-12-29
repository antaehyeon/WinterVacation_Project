var express = require('express');
var app = express();
app.set('view engine', 'jade');		// jade Template Engine 과 Express를 연결하는 코드
app.set('views', './views');		// Express는 views를 기본으로 찾음
app.use(express.static('public'));
app.get('/template', function(req, res) {
	res.render('temp');		// 소스코드를 가져와서 웹페이지를 만들어 내는 'render'
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
