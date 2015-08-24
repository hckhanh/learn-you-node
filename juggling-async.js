var http = require('http');
var fs = require('fs');
var bl = require('bl');
var async = require('async');

// ################# Option 1 #################

/*var dataQueue = [ '', '', '' ];
var count = 0;
for (var i = 2; i < 5; i++) {

	(function() {
		var index = i;
		http.get(process.argv[index], function (response) {
			var string = '';
			response
				.on('data', onGetData(index))
				.on('end', function() {
					count++;

					if (count == 3) {
						for (var k = 0; k < dataQueue.length; k++) {
							console.log(dataQueue[k]);
						}
					}
				});
		});
	})();

};

var onGetData = function(index) {
	return function (data) {
		dataQueue[index	- 2] += data;
	}
}*/

// ################# Option 2 #################

/*var urlData = [];
var count  = 0;

function getData(index) {
	http.get(process.argv[index], function (response) {
		
		response.pipe(bl(function (err, data) {
			if (err)
				return console.error(err);

			urlData[index - 2] = data.toString();
			count++;

			if (count == 3) {
				for (var i = 0; i < urlData.length; i++) {
					console.log(urlData[i]);
				}
			}
		}));
	});
};

for (var i = 2; i < process.argv.length; i++) {
	getData(i);
}*/

// ################# Option 3 #################

var files = process.argv.slice(2);

async.map(files, getData, function (err, arrData) {
	if (err)
		return console.error(err);

	arrData.forEach(function (content) {
		console.log(content + '\n');
	});
});


function getData(file, callback) {
	http.get(file, function (response) {
		response.pipe(bl(function (err, data) {
			if (err)
				return callback(err, null);
			
			callback(null, data.toString());
		}));
	});
}