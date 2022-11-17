const mongoose = require('mongoose');

const user =mongoose.Schema({
    /*_id:{
        type: Number,
        required:true
    },*/
    firstname:{
        type : String,
        required : true
    },
    lastname:{
        type : String,
        required : true
    },
    address:{
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Users', user);