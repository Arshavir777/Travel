import express from 'express'
import path from 'path'
import ip from 'ip'
import i18n from 'i18n'
import cookieParser from 'cookie-parser'
import './i18n'

// const MongoClient = require('mongodb').MongoClient;
var tourRouter = require( './routes/tours')
const app = express()
const port = (process.env.PORT || 3000)
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())
app.use(i18n.init)
app.use(function (req, res, next) {
    res.setLocale(req.cookies.lng || 'am')
    res.locals = {
      lng: req.cookies.lng || 'am'
    };
    next();
 });
app.use('/tour', tourRouter)

app.set("view engine", "ejs")
app.set('views', __dirname + '/views')

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

app.get('/', (req, res) => {res.render('index.ejs')})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))