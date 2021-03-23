const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "You must leave content in your note!"],
        minlength: [3, "Notes much be 3 or more characters!"]
    }
}, {timestamps: true});


mongoose.model("Note", NoteSchema);