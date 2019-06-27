const express = require('express');
const router = express.Router();
const auth = require("../../middleware/auth");

// Character Model
const Character = require('../../models/Character');


// @route   GET api/characters
// @desc    Get All Characters
// @access  Public
router.get('/', (req, res) => {
    Character.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});


// @route   POST api/characters
// @desc    Creates a character
// @access  Private
router.post('/', auth, (req, res) => {
    const newCharacter = new Character({
        name: req.body.name
    });

    newCharacter.save()
        .then(character => res.json(character));
});



// @route   DELETE api/characters/:id
// @desc    Deletes a character
// @access  Private
router.delete('/:id', auth, (req, res) => {
    Character.findById(req.params.id)
        .then(character => character.remove()
            .then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
});


module.exports = router;