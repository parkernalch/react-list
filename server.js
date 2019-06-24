const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const characters = require('./routes/api/characters');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// MongoDB
const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected ..."))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/characters', characters);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));