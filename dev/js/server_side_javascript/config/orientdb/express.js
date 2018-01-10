module.exports = function() {
  var express = require('express');
  var session = require('express-session');
  var OrientoStore = require('connect-oriento')(session);
  var bodyParser = require('body-parser');

  var app = express();

  // SET
  app.set('views', './views/orientdb');
  app.set('view engine', 'jade');

  // USE
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(session({
    secret: '12941nlekfsMFSDLIQNf%!%',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: new OrientoStore({
    	server: "host=localhost&port=2424&username=root&password=111111&db=o2"
    })
  }));

  return app;
}
