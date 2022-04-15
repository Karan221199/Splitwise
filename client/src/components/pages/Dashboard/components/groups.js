import React, { useEffect, useState } from 'react';

const Groups = () => {
    const [gName,setgName] = useState('');
    const [gType,setgType] = useState('');
    const [groups,setGroups] = useState([]);
    const [groupChild,setGroupChild] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/allGroups',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
        })
    },[])

    const saveGroupHandler = () => {
        if(gName=="")
        {
            alert("Please Enter Group Name");
            return ;
        }
        if(gType=="")
        {
            alert("Please Select Group Type");
            return ;
        }
        fetch('http://localhost:3001/addGroup',{
            method:"post",
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('jwt')
            },
            body:JSON.stringify({
                name:gName,
                type:gType
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error)
            {
                alert(data.error)
            }
            else{
                alert('success');
                console.log(data);
            }
        })
    }

    return(
        <div className='row'>
            <div className='col-4'>
                <h4>Groups</h4>
            </div>
            <div className='col-8' style={{textAlign:"right"}}>
                <button type='button' className='btn' style={{width:"120px"}} data-toggle="modal" data-target="#addGroupModal">+ Add Group</button>
            </div>
            <div className='col-12'>
                <div className="modal fade" id="addGroupModal" tabIndex="-1" role="dialog" aria-labelledby="addGroupModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{marginTop: "20%"}}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="addGroupModalLabel">Add Group</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='row'>
                                    <div className='col-12'>
                                        <input placeholder='Enter Group Name' type="text" value={gName} className='form-control' id='gName' onChange={(e)=>setgName(e.target.value)}/>
                                    </div>
                                    <div className='col-12 mt-3'>
                                        <select className='form-control' onChange={(e)=>setgType(e.target.value)}>
                                            <option value='' selected disabled>Choose Group Type</option>
                                            <option value="Trip">Trip</option>
                                            <option value="Home">Home</option>
                                            <option value="Couple">Couple</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className='col-12 mt-3' style={{textAlign:"right"}}>
                                        <button type="button" className="btn" style={{width:"120px"}} onClick={saveGroupHandler}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Groups;