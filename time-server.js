var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
	var dateString = strftime('%Y-%m-%d %H:%M');
	socket.write(dateString + '\n');
	socket.end();
});
//server.listen(8998);
server.listen(process.argv[2]);