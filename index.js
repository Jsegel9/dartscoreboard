const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
var app = express();
var router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('/public'));
app.use(express.static(path.join(__dirname + '/public')));

var routes = require('./controllers/dartController');
app.use(routes)

// router.get("/", function(req,res){
//     res.sendFile(path.join(__dirname + "/index.html"))
// })


app.listen(PORT, ()=>{
    console.log("Server listening on http://localhost:" + PORT)
});