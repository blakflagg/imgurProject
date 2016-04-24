varFetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = 'd3988a50076332d';

module.exports = {
    get: function(url){
      return fetch(rootUrl + url, {
        headers: {
          'Authorization': 'Client-ID ' + apiKey
        }
      })
      .then(function(response){
        return response.json()
      })
    }
};
