module.exports = function(){

  var route = require('express').Router();
  var db = require('../../config/orientdb/db')();

  // get
  route.get('/add', function(req, res) {
    var sql = 'SELECT FROM topic';
    db.query(sql).then(function(_topics) {
      res.render('topic/add', {topics: _topics});
    });
  });

  route.get('/:id/edit', function(req, res) {
    var sql = 'SELECT FROM topic';
    var id = req.params.id;
    db.query(sql).then(function(_topics) {
      var sql = 'SELECT FROM topic WHERE @rid=:rid';
      db.query(sql, {params:{rid:id}}).then(function(topic) {
          console.log(topic[0]);
          res.render('topic/edit', {topics: _topics, topic:topic[0]});
      });
    });
  });

  route.get('/:id/delete', function(req, res) {
    var sql = 'SELECT FROM topic';
    var id = req.params.id;
    db.query(sql).then(function(_topics) {
      var sql = 'SELECT FROM topic WHERE @rid=:rid';
      db.query(sql, {params:{rid:id}}).then(function(topic) {
          console.log(topic[0]);
          res.render('topic/delete', {topics: _topics, topic:topic[0]});
      });
    });
  });

  route.get(['', '/:id'], function(req, res) {
    var sql = 'SELECT FROM topic';
    db.query(sql).then(function(_topics) {
      var id = req.params.id;
      if(id) {
        var sql = 'SELECT FROM topic WHERE @rid=:rid';
        db.query(sql, {params:{rid:id}}).then(function(topic) {
            console.log(topic[0]);
            res.render('topic/view', {topics: _topics, topic:topic[0]});
        });
      } else {
          res.render('topic/view', {topics:_topics});
      }
    });
  });

// post
  route.post('/:id/edit', function(req, res) {
    var sql = 'UPDATE topic SET title=:t, description=:d, author=:a WHERE @rid=:rid';
    var id = req.params.id;
    var title = req.body.title;
    var desc = req.body.description;
    var author = req.body.author;
    db.query(sql, {
      params:{
        t:title,
        d:desc,
        a:author,
        rid:id
      }
    }).then(function(_topics) {
      res.redirect('/topic/' + encodeURIComponent(id));
    });
  });

  route.post('/:id/delete', function(req, res) {
    var sql = 'DELETE FROM topic WHERE @rid=:rid';
    var id = req.params.id;
    db.query(sql, {
      params:{
        rid:id
      }
    }).then(function(_topics) {
      res.redirect('/topic');
    });
  });

  route.post('/add', function(req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var author = req.body.author;
    var sql = 'INSERT INTO topic (title, description, author) VALUES(:title, :desc, :author)';
    db.query(sql, {
      params:{
        title: title,
        desc: description,
        author: author
      }
    }).then(function(results){
        // res.send(results[0]['@rid']);
        res.redirect('/topic/' + encodeURIComponent(results[0]['@rid']));
    });
  })

  return route;

}
