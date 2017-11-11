var nodeStatic = require('node-static');

var file = new nodeStatic.Server('./public');

console.log('req');

require('http').createServer(function (request, response) {
	console.log('req');
	request.addListener('end', function () {
		console.log('el listener');
		file.serve(request, response);
	}).resume();
}).listen(8033);