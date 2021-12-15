const mongoose = require("mongoose");

const notesSchema={
    title: {type: String, required: true},
    description: {type: String, required: true},
    link: {type: String, required: true}
}

const Note = mongoose.model("Note", notesSchema)
module.exports= Note;