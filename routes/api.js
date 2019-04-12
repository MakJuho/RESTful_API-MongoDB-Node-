const express = require('express');
const router = express.Router();
const Juho = require('../models/juho');

// get a list of makjuho from the db
router.get('/makjuho', function(req,res,next){
    
    /*Juho.find({}).then(function(juhos){
        res.send(juhos);
    });*/
    Juho.aggregate().near({
        near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        maxDistance: 100000,
        spherical: true,
        distanceField: "dist.calculated"
       }).then(function(juhos){
           res.send(juhos);
       });
    // Juho.geoNear(
    //     {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    //     {maxDistance: 100000, spherical: true}
    // ).then(function(juhos){
    //     res.send(juhos);
    // });
});

// add a new makjuho to the db
router.post('/makjuho',  function(req,res,next){
    Juho.create(req.body).then(function(juho){
        res.send(juho);    
    }).catch(next);
    //console.log(req.body);
    //console.log(res.body);
    
});

// update a makjuho in the db
router.put('/makjuho/:id', function(req,res,next){
    Juho.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        Juho.findOne({_id: req.params.id}).then(function(juho){
            res.send(juho);
        });
    });
});

//  delete a makjuho from the db
router.delete('/makjuho/:id', function(req,res,next){
    Juho.findByIdAndRemove({_id: req.params.id}).then(function(juho){
        res.send(juho)
    });
});

module.exports = router;
