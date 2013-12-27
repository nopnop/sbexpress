var express = require('express')
  , app     = express()
;

module.exports = app;

// Configure
app.set('view engine','jade');

// Middlewares
app.use(express.logger('dev'));
app.use(express.static('./public'));


// Router
app.get('/', function(req, res, next) {
  res.render('list');
});

app.get('/user/:username', function(req, res, next) {
  var data = {
    username: req.params.username
  }
  res.render('list',data);
});

// Default, redirect to list
app.all('*', function(req, res, next) {
  res.redirect('/');
});


// Serve
if(!module.parent) {
  app.listen(3000, function(err,s) {
    console.log('Server ready on http://localhost:3000')
  });
}