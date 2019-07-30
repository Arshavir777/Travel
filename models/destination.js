const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
        tour_id: Number,
        name: String,
        title: Object,
        time: String,
        prices: Array,
        places: Object,
        img: String,
        description: Object,
        spec_description: Object,
        price_include: Object,
        price_exclude: Object,
        packages: Array,
        text:Object,
        order:Number
});

module.exports = mongoose.model('destinations', DestinationSchema);