var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var data =  buf.toString();

var count  = 0;
for (var i = 0; i < data.length; i++) {
	if (data[i] == '\n')
		count++;
};

console.log(count);