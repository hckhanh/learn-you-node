var fs = require('fs');

function calculateLine(data) {
	var count = 0;
	for (var i = 0; i < data.length; i++) {
		if (data[i] == '\n')
			count++;
	}

	return count;
};

function printResult(err, data) {
	if (err)
		console.error(err);
	else
		console.log(calculateLine(data.toString()));
};

fs.readFile('de.d', printResult);