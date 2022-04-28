const express = require('express');
const requireLogin = require('../middleware/requireLogin');
const router = express.Router();
const mongoose = require('mongoose');
const Expense = mongoose.model('Expense');

router.delete('/deleteExpense',requireLogin,(req,res)=>{
    const {ID} = req.body;
    if(!ID)
    {
        res.status(422).json({error:"ID cannot be empty"})
    }

    Expense.findByIdAndDelete(ID,function(err,docs){
        if(err)
        {
            console.log(err);
            res.status(422).json({error:"Error"})
        }
        else{
            res.json(docs);
        }
    })
})

router.post('/saveExpense',requireLogin,(req,res)=>{
    const {desc,currency,expense,selectedGroup,paidBy,myShare,shared_by} = req.body;

    if(!desc || !currency || !expense || !selectedGroup || !paidBy || !myShare || !shared_by)
    {
        res.status(422).json({error:"Please fill all fields"})
    }

    const expenseData = new Expense({
        description:desc,
        currency:currency,
        paid_by:paidBy,
        group_id:selectedGroup,
        totalAmount:expense,
        myShare:myShare,
        createdBy:req.user,
        modifiedBy:req.user,
        shared_by:shared_by
    })

    expenseData.save().then(result=>{
        res.json({result})
        
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get("/getExpenses",requireLogin,(req,res)=>{
    Expense.find().populate("paid_by","_id name email")
    .populate("createdBy","_id name email")
    .populate("modifiedBy","_id name email")
    .populate("shared_by","_id name email")
    .then(expenses=>{
        res.json({expenses})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router