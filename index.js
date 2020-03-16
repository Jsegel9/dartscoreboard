const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
var app = express();
const router = express.Router();

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.listen(PORT, ()=>{
    console.log("Server listening on http://localhost:" + PORT)
});