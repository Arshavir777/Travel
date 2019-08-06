const Tours = require('../models/tours')
const Destination = require('../models/destination')
const PopularDestinations = require('../models/popularDestinations')

exports.index = (req, res)=>{
    let lng = req.cookies.lng
    PopularDestinations.aggregate([
        {
            "$lookup": {
                "from": "destinations",
                "localField": "destination_name",
                "foreignField": "name",
                "as": "top"
                }
        },
        {
            "$lookup": {
                "from": "tours",
                "localField": "top.tour_id",
                "foreignField": "ID",
                "as": "tour"
                }
        },
        { 
            "$project": {
                "top.title":1,
                "top.prices":1,
                "top.img":1,
                "top.name":1,
                "tour.name":1
            }
        },
        {"$unwind": "$top"},
        {"$unwind": "$tour"}
]).exec(( error , response ) => {
        if(error){
            console.log(error)
        }
        res.render('index.ejs', {
            data:response
        })
    })

}