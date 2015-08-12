var fs = require('fs');
var path = require('path');

module.exports = function(dir, extName, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) {
			callback(err, null);
		} else {
			extName = '.' + extName;
			list = list.filter(function(fileName) {
				return path.extname(fileName) === extName;
			});
			
			callback(null, list);
		}
	});
};