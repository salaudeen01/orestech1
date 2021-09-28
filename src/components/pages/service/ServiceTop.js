
import React from 'react'
import { Link } from 'react-router-dom'
import abtimg from '../../images/pages/service/servicebottom.jpg'
import top from '../../images/pages/service/servicetop.jpg'

function ServiceTop() {
    return (
        <div className="et-about-top">
            <div className="w-100">

                <div className="lin-bg-sec">
                    <div className="text-li fs-6 px-md-5 px-sm-2 py-3 bold-sm">
                        <p><Link to="/" className="text-li hover-orng">Home</Link> / Services</p>
                    </div>
                </div>
















            {/* web view  */}
            <div className="container-fluid d-none d-md-block my-8" style={{padding:'0px 90px'}}>
                <div className="row">
                    <div className="col-md-7">
                        <div className="h-100">
                            <div className="position">
                                <img src={top} alt="about" width="100%" height="100%" />
                            </div>
                            <div className="et-s-t-img">
                                <img src={abtimg} alt="about" width="inherit" height="230px" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="bg-white et-s-t-text">
                            <div className="">
                                <p className="text-orng fw-bold fs-6">Our Services</p>
                                <p className="fs-2 text-dk lh-sm bold-sm">Responsive & Professional</p>
                                <p className="text-ld">We go the extra mile on every project. The value we provide clients comes from our level of skill and performance, as well as our knowledge and professionalism. Rest assured, we put the same level of energy into every project we take on.</p>
                            </div>
                            <div className="">
                                <p className="fs-6 fw-bold text-dk">Call us today</p>
                                <p className="text-orng fw-bold"><span className="fas fa-phone-alt" /> <a className="fs-4 text-orng" href="tel: +234 (081) 270-162-92">+234 (081) 270-162-92</a></p>
                                <p className="text-ld">We’re available 24/7, 365 days a year.</p>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>




            {/* mobile view  */}
            <div className="d-block d-md-none px-3">
            <div className="row">
                    
                    <div className="col-md-5">
                        <div className="bg-white mt-5">
                            <div className="">
                                <p className="text-orng fw-bold fs-6">Our Services</p>
                                <p className="fs-2 text-dk lh-sm bold-sm">Responsive & Professional</p>
                                <p className="text-ld">We go the extra mile on every project. The value we provide clients comes from our level of skill and performance, as well as our knowledge and professionalism. Rest assured, we put the same level of energy into every project we take on.</p>
                            </div>
                            <div className="">
                                <p className="fs-6 fw-bold text-dk">Call us today</p>
                                <p className="text-orng fw-bold"><span className="fas fa-phone-alt" /> <a className="fs-4 text-orng" href="tel: +234 (081) 270-162-92">+234 (081) 270-162-92</a></p>
                                <p className="text-ld">We’re available 24/7, 365 days a year.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="h-100">
                            <div className="">
                                <img src={top} alt="about" className="float-end" width="90%" height="" />
                            </div>
                            <div className="et-s-t-img-mob">
                                <img src={abtimg} alt="about" className="float-start" width="50%" height="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>







            </div>
        </div>
    )
}

export default ServiceTop
