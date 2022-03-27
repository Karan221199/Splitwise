import './login.css';
const Login = () => {
    return (
        <section>
            <div className="container-fluid loginBg">
                <div className='row'>
                   <div className='col-12 col-md-6 offset-md-3'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Log in</h5>
                                <div className='row'>
                                    <div className='col-12'>
                                        <label htmlFor='email'>Email address</label>
                                        <input type="email" className='form-control' id='email'/>
                                    </div>
                                    <div className='col-12'>
                                        <label htmlFor='password'>Password</label>
                                        <input type="password" className='form-control' id='password'/>
                                    </div>

                                    <div className='col-12 mt-3' style={{textAlign:"center"}}>
                                        <button type='button' className='btn'>Log in</button>
                                    </div>
                                    <div className='col-12 mt-3' style={{textAlign:"center"}}>
                                        <a className={"nav-link Text"} href="#">Forgot your password?</a>
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

export default Login;
