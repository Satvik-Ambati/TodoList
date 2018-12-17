var express = require('express');
var todoController = require('./controllers/todoControllers');
var app = express();
var newman = require('newman'); // require newman in your project

//set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire controllers 
todoController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');




// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./test.postman_collection.json'),
    reporters: 'cli'
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});
