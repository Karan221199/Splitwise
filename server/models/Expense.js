const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const Schema = mongoose.Schema({
    description:{
        type: String,
        required:true
    },
    currency:{
        type: String,
        required:true
    },
    group_id:{
        type: ObjectId,
        ref:"Group"
    },
    totalAmount:{
        type: Number,
        required:true
    },
    myShare:{
        type: Number,
        required:true
    },
    paid_by:{
        type: ObjectId,
        ref:"User"
    },
    createdBy:{
        type:ObjectId,
        ref:"User"
    },
    createdOn:{
        type:Date,
        default:Date.now
    },
    modifiedBy:{
        type:ObjectId,
        ref:"User"
    },
    modifiedOn:{
        type:Date,
        default:Date.now
    },
})

mongoose.model("Expense",Schema);