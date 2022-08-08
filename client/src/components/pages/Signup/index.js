import './signup.css';
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [image,setImage] = useState();
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
    
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert('Invalid email');
            return 
        }

        // fetch('http://localhost:3001/signup',{
        //     method:"post",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify({
        //         name,
        //         email,
        //         password
        //     })
        // }).then(res => res.json())
        // .then(data => {
        //     if(data.error)
        //     {
        //         alert(data.error);
        //     }
        //     else{
        //         alert("Signed up successfully");
        //         navigate('/login');
        //     }
        // }).catch(err => {
        //     console.log(err);
        // })

        let formData = new FormData();
        formData.append("name",name);
        formData.append("email",email);
        formData.append("password",password);
        formData.append("image",image);
        fetch('http://localhost:3001/signup',{
            method:"post",
            body:formData
        }).then(res => res.json())
        .then(data => {
            
            if(data.error)
            {
                alert(data.error);
            }
            else{
                alert("Signed up successfully");
                navigate('/login');
            }
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <section>
            <div className="container-fluid signupBg">
                <div className='row'>
                   <div className='col-12 col-md-6 offset-md-3'>
                        <div className="card">
                            <div className="card-body">
                                <form encType='multipart/form-data' onSubmit={submitHandler}>
                                <h5 className="card-title">INTRODUCE YOURSELF</h5>
                                <div className='row'>
                                    <div className='col-12'>
                                        <label htmlFor='name'>Hi there! My name is</label>
                                        <input type="text" className='form-control' id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                                    </div>
                                    <div className='col-12'>
                                        <label htmlFor='email'>Here’s my email address:</label>
                                        <input type="email" className='form-control' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>
                                    <div className='col-12'>
                                        <label htmlFor='password'>And here’s my password:</label>
                                        <input type="password" className='form-control' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                    </div>
                                    <div className='col-12'>
                                        <label htmlFor='picture'>Profile Picture</label>
                                        <input type="file" className='form-control' onChange={(e)=>setImage(e.target.files[0])}/>
                                    </div>
                                    <div className='col-12 mt-3' style={{textAlign:"center"}}>
                                        <button type='submit' className='btn'>Sign me up!</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
}
export default Signup;
