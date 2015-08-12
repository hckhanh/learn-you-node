var fs = require('fs');
var path = require('path');

function listAllFiles(err, list) {
	if (err) {
		console.error(err);
	} else {
		var extName = '.' + process.argv[3];
		list.forEach(function(fileName, index, array) {
			if (path.extname(fileName) === extName)
				console.log(fileName);
		});
	}
};

fs.readdir(process.argv[2], listAllFiles);