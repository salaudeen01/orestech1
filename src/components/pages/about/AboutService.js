import { PhoneFilled, ThunderboltFilled } from '@ant-design/icons'
import { Carousel, Modal, Form, Select, DatePicker, Input } from 'antd'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import bulb from '../../images/bulb.png'


function AboutService() {
    const [modal, setModal] = useState(false)
    
    
    const showModal =(show)=>{
        setModal(show)
    }
    return (
        <div className="w-100">
            <div className="et-about-service">

                <div className="mb-5 px-4">
                    <div className="text-center">
                        <p className="text-orng fw-bold fs-6">Our Advantages</p>
                        <b className="text-ld fs-2">Reasons You Should Call Us</b>
                        <p className="w-50 d-none d-md-block mx-auto">Electrician is your single source for a complete range of high-quality electrical services, including design/build, engineering and maintenance</p>
                        <p className="d-block d-md-none">Electrician is your single source for a complete range of high-quality electrical services, including design/build, engineering and maintenance</p>
                    </div>


                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-md-4 my-2">
                                <div className="number-card">
                                    <p>1</p>
                                </div>
                                <div className="number-card-overlay shadow-sm py-md-5">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <p className="text-orng fs-icon m-0"><span className="fa fa-clock" /></p>
                                            </div>
                                            <div className="col-md-10">
                                                <p className="fs-4 fw-bold lh-sm text-ls">24/7 Emergency Services</p>
                                                <p className="fs-6">24/7 emergency electrician you can trust.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 my-2">
                                <div className="number-card">
                                    <p>2</p>
                                </div>
                                <div className="number-card-overlay shadow-sm py-md-5">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <p className="text-orng fs-icon m-0"><span className="fa fa-calculator" /></p>
                                            </div>
                                            <div className="col-md-10">
                                                <p className="fs-4 fw-bold lh-sm text-ls">Free Estimates</p>
                                                <p className="fs-6">Yes, we offer free estimates for electrical additions or replacements.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 my-2">
                                <div className="number-card">
                                    <p>3</p>
                                </div>
                                <div className="number-card-overlay shadow-sm py-md-5">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <p className="text-orng fs-icon m-0"><span className="fa fa-tags" /></p>
                                            </div>
                                            <div className="col-md-10">
                                                <p className="fs-4 fw-bold lh-sm text-ls">Low Price Guarantee</p>
                                                <p className="fs-6">We strive to offer the lowest price on the market.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* web view >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div className="container-fluid w-100 p-0 d-none d-md-block">
                    <div className="et-about-service-card-con">
                        <br/>
                        <div className="et-about-service-card bg-white">
                            <p className="border-danger border-start border-4 ps-5 p-0 fs-1 fw-bold text-dk">Do you <span className="text-orng">Need Help </span>
                                With Electrical
                                Maintenance?
                            </p>
                            <p className="text-li fs-6 px-4">Our electrical repair and service options are proudly offered to clients. Give us a call today to schedule a free service estimate!</p>

                            <div className="text-center">
                                <Link to="/contact" className="et-h-s-p-btn-orng mx-3" type="submit"><PhoneFilled />  <span>Give Us a Call</span></Link>
                                <Link onClick={()=> showModal(true)} className="et-h-s-p-btn-dk mx-3" type="submit"><span className="text-orng"><ThunderboltFilled /></span>  <span>Appointment</span></Link>
                            </div>

                        </div>
                    </div>
                </div>

                {/* mobile view >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div className="container-fluid w-100 p-0 d-block d-md-none">
                    <div className="et-about-service-card-con-mob">
                        <br/>
                        <div className="et-about-service-card-mob bg-white">
                            <p className="border-danger border-start border-4 ps-5 p-0 fs-1 fw-bold text-dk">Do you <span className="text-orng">Need Help </span>
                                With Electrical
                                Maintenance?
                            </p>
                            <p className="text-li fs-6 px-4">Our electrical repair and service options are proudly offered to clients. Give us a call today to schedule a free service estimate!</p>

                            <div className="text-center">
                                <Link to="/contact" className="et-h-s-p-btn-orng mx-3" type="submit"><PhoneFilled />  <span>Give Us a Call</span></Link>
                                <Link onClick={()=> showModal(true)} className="et-h-s-p-btn-dk mx-3" type="submit"><span className="text-orng"><ThunderboltFilled /></span>  <span>Appointment</span></Link>
                            </div>

                        </div>
                    </div>
                </div>


{/* meet our team section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div className="my-8">
                    <div className="text-center">
                        <p className="text-orng fw-bold fs-6">Our Team</p>
                        <b className="text-ld fs-2">Fully Qualified Electricians</b>
                        <p className="w-50 d-none d-md-block mx-auto">All our personnel operate within an Integrated Management System to ensure the delivery of services that are at an exception level of quality, reliability, and value</p>
                        <p className="d-block d-md-none">All our personnel operate within an Integrated Management System to ensure the delivery of services that are at an exception level of quality, reliability, and value</p>
                    </div>



                    <div>
                        {/* web view >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        <div className="d-none d-md-block">
                            <Carousel autoplay className="" dots dotPosition="bottom">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="et-a-s-bulb text-center mx-auto">
                                                <img src={bulb} alt="..." className="et-a-s-bulb-1 mx-auto my-0" />
                                                <Link className="p-0 m-0">
                                                    <p className="hover-orng fw-bold text-dk fs-4 my-1 p-0">David Anthony</p>
                                                    <p className="text-li my-3 fs-6 px-4">Master Electrician</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="et-a-s-bulb text-center mx-auto">
                                                <img src={bulb} alt="..." className="et-a-s-bulb-2 mx-auto" />
                                                <Link className="p-0 m-0">
                                                    <p className="hover-orng fw-bold text-dk fs-4 my-1 p-0">James Campbell</p>
                                                    <p className="text-li my-3 fs-6 px-4">Office Manager</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="et-a-s-bulb text-center mx-auto">
                                                <img src={bulb} alt="..." className="et-a-s-bulb-3 mx-auto" />
                                                <Link className="p-0 m-0">
                                                    <p className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Charles Shepard</p>
                                                    <p className="text-li my-3 fs-6 px-4">Our installation service ensure that you get the right air conditioner.</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="et-a-s-bulb text-center mx-auto">
                                                <img src={bulb} alt="..." className="et-a-s-bulb-4 mx-auto" />
                                                <Link className="p-0 m-0">
                                                    <p className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Charles Shepard</p>
                                                    <p className="text-li my-3 fs-6 px-4">Electrician</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="et-a-s-bulb text-center mx-auto">
                                                <img src={bulb} alt="..." className="et-a-s-bulb-5 mx-auto" />
                                                <Link className="p-0 m-0">
                                                    <p className="hover-orng fw-bold text-dk fs-4 my-1 p-0">David Anthony</p>
                                                    <p className="text-li my-3 fs-6 px-4">Master Electrician</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="et-a-s-bulb text-center mx-auto">
                                                <img src={bulb} alt="..." className="et-a-s-bulb-6 mx-auto" />
                                                <Link className="p-0 m-0">
                                                    <p className="hover-orng fw-bold text-dk fs-4 my-1 p-0">James Campbell</p>
                                                    <p className="text-li my-3 fs-6 px-4">Office Manager</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>


                        {/* mobile view >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        <div className="d-block d-md-none">
                            <Carousel autoplay className="" dots dotPosition="bottom">
                                <div className="">
                                    <div className="et-a-s-bulb text-center mx-auto">
                                        <img src={bulb} alt="..." className="et-a-s-bulb-1 mx-auto my-0" />
                                        <Link className="p-0 m-0">
                                            <p className="hover-orng fw-bold text-dk fs-4 my-1 p-0">David Anthony</p>
                                            <p className="text-li my-3 fs-6 px-4">Master Electrician</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="et-a-s-bulb text-center mx-auto">
                                        <img src={bulb} alt="..." className="et-a-s-bulb-2 mx-auto" />
                                        <Link className="p-0 m-0">
                                            <p className="hover-orng fw-bold text-dk fs-4 my-1 p-0">James Campbell</p>
                                            <p className="text-li my-3 fs-6 px-4">Office Manager</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="et-a-s-bulb text-center mx-auto">
                                        <img src={bulb} alt="..." className="et-a-s-bulb-3 mx-auto" />
                                        <Link className="p-0 m-0">
                                            <p className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Charles Shepard</p>
                                            <p className="text-li my-3 fs-6 px-4">Office Manager</p>
                                        </Link>
                                    </div>
                                </div>
                            </Carousel>
                        </div>







                    </div>
                </div>






                <Modal
                className="w-50"
                title={(<p className="px-md-4 my-4 fs-1 fw-bold text-dk">Make an Appointment</p>)}
                visible={modal}
                onOk={() => setModal(false)}
                onCancel={() => setModal(false)}
                footer={null}
                >
                    <div className="container-fluid ">
                        <Form className="row ">
                            <Form.Item className="my-3 col-md-12">
                                <Input size="large" className="shadow-sm h-in" placeholder="Your Name *" />
                            </Form.Item>
                            <Form.Item className="my-3 col-md-6 px-md-1">
                                <Input size="large" className="shadow-sm h-in" placeholder="Your e-mail address *" />
                            </Form.Item>
                            <Form.Item className="my-3 col-md-6 px-md-1">
                                <Input size="large" className="shadow-sm h-in" placeholder="Your phone number *" />
                            </Form.Item>
                            <Form.Item className="my-3 col-md-12">
                                <Input size="large" className="shadow-sm h-in" placeholder="Your Address *" />
                            </Form.Item>
                            <Form.Item className="my-3 col-md-12">
                                <Select defaultValue='service' size="large" className="shadow-sm">
                                    <Select.Option value="service" key="1">Service</Select.Option>
                                    <Select.Option value="industrial" key="2">Industrial Service</Select.Option>
                                    <Select.Option value="commercial" key="3">Commercial Service</Select.Option>
                                    <Select.Option value="residential" key="4">Residential Service</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item className="my-3 col-md-12">
                                <DatePicker size="large" className="shadow-sm h-in w-100" placeholder="Date of visit" />
                            </Form.Item>
                            <Form.Item className="my-3 col-md-12">
                                <Input.TextArea size="large" className="shadow-sm" placeholder="Your Comment *" />
                            </Form.Item>


                            <Form.Item className="my-3 mx-auto">
                                <Link className="review-btn" type="submit"><ThunderboltFilled />  <span>Explore Services</span></Link>
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>





            </div>
        </div>
    )
}

export default AboutService
