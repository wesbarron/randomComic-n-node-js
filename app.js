var apiCallFromRequest = require('./Request');
var apiCallFromNode = require('./NodeJsCall');

var http = require('http');

http.createServer((req, res) => {
    if(req.url === "/request"){
        apiCallFromRequest.callApi(function(response){
            res.write(JSON.stringify(response));
            res.end();
        });
    }
    else if(req.url === "/node"){
        apiCallFromNode.callApi(function(response){
            res.write(response);
            res.end();
        });
    }

}).listen(3000);
console.log("service running on port 3000...");