const notes = require("../controllers/notes");

module.exports = (app) => {

    app.get("/notes", notes.findAll);
    app.post("/notes", notes.create);
    app.get("/notes/:id", notes.findOne);

}


// app.get("/notes")