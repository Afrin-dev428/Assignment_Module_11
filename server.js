/**
 * @file server.js
 * @description Express server setup with Multer for file upload handling.
 */

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Express Server is Running');
});


app.listen(PORT, () => {
    console.log(Server running on http://localhost:${PORT});
});