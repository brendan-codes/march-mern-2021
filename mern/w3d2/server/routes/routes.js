const notes = require("../controllers/notes"); // import

// routes is a function that takes app when called
module.exports = (app) => {
    app.get("/notes", notes.findAll);
    app.post("/notes", notes.create);
    app.get("/notes/:id", notes.findOne);
    app.delete("/notes/:id", notes.deleteOne);
}

