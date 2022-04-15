const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Group = mongoose.model('Group');
const groupChild = mongoose.model('GroupChild')
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
        modifiedBy:req.user
    })

    group.save().then(result=>{
        const childData = new groupChild({
            group_id:result,
            user_id:req.user,
            createdBy:req.user,
            modifiedBy:req.user
        })
        childData.save().then(result1=>{
            res.json({group:result,groupChild:result1})
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
    .then(groups => {
        res.json({groups})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router