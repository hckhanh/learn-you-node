var http = require('http');
var url = require('url');

http.createServer(function (request, response) {

	if (request.method != 'GET')
		response.end('Please send me a GET!');

	var queryData = url.parse(request.url, true);
	var date = new Date(queryData.query.iso);
	var extractDate = null;
	switch (queryData.pathname) {
		case '/api/parsetime':
			extractDate = {
				hour: date.getHours(),
				minute: date.getMinutes(),
				second: date.getSeconds(),
			};
			break;
		case '/api/unixtime':
			extractDate = {
				unixtime: date.getTime()
			};
		default:
			response.writeHead(404);
	}

	if (extractDate) {
		response.writeHead(200, { 'Content-Type': 'application/json' });
	}

	var jsonDate = JSON.stringify(extractDate);	

	response.write(jsonDate);
	response.end();

}).listen(process.argv[2]);
