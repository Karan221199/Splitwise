const express = require('express');
const requireLogin = require('../middleware/requireLogin');
const router = express.Router();
const mongoose = require('mongoose');
const Expense = mongoose.model('Expense');

router.post('/saveExpense',requireLogin,(req,res)=>{
    const {desc,currency,expense,selectedGroup,paidBy,myShare} = req.body;

    if(!desc || !currency || !expense || !selectedGroup || !paidBy || !myShare)
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
        modifiedBy:req.user
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
    .then(expenses=>{
        res.json({expenses})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router