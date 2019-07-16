const Tours = require('../models/tours')
const Destination = require('../models/destination')
const TourCategory = require('../models/tourCategory')


exports.adventurePage = (req, res ) => {
    TourCategory.find({})
    .exec(( error , response ) => {
        if(error){
            console.log(error)
        } 
        res.render('adventure.ejs',{
           // header_title: result._id[lng],
            data: response
        })
    }) 
}

// data for adventure Groups Page 
exports.adventureGroup = (req, res) => {
    var ID =  parseInt(req.params.tourGroup)
    Destination.aggregate([ 
        {
            "$match": {
                tour_cat_id: ID 
            }
        },

        {
            "$project": {
                "title": 1,
                "img": 1,
                "name": 1,
                "description": 1
            }
        }    
    ])  .exec((err, response) => {
            res.render('adventureGroup.ejs',{
                data: response
            })
        })
    
}

// data for adventure Single Page 
exports.adventureSingle = (req, res) => {
    let destination =  req.params.tour
    Destination.findOne({name: destination}).exec( (error, response) => {
        res.render('single_tour.ejs', {
            data: response
        })
    })
}