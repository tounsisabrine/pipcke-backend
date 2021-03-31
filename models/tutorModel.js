const mongoose = require('mongoose');

const Tutor = mongoose.model("Tutor", new mongoose.Schema({
    name : String,
    cours : String,
}));
module.exports = Tutor;
