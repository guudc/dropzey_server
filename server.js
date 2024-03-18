"use strict"

const fs = require('fs');
const express = require("express")
const https = require('https');
const { createServer } = require('node:http');
const route = require("./src/routes/routes.js") 
const app = express() 

app.use("/", route)
const server = createServer(app);


let port = process.env.PORT || 4000
server.listen(port, () => {
    console.log('server running at port ' + port);
}); 
 

 