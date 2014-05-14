var tessel = require('tessel');
// var climate = require('climate-si7005').use(tessel.port('A'));
//
// var tempBuff = [];
// var humidityBuff = [];
//
// climate.on('ready', function () {
//   console.log("Connected to si7005");
//
//   // Loop forever
//   setImmediate(function loop () {
//     climate.readTemperature('f', function (err, temp) {
//       climate.readHumidity(function (err, humid) {
//         console.log('Degrees:', temp.toFixed(4) + 'F', 'Humidity:', humid.toFixed(4) + '%RH');
//         setTimeout(loop, 300);
//       });
//     });
//   });
// });
//
// climate.on('error', function(err) {
//   console.log('error connecting module', err);
// });
// setInterval(function(){}, 20000);

// var plotly = require('plotly')('Frijol','o5zhz0s5ka');
var http = require('http');

var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();


//
// // var data = [{x:[0,1,2], y:[3,2,1], type: 'line'}];
// // var layout = {fileopt : "extend", filename : "nodenodenode"};
// //
// // plot(data, layout, function (err, msg) {
// //   console.log(msg);
// // });
//
// var options = {
//   hostname: 'www.google.com',
//   port: 80,
//   path: '/upload',
//   method: 'POST'//,
//   // headers: {
//   //   'Content-Type': 'application/x-www-form-urlencoded',
//   //   'Content-Length': urlencoded.length
//   // },
//   // withCredentials: false
// };
//
// var req = http.request(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
//   });
// });
//
// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });
//
// // write data to request body
// // req.write('data\n');
// // req.write('data\n');
// // req.end();
//
//
// var plot = function(data, layout, callback) {
//   var opts = {};
//   /*
//    * permit Plotly.plot(options, callback)
//    * where options is {data: [], layout: {}, host: host, port: port}.
//    */
//   if (typeof data === 'object' && typeof layout === 'function') {
//     opts = data;
//     callback = layout;
//     layout = opts.layout || {};
//     data = opts.data || [];
//   }
//
//   if (!callback) { callback = function() {}; }
//
//   // allow users to just pass in an object for the data, data = {x:[],y:[]}
//   if (!Array.isArray(data)) data = [data];
//
//   var urlencoded = '';
//   var pack = {
//         'platform': platform,
//         'version': version,
//         'args': JSON.stringify(data),
//         'kwargs': JSON.stringify(layout),
//         'un': this.username,
//         'key': this.api_key,
//         'origin': origin
//         };
//
//   for (var key in pack) {
//     urlencoded += key + "=" + pack[key] + "&";
//   }
//
//   // trim off last ambersand
//   urlencoded = urlencoded.substring(0, urlencoded.length - 1);
//
//   var options = {
//     host: opts.host || 'plot.ly',
//     port: opts.port || 80,
//     path: '/clientresp',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Content-Length': urlencoded.length
//     },
//     withCredentials: false
//   };
//
//   var req = http.request(options, function (res) {
//     parseRes(res, function (err, body) {
//       body = JSON.parse(body);
//       if ( body.error.length > 0 ) {
//         callback({msg: body.error, body: body, statusCode: res.statusCode});
//       } else {
//         callback(null, {
//         streamstatus : body['stream-status'],
//         url: body.url,
//         message: body.message,
//         warning: body.warning,
//         filename: body.filename,
//         error: body.error
//         });
//       }
//     });
//   });
//
//   req.on('error', function(err) {
//     callback(err);
//   });
//
//   req.write(urlencoded);
//   req.end();
// };
