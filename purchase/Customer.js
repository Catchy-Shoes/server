const mongoose = require('mongoose')

const Schema = mongoose.Schema

const customeSchema = new Schema({
    category:{
        type: String,
        required: true,
        trim: true
    },
    brand:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
        trim: true
    },
    qty:{
        type: Number,
        required: true,
        trim: true
    },
    sizes:{
        type: Array,
        required: true,
        trim: true
    },
    shippingType:{
        type: Array,
        required: true,
        trim: true
    },
},

{timestamps:true})

const Customer = mongoose.model("Customer",customeSchema)
module.exports = Customer
