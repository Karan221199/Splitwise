import React,{useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import {Link, useNavigate, useParams} from 'react-router-dom';
import './dashboard.css';
import Home from './components/dashboard';
import Activity from './components/activity';
import Settings from './components/settings';
import Groups from './components/groups';
import Friends from './components/friends';
import $ from 'jquery';
import {setGroup,setExpense} from '../../redux/actions/action'
import {useDispatch} from 'react-redux'

const Dashboard = () => {
    const navigate = useNavigate();
    const {user} = useSelector(state => state.user || {});
    const [groups,setGroups] = useState([]);
    const [allUsers,setallUsers] = useState([]);
    const pathname = window.location.pathname.split('/')[1];
    let {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(user == undefined)
        {
            navigate('/login');
        }
        fetch('http://localhost:3001/allGroups',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        })
        .then(res => res.json())
        .then(data=>{
            dispatch(setGroup(data.groups))
            setGroups(data.groups);
        });

        fetch('http://localhost:3001/allUsers',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        })
        .then(res => res.json())
        .then(data=>{
            setallUsers(data.users);
        });

        fetch('http://localhost:3001/getExpenses',{
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('jwt')
            }
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result.expenses)
            dispatch(setExpense(result.expenses))
        })
    },[])

    const [gName,setgName] = useState('');
    const [gType,setgType] = useState('');

    const saveGroupHandler = () => {
        const members = $("#groupMembers").val();
        members.push(user._id);
    
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
                type:gType,
                members
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
        <div className="wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled" style={{marginTop:"20px"}}>
                    <li> 
                        <Link to="/dashboard" className={(pathname === 'dashboard' ? 'active' : '')}><i className="fa fa-tachometer" aria-hidden="true"></i><span>Dashboard</span></Link>
                    </li>
                    {/* <li>
                        <Link to="/friends" className={(window.location.pathname === '/friends' ? 'active' : '')}><i className="fa fa-users" aria-hidden="true"></i><span>Friends</span></Link>
                    </li> */}
                    <li> 
                        <a href='#' data-toggle="collapse" className={(pathname === 'group' ? 'active' : '')} data-target="#collapseGroup" aria-expanded="true" aria-controls="collapseGroup">
                            <i className="fa fa-users" aria-hidden="true"></i><span>Groups</span>
                        </a>
                        <div id="collapseGroup" className={"collapse "+((id!='' && id!=undefined ? 'show' : ''))} aria-labelledby="headingOne" data-parent="#accordion">
                            {
                                groups.map(item=>{
                                    return(
                                        <Link key={item._id} to={`/group/${item._id}`} className={'groupClass '+((id==item._id)?'active':'')}>
                                            <i className="fa fa-tag" aria-hidden="true"></i>
                                            <span>{item.name}</span>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </li>
                    <li>
                        <Link to="/activity" className={(pathname === 'activity' ? 'active' : '')}><i className="fa fa-line-chart" aria-hidden="true"></i><span>Activity</span></Link> 
                    </li>
                    <li> 
                        <Link to="/settings" className={(pathname === 'settings' ? 'active' : '')}><i className="fa fa-cog" aria-hidden="true"></i><span>Settings</span></Link>
                    </li>
                    
                </ul>
            </nav>
            <div id="content">
                {
                    pathname === 'dashboard'
                    ?
                    <Home />
                    :
                    (
                        pathname === 'group'
                        ?
                        <Groups />
                        :
                        (
                            pathname === 'activity'
                            ?
                            <Activity />
                            : 
                            (
                                pathname === 'settings'
                                ?
                                <Settings />
                                :
                                '' 
                            )
                        )
                    )
                }
                <div className="modal fade" id="addGroupModal" tabIndex="-1" role="dialog" aria-labelledby="addGroupModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{marginTop: "20%"}}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="addGroupModalLabel">Start A New GROUP</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='row'>
                                    <div className='col-12'>
                                        <label htmlFor='gName' style={{fontSize: "16px",fontWeight: "600",color:"#999"}}>My group shall be called...</label>
                                        <input placeholder='home...' type="text" value={gName} className='form-control' id='gName' onChange={(e)=>setgName(e.target.value)}/>
                                    </div>
                                    <hr/>
                                    <div className='col-12 mt-3'>
                                        <label htmlFor='groupMembers' style={{fontSize: "16px",fontWeight: "600",color:"#999"}}>ADD MEMBERS</label>
                                    </div>
                                    <div className='col-12'>
                                        <select className="groupMembers form-control" name="groupMembers[]" multiple="multiple" style={{width:"100%"}} id="groupMembers">
                                            {
                                                allUsers.map(item=>{
                                                    if(item._id == user._id)
                                                    {

                                                    }
                                                    else{
                                                        return(
                                                            <option key={item._id} value={item._id}>{item.name}</option>
                                                        )
                                                    }
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='col-12 mt-3'>
                                        <label htmlFor='groupType' style={{fontSize: "16px",fontWeight: "600",color:"#999"}}>Choose Group Type</label>
                                    </div>
                                    <div className='col-12'>
                                        <select className='form-control' id='groupType' onChange={(e)=>setgType(e.target.value)}>
                                            <option value="Home">Home</option>
                                            <option value="Trip">Trip</option>
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
    );
}

export default Dashboard;