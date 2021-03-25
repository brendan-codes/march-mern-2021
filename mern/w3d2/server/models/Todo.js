const mongoose = require("mongoose");

// define the structure of our DB
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Todos need a title!"],
        minlength: [3, "Titles must be 3+ characters!"]
    },
    description: {
        type: String,
        required: [true, "Describe your todo!"],
        minlength: [6, "Desc must be 6+"]
    },
    completed: {
        type: Boolean,
        default: false
    },

}, {timestamps: true}); // you can pass an object at the end of schema creation




mongoose.model("Todo", TodoSchema); // finally initalize it for the first time