const express = require("express");
const app = express();
const PORT = 8000
 
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

app.get("/c", (req, res) => { 
    res.render("index", {
        text: 'TRAVLER'
    });
});
console.log("Server Start on Port", PORT)
app.listen(PORT);