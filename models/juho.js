const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default:"Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

// create juho Schema & model
const juhoSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type:String
    },
    available:{
        type: Boolean,
        default: false
    },
    // GEO Json
    geometry: GeoSchema
});

const juho = mongoose.model('juho',juhoSchema);

module.exports = juho;