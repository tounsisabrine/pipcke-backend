var express = require("express");
var cors = require("cors");
var app = express();
const mongoose = require('mongoose');

var indexRouter = require("./routes/index");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//To allow cross-origin requests
app.use(cors());

// Database connection

mongoose.connect('mongodb+srv://sabrina:sabrine123@cluster0.zn66c.mongodb.net/Pipcke?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    console.log(err)
    if (!err){
        console.log("DB Connected")
    }
});


//Route Prefixes
app.use("/", indexRouter);

module.exports = app;
