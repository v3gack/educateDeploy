const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

router.route("/create").post((req, res) =>{
    const title = req.body.title;
    const description = req.body.description;
    const link = req.body.link;
    const newNote = new Note({
        title,  
        description,
        link
    });

    newNote.save();
})

router.route("/notes").get((req,res) =>{
    Note.find()
        .then(foundNotes => res.json(foundNotes))
})

module.exports = router;