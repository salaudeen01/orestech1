import React from 'react'
import home from '../../images/home1.jpg'
import home1 from '../../images/home1.1.jpg'
import home2 from '../../images/home1.2.jpg'
import sign from '../../images/home1.3.png'

import { CheckOutlined } from '@ant-design/icons'

function HomeAbout() {
    return (
        <div className="et-home-about mb-5">

            {/* web view  */}
            <div className="container-fluid d-none d-md-block" style={{padding:'0px 90px'}}>
                <div className="row">
                    <div className="col-md-7">
                        <div className="h-100">
                            <div className="">
                                <img src={home} alt="about" width="inherit" height="100%" />
                            </div>
                            <div className="et-home-about-img">
                                <img src={home1} alt="about" width="inherit" height="230px" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="bg-white et-home-about-text">
                            <p className="text-orng fw-bold fs-6">About Us</p>
                            <h1 className="fw-bold text-ld">Outstanding Residential & Commercial Services</h1>
                            <p className="text-ls fs-6">All of our services are backed by our 100% satisfaction guarantee. Our electricians can install anything from new security lighting for your outdoors to a whole home generator that will keep your appliances working during a power outage.</p>

                            <div className="text-ls fw-bold">
                                <p><span className="text-orng fw-bolder fs-6"><CheckOutlined/></span>  Full-service electrical layout, design</p>
                                <p><span className="text-orng fw-bolder fs-6"><CheckOutlined/></span>  Wiring and installation/upgrades</p>
                                <p><span className="text-orng fw-bolder fs-6"><CheckOutlined/></span>  Emergency power solutions (generators)</p>
                                <p><span className="text-orng fw-bolder fs-6"><CheckOutlined/></span>  Virtually any electrical needs you have – just ask!</p>
                            </div>
                            <div className="my-4 w-100">
                                <div className="w-50 float-start">
                                    <div className="float-start">
                                        <img src={home2} alt="engineer" className="rounded-circle" />
                                    </div>
                                    <div className="p-2">
                                        <span className="text-ld fs-5 fw-bold px-3">Mark Smith</span><br/>
                                        <span className="text-ls px-3">Your own electrician</span>
                                    </div>
                                </div>
                                <div className="float-end">
                                    <div className="mx-5 my-2">
                                        <img src={sign} alt="signature" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* mobile view  */}
            <div className="d-block d-md-none px-3">
            <div className="row">
                    <div className="col-md-7">
                        <div className="h-100">
                            <div className="">
                                <img src={home} alt="about" className="float-end" width="90%" height="" />
                            </div>
                            <div className="et-home-about-img-mob">
                                <img src={home1} alt="about" className="float-start" width="50%" height="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="bg-white mt-5">
                            <p className="text-orng fw-bold fs-6 lh-1 m-0">About Us</p>
                            <p className="fw-bold fs-1 text-dk mx-0 pe-3 lh-sm">Outstanding Residential & Commercial Services</p>
                            <p className="text-ls fs-6">All of our services are backed by our 100% satisfaction guarantee. Our electricians can install anything from new security lighting for your outdoors to a whole home generator that will keep your appliances working during a power outage.</p>

                            <div className="text-ls fw-bold">
                                <p><span className="text-orng fw-bolder fs-6"><CheckOutlined/></span>  Full-service electrical layout, design</p>
                                <p><span className="text-orng fw-bolder fs-6"><CheckOutlined/></span>  Wiring and installation/upgrades</p>
                                <p><span className="text-orng fw-bolder fs-6"><CheckOutlined/></span>  Emergency power solutions (generators)</p>
                                <p><span className="text-orng fw-bolder fs-6"><CheckOutlined/></span>  Virtually any electrical needs you have – just ask!</p>
                            </div>
                            <div className="my-4 w-100">
                                <div className="float-start">
                                    <div className="float-start">
                                        <img src={home2} alt="engineer" className="rounded-circle" />
                                    </div>
                                    <div className="float-end mx-3">
                                        <span className="text-ld fs-5 fw-bold">Mark Smith</span><br/>
                                        <span className="text-ls">Your own electrician</span>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="float-none">
                                        <img src={sign} width="35%" alt="signature" />
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

export default HomeAbout
