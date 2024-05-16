const express = require('express');
const path = require('path');
const app = express();

// Serve static files from 'public_html', assuming server.js is also in 'public_html'
app.use(express.static(__dirname));

// Optional: Default Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Set the server to listen on port 8001
app.listen(8001, () => {
    console.log('Server running on http://localhost:8001');
});

