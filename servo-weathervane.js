// var tessel = require('tessel');
// var servo = require('servo-pca9685').use(tessel.port('A'));

// // *** Straight JS With XMLHttpRequest Module ***//
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
// issue: https://github.com/tessel/beta/issues/326
//
// // *** Node module http-request ***//
// var httpRequest = require('http-request');
// httpRequest.get('http://api.openweathermap.org/data/2.5/weather?id=5327684&units=imperial', function (err, res) {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}
// 	console.log(res.code, res.headers, res.buffer.toString());
// });
//
// issue: https://github.com/tessel/beta/issues/326

// *** With NPM Package Request ***//
var request = require('request');

request('http://api.openweathermap.org/data/2.5/weather?id=5327684&units=imperial', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});
//
//**** issue: https://github.com/tessel/beta/issues/296
