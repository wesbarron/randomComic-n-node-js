var https = require('https');
var http = require('http');
var request = require('request');
var path = require('path');
var express = require("express");
//var router = express.router();
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
var ranComicTitle;
var ranComicYear;
var newURL;
var origComicTitle;
var origComicYear;
var ranComicResponse;
//var randomPage = app.render("random");

request(url, (error, response, body)=> {

    var comicResponse = JSON.parse(body);
    comicImg = comicResponse.img;
    origComicTitle = comicResponse.title;
    origComicYear = comicResponse.year;
    console.log(comicImg);
});


app.get('/', function(req, res){

    res.render("index", {ranComicTitle:ranComicTitle, ranComicYear:ranComicYear, ranComicResponse:ranComicResponse, comicImg:comicImg, ranComicImg:ranComicImg, newURL:newURL, origComicTitle:origComicTitle, origComicYear:origComicYear});

});

app.get('/random', function(req, res){

    res.render("random", {ranComicTitle:ranComicTitle, ranComicYear:ranComicYear, ranComicResponse:ranComicResponse, comicImg:comicImg, ranComicImg:ranComicImg, newURL:newURL, origComicTitle:origComicTitle, origComicYear:origComicYear});

});



   //get random image url//
app.post('/randomComic', function(req, res){

   //get random comic
var randomNum = Math.floor((Math.random() * 1200) + 1);
var firstURL = 'https://xkcd.com/';
var lastURL = '/info.0.json';
var newURL = firstURL + randomNum + lastURL;

request(newURL, (error, response, body)=> {

    var ranComicResponse = JSON.parse(body);
    ranComicImg = ranComicResponse.img;
    var ranComicTitle = ranComicResponse.title;
    var ranComicYear = ranComicResponse.year;
    console.log(ranComicImg);
    console.log(ranComicTitle);
    console.log(ranComicYear);
});

    //res.send(ranComicImg);
    //res.send(ranComicTitle);
    res.send(ranComicYear);
    

});


http.createServer(app).listen(port, function(){

});

