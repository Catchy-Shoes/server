const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id:{
        type: Number,
        required: true,
        trim:true
    },
    
    category:{
        type: String,
        required: true,
        trim:true
    },

    brand:{
        type: String,
        required: true,
        trim:true
    },

    gender:{
        type: String,
        required: true,
        trim:true
    },

    qty:{
        type: Number,
        required: true,
        trim:true
    },
    price:{
        type: Number,
        required: true,
        trim:true
    },

    color:{
        type: String,
        required: true,
        trim:true
    },

    sizes:{
        type: Array,
        required: true,
        trim:true,
        "default" : []
    },

    shippingType:{
        type: Array,
        required: true,
        trim:true,
        "default" : []
    },

    seller:{
        type: String,
        required: true,
        trim:true
    }


},{timestamps:true})


const product = mongoose.model('product', productSchema)

module.exports = product