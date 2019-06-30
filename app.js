import express from 'express'
import path from 'path'
import ip from 'ip'
import i18n from 'i18n'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import './i18n'
const mongoose = require('mongoose');
var tourRouter = require( './routes/tours')
const app = express()
const port = (process.env.PORT || 3000)
const uri = process.env.MONGO_URL || "mongodb+srv://arshavir:9mywhJTYX48nVVk@cluster0-lokck.mongodb.net/travel?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true } )
//
app.use(bodyParser.json())
app.use(cookieParser())
app.use(i18n.init)

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
//

app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/', (req, res) => {
  res.render('index.ejs')

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))