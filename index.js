const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
var app = express();

app.listen(PORT, ()=>{
    console.log("Server listening on http://localhost:" + PORT)
});