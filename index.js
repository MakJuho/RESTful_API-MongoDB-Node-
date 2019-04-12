const express = require('express');

//const routes = require('./routes/api');

// set up express app
const app = express();

// initialize routes
app.use('/api',require('./routes/api'));

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