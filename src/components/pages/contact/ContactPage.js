
import { ThunderboltFilled } from '@ant-design/icons'
import { Input, Collapse, Empty } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function ContactPage() {


    return (
        <div className="et-about-top">
            <div className="w-100">

                <div className="lin-bg-sec">
                    <div className="text-li fs-6 px-md-5 px-sm-2 py-3 bold-sm">
                        <p><Link to="/" className="text-li hover-orng">Home</Link> / Contact</p>
                    </div>
                </div>





                <div className="w-100">
                    <iframe title="contact location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.73962957629!2d3.343499575336496!3d6.554518648309359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59c72236baaf9755!2sTechEnd%20Incubation!5e0!3m2!1sen!2sng!4v1631195594021!5m2!1sen!2sng" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                

                <div className="bg-white container et-c-up">
                    <div className="row p-md-5 p-3">
                        <div className="col-md-4 p-md-5">
                            <div className="d-flex">
                                <div className="px-2">
                                    <span className="fas fa-map-marker-alt fs-2 text-orng" />
                                </div>
                                <div className="px-2">
                                    <p className="fs-6 ff-pop fw-bold">Address:</p>
                                    <p className="fs-6 text-ls bold-sm">Electrician Company
                                    8494 Signal Hill Road Manassas,
                                    VA, 20110</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 p-md-5">
                            <div className="d-flex">
                                <div className="px-2">
                                    <span className="far fa-clock fs-2 text-orng" />
                                </div>
                                <div className="px-2">
                                    <p className="fs-6 ff-pop fw-bold">Work Hours:</p>
                                    <p className="fs-6 text-ls bold-sm">
                                        Mon-Fri 08:00 AM - 05:00 PM
                                        Sat-Sun: Emergency only</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 p-md-5">
                            <div className="d-flex">
                                <div className="px-2">
                                    <span className="fas fa-phone-alt fs-2 text-orng" />
                                </div>
                                <div className="px-2">
                                    <p className="fs-6 ff-pop fw-bold">Phone Numbers:</p>
                                    <p className="fs-6 text-ls bold-sm">
                                        <a className="text-ls hover-orng" href="tel:1 (800) 765-43-21">1 (800) 765-43-21</a> (Appointments)
                                        <br/>
                                        <a className="text-ls hover-orng" href="tel:1 (800) 765-43-22 ">1 (800) 765-43-22 </a> (Office)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="my-8">
                        <div className="text-center">
                            <p className="text-orng fw-bold fs-5">Contact Form</p>
                            <p className="fs-1 text-dk lh-sm fw-bold">Get In Touch with Us</p>
                            <p className="text-ls bold-sm fs-6 w-50 mx-auto px-5 d-none d-md-block">Are you stumped by a home wiring project or problem? Fill out the form with the details of your situation and we can come to your aid.</p>
                            <p className="text-ls bold-sm fs-6 px-2 d-block d-md-none">Are you stumped by a home wiring project or problem? Fill out the form with the details of your situation and we can come to your aid.</p>
                        </div>


                        <div className="container px-md-5">
                            <div className="row px-md-5">
                                <div className="my-3 col-md-12">
                                    <Input size="large" className="shadow-sm h-in" placeholder="Your Name *" />
                                </div>
                                <div className="my-3 col-md-6">
                                    <Input size="large" className="shadow-sm h-in" placeholder="Your e-mail address *" />
                                </div>
                                <div className="my-3 col-md-6">
                                    <Input size="large" className="shadow-sm h-in" placeholder="Your phone number *" />
                                </div>
                                <div className="my-3 col-md-12">
                                    <Input.TextArea size="large" className="shadow-sm" placeholder="Question In Detail *" />
                                </div>
                                <p className="fs-6 text-center">
                                    All Electrical work must be done by a qualified licensed electrician.
                                </p>
                                <div className="my-3 text-center mx-auto">
                                    <Link className="review-btn" type="submit"><ThunderboltFilled />  <span>Contact Us</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>





               


            </div>
        </div>
    )
}

export default ContactPage
