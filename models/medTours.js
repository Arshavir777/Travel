const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mediacalTours = new Schema({
    _id: Object,
    title: Object,
    name: String,
    img: String ,
    description: Object
});

module.exports = mongoose.model('med', mediacalTours, 'med_tours');