const notes = require("../controllers/notes"); // import
const todos = require("../controllers/todos"); // import

// routes is a function that takes app when called
module.exports = (app) => {
    app.get("/notes", notes.findAll);
    app.post("/notes", notes.create);
    app.get("/notes/:id", notes.findOne);
    app.delete("/notes/:id", notes.deleteOne);

    app.get("/todos", todos.findAll);
    app.post("/todos", todos.create);
    app.get("/todos/:id", todos.findOne);
    app.delete("/todos/:id", todos.deleteOne);
}

