import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'
import spark from './images/spark.png'
import bulb from './images/bulb.png'


function HomeServices() {
    return (
        <div className="et-home-services">
            <div className="container-fluid w-100">
                <div className="row">
                    <div className="col-md-4 et-h-s-f hover-zoom">
                        <div className="et-h-s-text">
                            <img src={spark} alt="spark" />
                            <br/>
                            <span className="fs-1 fw-bold">Commercial</span>
                            <br/>
                            <span className="et-h-s-text-btn fw-bold rounded-circle"><PlusOutlined/></span>
                        </div>
                    </div>
                    <div className="col-md-4 et-h-s-s hover-zoom">
                        <div className="et-h-s-text">
                            <img src={spark} alt="spark" />
                            <br/>
                            <span className="fs-1 fw-bold">Industrial</span>
                            <br/>
                            <span className="et-h-s-text-btn fw-bold rounded-circle"><PlusOutlined/></span>
                        </div>
                    </div>
                    <div className="col-md-4 et-h-s-t hover-zoom">
                        <div className="et-h-s-text">
                            <img src={spark} alt="spark" />
                            <br/>
                            <span className="fs-1 fw-bold">Residential</span>
                            <br/>
                            <span className="et-h-s-text-btn fw-bold rounded-circle"><PlusOutlined/></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="et-h-s-slides container">
                <div className="text-center">
                    <span className="text-orng fs-5 fw-bold">24/7 Electrician Services – Safe and Efficient</span>
                    <p className="w-75 mx-auto px-5 fs-1 fw-bold text-dk lh-1">We are a Full Service Electrical Contractor</p>
                </div>

                <Carousel autoplay>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="et-h-s-bulb text-center mx-auto">
                                    <img src={bulb} alt="..." className="et-h-s-bulb-1 mx-auto" />
                                    <span className="et-h-s-bulb-icon"><i class="flaticon flaticon-idea"></i></span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="et-h-s-bulb text-center mx-auto">
                                    <img src={bulb} alt="..." className="et-h-s-bulb-2 mx-auto" />
                                    <span className="et-h-s-bulb-icon"><i class="flaticon flaticon-radiator"></i></span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="et-h-s-bulb text-center mx-auto">
                                    <img src={bulb} alt="..." className="et-h-s-bulb-3 mx-auto" />
                                    <span className="et-h-s-bulb-icon"><i class="flaticon flaticon-air-conditioner"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="et-h-s-bulb text-center mx-auto">
                                    <img src={bulb} alt="..." className="et-h-s-bulb-4 mx-auto" />
                                    <span className="et-h-s-bulb-icon"><i class="flaticon flaticon-air-conditioner"></i></span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="et-h-s-bulb text-center mx-auto">
                                    <img src={bulb} alt="..." className="et-h-s-bulb-5 mx-auto" />
                                    <span className="et-h-s-bulb-icon"><i class="flaticon flaticon-cctv"></i></span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="et-h-s-bulb text-center mx-auto">
                                    <img src={bulb} alt="..." className="et-h-s-bulb-6 mx-auto" />
                                    <span className="et-h-s-bulb-icon"><i class="flaticon flaticon-chip"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>


        </div>
    )
}

export default HomeServices
