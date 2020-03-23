const express = require("express");
var router = express.Router();
const path = require('path');

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../views/index.html'))
})

router.get('/newgame', (req,res)=>{
    res.sendFile(path.join(__dirname, '../views/newgame.html'))
})

router.get('/cricket', (req,res)=>{
    res.sendFile(path.join(__dirname, "../views/cricket.html"))
})

router.get('/301', (req,res)=>{
    res.sendFile(path.join(__dirname, "../views/301.html"))
})

module.exports = router;