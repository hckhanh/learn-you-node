var fs = require('fs');
var async = require('async');

async.parallel([
		fs.readFile.bind(fs, 'README.md'),
		fs.readFile.bind(fs, 'LICENSE')
	],
	function(err, contents) {
		if (err)
			return console.error(err);

		console.log(contents.toString());
	}
);


/*fs.readFile('README.md', function (err, data) {
	if (err)
			return console.error(err);

		console.log(data.toString());
});

fs.readFile('LICENSE', function (err, data) {
	if (err)
			return console.error(err);

		console.log(data.toString());
});*/