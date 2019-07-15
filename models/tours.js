const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TourSchema = new Schema({
        ID: Number,
        title: Object,
        name: String
});

module.exports = mongoose.model('tours', TourSchema);