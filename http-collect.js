var http = require('http');
var bl = require('bl');
var concatStream = require('concat-stream');

http.get(process.argv[2], function (response) {

	//var chars = '';
	//response
	//	.on('data', function (data) {
	//		chars += data;
	//	})
	//	.on('end', function () {
	//		console.log(chars.length);
	//		console.log(chars);
	//	});

	//response.pipe(bl(function (err, data) {
	//	if (err)
	//		return console.error(err);
	//
	//	console.log(data.length);
	//	console.log(data.toString());
	//}));

	response.pipe(concatStream(function (data) {
		console.log(data.length);
		console.log(data.toString());
	}));

});