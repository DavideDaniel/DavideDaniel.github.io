// var notifier = require('node-notifier');
// var opts = {title: "hello"}
// notifier.notify(opts);

// var notifier = require('node-notifier');
// var opts = {title: "hello"}
// opt["title"] = "hello";
// opts["message"] = "you are cool";
// notifier.notify(opts);


process.stdin.on("data", function(data){
	var newdata = data.toString();
	var notifier = require('node-notifier');
var opts = {message: newdata}
// opt["title"] = "hello";
opts["message"] = newdata;
notifier.notify(opts);
	console.log(newdata);

