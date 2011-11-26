var http = require("http");
var url = require("url");

function start(settings, route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);
	}
	
	http.createServer(onRequest).listen(settings.http_listen_port);
	console.log("Server has started.");
}

exports.start = start;