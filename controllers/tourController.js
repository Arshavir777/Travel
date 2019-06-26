const Tours = require('../models/tours')


exports.historicalCulturalPage = (req, res ) => {
    let lng = req.cookies.lng
    Tours.findOne({name:'historical_cultural'}, (error, response) => {
        res.render('historical-cultural.ejs',{
            header_title:response.title[lng]
        })
    });
       
    
}