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

var comicImg = [];

app.get('/', function(req, res){

    res.render("index", {comicImg:comicImg});

});

app.post('/originalComic', function(req, res){

var url = 'https://xkcd.com/614/info.0.json';

request(url, (error, response, body)=> {

    var comicResponse = JSON.parse(body);
    var comicImg = comicResponse.img;
    res.push('<img src="' + comicImg + '">');

    res.redirect('/');
    });
});

app.post('/randomComic', function(req, res){

//var url = 'https://xkcd.com/614/info.0.json';
var randomNum = Math.floor((Math.random() * 100) + 1);
var firstURL = 'https://xkcd.com/';
var lastURL = '/info.0.json';
var newURL = firstURL + randomNum + lastURL;

request(newURL, (error, response, body)=> {

    var ranComicResponse = JSON.parse(body);
    var ranComicImg = comicResponse.img;
    res.send('<img src="' + ranComicImg + '">');

    res.redirect('/');
    });
});

http.createServer(app).listen(port, function(){

});

