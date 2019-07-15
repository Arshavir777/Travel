const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const popularDestinations = new Schema({
    destination_name: String
});

module.exports = mongoose.model('popular_destinations', popularDestinations);