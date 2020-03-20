const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
var app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.listen(PORT, ()=>{
    console.log("Server listening on http://localhost:" + PORT)
});