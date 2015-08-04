var http = require('http');

var PORT = 3000;

var handleRequest = function (request, response) {
    debugger;

    console.log("The request.url is", request.url);

    if (request.url === 'api/omfgdogs') {
        console.log("Redirecting to omfgdogs.com");

        response.writeHead(302, {
            Location: 'http://omfgdogs.com/'
        });
        response.end();
    }
    else if (request.url === '/') {
        response.writeHead(200);
        response.end('Hello, World!\n');
    }
    else {
        response.end();
    }
}

var server = http.createServer(handleRequest);

server.listen(3000, function () {
    console.log("Listenting on", PORT);
});
