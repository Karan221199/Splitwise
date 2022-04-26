const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const groupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    settled_up:{
        type:Boolean,
        default:false
    },
    users:[{type:ObjectId,ref:"User"}],
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

mongoose.model("Group",groupSchema)