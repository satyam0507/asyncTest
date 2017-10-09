var asc = require('async');
var a = function a(cb){
    console.log('a');
    cb();
}
var b = function b(cb){
    console.log('b');
    cb();
}
asc.series([a,b]);
