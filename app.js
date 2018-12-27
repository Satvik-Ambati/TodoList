var express = require('express');
//var newman = require('newman'); // require newman in your project
var todoController = require('./controllers/todoControllers');
var app = express();

//set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire controllers 
todoController(app);

//listen to port

httpServer = require('http').createServer(app);

httpServer.listen('3000');
// Then close the server when done...
//var server = app.listen(3000);

console.log('You are listening to port 3000');





// newman.run({
//     collection: require('./test.postman_collection.json'),
//     reporters : 'cli'
// }, function (err,res) {
	
// 	if (err) { throw err; }
// 	console.log('collection run complete!');
//     if (res.run.failures.length==0){
//     	console.log("hey");
//     	//process.exit(0);
//     }
//     else {
//     	//process.exit(1);
//     }
// });
