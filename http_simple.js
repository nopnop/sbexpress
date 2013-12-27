var http  = require('http')
  , URL   = require('url')
;

var app = module.exports = function(req, res) {
  var url = URL.parse(req.url, true);
  var who = url.query.name || 'world';
  res.end('Hello ' + who + '!');
};



if(!module.parent) {
  var server = http.createServer(app);
  server.listen(3000, function(err,s) {
    console.log('Server ready on http://localhost:3000')
  });
}