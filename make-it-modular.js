var file = require('./file.js');

file(process.argv[2], process.argv[3], function(err, fileLists) {
	if (err)
		console.error(err);
	else
		fileLists.forEach(function (fileName) {
			console.log(fileName);
		})
});