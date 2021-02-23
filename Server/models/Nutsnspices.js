const mongoose = require('mongoose');
const nutsschema = new mongoose.Schema({
    ProductCategory:{
        type: String,
        required: true,
    },
    ProductName:{
        type: String,
        required: true,
    },
    ProductDescription:{
        type: String,
        required: true,
    },
    ProductManufactured:{
        type: String,
        required: true,
    },
    ProductExpire:{
        type: String,
        required: true,
    },
    ProductPrice:{
        type: Number,
        required: true,
    },
    ProductQuantity:{
        type: Number,
        required: true,
    },
    ProductOffer:{
        type: Number,
        required: true,
    },
    ProductFrequent:{
        type: Number,
        required: true,
    },
    ProductSold:{
        type: Number,
        required: true,
    },
    ProductRating:{
        type: Number,
        required: true,
    },
})
const Nutsnspices = mongoose.model("Nuts", nutsschema)
module.exports = Nutsnspices