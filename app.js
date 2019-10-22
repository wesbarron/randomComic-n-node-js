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

//get original comic
var url = 'https://xkcd.com/614/info.0.json';
var comicImg;
var ranComicImg;

request(url, (error, response, body)=> {

    var comicResponse = JSON.parse(body);
    comicImg = comicResponse.img;
    console.log(comicImg);
});

//get random comic
var randomNum = Math.floor((Math.random() * 1200) + 1);
var firstURL = 'https://xkcd.com/';
var lastURL = '/info.0.json';
var newURL = firstURL + randomNum + lastURL;

request(newURL, (error, response, body)=> {

    var ranComicResponse = JSON.parse(body);
    ranComicImg = ranComicResponse.img;
    console.log(ranComicImg);
});

//var comicImg = '';

app.get('/', function(req, res){
    //res.send(comicImg);
    res.render("index", {comicImg:comicImg, ranComicImg:ranComicImg});

});
/*
app.post('/originalComic', function(req, res){

var url = 'https://xkcd.com/614/info.0.json';

request(url, (error, response, body)=> {

    var comicResponse = JSON.parse(body);
    var comicImg = comicResponse.img;

    res.send(
        '<h2 style="text-align:center">' + comicResponse.title + '</h2>' +
        '<br>' +
        '<img src="' + comicImg + '" width="55%" height="75%" style="margin:auto">');


    res.redirect('/');
    });
});
*/

app.post('/randomComic', function(req, res){
    var comicBody = req.body.original-comic;
    //var getComicLocation = document.getElementById("random-comic");
    //var ranComRes = getComicLocation.src = ranComicImg;
    res.send(comicBody);

    res.redirect('/');

});

http.createServer(app).listen(port, function(){

});

