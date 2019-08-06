const MedTours = require('../models/medTours')


exports.medicalPage = (req, res ) => {
    MedTours.find({})
    .exec(( error , response ) => {
        if(error){
            console.log(error)
        } 
        res.render('medical/medical.ejs',{
           // header_title: result._id[lng],
            data: response
        })
    }) 
}



// data for medical Single Page 
exports.singlePage = (req, res) => {
    let dest =  req.params.tour
    console.log(dest)
    if (dest === 'jermuk_med' ) {
        MedTours.findOne({name: "jermuk_med"}).exec( (error, response) => {
            console.log(response)
            res.render('medical/jermuk_med.ejs', {
                data: response
            })
        })
    } if (dest === 'arzni_med'){
        MedTours.findOne({name: "arzni_med"}).exec( (error, response) => {
            res.render('medical/arzni_med.ejs', {
                data: response
            })
        })
    } if (dest === 'vanadzor_med'){
        MedTours.findOne({name: "vanadzor_med"}).exec( (error, response) => {
            res.render('medical/vanadzor_med.ejs', {
                data: response
            })
        })
    }
}