const express = require("express");
var router = express.Router();
const path = require('path');

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../views/index.html'))
})

module.exports = router;