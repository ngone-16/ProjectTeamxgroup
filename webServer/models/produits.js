const mongoose = require('mongoose');

const produit =mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    price:{
        type : String,
        required : true
    },
    quantity:{
        type : String,
        required : true
    },
    image:{
        type:String,
        required:false
    }
});

module.exports = mongoose.model('Produits', produit);