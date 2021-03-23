const mongoose = require("mongoose"); // require mongoose
const db = "march-notes"; // name the DB

// connected to mongoose
mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // suppress some error messages
    useFindAndModify: false
})
    // mongoose.connect returns a promise
    .then(() => console.log(`Connected to ${db}`))
    .catch((err) => console.log(`failed to connect to ${db}`, err))

// finally require ALL of our models
// if a new model is created, add it here
require("../models/Note");