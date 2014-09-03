var http = require('http');
var exec = require('child_process').exec; 

http.createServer(function (req, res) {
	var body = "";
	req.on('data', function (chunk) {
		body += chunk;
	});
	req.on('end', function () {
		res.end();
		exec('say ' + body);
	});
}).listen(7788);

console.log('http say now listen on 7788');

