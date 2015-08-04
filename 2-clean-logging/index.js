var http = require('http');
var log = require('debug')('server');

var router = require('./router');

var PORT = 3000;

log('creating');

var server = http.createServer(router);

server.listen(3000, function () {
    log("listenting on", PORT)
});
