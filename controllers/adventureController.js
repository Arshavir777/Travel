const Tours = require('../models/tours')
const Destination = require('../models/destination')
const TourCategory = require('../models/tourCategory')


exports.adventurePage = (req, res ) => {
    TourCategory.find({})
    .exec(( error , response ) => {
        if(error){
            console.log(error)
        } 
        res.render('adventure/adventure.ejs',{
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
            res.render('adventure/adventureGroup.ejs',{
                data: response
            })
        })
    
}

// data for adventure Single Page 
exports.adventureSingle = (req, res) => {
    let destination =  req.params.tour

    if(destination === 'rafting'){
        Destination.findOne({name: destination}).exec( (error, response) => {
            res.render('adventure/rafting.ejs', {
                data: response
            })
        })
    }else if (destination === 'jeep_tour'){
        Destination.findOne({name: destination}).exec( (error, response) => {
            res.render('adventure/jeepTour.ejs', {
                data: response
            })
        })
    }else if (destination === '9in1'){
            Destination.findOne({name: destination}).exec( (error, response) => {
                res.render('adventure/9in1.ejs', {
                    data: response
                })
            })
    }else{
        Destination.findOne({name: destination}).exec( (error, response) => {
            res.render('adventure/zipLaynSingle.ejs', {
                data: response
            })
        })
    }
   
}