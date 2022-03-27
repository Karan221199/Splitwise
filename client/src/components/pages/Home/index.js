import React from 'react';
import './Home.css';
import plane from '../../assets/images/plane.svg';
import smallPlane from '../../assets/images/smallPlane.svg';
import smallHeart from '../../assets/images/smallHeart.svg';
import smallSign from '../../assets/images/smallSign.svg';
import smallHome from '../../assets/images/smallHome.svg';
import iphone from '../../assets/images/iphone.svg';
import android from '../../assets/images/android.svg';
import asset1 from '../../assets/images/asset1.png';
import asset2 from '../../assets/images/asset2.png';
import asset3 from '../../assets/images/asset3.png';
import asset4 from '../../assets/images/asset4.png';
import asset5 from '../../assets/images/asset5.png';

const Home = () => {
    return (
        <section>
        <div className='homeBg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 mainHeading'>
                        <h1 className='heading1'>Less stress when <br/> sharing expenses <br/> <span style={{color: "#1CC29F"}}>on trips.</span></h1>
                        <ul className="mt-4 flexIcons">
                            <li className="">
                            <a href="#">
                                <img className='smallIcons' src={smallPlane} alt="small plane"/>
                            </a>
                            </li>
                            <li className="iconMargin">
                            <a href="#">
                                <img className='smallIcons' src={smallHome} alt="small home"/>
                            </a>
                            </li>
                            <li className="iconMargin">
                            <a href="#" >
                                <img className='smallIcons' src={smallHeart} alt="small heart"/>
                            </a>
                            </li>
                            <li className="iconMargin">
                            <a href="#">
                                <img className='smallIcons' src={smallSign} alt="small sign"/>
                            </a>
                            </li>
                        </ul>
                        <div className='row smallScreenPlain'>
                            <div className='col-12 col-md-6'><img src={plane} alt='plane.svg'/></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-7'>
                                <p className='heading2'>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 offset-3 col-md-4' style={{textAlign: "center"}}>
                                <a className={"nav-link activeText"} href="/signup" style={{padding: "17px"}}>Sign up</a>
                            </div>
                        </div>
                        <p className="mt-4 text-charcoal text-sm flex h-4 items-center" style={{fontSize:"15px"}}>
                            Free for <a className="inline-flex items-center h-4" href="https://apps.apple.com/us/app/splitwise/id458023433">
                                <img  src={iphone} alt="iphone"/>
                                <span> iPhone</span>
                                </a>, <a className="inline-flex items-center h-4" href="https://play.google.com/store/apps/details?id=com.Splitwise.SplitwiseMobile">
                                <img  src={android} alt="android"/>
                                <span> Android</span>
                                </a>,&nbsp;and web.
                        </p>
                    </div>
                    <div className='col-12 col-md-6 largeScreenPlain'><img src={plane} alt='plane.svg'/></div>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-md-6 ss1'>
                    <div className='mt-3'>
                        <h3>
                        Track balances
                        </h3>
                        <p>
                        Keep track of shared expenses,<br/> balances, and who owes who.
                        </p>
                    </div>
                    <img src={asset1} alt="asset1"/>
                </div>
                <div className='col-12 col-md-6 ss2'>
                    <div className='mt-3'>
                        <h3>
                        Organize expenses
                        </h3>
                        <p>
                        Split expenses with any group: trips,<br/> housemates, friends, and family.
                        </p>
                    </div>
                    <img src={asset2} alt="asset2"/>
                </div>
                <div className='col-12 col-md-6 ss3'>
                    <div className='mt-3'>
                        <h3>
                        Add expenses easily
                        </h3>
                        <p>
                        Quickly add expenses on the go before<br/> you forget who paid.
                        </p>
                    </div>
                    <img src={asset3} alt="asset3"/>
                </div>
                <div className='col-12 col-md-6 ss1'>
                    <div className='mt-3'>
                        <h3>
                        Pay friends back
                        </h3>
                        <p>
                        Settle up with a friend and record any<br/> cash or online payment.
                        </p>
                    </div>
                    <img src={asset4} alt="asset4"/>
                </div>
                <div className='col-12 col-md-6 ss4 textVCenter'>
                    <h3 style={{fontWeight:"bold",marginTop: "30px"}}>
                    Get even more with PRO
                    </h3>
                    <p style={{fontSize:"17px",fontWeight:"500"}}>
                    Get even more organized with receipt scanning,<br/> charts and graphs, currency conversion, and<br/> more!
                    </p>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <a className={"nav-link signupbtn"} href="/signup">Sign up</a>
                    </div>
                    
                </div>
                <div className='col-12 col-md-6 ss4'>
                    <div className='mt-5'>
                        <img src={asset5} alt="asset5"/>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Home;