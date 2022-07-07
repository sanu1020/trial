const mongoose = require('mongoose')

const signUpTemplate =new mongoose.Schema({
    
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    DateOfBirth:{
        type:Date,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('studenttable',signUpTemplate)