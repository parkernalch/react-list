const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const characters = require('./routes/api/characters');
const users = require('./routes/api/users');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// MongoDB
const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log("MongoDB Connected ..."))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/characters', characters);
app.use('/api/users', users);

// Serve static assets if in production
if(process.env.NODE_ENV == 'production') {
    // Set Static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));