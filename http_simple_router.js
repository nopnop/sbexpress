var http  = require('http')
  , URL   = require('url')
;


// Print user list
function list(req, res) {
  res.end(
      '<h1>User list</h1>'
    + '<li><a href="/user/foo">Foo</a></li>'
    + '<li><a href="/user/bar">Bar</a></li>'
  );
}

// Print user informations
function showUser(req, res) {
  var url = URL.parse(req.url, true);
  var username = /^\/user\/([^\/]*)$/.exec(url.pathname)[1];
  res.end('<h1>User: '+username+'</h1>');
}



// Create application
var app = module.exports = function(req, res) {
  var url = URL.parse(req.url, true);

  // Simple router
  if(/^\/$/.test(url.pathname)) {
    return list(req, res);
  }

  if(/^\/user\/.*/.test(url.pathname)) {
    return showUser(req, res);
  }

  // Default
  return list(req, res);

};


//
if(!module.parent) {
  var server = http.createServer(app);
  server.listen(3000, function(err,s) {
    console.log('Server ready on http://localhost:3000')
  });
}