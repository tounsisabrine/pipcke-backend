const mongoose = require('mongoose');

const Session = mongoose.model("Session", new mongoose.Schema({
    name : String,
    startTime: Date,
    endTime: Date,
    tutor_id : String,
    reserved : {
        type : Boolean,
        default : false
    },
    client : String

}));
module.exports = Session;
