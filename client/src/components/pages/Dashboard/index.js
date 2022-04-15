import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import './dashboard.css';
import Home from './components/dashboard';
import Activity from './components/activity';
import Settings from './components/settings';
import Groups from './components/groups';
import Friends from './components/friends';

const Dashboard = () => {
    const navigate = useNavigate();
    const {user} = useSelector(state => state.user || {});
    
    useEffect(()=>{
        if(user == undefined)
        {
            navigate('/login');
        }
    })
   
    return(
        <div className="wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled">
                    <li className="active">
                        <ul className="list-unstyled">
                            <li> 
                                <Link to="/dashboard" className={(window.location.pathname === '/dashboard' ? 'active' : '')}><i className="fa fa-tachometer" aria-hidden="true"></i><span>Dashboard</span></Link>
                            </li>
                            <li>
                                <Link to="/friends" className={(window.location.pathname === '/friends' ? 'active' : '')}><i className="fa fa-users" aria-hidden="true"></i><span>Friends</span></Link>
                            </li>
                            <li> 
                                <Link to="/groups" className={(window.location.pathname === '/groups' ? 'active' : '')}><i className="fa fa-users" aria-hidden="true"></i><span>Groups</span></Link>
                            </li>
                            <li>
                                <Link to="/activity" className={(window.location.pathname === '/activity' ? 'active' : '')}><i className="fa fa-line-chart" aria-hidden="true"></i><span>Activity</span></Link> 
                            </li>
                            <li> 
                                <Link to="/settings" className={(window.location.pathname === '/settings' ? 'active' : '')}><i className="fa fa-cog" aria-hidden="true"></i><span>Settings</span></Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div id="content">
                {
                    window.location.pathname === '/dashboard'
                    ?
                    <Home />
                    :
                    (
                        window.location.pathname === '/groups'
                        ?
                        <Groups />
                        :
                        (
                            window.location.pathname === '/friends'
                            ?
                            <Friends />
                            : 
                            (
                                window.location.pathname === '/settings'
                                ?
                                <Settings />
                                :
                                '' 
                            )
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Dashboard;