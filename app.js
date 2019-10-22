var https = require('https');
var http = require('http');
var request = require('request');
var path = require('path');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({ encoded: true}));
app.use(express.static("public"));
app.use(express.json());


/*
app.get('/', function(req, res){
    var api_response = '';

    var options = {
        host: 'xkcd.com',
        port: 80,
        path: '/info.0.json',
        method: 'GET'
    }

    callback = function(response){
        response.on("data", function(chunk){
            api_response+=chunk;
        });

        response.on("end", function(){
            console.log("api response is: "+api_response);
        });
    }

    var req = https.request(options, callback);
    var originalJSON = req;
    res.send(originalJSON);
    req.end();

});
*/


var request = require('request')
     ,url = 'https://xkcd.com/614/info.0.json';

request(url, (error, response, body)=> {
  if (!error && response.statusCode === 200) {
    var comicResponse = JSON.parse(body);
    console.log("Got a response: ", comicResponse.picture);
  } else {
    console.log("Got an error: ", error, ", status code: ", response.statusCode);
  }
})



app.post('/originalComic', function(req, res){
    var data = JSON.parse(getAPICurrentComic);
    var postData = JSON.stringify(data);
    res.send((postData));

    res.redirect('/');
});


http.createServer(app).listen(port, function(){

});

