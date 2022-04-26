import React from 'react';
import brand from '../../assets/images/brand.svg';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/action';
import {useNavigate} from 'react-router-dom';
import userImage from '../../assets/images/user1.png'
import $ from 'jquery';

const Header = () =>{
    
    const {user} = useSelector(state=>state.user || {});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const collapseSidebar = () => {
        $('#sidebar').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.collapse.in').toggleClass('in');
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><img src={brand} alt="BrandImage"/></a>
            {
                user==null 
                ?
                <button id='HeaderCollpase' className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                :
                ''
            }
            {
                user==null 
                ?
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className={"nav-item "+((window.location.pathname === '/login') ? 'active' : '')}>
                            <a className={"nav-link " + ((window.location.pathname === '/login')? 'activeText' : 'Text')} href="/login">Log in</a>
                        </li>
                        <li className={"nav-item "+((window.location.pathname === '/signup') ? 'active' : '')}>
                            <a className={"nav-link "+ ((window.location.pathname === '/signup')? 'activeText' : 'Text')} href="/signup">Sign up</a>
                        </li>
                    </ul>
                </div>
                :
                ''
            }
            {
                user!=null
                ?
                <button id='sidebarCollapse' className="navbar-toggler" type="button" onClick={collapseSidebar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                :
                ''
            }
            
            {
                user!=null 
                ?
                <ul className="navbar-nav smallScreen ml-auto" style={{margin:"0px 30px"}}>
                    <li className={"nav-item dropdown"} style={{display:"flex"}}>
                        <img src={userImage} alt='user' style={{width:"40px"}}/>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {user.name}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Your account</a>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#addGroupModal">Create a group</a>
                            <a className="dropdown-item" href="javascript:void(0)"
                            onClick={()=>{
                                localStorage.clear()
                                dispatch(logoutUser())
                                navigate('/')
                            }}>Log out</a>
                        </div>
                    </li>
                </ul>
                :
                ''
            }
        </nav>
    );
}
export default Header;