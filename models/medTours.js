const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mediacalTours = new Schema({
    _id: Object,
    title: Object,
    name: String,
    img: String ,
    description: Object,
    diseases: Object,
    med_center: Object,
    med_rooms:Object,
    dest_price: Array,
    packages: Array,
    about: Object,
    price_include: Object,
    price_exclude: Object,
    contraindications: Object,
    instructions: Object
  
});

module.exports = mongoose.model('med', mediacalTours, 'med_tours');