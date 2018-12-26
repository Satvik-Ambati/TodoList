var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://tester:tester123@ds213259.mlab.com:13259/firstapp',{ useNewUrlParser: true });

//Create a schema - like a blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo',todoSchema);

//var data = [{item: 'breakfast'}, {item: 'walking'}, {item: 'coding'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){

app.get('/todo/api',function(req,res){
  //get data from mongodb
  Todo.find({}, function(err, data){
    if (err) throw err;
    res.json(data);
    //res.render('todo',{todos:data});
  });
});


app.get('/todo',function(req,res){
  //get data from mongodb
  Todo.find({}, function(err, data){
    if (err) throw err;
    //res.json(data);
    res.render('todo',{todos:data});
  });
});

app.post('/todo',urlencodedParser, function(req,res){

  var newTodo = Todo(req.body).save(function(err,data){
    if (err) throw err;
    //res.json(data);
    res.render('todo', {todos:data});
  });
  
});

app.delete('/todo/:item',function(req,res){

  Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
    if (err) throw err;
    res.json(data);
  });
});

}
