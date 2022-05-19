import React, { useEffect, useState } from 'react';
import groupHome from '../../../assets/images/groupHomeIcon.png';
import groupIcon from '../../../assets/images/group-icon.png';
import recordImage from '../../../assets/images/general@2x.png';
import {useSelector , useDispatch} from 'react-redux'
import $ from 'jquery'
import { addExpense, updateExpense, DeleteExpense } from '../../../redux/actions/action';

const Groups = () => {

    const dispatch = useDispatch();
    
    const groupID = window.location.pathname.split('/')[2];
    const {group} = useSelector(state => state.group || {})

    const {expense} = useSelector(state => state.expense || {});
    const {user} = useSelector(state => state.user || {});
    const [desc,setDesc] = useState('');
    const [currency,setCurrency] = useState('INR');
    const [amount,setAmount] = useState(0);

    const [editDesc,setEditDesc] = useState('');
    const [editAmount,setEditAmount] = useState(0.0);
    const [editCurrency,setEditCurrency] = useState('');

    const saveExpenseHandler = (e) => {
        var selectedGroup = $("#selectGroup").val();
        
        var paidBy = $("#selectUser").val();
        if(selectedGroup=="")
        {
            alert("Please select a Group to add Expense");
            return ;
        }
        if(paidBy=="")
        {
            alert("Please select paid By");
            return ;
        }
        if(desc=="")
        {
            alert("Please fill the description");
            return ;
        }
        if(currency=="")
        {
            alert("Please select the currency");
            return ;
        }
        if(amount=="")
        {
            alert("Expense should be greater than or equal to 1");
            return ;
        }
        let usersArr = [];

        group.map(item=>{
            if(item._id==selectedGroup)
            {
                usersArr = item.users;
            }
        })

        let count = usersArr.length;
        let myShare = amount / count;
        myShare = myShare.toFixed(2);

        let shared_by = [];
        usersArr.map(item=>{
            shared_by.push(item._id)
        })

        fetch('http://localhost:3001/saveExpense',{
            method:"post",
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                desc,
                currency,
                expense:amount,
                selectedGroup,
                paidBy,
                myShare,
                shared_by
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error)
            {
                alert(data.error);
            }
            else{
                alert("saved successfully");
                dispatch(addExpense(data.expenses))
            }
        })
    }
    

    const GroupHandler = (data) => {
  
        let html = '';
        if(data!="")
        {
            group.map(item=>{
                if(item._id == data)
                {
                    item.users.map(user=>{
                        html += '<option key='+user._id+' value='+user._id+'>'+user.name+'</option>';
                    })
                }
            })
        }
        $("#selectUser").html(html);
        
    }

    const editExpenseGroupHandler = (data) => {
  
        let html = '';
        if(data!="")
        {
            group.map(item=>{
                if(item._id == data)
                {
                    item.users.map(user=>{
                        html += '<option key='+user._id+' value='+user._id+'>'+user.name+'</option>';
                    })
                }
            })
        }
        $("#editUser").html(html);
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];


    var currentdate = new Date();

    var datetime = monthNames[currentdate.getMonth()] + " " + currentdate.getFullYear();
    let currentMonth = monthNames[currentdate.getMonth()];
    const getMonth = (val) =>{
        var date = new Date(val);
       return monthNames[date.getMonth()];
    }
    const getDate = (val) =>{
        var date = new Date(val);
       return date.getDate();
    }

    const getYear = (val) =>{
        var date = new Date(val);
       return date.getFullYear();
    }

    const deleteExpense = (expenseID,e) => {
        fetch('http://localhost:3001/deleteExpense',{
            method:"delete",
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('jwt')
            },
            body:JSON.stringify({
                ID:expenseID
            })
        })
        .then(res=>res.json())
        .then(response=>{
            if(response.error)
            {
                alert(response.error);
            }
            else{
                console.log(response);
                alert("Deleted Successfully");
                dispatch(DeleteExpense(response.docs))
            }
        })
        
    }

    const editExpenseHandler = (item,obj) => {
        setEditDesc(item.description);
        setEditCurrency(item.currency);
        setEditAmount(item.totalAmount);

        let html = '';
        group.map(g=>{
            if(g._id == item.group_id)
            {
                g.users.map(user=>{
                    html += '<option key='+user._id+' value='+user._id+'>'+user.name+'</option>';
                })
            }
        })
        $("#editUser").html(html);
        $("#editUser").val(item.paid_by._id);
        $("#editGroup").val(item.group_id);
        $("#editExpense").attr('data-id',item._id);
        // $("#editExpenseModal").modal('show');
    }

    const editExpense = (e) => {

        var id = $("#editExpense").attr('data-id');

        var selectedGroup = $("#editGroup").val();
        
        var paidBy = $("#editUser").val();
        if(selectedGroup=="")
        {
            alert("Please select a Group to edit Expense");
            return ;
        }
        if(paidBy=="")
        {
            alert("Please select paid By");
            return ;
        }
        if(editDesc=="")
        {
            alert("Please fill the description");
            return ;
        }
        if(editCurrency=="")
        {
            alert("Please select the currency");
            return ;
        }
        if(editAmount=="")
        {
            alert("Expense should be greater than or equal to 1");
            return ;
        }
        let usersArr = [];

        group.map(item=>{
            if(item._id==selectedGroup)
            {
                usersArr = item.users;
            }
        })

        let count = usersArr.length;
        let myShare = editAmount / count;
        myShare = myShare.toFixed(2);

        let shared_by = [];
        usersArr.map(item=>{
            shared_by.push(item._id)
        })

        fetch('http://localhost:3001/updateExpense',{
            method:"put",
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                id,
                desc : editDesc,
                currency : editCurrency,
                expense: editAmount,
                selectedGroup,
                paidBy,
                myShare,
                shared_by
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error)
            {
                alert(data.error);
            }
            else{
                
                alert("updated successfully");
                dispatch(updateExpense(data.expenses))
            }
        })
    }

    let grpArr = [];    
    let grpSummary = []; 

    group.map(item=>{
        if(item._id ==  groupID)
        {
            grpArr = item;
        }
    })

    let totalAmt = 0;
    if(grpArr.length!=0)
    {
        grpArr.users.map(item=>{
            totalAmt = 0;
            let arr = [];
            expense.map(exp=>{
                if(grpArr._id === exp.group_id && item._id === exp.paid_by._id)
                {
                    totalAmt = totalAmt + exp.totalAmount;
                }
            })
            arr.push(item._id);
            arr.push(totalAmt);
            arr.push(item.name);
            // const id = item._id;
            // const json = [
            //     id=> totalAmt
            // ]
           grpSummary.push(arr);
        })
    }


    let mainArr = [];
    if(grpSummary.length!=0)
    {
        for(var i=0;i<grpSummary.length;i++)
        {
            for(var j=0;j<grpSummary.length;j++)
            {
                let childArr = [];
                let arr = grpSummary[i];
                if(i==j)
                {
                    continue;
                }
                else{
                    // var amt = ((grpSummary[i] / 3) - (grpSummary[j] / 3)).toFixed(2);
                    // childArr.push(amt);
                    let arr1 = grpSummary[j];
                    var amt = ((arr[1] / grpSummary.length) - (arr1[1] / grpSummary.length)).toFixed(2);
                    childArr.push(arr[0]);
                    childArr.push(arr[2]);
                    childArr.push(arr1[0]);
                    childArr.push(arr1[2]);
                    childArr.push(amt);
                    mainArr.push(childArr);
                }
            }
        }
    }
    return(
        <section>
            <div className='row'>
                <div className='col-12 col-md-9'>
                    <div className='card groupCard'>
                        <div className='card-header'>
                            <div className='row'>
                                <div className='col-4' style={{display:"flex",alignItems:"center"}}>
                                    <img className='groupIcons' src={groupHome} alt="group home icon"/>
                                    <h4 style={{margin:'0'}}>{group.map(item=>{
                                        if(item._id ==  groupID)
                                        {
                                            return (item.name)
                                        }
                                    })}</h4>
                                </div>
                                <div className='col-8' style={{textAlign:"right"}}>
                                    <button type='button' className='btn btn-orange' style={{width:"140px"}} data-toggle="modal" data-target="#addExpenseModal">+ Add Expense</button>
                                    <button type='button' className='btn' style={{width:"120px",marginLeft:"10px",boxShadow:"none"}}>Settle up</button>
                                </div>
                            </div>
                        </div>
                        <div id='expenses'>
                            <div id='expenses_list'>
                                <div className="month-divider ">
                                    <span>{datetime}</span>
                                </div>
                            </div>
                        </div>
                        {
                            expense.map(item=>{
                                
                                // && currentMonth === getMonth(item.createdOn)
                                if(item.group_id === groupID)
                                {
                                    return (
                                        <div className='expense' key={item._id}>
                                            <div className="summary">
                                                <div className="expense summary involved">
                                                    <div className="main-block">
                                                        <div className="date" title={item.createdOn}>{getMonth(item.createdOn)}<div className="number">{getDate(item.createdOn)}</div></div>
                                                        <img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/food-and-drink/groceries@2x.png" className="receipt" />
                                                        <div className="header">
                                                            <span className="description ">
                                                            <a data-toggle="collapse" href={"#collapse-"+item._id} aria-expanded="false" aria-controls={"collapse-"+item._id}>
                                                                {item.description}
                                                            </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {
                                                        item.paid_by._id == user._id
                                                        ?
                                                        <div className="cost">
                                                            you paid<br/>
                                                            <span className="number">{item.currency}{item.totalAmount}</span>
                                                        </div> 
                                                        :
                                                        <div className="cost">
                                                            {item.paid_by.name} paid<br/>
                                                            <span className="number">{item.currency}{item.totalAmount}</span>
                                                        </div>
                                                    }
                                                    {
                                                        item.paid_by._id == user._id
                                                        ?
                                                        <div className="you ">
                                                            you lent
                                                            <br/>
                                                            <span className="negative">{(item.totalAmount - item.myShare).toFixed(2)}</span>
                                                        </div>
                                                        :
                                                        <div className="you ">
                                                            {item.paid_by.name} lent you
                                                            <br/>
                                                            <span className="negative">{item.myShare}</span>
                                                        </div>
                                                    }
                                                    <div className="actions" >
                                                        <a href="#" className="delete" onClick={(e)=>deleteExpense(item._id,e)}>×</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="collapse users" id={"collapse-"+item._id}>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" className="category" title="General" alt="General" />
                                                                <h3>{item.description}</h3>
                                                                <div className="cost">
                                                                {item.totalAmount}
                                                                </div>
                                                                <div className="creation_info">
                                                                    Added by {item.paid_by.name} on {getMonth(item.createdOn)} {getDate(item.createdOn)}, {getYear(item.createdOn)}
                                                                    <br/>
                                                                    <a href="#" onClick={(e)=>editExpenseHandler(item,e)} className="btn btn-mini btn-orange" data-toggle="modal" data-target="#editExpenseModal">
                                                                    Edit expense
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td className="left">
                                                                <table className="shares">
                                                                    <tbody>
                                                                        {
                                                                            item.shared_by.map(user=>{
                                                                                return(
                                                                                    <tr className='user'>
                                                                                        <td className="avatar">
                                                                                        <img src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue41-100px.png" className="avatar" alt="User avatar" />
                                                                                        </td>
                                                                                        <td>
                                                                                            {
                                                                                                user._id === item.paid_by._id
                                                                                                ?
                                                                                                <span><strong>{user.name}</strong> paid <strong>{item.currency}{item.totalAmount}</strong> and owes <strong>{item.currency}{(item.totalAmount - item.myShare).toFixed(2)}</strong></span>
                                                                                                :
                                                                                                <span><strong>{user.name}</strong> owes <strong>{item.currency}{(item.totalAmount - (item.myShare * (item.shared_by.length-1))).toFixed(2)}</strong></span>
                                                                                            }
                                                                                        </td>
                                                                                    </tr>
                                                                                )
                                                                            })
                                                                        }
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                        
                    </div>
                </div>
                <div className='col-12 col-md-3'>
                    <h3 className='gBal'>GROUP BALANCES</h3>
                    
                    <div className="full_group summary">
                        {
                            mainArr.map(item=>{
                                return (
                                    <a className="personal_balance confirmed" href='#'>
                                        <img src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue35-100px.png" className="avatar" />
                                        {
                                            item[4] > 0
                                            ?
                                            <span>
                                                <div className="name">{item[1]} </div>
                                                <div className="balance owes_me">
                                                    owes {item[3]} <span className="amount">INR{item[4]}</span>
                                                </div>
                                            </span>
                                            :
                                            <span>
                                                <div className="name">{item[1]} </div>
                                                <div className="balance i_owe">
                                                owes {item[3]} <span className="amount">INR{Math.abs(item[4])}</span>
                                                </div>
                                            </span>
                                        }
                                        
                                    </a>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className="modal fade" id="addExpenseModal" tabIndex="-1" role="dialog" aria-labelledby="addExpenseModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content" style={{marginTop: "20%"}}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="addExpenseModalLabel">Add an Expense</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                
                                <div className="modal-body">
                                    <div className='row' style={{padding: "0px 10px"}}>
                                       <div className='col-12'>
                                           <div className='row mb-3'>
                                               <div className='col-5'>
                                                    <span>With you and : </span>
                                               </div>
                                               <div className='col-7'>
                                                   <select className="form-control" id="selectGroup" onChange={e=>GroupHandler(e.target.value)}>
                                                       <option value=''>Select Here</option>
                                                        {
                                                            group.map(item=>{
                                                                return(
                                                                    <option key={item._id} value={item._id}>{item.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                               </div>
                                           </div>
                                           <div className='row mb-3'>
                                               <div className='col-5'>
                                                    <span>Paid By : </span>
                                               </div>
                                               <div className='col-7'>
                                                    <select className="form-control" id="selectUser">
                                                       
                                                    </select>
                                               </div>
                                           </div>
                                           <div className='row'>
                                               <div className='col-3'>
                                                    <img src={recordImage} width="100%" className='recordImage'/>
                                               </div>
                                               <div className='col-9'>
                                                    <input type="text" className='form-control expense_input' placeholder='Enter a description' value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                                                    <div className='row mt-3'>
                                                        <div className='col-4' style={{paddingRight:"0"}}>
                                                            <input type="text" className='form-control expense_input' readOnly value={currency} onChange={(e)=>setCurrency(e.target.value)}/>
                                                        </div>
                                                        <div className='col-8'style={{paddingLeft:"0"}}>
                                                            <input type="tel" className='form-control expense_input' placeholder='0.0' onChange={(e)=>setAmount(e.target.value)}/>
                                                        </div>
                                                    </div>
                                               </div>
                                           </div>
                                       </div>
                                        <div className='col-12 mt-3' style={{textAlign:"right"}}>
                                            <button type="button" onClick={(e)=>saveExpenseHandler(e)} className="btn" style={{width:"120px"}} >Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className="modal fade" id="editExpenseModal" tabIndex="-1" role="dialog" aria-labelledby="editExpenseModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content" style={{marginTop: "20%"}}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="editExpenseModalLabel">Edit an Expense</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                
                                <div className="modal-body">
                                    <div className='row' style={{padding: "0px 10px"}}>
                                       <div className='col-12'>
                                           <div className='row mb-3'>
                                               <div className='col-5'>
                                                    <span>With you and : </span>
                                               </div>
                                               <div className='col-7'>
                                                   <select className="form-control" id="editGroup" onChange={e=>editExpenseGroupHandler(e.target.value)}>
                                                       <option value=''>Select Here</option>
                                                        {
                                                            group.map(item=>{
                                                                return(
                                                                    <option key={item._id} value={item._id}>{item.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                               </div>
                                           </div>
                                           <div className='row mb-3'>
                                               <div className='col-5'>
                                                    <span>Paid By : </span>
                                               </div>
                                               <div className='col-7'>
                                                    <select className="form-control" id="editUser">
                                                       
                                                    </select>
                                               </div>
                                           </div>
                                           <div className='row'>
                                               <div className='col-3'>
                                                    <img src={recordImage} width="100%" className='recordImage'/>
                                               </div>
                                               <div className='col-9'>
                                                    <input type="text" className='form-control expense_input' placeholder='Enter a description' value={editDesc} onChange={(e)=>setEditDesc(e.target.value)}/>
                                                    <div className='row mt-3'>
                                                        <div className='col-4' style={{paddingRight:"0"}}>
                                                            <input type="text" className='form-control expense_input' readOnly value={editCurrency} onChange={(e)=>setEditCurrency(e.target.value)}/>
                                                        </div>
                                                        <div className='col-8'style={{paddingLeft:"0"}}>
                                                            <input type="tel" className='form-control expense_input' placeholder='0.0' value={editAmount} onChange={(e)=>setEditAmount(e.target.value)}/>
                                                        </div>
                                                    </div>
                                               </div>
                                           </div>
                                       </div>
                                        <div className='col-12 mt-3' style={{textAlign:"right"}}>
                                            <button type="button" id='editExpense' data-id="" onClick={(e)=>editExpense(e)} className="btn" style={{width:"120px"}} >Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Groups;