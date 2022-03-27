import './signup.css';

const Signup = () => {
    return (
        <section>
            <div className="container-fluid signupBg">
                <div className='row'>
                   <div className='col-12 col-md-6 offset-md-3'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">INTRODUCE YOURSELF</h5>
                                <div className='row'>
                                    <div className='col-12'>
                                        <label htmlFor='name'>Hi there! My name is</label>
                                        <input type="text" className='form-control' id='name'/>
                                    </div>
                                    <div className='col-12'>
                                        <label htmlFor='email'>Here’s my email address:</label>
                                        <input type="email" className='form-control' id='email'/>
                                    </div>
                                    <div className='col-12'>
                                        <label htmlFor='password'>And here’s my password:</label>
                                        <input type="password" className='form-control' id='password'/>
                                    </div>

                                    <div className='col-12 mt-3' style={{textAlign:"center"}}>
                                        <button type='button' className='btn'>Sign me up!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
}
export default Signup;