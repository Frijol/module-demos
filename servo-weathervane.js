var tessel = require('tessel');
// var servo = require('servo-pca9685').use(tessel.port('A'));

// *** Straight JS With XMLHttpRequest Module ***//
// var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// function httpGet(theUrl)
// {
//   var xmlHttp = null;
//
//   xmlHttp = new XMLHttpRequest();
//   xmlHttp.open( "GET", theUrl, false );
//   xmlHttp.send( null );
//   return xmlHttp.responseText;
// }
//
// var res = httpGet('http://api.openweathermap.org/data/2.5/weather?id=5327684&units=imperial');
// console.log(res);
//
// issue: https://github.com/tessel/beta/issues/298


// *** With Node Http ***//
// var http = require('http');
// console.log('http get...');
// http.get("http://api.openweathermap.org/data/2.5/weather?id=5327684&units=imperial", function(res) {
//   console.log(res.statusCode)
//   if (res.statusCode == 200) {
//     var body = '';
//
//     res.on('data', function(chunk) {
//       body += chunk;
//       console.log(body);
//     });
//
//     res.on('end', function() {
//       console.log('got end');
//       response = JSON.parse(body);
//       console.log(response.main.temp);
//     });
//   } else {
//     console.log(res.statusCode);
//   }
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });
//
//**** issue: https://github.com/tessel/beta/issues/295

// *** With NPM Package Request ***//
// var request = require('request');
// request('http://api.openweathermap.org/data/2.5/weather?id=5327684&units=imperial', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body);
//   }
// });
//
//**** issue: https://github.com/tessel/beta/issues/296
