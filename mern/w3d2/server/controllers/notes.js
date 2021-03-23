const mongoose = require("mongoose");
const Note = mongoose.model("Note");

module.exports = {
    create: (req, res) => {
        Note.create(req.body)
            .then(note => {
                console.log(note);
                res.json(note);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },
    findAll: (req, res) => {
        Note.find()
            .then(notes => {
                console.log(notes);
                res.json(notes);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },
    findOne: (req, res) => {
        Note.findOne({_id: req.params.id})
            .then(note => {
                console.log(note);
                res.json(note);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },
}