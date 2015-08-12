var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
	var stream = fs.createReadStream(process.argv[3])
/*
	stream
		.on('open', function () {
			stream.pipe(response);
		})
		.on('error', function (err) {
			response.end(err);
		})
*/

	response.writeHead(200, { 'content-type' : 'text/plain' });
	stream.pipe(response);
}).listen(process.argv[2]);
