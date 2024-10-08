const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    empid: Number,
    empname:String,
    empcity:String,
    empage:Number
})

module.exports = mongoose.model("empdata",empSchema)