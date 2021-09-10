
import { ThunderboltFilled } from '@ant-design/icons'
import { Empty } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import top from '../../images/pages/service/servicebottom.jpg'
import abtimg from '../../images/pages/service/servicetop.jpg'
import obj1 from '../../images/pages/service/obj1.jpg'
import obj2 from '../../images/pages/service/obj2.jpg'
import obj3 from '../../images/pages/service/obj3.jpg'
import obj4 from '../../images/pages/service/obj4.jpg'
import obj5 from '../../images/pages/service/obj5.jpg'
import obj6 from '../../images/pages/service/obj6.jpg'
import obj7 from '../../images/pages/service/obj7.jpg'
import obj8 from '../../images/pages/service/obj8.jpg'
import obj9 from '../../images/pages/service/obj9.jpg'


function BlogPageSection() {

    const cards = [
        {
            img: obj1,
            title: 'Electrical Repairs',
            note: 'Electrical repairs should always be handled by a professional electrician.'
        },
        {
            img: obj2,
            title: 'Panel Upgrades',
            note: 'Electrical panel maintenance, therefore, should be part of your regular routine.'
        },
        {
            img: obj3,
            title: 'Lighting Upgrades',
            note:'Lighting can enhance and change the mood, the look and feel of any room or space.'
        },
        {
            img: obj4,
            title: 'Surge Protection',
            note:'An electrical surge can happen for a number of reasons, including lightning strikes.'
        },
        {
            img: obj5,
            title: 'Surge Protection',
            note:'Generators are a great way to protect your home or business from brownouts and power outages.'
        },
        {
            img: obj6,
            title: 'Install a Ceiling Fan',
            note:'If you need a ceiling fan installed, repaired, or updated, our electricians are ready to help you.'
        },
        {
            img: obj7,
            title: 'Outdoor and Motion Lighting',
            note:'Outdoor Lighting can transform your outdoor living space completely.'
        },
        {
            img: obj8,
            title: 'Digital Thermostat Installation',
            note:'Give us a call to plan your Digital Thermostat Installation today.'
        },
        {
            img: obj9,
            title:'Baseboard Heating Installation',
            note:'Baseboard heaters are one of the easiest systems to operate.'
        }
    ]

    return (
        <div className="w-100">
            <div className="et-service my-8">

                    <div className="container-fluid">
                        <div className=" container">
                            <div className="text-center">
                                <p className="fs-1 fw-bold text-dark">What We Offer</p>
                                <div className="w-100 my-5">

                                    <div className="d-inline fw-bold text-center">
                                            <Link className="d-inline mx-3 hover-orng text-orng">All</Link>
                                            <Link className="d-inline mx-3 hover-orng text-dk">Commercial services</Link>
                                            <Link className="d-inline mx-3 hover-orng text-dk">Industrial Services</Link>
                                            <Link className="d-inline mx-3 hover-orng text-dk">Residential Services</Link>
                                    </div>
                                </div>
                            </div>


                            <div className="row my-2">
                                {
                                    cards===0?<Empty/>:
                                    cards.map(({img,title,note})=>(

                                    <div className="col-md-4 my-5">
                                        <div>
                                            <img src={img} alt="" className="w-90 mx-auto"/>
                                        </div>
                                        <div className="w-85 py-5 ps-3 et-h-b-card bg-white">
                                            <div className="">
                                                <p className="text-dk fs-5 pe-md-2 fw-bold lh-sm hover-orng"> {title}</p>
                                                <p className="text-li fs-6 pe-5">{note}</p>
                                                <p className="text-dk fs-6 fw-bold lh-sm hover-orng"> Read More <span className="text-orng fas fa-caret-right" /></p>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }
                            </div>

                            <div className="text-center my-4">
                                <Link className="review-btn" type="submit"><ThunderboltFilled />  <span>Schedule For Service</span></Link>
                            </div>
                            
                        </div>
                    </div>














                    









                {/* web view  */}
                <div className="container-fluid d-none d-md-block my-8" style={{padding:'0px 90px'}}>
                    <div className="row">
                        
                        <div className="col-md-5">
                            <div className="bg-white et-a-t-text">
                                <div className="">
                                    <p className="text-orng fw-bold fs-6">Why us?</p>
                                    <p className="fs-2 text-dk lh-sm bold-sm">Our Electricians are:</p>
                                    <p className="text-ld">We are locally owned and operated which makes our services causal as they are done by friendly and helpful technicians.</p>
                                    <p className="text-ld">We started out in 2002. We are locally owned and operated which makes our services causal as they are done by friendly and helpful technicians. Our mission is to service each client with a highly trained and courteous technician that is dependable and always trustworthy.</p>
                                </div>
                                <div className="d-flex">
                                   
                                </div>
                            </div>
                        </div>


                        <div className="col-md-7">
                            <div className="h-100">
                                <div className="position">
                                    <img src={top} alt="about" width="100%" height="100%" />
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
                                    <p className="text-orng fw-bold fs-6">Why us?</p>
                                    <p className="fs-2 text-dk lh-sm bold-sm">Our Electricians are:</p>
                                    <p className="text-ld">We are locally owned and operated which makes our services causal as they are done by friendly and helpful technicians.</p>
                                    <p className="text-ld">We started out in 2002. We are locally owned and operated which makes our services causal as they are done by friendly and helpful technicians. Our mission is to service each client with a highly trained and courteous technician that is dependable and always trustworthy.</p>
                                </div>
                                <div className="d-flex">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="h-100">
                                <div className="">
                                    <img src={top} alt="about" className="float-end" width="90%" height="" />
                                </div>
                                <div className="et-a-t-img-mob">
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

export default BlogPageSection
