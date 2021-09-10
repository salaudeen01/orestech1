import { Image } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../../images/abt-icon1.png'
import icon2 from '../../images/abt-icon2.png'
import abtimg from '../../images/bgg.jpg'
import cert1 from '../../images/certificates/cert1.jpg'
import cert2 from '../../images/certificates/cert2.jpg'
import cert3 from '../../images/certificates/cert3.jpg'

function AboutTop() {
    return (
        <div className="et-about-top">
            <div className="w-100">

                <div className="lin-bg-sec">
                    <div className="text-li fs-6 px-md-5 px-sm-2 py-3 bold-sm">
                        <p><Link to="/" className="text-li hover-orng">Home</Link> / About</p>
                    </div>
                </div>
















            {/* web view  */}
            <div className="container-fluid d-none d-md-block my-8" style={{padding:'0px 90px'}}>
                <div className="row">
                    
                    <div className="col-md-5">
                        <div className="bg-white et-a-t-text">
                            <div className="">
                                <p className="text-orng fw-bold fs-6">Over 25 Years Experience</p>
                                <p className="fs-2 text-dk lh-sm bold-sm">Experienced and Reliable Electrical Contractors</p>
                                <p className="text-ld">We are locally owned and operated which makes our services causal as they are done by friendly and helpful technicians.</p>
                                <p className="text-ld">We started out in 2002. We are locally owned and operated which makes our services causal as they are done by friendly and helpful technicians. Our mission is to service each client with a highly trained and courteous technician that is dependable and always trustworthy.</p>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex">
                                    <div className="me-md-4">
                                        <img alt="..." src={icon1} />
                                    </div>
                                    <div className="">
                                        <span><p className="fs-1 fw-bold text-dk m-0 lh-base">24</p> <span>Skilled & Certified Electricians</span></span>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="me-md-4">
                                        <img alt="..." src={icon2} />
                                    </div>
                                    <div className="">
                                        <span><p className="fs-1 fw-bold text-dk m-0 lh-base">10</p> <span>Skilled & Certified Electricians</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-7">
                        <div className="h-100">
                            <div className="position">
                                <img src={abtimg} alt="about" width="100%" height="100%" />
                            </div>
                            <div className="et-a-t-img">
                                <img src={abtimg} alt="about" width="inherit" height="230px" />
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
                                <p className="text-orng fw-bold fs-6">Over 25 Years Experience</p>
                                <p className="fs-2 text-dk lh-sm bold-sm">Experienced and Reliable Electrical Contractors</p>
                                <p className="text-ld">We are locally owned and operated which makes our services causal as they are done by friendly and helpful technicians.</p>
                                <p className="text-ld">We started out in 2002. We are locally owned and operated which makes our services causal as they are done by friendly and helpful technicians. Our mission is to service each client with a highly trained and courteous technician that is dependable and always trustworthy.</p>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex">
                                    <div className="me-md-4">
                                        <img alt="..." src={icon1} />
                                    </div>
                                    <div className="">
                                        <span><p className="fs-1 fw-bold text-dk m-0 lh-base">24</p> <span>Skilled & Certified Electricians</span></span>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="me-md-4">
                                        <img alt="..." src={icon2} />
                                    </div>
                                    <div className="">
                                        <span><p className="fs-1 fw-bold text-dk m-0 lh-base">10</p> <span>Skilled & Certified Electricians</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="h-100">
                            <div className="">
                                <img src={abtimg} alt="about" className="float-end" width="90%" height="" />
                            </div>
                            <div className="et-a-t-img-mob">
                                <img src={abtimg} alt="about" className="float-start" width="50%" height="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>












                <div className="mt-8">
                    <div>
                        <div className="container-fluid w-100">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="h-100">
                                        <div className="">
                                            <img src={abtimg} alt="about" width="100%" height="100%" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 d-none d-md-block">
                                    <div className="bg-white et-a-t-text">
                                        <p className="text-orng fw-bold fs-6">Certificates</p>
                                        <b className="text-ld fs-1 lh-sm m-0">We are a Qualified & Certified Electrical Company</b>
                                        <p className="text-ls fs-6">We currently employ a team of fully qualified electricians and a number of apprentices. We have been registered with he ECA and therefore all our electricians are JIB registered. Our aim is to keep our services high and our prices very competitive.</p>

                                        <div className="my-4 w-100">
                                           <div className="row">
                                                <div className="col-md-4 col-6">
                                                    <Image alt="certificate 1" src={cert1} />
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <Image alt="certificate 1" src={cert2} />
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <Image alt="certificate 1" src={cert3} />
                                                </div>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 d-block d-md-none">
                                    <div className="bg-white et-a-t-text-mob">
                                        <p className="text-orng fw-bold fs-6">Certificates</p>
                                        <b className="text-ld fs-1 lh-sm m-0">We are a Qualified & Certified Electrical Company</b>
                                        <p className="text-ls fs-6">We currently employ a team of fully qualified electricians and a number of apprentices. We have been registered with he ECA and therefore all our electricians are JIB registered. Our aim is to keep our services high and our prices very competitive.</p>

                                        <div className="my-4 w-100">
                                           <div className="row">
                                                <div className="col-md-4 col-6">
                                                    <Image alt="certificate 1" src={cert1} />
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <Image alt="certificate 1" src={cert2} />
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <Image alt="certificate 1" src={cert3} />
                                                </div>
                                           </div>
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

export default AboutTop
