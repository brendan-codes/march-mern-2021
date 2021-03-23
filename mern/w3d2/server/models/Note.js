const mongoose = require("mongoose");

// define the structure of our DB
const NoteSchema = new mongoose.Schema({
    content: { // notes have content
        type: String, // which are strings
        required: [true, "You must leave content in your note!"], // first element is the requirement
        minlength: [3, "Notes much be 3 or more characters!"] // second element is a custom error message
    }
}, {timestamps: true}); // you can pass an object at the end of schema creation


mongoose.model("Note", NoteSchema); // finally initalize it for the first time