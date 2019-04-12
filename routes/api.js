const express = require('express');
const router = express.Router();


// get a list of makjuho from the db
router.get('/makjuho', function(req,res){
    res.send({type:'GET'});
});

// add a new makjuho to the db
router.post('/makjuho', function(req,res){
    res.send({type:'POST'});
});

// update a makjuho in the db
router.put('/makjuho/:id', function(req,res){
    res.send({type:'PUT'});
});

//  delete a makjuho from the db
router.delete('/makjuho/:id', function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;
