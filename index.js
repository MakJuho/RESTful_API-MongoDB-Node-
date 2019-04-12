const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const routes = require('./routes/api');

// set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/juhogo');
mongoose.Promise = global.Promise;



app.use(bodyParser.json());

// initialize routes
app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
   //console.log(err);
     res.status(422).send({error: err._message});
});

// app.get('/api', function(req,res){
//     console.log('GET request');
//     //res.end();
//     res.send({name:'Yoshi'});
// });

// app.post('/post', function(req,res){
//     console.log('POST request');
//     //res.end();
//     res.send({name:'Yoshi'});
// });


// listen for requests
app.listen(process.env.port||4000, function(){
    console.log('now listening for requests');
});