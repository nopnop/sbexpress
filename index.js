var http        = require('http');


http.createServer(require('./http_simple')).listen(3000);
http.createServer(require('./http_simple_router')).listen(3001);
http.createServer(require('./http_express')).listen(3002);