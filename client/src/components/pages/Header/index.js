import React from 'react';
import brand from '../../assets/images/brand.svg';
import './Header.css';

const Header = () =>{
    console.log(window.location.pathname);
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><img src={brand} alt="BrandImage"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
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
        </nav>
    );
}
export default Header;