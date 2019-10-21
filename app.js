//var https = require('https');
var http = require('http');
//var request = require('request');
var path = require('path');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({ encoded: true}));
//app.use(express.static("public"));



app.get('/', function(req, res){
    res.render("index", {});
});
/*
_EXTERNAL_URL = "http://xkcd.com/info.0.json";

var getAPICurrentComic = (callback) => {
    request(_EXTERNAL_URL, {json: true}, (err, res, body) => {
        if(err) {
            return callback(err);
        }
        return callback(body);
    });
}

var callAPIrandomComicHTTP = (callback) => {
    https.get(_EXTERNAL_URL, (resp) => {
        let data = '';

    //Data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    //The whole response has been recieved. Print result.
    resp.on('end', () => {
        return callback(data);
    });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}*/



/*
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
});*/



http.createServer(app).listen(port, function(){

});

