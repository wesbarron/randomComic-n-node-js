var request = require('request');

_EXTERNAL_URL = "http://xkcd.com/info.0.json";

var getAPICurrentComic = (callback) => {
    request(_EXTERNAL_URL, {json: true}, (err, res, body) => {
        if(err) {
            return callback(err);
        }
        return callback(body);
    });
}

module.exports.callApi = getAPICurrentComic;