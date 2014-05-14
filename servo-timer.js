var tessel = require('tessel');
var servo = require('servo-pca9685').use(tessel.port('A'));

var t = 15*60*1000;
var dt = 100;
var pos = 0.0;
var dPos = 1.0/(t/dt);

servo.on('ready', function () {
  setInterval(function() {
    if (pos <= 1.0) {
      servo.setServo(1, pos, function () {
        pos += dPos;
      });
    }
  }, dt);
});
