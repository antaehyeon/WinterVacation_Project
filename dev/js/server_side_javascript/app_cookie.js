var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');

var products = {
  1:{title:'The history of web 1'},
  2:{title:'The next web'}
};

// listen
app.listen(3003, function() {
    console.log('Connected 3003 Port :)');
});

// use
app.use(cookieParser());

// get
app.get('/count', function(req, res) {
  if (req.cookies.count)
    var count = parseInt(req.cookies.count);
  else
    var count = 0;

  count += 1;

  res.cookie('count', count);
  res.send('COUNT : ' + req.cookies.count);
})

app.get('/products', function(req, res){
  var output = '';
  for (var name in products) {
    output += `
    <li>
      <a href="/cart/${name}">${products[name].title}</a>
    </li>`;
  }
  res.send(`<h1>Products></h1><ul>${output}</ul><a href="/cart">Cart</a>`);
})
