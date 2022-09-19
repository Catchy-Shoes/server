const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id:{
        type: Number,
        required: true,
        trim:true
    },
    
    name:{
        type: String,
        required: true,
        trim:true
    },
    price:{
        type: Number,
        required: true,
        trim:true
    }

},{timestamps:true})

const product = mongoose.model('product', productSchema)

module.exports = product