import React, { useEffect, useState } from 'react';
import groupHome from '../../../assets/images/groupHomeIcon.png';
import groupIcon from '../../../assets/images/group-icon.png';
import recordImage from '../../../assets/images/general@2x.png';
import {useSelector} from 'react-redux'
import $ from 'jquery'

const Groups = () => {
    const groupID = window.location.pathname.split('/')[2];
    const {group} = useSelector(state => state.group || {})
    const {expense} = useSelector(state => state.expense || {});
    const {user} = useSelector(state => state.user || {});
    const [desc,setDesc] = useState('');
    const [currency,setCurrency] = useState('INR');
    const [amount,setAmount] = useState(0);

    const saveExpenseHandler = () => {
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
                myShare
            })
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.error)
            {
                alert(result.error);
            }
            else{
                alert("saved successfully");
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
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];


    var currentdate = new Date();

    var datetime = monthNames[currentdate.getMonth()] + " " + currentdate.getFullYear();
    const getMonth = (val) =>{
        var date = new Date(val);
       return monthNames[date.getMonth()];
    }
    const getDate = (val) =>{
        var date = new Date(val);
       return date.getDate();
    }
    return(
        <section>
            <div className='row'>
                <div className='col-12 col-md-12'>
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
                                if(item.group_id === groupID)
                                {
                                    return (
                                        <div className='expense'>
                                            <div className="summary">
                                                <div className="expense summary involved">
                                                    <div className="main-block">
                                                        <div className="date" title={item.createdOn}>{getMonth(item.createdOn)}<div className="number">{getDate(item.createdOn)}</div></div>
                                                        <img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/food-and-drink/groceries@2x.png" className="receipt" />
                                                        <div className="header">
                                                            <span className="description ">
                                                            <a href="#" >
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
                                                            <span className="negative">{item.totalAmount - item.myShare}</span>
                                                        </div>
                                                        :
                                                        <div className="you ">
                                                            Smriti lent you
                                                            <br/>
                                                            <span className="negative">INR25.00</span>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                        <div className="expense">
                            <div className="summary">
                                <div className="expense summary involved">
                                    <div className="main-block">
                                        <div className="date" title="2022-04-15T16:50:26Z">Apr <div className="number">15</div></div>
                                        <img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/food-and-drink/groceries@2x.png" className="receipt" />
                                        <div className="header">
                                            <span className="description ">
                                            <a href="#" >
                                                Juice spring roll
                                            </a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cost">
                                        Smriti paid<br/>
                                        <span className="number">INR50.00</span>
                                    </div>
                                    <div className="you ">
                                        Smriti lent you
                                        <br/>
                                        <span className="negative">INR25.00</span>
                                    </div>
                                    <div className="actions">
                                        <a href="/expenses/1654928118" className="delete">×</a>
                                    </div>
                                    <div className="category_picker"></div>
                                </div>
                            </div>
                            <div className="users"></div>
                        </div>
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
                                            <button type="button" onClick={saveExpenseHandler} className="btn" style={{width:"120px"}} >Save</button>
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