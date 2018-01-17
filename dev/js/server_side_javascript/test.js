var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;
var router = express.Router();

router.get('/', function(req, res) {
  var issueData = [];
  var getData = function (pageCounter) {
    request({
      url: 'https://api.github.com/repos/antaehyeon',
      headers: { 'user-agent': 'git-technetium'},
      json: true
    }, function(error, response, body) {

    })
  }
});

app.use('/api', router);

app.listen(port);
console.log('SUCCESS START ' + port + ' PORT');
