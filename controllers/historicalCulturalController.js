const Tours = require('../models/tours')
const Destination = require('../models/destination')
const TourCategory = require('../models/tourCategory')

exports.historicalCulturalPage = (req, res ) => {
    let lng = req.cookies.lng
    Tours.aggregate([
        {"$match": {name: "historical-cultural"}},
        {
            "$lookup": {
                "from": "destinations",
                "localField": "ID",
                "foreignField": "tour_id",
                "as": "dest"
                }
        },
        {"$unwind": "$dest"},
        {
            "$group": {
                "_id": "$title",
                "data": {"$push": "$dest"}
            }
        }
]).exec(( error , response ) => {
        if(error){
            console.log(error)
        }
       
        let result = response[0]
        res.render('historicalCultural/historical-cultural.ejs',{
            header_title: result._id[locale],
            data: result.data
        })
    }) 
}




exports.historicalCulturalSingle = (req, res ) => {
    let destination =  req.params.tour
    Destination.findOne({name: destination}).exec( (error, response) => {
        res.render('historicalCultural/singlePage.ejs', {
            data: response
        })
    })
    
}