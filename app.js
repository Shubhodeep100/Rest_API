const express = require('express');
const app = express();
const mongoose = require('mongoose')
require("dotenv/config");
const bodyParser = require ('body-parser');

app.use (bodyParser.json());


// Middleware
// Import the Routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);


// Routes
app.get('/',(req, res) => {
    res.send("I'm inside my Home.");
});



// Connect the MongoDB
mongoose.connect(
    process.env.DB_CONNECTION,
    console.log("Connected to DB")
);

// Create a listening Port.
app.listen(3000);