const mongoose = require('mongoose')

const template= new mongoose.Schema({

    Name:{
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
    password:{
        type:String,
        required:true
    }
})

 module.exports= mongoose.model('datatable',template)

