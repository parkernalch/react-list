const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const CampaignSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Character = mongoose.model('character', CharacterSchema);