var request = require('request');
var API_URL = "http://vinmonopolet-api-dev.us-west-2.elasticbeanstalk.com"

module.exports = (data) => {
  return new Promise((resolve, reject) => {
      request({ 
          method: 'POST',
          uri: API_URL + "/products", 
          json: data,
        }, (err, res, body) => {
          if (err) reject(err);

          resolve(body);
      });
  });
}