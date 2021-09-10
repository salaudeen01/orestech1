import React,{useState} from 'react'
import { PhoneFilled, PlusOutlined, ThunderboltFilled } from '@ant-design/icons'
import { Carousel,Input, Modal, Form, Select, DatePicker } from 'antd'
import spark from '../../images/spark.png'
import bulb from '../../images/bulb.png'
import { Link } from 'react-router-dom'


function HomeServices() {
    const [modal, setModal] = useState(false)


    const showModal =(show)=>{
        setModal(show)
    }
    return (
        <div className="et-home-services position-relative">


            {/* web view  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <div className="d-none d-md-block">
                <div className="container-fluid w-100">
                    <div className="row">
                        <div className="col-md-4 et-h-s-f hover-zoom">
                            <div className="et-h-s-text">
                                <img src={spark} alt="spark" />
                                <br/>
                                <span className="fs-1 fw-bold">Commercial</span>
                                <br/>
                                <Link to="/serviceItems" className="et-h-s-text-btn fw-bold rounded-circle"><PlusOutlined/></Link>
                            </div>
                        </div>
                        <div className="col-md-4 et-h-s-s hover-zoom">
                            <div className="et-h-s-text">
                                <img src={spark} alt="spark" />
                                <br/>
                                <span className="fs-1 fw-bold">Industrial</span>
                                <br/>
                                <Link to="/serviceItems" className="et-h-s-text-btn fw-bold rounded-circle"><PlusOutlined/></Link>
                            </div>
                        </div>
                        <div className="col-md-4 et-h-s-t hover-zoom">
                            <div className="et-h-s-text">
                                <img src={spark} alt="spark" />
                                <br/>
                                <span className="fs-1 fw-bold">Residential</span>
                                <br/>
                                <Link to="/serviceItems" className="et-h-s-text-btn fw-bold rounded-circle"><PlusOutlined/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="et-h-s-slides container">
                    <div className="text-center">
                        <span className="text-orng fs-5 fw-bold">24/7 Electrician Services – Safe and Efficient</span>
                        <p className="px-5 fs-1 fw-bold text-dk lh-1">We are a Full Service Electrical <br/> Contractor</p>
                    </div>

                    <Carousel autoplay className="" dots dotPosition="bottom">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="et-h-s-bulb text-center mx-auto">
                                        <img src={bulb} alt="..." className="et-h-s-bulb-1 mx-auto my-0" />
                                        <span className="et-h-s-bulb-icon"><i class="fas fa-lightbulb"></i></span>
                                        <p className="et-h-s-bulb-text p-0 m-0">
                                            <Link to="/serviceItems" className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Electrical Services</Link>
                                            <p className="text-li my-3 fs-6 px-4">We provide complete electrical design and installation services.</p>
                                            <Link to="/serviceItems" className="text-dk fw-bold hover-orng">More info <i className="text-orng ms-3 fas fa-caret-right"/></Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="et-h-s-bulb text-center mx-auto">
                                        <img src={bulb} alt="..." className="et-h-s-bulb-2 mx-auto" />
                                        <span className="et-h-s-bulb-icon"><i class="flaticon flaticon-radiator"></i></span>
                                        <p className="et-h-s-bulb-text p-0 m-0">
                                            <Link to="/serviceItems" className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Heating Services</Link>
                                            <p className="text-li my-3 fs-6 px-4">We offer energy efficient electric heat products and installation services.</p>
                                            <Link to="/serviceItems" className="text-dk fw-bold hover-orng">More info <i className="text-orng ms-3 fas fa-caret-right"/></Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="et-h-s-bulb text-center mx-auto">
                                        <img src={bulb} alt="..." className="et-h-s-bulb-3 mx-auto" />
                                        <span className="et-h-s-bulb-icon"><i class="flaticon flaticon-air-conditioner"></i></span>
                                        <p className="et-h-s-bulb-text p-0 m-0">
                                            <Link to="/serviceItems" className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Air Conditioning</Link>
                                            <p className="text-li my-3 fs-6 px-4">Our installation service ensure that you get the right air conditioner.</p>
                                            <Link to="/serviceItems" className="text-dk fw-bold hover-orng">More info <i className="text-orng ms-3 fas fa-caret-right"/></Link>
                                        </p>
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
                                        <p className="et-h-s-bulb-text p-0 m-0">
                                            <Link to="/serviceItems" className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Air Conditioning</Link>
                                            <p className="text-li my-3 fs-6 px-4">Our installation service ensure that you get the right air conditioner.</p>
                                            <Link to="/serviceItems" className="text-dk fw-bold hover-orng">More info <i className="text-orng ms-3 fas fa-caret-right"/></Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="et-h-s-bulb text-center mx-auto">
                                        <img src={bulb} alt="..." className="et-h-s-bulb-5 mx-auto" />
                                        <span className="et-h-s-bulb-icon"><i class="flaticon flaticon-cctv"></i></span>
                                        <p className="et-h-s-bulb-text p-0 m-0">
                                            <Link to="/serviceItems" className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Security Systems</Link>
                                            <p className="text-li my-3 fs-6 px-4">You can view events over a monitor from our home.</p>
                                            <Link to="/serviceItems" className="text-dk fw-bold hover-orng">More info <i className="text-orng ms-3 fas fa-caret-right"/></Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="et-h-s-bulb text-center mx-auto">
                                        <img src={bulb} alt="..." className="et-h-s-bulb-6 mx-auto" />
                                        <span className="et-h-s-bulb-icon"><i class="fas fa-solar-panel"></i></span>
                                        <p className="et-h-s-bulb-text p-0 m-0">
                                            <Link to="/serviceItems" className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Panels Changes</Link>
                                            <p className="text-li my-3 fs-6 px-4">Electrical panels are the heart of your electrical system.</p>
                                            <Link to="/serviceItems" className="text-dk fw-bold hover-orng">More info <i className="text-orng ms-3 fas fa-caret-right"/></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>

                <div className="container-fluid w-100 p-0">
                    <div className="et-h-s-p">
                        <br/>
                        <div className="et-h-s-p-card bg-white">
                            <p className="border-left ps-5 p-0 fs-1 fw-bold text-dk">Do you <span className="text-orng">Need Help </span>
                                With Electrical
                                Maintenance?
                            </p>
                            <p className="text-li fs-6 px-4">Our electrical repair and service options are proudly offered to clients. Give us a call today to schedule a free service estimate!</p>

                            <div className="text-center">
                                <Link to="/contact" className="et-h-s-p-btn-orng mx-3" type="submit"><PhoneFilled />  <span>Give Us a Call</span></Link>
                                <button onClick={()=>showModal(true)} className="et-h-s-p-btn-dk mx-3" type="submit"><span className="text-orng"><ThunderboltFilled /></span>  <span>Free Estimate</span></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>












            {/* mobile view >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <div className="d-block d-md-none">
                <div className="container-fluid w-100">
                    <Carousel autoplay>
                        <div className="et-h-s-f hover-zoom">
                            <div className="et-h-s-text">
                                <img src={spark} alt="spark" />
                                <br/>
                                <span className="fs-1 fw-bold">Commercial</span>
                                <br/>
                                <Link to="/serviceItems" className="et-h-s-text-btn fw-bold rounded-circle"><PlusOutlined/></Link>
                            </div>
                        </div>

                        <div className="et-h-s-s hover-zoom">
                            <div className="et-h-s-text">
                                <img src={spark} alt="spark" />
                                <br/>
                                <span className="fs-1 fw-bold">Industrial</span>
                                <br/>
                                <Link to="/serviceItems" className="et-h-s-text-btn fw-bold rounded-circle"><PlusOutlined/></Link>
                            </div>
                        </div>

                        <div className="et-h-s-t hover-zoom">
                            <div className="et-h-s-text">
                                <img src={spark} alt="spark" />
                                <br/>
                                <span className="fs-1 fw-bold">Residential</span>
                                <br/>
                                <Link to="/serviceItems" className="et-h-s-text-btn fw-bold rounded-circle"><PlusOutlined/></Link>
                            </div>
                        </div>
                    </Carousel>
                </div>

                <div className="et-h-s-slides container">
                    <div className="text-center">
                        <span className="text-orng fs-6 fw-bold">24/7 Electrician Services – Safe and Efficient</span>
                        <p className="fs-1 fw-bold text-dk lh-1 mb-5">We are a Full Service Electrical Contractor</p>
                    </div>

                    <Carousel autoplay className="" dots dotPosition="bottom">
                        <div className="col-md-4">
                            <div className="et-h-s-bulb text-center mx-auto">
                                <img src={bulb} alt="..." className="et-h-s-bulb-1 mx-auto my-0" />
                                <span className="et-h-s-bulb-icon"><i class="fas fa-lightbulb"></i></span>
                                <p className="et-h-s-bulb-text p-0 m-0">
                                    <Link to="/serviceItems" className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Electrical Services</Link>
                                    <p className="text-li my-3 fs-6 px-4">We provide complete electrical design and installation services.</p>
                                    <Link to="/serviceItems" className="text-dk fw-bold hover-orng">More info <i className="text-orng ms-3 fas fa-caret-right"/></Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="et-h-s-bulb text-center mx-auto">
                                <img src={bulb} alt="..." className="et-h-s-bulb-2 mx-auto" />
                                <span className="et-h-s-bulb-icon"><i class="flaticon flaticon-radiator"></i></span>
                                <p className="et-h-s-bulb-text p-0 m-0">
                                    <Link to="/serviceItems" className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Heating Services</Link>
                                    <p className="text-li my-3 fs-6 px-4">We offer energy efficient electric heat products and installation services.</p>
                                    <Link to="/serviceItems" className="text-dk fw-bold hover-orng">More info <i className="text-orng ms-3 fas fa-caret-right"/></Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="et-h-s-bulb text-center mx-auto">
                                <img src={bulb} alt="..." className="et-h-s-bulb-3 mx-auto" />
                                <span className="et-h-s-bulb-icon"><i class="flaticon flaticon-air-conditioner"></i></span>
                                <p className="et-h-s-bulb-text p-0 m-0">
                                    <Link to="/serviceItems" className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Air Conditioning</Link>
                                    <p className="text-li my-3 fs-6 px-4">Our installation service ensure that you get the right air conditioner.</p>
                                    <Link to="/serviceItems" className="text-dk fw-bold hover-orng">More info <i className="text-orng ms-3 fas fa-caret-right"/></Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="et-h-s-bulb text-center mx-auto">
                                <img src={bulb} alt="..." className="et-h-s-bulb-4 mx-auto" />
                                <span className="et-h-s-bulb-icon"><i class="flaticon flaticon-air-conditioner"></i></span>
                                <p className="et-h-s-bulb-text p-0 m-0">
                                    <Link to="/serviceItems" className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Air Conditioning</Link>
                                    <p className="text-li my-3 fs-6 px-4">Our installation service ensure that you get the right air conditioner.</p>
                                    <Link to="/serviceItems" className="text-dk fw-bold hover-orng">More info <i className="text-orng ms-3 fas fa-caret-right"/></Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="et-h-s-bulb text-center mx-auto">
                                <img src={bulb} alt="..." className="et-h-s-bulb-5 mx-auto" />
                                <span className="et-h-s-bulb-icon"><i class="flaticon flaticon-cctv"></i></span>
                                <p className="et-h-s-bulb-text p-0 m-0">
                                    <Link to="/serviceItems" className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Security Systems</Link>
                                    <p className="text-li my-3 fs-6 px-4">You can view events over a monitor from our home.</p>
                                    <Link to="/serviceItems" className="text-dk fw-bold hover-orng">More info <i className="text-orng ms-3 fas fa-caret-right"/></Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="et-h-s-bulb text-center mx-auto">
                                <img src={bulb} alt="..." className="et-h-s-bulb-6 mx-auto" />
                                <span className="et-h-s-bulb-icon"><i class="fas fa-solar-panel"></i></span>
                                <p className="et-h-s-bulb-text p-0 m-0">
                                    <Link to="/serviceItems" className="hover-orng fw-bold text-dk fs-4 my-1 p-0">Panels Changes</Link>
                                    <p className="text-li my-3 fs-6 px-4">Electrical panels are the heart of your electrical system.</p>
                                    <Link to="/serviceItems" className="text-dk fw-bold hover-orng">More info <i className="text-orng ms-3 fas fa-caret-right"/></Link>
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </div>

                <div className="container-fluid w-100 p-0">
                    <div className="et-h-s-p-mob">
                        <br/>
                        <div className="et-h-s-p-card-mob bg-white">
                            <p className="border-left ps-5 p-0 fs-1 fw-bold text-dk">Do you <span className="text-orng">Need Help </span>
                                With Electrical
                                Maintenance?
                            </p>
                            <p className="text-li fs-6 px-4">Our electrical repair and service options are proudly offered to clients. Give us a call today to schedule a free service estimate!</p>

                            <div className="text-center">
                                <Link to="/contact" className="et-h-s-p-btn-orng mx-3" type="submit"><PhoneFilled />  <span>Give Us a Call</span></Link>
                                <button onClick={()=> showModal(true)} className="et-h-s-p-btn-dk mx-3" type="submit"><span className="text-orng"><ThunderboltFilled /></span>  <span>Free Estimate</span></button>
                            </div>

                        </div>
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
    )
}

export default HomeServices
