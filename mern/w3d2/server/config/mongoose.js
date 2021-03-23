const mongoose = require("mongoose");
const db = "march-notes";

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log(`Connected to ${db}`))
    .catch((err) => console.log(`failed to connect to ${db}`, err))

require("../models/Note");