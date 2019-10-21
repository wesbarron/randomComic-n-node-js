var apiCallFromRequest = require('./Request');
var apiCallFromNode = require('./NodeJsCall');

var path = require('path');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({ encoded: true}));
app.use(express.static("public"));

app.get('/', function(req, res){
    res.render("index", {});

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
});

    http.createServer(app).listen(port, function(){

});

});
