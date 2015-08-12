var http = require('http');
var map = require('through2-map');

http.createServer(function (request, response) {

	if (request.method != 'POST')
		response.end('Please send me a POST!');

	response.writeHead(200, { 'content-type' : 'text/plain' });
	request.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);

}).listen(process.argv[2]);
