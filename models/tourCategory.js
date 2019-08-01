const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourCategory = new Schema({
    ID: Number,
    title: Object,
    name: String,
    tour_id: Number,
    single: Boolean
});

module.exports = mongoose.model('tc', tourCategory, 'tour_category');