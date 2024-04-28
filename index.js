require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/Users");
const authRoutes = require("./routes/Auth");
const projectRoutes = require("./routes/Projects");
const profRoutes = require("./routes/Prof");
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const config = require("./config_backend.js");

const host = config.server.host;
const port = process.env.PORT || config.server.port;

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/files", express.static("files"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/prof", profRoutes);


app.get('/check-image/:filename', (req, res) => {
    const filename = req.params.filename;
    const imagePath = path.join(__dirname, 'files', filename);
    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            // Image file does not exist
            res.status(404).send('Image not found');
        } else {
            // Image file exists
            res.status(200).send('Image found');
        }
    });
});

// const port = process.env.PORT || 5001;
app.listen(port, console.log(`Listening on host ${host}... and port ${port}...`));
