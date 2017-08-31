var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var post = require('./post.model');

var db = "mongodb://localhost/blog";
mongoose.connect(db);

var port = 8080;

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    res.header('Allow-Control-Allow-Headers','Content-Type, X-Auth-Token,Accept');
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

// to check the server running
app.get('/', function(req, res){
    res.send('Server is running');
})

// to get all posts
app.get('/post', function(req,res){
    post.find({})
    .exec(function(err, post){
        if(err){
            res.send("some error occured");
        } else {
            res.send(post);
        }
    })
})

// to post a postValues
app.post('/post', function(req, res){
    post.create(req.body, function(err, post){
        if(err){
            res.send('Post not added');
        } else {
            res.send("{success:'post added'}");
        }
    })
})

app.listen(port, function(){
    console.log('app is running on port'+ port);
})


