const mongoose = require("mongoose"); // require mongoose
const Todo = mongoose.model("Todo"); // initalize our Model


// export object literal with methods taking
// req and res. all responses are in json
module.exports = {
    create: (req, res) => {
        Todo.create(req.body)
            .then(todo => res.json(todo))
            .catch(err => res.status(400).json(err))
    },
    findAll: (req, res) => {
        Todo.find()
            .then(todos => res.json(todos))
            .catch(err => res.status(400).json(err))
    },
    findOne: (req, res) => {
        Todo.findOne({_id: req.params.id})
            .then(todo => res.json(todo))
            .catch(err => res.status(400).json(err))
    },
    deleteOne: (req, res) => {
        Todo.findOneAndDelete({_id: req.params.id})
            .then(deleted => res.json(deleted))
            .catch(err => res.status(400).json(err))
    }
}