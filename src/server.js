import express from 'express'
import ip from 'ip'
import i18n from 'i18n'
import ejs from './i18n'
const MongoClient = require('mongodb').MongoClient;

const app = express()
const port = (process.env.PORT || 3000)
// const uri = process.env.MONGO_URL 

// const Mclient = new MongoClient(uri, { 
//     useNewUrlParser: true,
//     reconnectTries: Number.MAX_VALUE,
//     reconnectInterval: 1000
//  });
// Mclient.connect((err, client) => {
//     if(err){
//         console.log(err.message)
//     }else{
//          app.locals.db = client.db("test")
//          app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//     }
    
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.set("view engine", "ejs");
app.set('views', __dirname + '/views')
app.use(i18n.init)


var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));


app.get('/', (req, res) => {
    if(req.headers.cookie){
        let lng = req.headers.cookie.split('=')[1]
    }else{
        let lng = 'am'
    }
    
    res.setLocale(lng)
    app.locals.lng = lng
    res.render('index.ejs')
  
    // const collection = app.locals.db.collection('user')
    // collection.findOne({email:req.query.email}, (error, response) => {
    //     if(error){
    //         console.log(error)
    //     }
    //     res.render('index.ejs',{
    //         name: response !== null?response.name:'Not Found!!',
    //         value: req.query.email,
    //         ip: ip.address()
    //     })
    // })
 
})