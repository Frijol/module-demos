var tessel = require('tessel');
// var servo = require('servo-pca9685').use(tessel.port('A'));

var http = require('http');

http.get("http://api.openweathermap.org/data/2.5/weather?id=5327684&units=imperial", function(res) {
  console.log('http get...')
  if (res.statusCode == 200) {
    var body = '';

    res.on('data', function(chunk) {
      body += chunk;
      console.log('got a chunk')
    });

    res.on('end', function() {
      console.log('got end')
      response = JSON.parse(body);
      console.log(response.main.temp);
    });
  }
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
