const mongoose = require('mongoose')

const {ObjectId} = mongoose.Schema.Types;

const groupChildSchema = mongoose.Schema({
    group_id:{
        type:ObjectId,
        ref:"Group"
    },
    user_id:{
        type:ObjectId,
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

mongoose.model("GroupChild",groupChildSchema)