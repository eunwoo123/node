var http = require('http');
http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.end('hello world!');
}).listen(5000);
console.log('server running');