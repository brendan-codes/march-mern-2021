const mongoose = require("mongoose"); // require mongoose
const Note = mongoose.model("Note"); // initalize our Model


// export object literal with methods taking
// req and res. all responses are in json
module.exports = {
    create: (req, res) => {
        Note.create(req.body)
            .then(note => res.json(note))
            .catch(err => res.status(400).json(err))
    },
    findAll: (req, res) => {
        Note.find()
            .then(notes => res.json(notes))
            .catch(err => res.status(400).json(err))
    },
    findOne: (req, res) => {
        Note.findOne({_id: req.params.id})
            .then(note => res.json(note))
            .catch(err => res.status(400).json(err))
    },
    deleteOne: (req, res) => {
        Note.findOneAndDelete({_id: req.params.id})
            .then(deleted => res.json(deleted))
            .catch(err => res.status(400).json(err))
    }
}