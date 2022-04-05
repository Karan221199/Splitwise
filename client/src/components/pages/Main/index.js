import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
    const {user} = useSelector(state => state.user);
    console.log(user);
    useEffect(()=>{
        if(user == undefined)
        {
            navigate('/login');
        }
    })
   
    return(
        <div>
            <h1>Hello</h1>

        </div>
    );
}

export default Main;