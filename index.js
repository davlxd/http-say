var http = require('http');
var exec = require('child_process').exec; 

var say_it = function(str) {
	if (str.slice(0, 3) != 'say')
		return ;
	var child = exec(str, function(err, stdout, stderr){});
}

http.createServer(function (req, res) {
	var body = "";
	req.on('data', function (chunk) {
		body += chunk;
	});
	req.on('end', function () {
		res.end();
		say_it(body);
	});
}).listen(7788);

console.log('http say now listen on 7788');

