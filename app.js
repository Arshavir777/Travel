import express from 'express'
import path from 'path'
import i18n from 'i18n'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import './i18n'
const session = require('express-session')
const flash = require('connect-flash')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const tourRouter = require( './routes/tours')
const indexRouter = require( './routes/index')
const app = express()
dotenv.config()

const port = process.env.PORT
const uri = process.env.MONGO_URL
mongoose.connect(uri, { useNewUrlParser: true } )

app.use(session({ cookie: { maxAge: 2000 }, 
  secret: 'woot',
  resave: false, 
  saveUninitialized: false}));

app.use(cookieParser())
app.use(i18n.init)
app.use(flash())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("view engine", "ejs")
app.set('views', __dirname + '/views')
//
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/css', express.static(__dirname + '/node_modules/lightbox2/dist/css')); // redirect CSS bootstrap
app.use('/js', express.static(__dirname + '/node_modules/lightbox2/dist/js/')); // redirect CSS bootstrap
app.use(express.static(path.join(__dirname, 'public')));
//
app.use(function (req, res, next) {
    res.setLocale(req.cookies.lng || 'am')
    // res.locals.lng = req.cookies.lng || 'am'
    res.locals.success_messages = req.flash('success_messages');
    next();
 });
app.use('/tour', tourRouter)
app.use('/', indexRouter)
app.get('/gallery', (req, res) => { res.render('gallery.ejs') })
app.get('/about', (req, res) => { res.render('about.ejs') })
app.listen(port, () => console.log(`Express server listening on port ( ${port} ) `)) 