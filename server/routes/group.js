const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Group = mongoose.model('Group');
const requireLogin = require('../middleware/requireLogin')

router.post('/addGroup',requireLogin,(req,res)=>{
    const {name,type} = req.body;
    if(!name || !type)
    {
        return res.status(422).json({error:"Please fill all fields"})
    }

    const group = new Group({
        name,
        type,
        createdBy:req.user,
        modifiedBy:req.user,
        users:req.body.members
    })

    group.save().then(result=>{

        Group.findById(result._id).populate("createdBy","_id name email")
        .populate("users","_id name email")
        .then(groups => {
            res.json({groups})
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/allGroups',requireLogin,(req,res)=>{
    Group.find().populate("createdBy","_id name email")
    .populate("users","_id name email")
    .then(groups => {
        res.json({groups})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router