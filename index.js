
const express = require('express');
const https = require('https');
const fs = require('fs');
const route = require("./src/routes/routes.js")
const app = express();

// Middleware and routes setup
app.use('/', route);

// Path to your SSL certificate and private key
const sslCertPath = './cert.pem';
const sslKeyPath = './key.pem';

// Create HTTPS server with Express app
const httpsOptions = {
    key: fs.readFileSync(sslKeyPath),
    cert: fs.readFileSync(sslCertPath),
    passphrase: 'dropzey'
};

const port = 443; // Default HTTPS port

const server = https.createServer(httpsOptions, app);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
