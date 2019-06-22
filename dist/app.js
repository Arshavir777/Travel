"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _ip = _interopRequireDefault(require("ip"));

var _i18n = _interopRequireDefault(require("i18n"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

require("./i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tourRouter = require('./routes/tours');

const app = (0, _express.default)();
const port = process.env.PORT || 3000; //

app.use('/js', _express.default.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS

app.use('/js', _express.default.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery

app.use('/css', _express.default.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
//
// const MongoClient = require('mongodb').MongoClient;

app.use(_express.default.static(_path.default.join(__dirname, 'public')));
app.use((0, _cookieParser.default)());
app.use(_i18n.default.init);
app.use(function (req, res, next) {
  res.setLocale(req.cookies.lng || 'am');
  res.locals = {
    lng: req.cookies.lng || 'am'
  };
  next();
});
app.use('/tour', tourRouter);
app.set("view engine", "ejs");
app.set('views', __dirname + '/views'); // const uri = process.env.MONGO_URL 
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

app.get('/', (req, res) => {
  res.render('index.ejs');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));