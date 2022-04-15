import React from 'react';
import usericon from  '../../../assets/images/user-icon.png';
import usericon1 from  '../../../assets/images/user1.png';
import homeImage from  '../../../assets/images/Home.png';
import travelImage from  '../../../assets/images/travel.jpg';

const home = () => {
    return(
        <div>
            <h5>Dashboard</h5>
            <div className='row'>
                <div className='col-12'>
                    <div className="card">
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-12'>
                                    <p className="card-title">Total summary</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-md-4'>
                                    <p className='summaryTitle'>Total amount you owe</p>
                                    <p className='summaryDesc'>₹12000.00</p>
                                </div>
                                <div className='col-12 col-md-4'>
                                    <p className='summaryTitle'>Total amount owe to you</p>
                                    <p className='summaryDesc'>₹6253.00</p>
                                </div>
                                <div className='col-12 col-md-4'>
                                    <p className='summaryTitle'>Total outstanding balance</p>
                                    <p className='summaryDesc'>₹100.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-12'>
                                    <p className="card-title">Friends summary</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-md-4'>
                                    <p className='summaryTitle'>Friends you owe</p>
                                    <div className='row' style={{marginTop:"10px"}}>
                                        <div className='col-6' style={{display:"flex"}}>
                                            <img src={usericon} alt="user" style={{width:"40px"}}/>
                                            <p className='friendName'>Ironman</p>
                                        </div>
                                        <div className='col-6'>
                                            <p className='friendDesc'>₹62</p>
                                        </div>
                                    </div>
                                    <div className='row' style={{marginTop:"10px"}}>
                                        <div className='col-6' style={{display:"flex"}}>
                                            <img src={usericon1} alt="user" style={{width:"40px"}}/>
                                            <p className='friendName'>Thor</p>
                                        </div>
                                        <div className='col-6'>
                                            <p className='friendDesc'>₹52</p>
                                        </div>
                                    </div>
                                    <div className='row viewAllMargin'>
                                        <div className='col-10' style={{textAlign:"center"}}>
                                            <a href='#' style={{color: "rgba(0,0,0,.7)",fontWeight: "600"}}>View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-4'>
                                    <p className='summaryTitle'>Friends owe to you</p>
                                    <div className='row' style={{marginTop:"10px"}}>
                                        <div className='col-6' style={{display:"flex"}}>
                                            <img src={usericon} alt="user" style={{width:"40px"}}/>
                                            <p className='friendName'>Ironman</p>
                                        </div>
                                        <div className='col-6'>
                                            <p className='friendDesc'>₹62</p>
                                        </div>
                                    </div>
                                    <div className='row' style={{marginTop:"10px"}}>
                                        <div className='col-6' style={{display:"flex"}}>
                                            <img src={usericon1} alt="user" style={{width:"40px"}}/>
                                            <p className='friendName'>Thor</p>
                                        </div>
                                        <div className='col-6'>
                                            <p className='friendDesc'>₹52</p>
                                        </div>
                                    </div>
                                    <div className='row viewAllMargin'>
                                        <div className='col-10' style={{textAlign:"center"}}>
                                            <a href='#' style={{color: "rgba(0,0,0,.7)",fontWeight: "600"}}>View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-4'>
                                    <p className='summaryTitle'>Friends with outstanding balance</p>
                                    <div className='row' style={{marginTop:"10px"}}>
                                        <div className='col-6' style={{display:"flex"}}>
                                            <img src={usericon} alt="user" style={{width:"40px"}}/>
                                            <p className='friendName'>Ironman</p>
                                        </div>
                                        <div className='col-6'>
                                            <p className='friendDesc'>₹62</p>
                                        </div>
                                    </div>
                                    <div className='row' style={{marginTop:"10px"}}>
                                        <div className='col-6' style={{display:"flex"}}>
                                            <img src={usericon1} alt="user" style={{width:"40px"}}/>
                                            <p className='friendName'>Thor</p>
                                        </div>
                                        <div className='col-6'>
                                            <p className='friendDesc'>₹52</p>
                                        </div>
                                    </div>
                                    <div className='row viewAllMargin'>
                                        <div className='col-10' style={{textAlign:"center"}}>
                                            <a href='#' style={{color: "rgba(0,0,0,.7)",fontWeight: "600"}}>View All</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-12'>
                                    <p className="card-title">Groups summary</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-md-4'>
                                    <p className='summaryTitle'>Groups you owe</p>
                                    <div className='row' style={{marginTop:"10px"}}>
                                        <div className='col-6' style={{display:"flex"}}>
                                            <img src={homeImage} alt="user" style={{width:"40px"}}/>
                                            <p className='friendName'>Home</p>
                                        </div>
                                        <div className='col-6'>
                                            <p className='friendDesc'>₹62</p>
                                        </div>
                                    </div>
                                    <div className='row' style={{marginTop:"10px"}}>
                                        <div className='col-6' style={{display:"flex"}}>
                                            <img src={travelImage} alt="user" style={{width:"40px"}}/>
                                            <p className='friendName'>Travel</p>
                                        </div>
                                        <div className='col-6'>
                                            <p className='friendDesc'>₹52</p>
                                        </div>
                                    </div>
                                    <div className='row viewAllMargin'>
                                        <div className='col-10' style={{textAlign:"center"}}>
                                            <a href='#' style={{color: "rgba(0,0,0,.7)",fontWeight: "600"}}>View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-4'>
                                    <p className='summaryTitle'>Groups owe to you</p>
                                    <div className='row' style={{marginTop:"10px"}}>
                                        <div className='col-6' style={{display:"flex"}}>
                                            <img src={homeImage} alt="user" style={{width:"40px"}}/>
                                            <p className='friendName'>Home</p>
                                        </div>
                                        <div className='col-6'>
                                            <p className='friendDesc'>₹62</p>
                                        </div>
                                    </div>
                                    <div className='row' style={{marginTop:"10px"}}>
                                        <div className='col-6' style={{display:"flex"}}>
                                            <img src={travelImage} alt="user" style={{width:"40px"}}/>
                                            <p className='friendName'>Smriti Party</p>
                                        </div>
                                        <div className='col-6'>
                                            <p className='friendDesc'>₹52</p>
                                        </div>
                                    </div>
                                    <div className='row viewAllMargin'>
                                        <div className='col-10' style={{textAlign:"center"}}>
                                            <a href='#' style={{color: "rgba(0,0,0,.7)",fontWeight: "600"}}>View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-4'>
                                    <p className='summaryTitle'>Groups with outstanding balance</p>
                                    <div className='row' style={{marginTop:"10px"}}>
                                        <div className='col-6' style={{display:"flex"}}>
                                            <img src={travelImage} alt="user" style={{width:"40px"}}/>
                                            <p className='friendName'>Travel</p>
                                        </div>
                                        <div className='col-6'>
                                            <p className='friendDesc'>₹62</p>
                                        </div>
                                    </div>
                                    <div className='row' style={{marginTop:"10px"}}>
                                        <div className='col-6' style={{display:"flex"}}>
                                            <img src={homeImage} alt="user" style={{width:"40px"}}/>
                                            <p className='friendName'>Home</p>
                                        </div>
                                        <div className='col-6'>
                                            <p className='friendDesc'>₹52</p>
                                        </div>
                                    </div>
                                    <div className='row viewAllMargin'>
                                        <div className='col-10' style={{textAlign:"center"}}>
                                            <a href='#' style={{color: "rgba(0,0,0,.7)",fontWeight: "600"}}>View All</a>
                                        </div>
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

export default home;