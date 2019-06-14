import express from 'express'
import ejs from 'ejs'
const app = express()
const port = (process.env.PORT || 5000)

app.set("view engine", "ejs");
app.set('views', __dirname + '/views')

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

app.get('/', (req, res) => {
    res.render('index.ejs',{
        text:'Welcome to my Page'
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))