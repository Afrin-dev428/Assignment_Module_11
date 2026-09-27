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

/**
 * @file server.js
 * @description Express server setup with Multer for file upload handling.
 */

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Ensure uploads folder exists dynamically
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

/**
 * Configure Multer Storage Engine.
 * Specifies destination folder and original file naming convention.
 * 
 * @type {multer.StorageEngine}
 */
const storage = multer.diskStorage({
    /**
     * Set upload destination directory.
     * 
     * @param {express.Request} req - Express request object.
     * @param {Express.Multer.File} file - Uploaded file metadata.
     * @param {function(Error|null, string): void} cb - Multer callback.
     */
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },

    /**
     * Set file naming formate
     * @param {express.Request} req - Express request object.
     * @param {Express.Multer.File} file - Uploaded file metadata.
     * @param {function(Error|null, string): void} cb - Multer callback.
     */
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

/**
 * Multer upload middleware instance.
 * @type {multer.Multer}
 */
const upload = multer({ storage: storage });

app.listen(PORT, () => {
    console.log(Server running on http://localhost:${PORT});
});