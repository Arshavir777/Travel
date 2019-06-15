import express from 'express'
import i18n from 'i18n'
import ejs from './i18n'
const MongoClient = require('mongodb').MongoClient;

const app = express()
const port = (process.env.PORT || 5000)
const uri = (process.env.MONGO_URL);

const Mclient = new MongoClient(uri, { 
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000
 });
Mclient.connect((err, client) => {
    if(err){
        console.log("ERROR MONGO DB !!!")
    }else{
         app.locals.db = client.db("test")
         app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    }
    
});


app.set("view engine", "ejs");
app.set('views', __dirname + '/views')
app.use(i18n.init)

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));


app.get('/', (req, res) => {
    const collection = app.locals.db.collection('user')
    collection.findOne({email:req.query.email}, (error, response) => {
        if(error){
            console.log(error)
        }
        res.render('index.ejs',{
            name: response !== null? response.name: "No data found!",
            value: req.query.email
        })
    })
 
})