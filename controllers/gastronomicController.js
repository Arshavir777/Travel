const Tours = require('../models/tours')
const Destination = require('../models/destination')
const TourCategory = require('../models/tourCategory')

// data for adventure Single Page 
exports.singlePage = (req, res) => {
    let destination =  req.params.tour

        Destination.findOne({name: destination}).exec( (error, response) => {
            res.render('gastronomic/singlePage.ejs', {
                data: response
            })
        })

}


exports.gastronomicPage = (req, res ) => {
    let lng = req.cookies.lng
    Tours.aggregate([
        {"$match": {name: "gastronomic"}},
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
        res.render('gastronomic.ejs',{
            header_title: result._id[lng],
            data: result.data
        })
    }) 
}
