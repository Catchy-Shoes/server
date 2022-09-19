const mongoose = require('mongoose')

const Schema = mongoose.Schema

const customeSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    age:{
        type: Number,
        required: true,
        trim: true
    }
},{timestamps:true})

const Customer = mongoose.model("Customer",customeSchema)
module.exports = Customer