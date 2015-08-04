var log = require('debug')('router');

module.exports = function router (request, response) {
    log("request url is", request.url);

    if (request.url === '/api/omfgdogs') {
        log("redirecting to omfgdogs.com");

        response.writeHead(302, {
            Location: 'http://omfgdogs.com/'
        });
        response.end();
    }
    else if (request.url === '/') {
        log("returning root");

        response.writeHead(200);
        response.end('Hello, World!\n');
    }
    else {
        log("302", request.url);

        response.writeHead(302);
        response.end();
    }
}
