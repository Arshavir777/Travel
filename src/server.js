import express from 'express'
import ejs from 'ejs'
const app = express()
const port = (process.env.PORT || 5000)

app.set("view engine", "ejs");
app.set('views', __dirname + '/views')



app.get('/', (req, res) => res.send('Hello World!'))
app.get('/home', (req, res) => {
    res.render('index.ejs',{
        text:'HEROUKO'
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))