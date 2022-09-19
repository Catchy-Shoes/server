const mongoose = require('mongoose')

const Schema = mongoose.Schema

const authenticationSchema = new Schema({
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

const Authentication = mongoose.model("Authentication",authenticationSchema)
module.exports = Authentication