var https = require('https');

_EXTERNAL_URL = "http://xkcd.com/info.0.json";

var callAPTrandomComicHTTP = (callback) => {
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
}

module.exports.callApi = callAPTrandomComicHTTP;