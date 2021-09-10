
import { ThunderboltFilled } from '@ant-design/icons'
import { Input, Modal,DatePicker,Form,Select, Divider } from 'antd'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import top from '../../images/pages/service/item/objtop.jpg'
import obj1 from '../../images/pages/service/item/obj1.jpg'
import obj2 from '../../images/pages/service/item/obj2.jpg'

function ServiceItemTop() {
    const [modal, setModal] = useState(false)
    
    
    const showModal =(show)=>{
        setModal(show)
    }
    return (
        <div className="et-about-top">
            <div className="w-100">

                <div className="lin-bg-sec">
                    <div className="text-li fs-6 px-md-5 px-sm-2 py-3 bold-sm">
                        <p><Link to="/" className="text-li hover-orng">Home</Link> / <Link to="/service" className="text-li hover-orng">Services</Link> / Electrical Repairs</p>
                    </div>
                </div>


                <div className="my-8">
                    <div className="container p-md-0">
                        <div className="row">

                            {/* left section of items >>>>> */}
                            <div className="col-md-4 d-none d-md-block">
                                <div classNam="my-3">
                                    <div className="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                                        <div className="accordion-item border-0 my-0">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                            <p className="bg-li accordion-border fs-4 bold-sm accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                                Commercial
                                            </p>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                <div className="accordion-body">
                                                    <div className="">
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Electrical Repairs</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Panel Upgrades</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Lighting Upgrades</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Surge Protection</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Generator Repair</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Install a Ceiling Fan</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Outdoor and Motion Lighting</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Digital Thermostat Installation</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Baseboard Heating Installation</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item border-0 my-0">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                            <p className="bg-li accordion-border fs-4 bold-sm accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                Industrial
                                            </p>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                                <div className="accordion-body">
                                                    <div className="">
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Electrical Repairs</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Panel Upgrades</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Lighting Upgrades</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Surge Protection</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Generator Repair</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Install a Ceiling Fan</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Outdoor and Motion Lighting</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Digital Thermostat Installation</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Baseboard Heating Installation</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item border-0 my-0">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                            <p className="bg-li accordion-border fs-4 bold-sm accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                Residential
                                            </p>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                                <div className="accordion-body">
                                                    <div className="">
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Electrical Repairs</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Panel Upgrades</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Lighting Upgrades</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Surge Protection</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Generator Repair</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Install a Ceiling Fan</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Outdoor and Motion Lighting</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Digital Thermostat Installation</p>
                                                        <p className="fs-6 bold-sm hover-orng text-ls lh-1"><span className="me-3 text-orng fas fa-caret-right" /> Baseboard Heating Installation</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="my-3 shadow py-5 px-5">
                                    <p className="text-ls fs-6"><span className="fas fa-map-marker text-orng pe-2" /> <span>8494 Signal Hill Road Manassas, VA, 20110</span></p>
                                    <p className="text-ls fs-6"><span className="fas fa-clock text-orng pe-2" /> 
                                        <span>Mon-Fri: 7:00am-7:00pm
                                        <br/>
                                        Sat-Sun: 10:00am-5:00pm</span>
                                    </p>
                                    <p className="text-ls fs-6"><span className="fas fa-phone-alt text-orng pe-2" /> <a href="tel:1 (800) 765-43-21" className="text-ls">1 (800) 765-43-21</a></p>
                                    <Link onClick={()=> showModal(true)} className="review-btn" type="submit"><ThunderboltFilled />  <span>Book An Appointment</span></Link>
                                </div>

                                <div className="my-5">
                                    <div className="container-fluid p-0">
                                        <p className="text-dk fs-3 fw-bold">Ask Your Question</p>
                                        <div className="row">
                                            <div className="my-2 col-md-12">
                                                <Input size="large" className="shadow-sm h-in" placeholder="Your Name *" />
                                            </div>
                                            <div className="my-2 col-md-12">
                                                <Input size="large" className="shadow-sm h-in" placeholder="Your e-mail address *" />
                                            </div>
                                            <div className="my-2 col-md-12">
                                                <Input size="large" className="shadow-sm h-in" placeholder="Your phone number" />
                                            </div>
                                            <div className="my-2 col-md-12">
                                                <Input.TextArea size="large" className="shadow-sm" placeholder="Your Review" />
                                            </div>
                                            <div className="my-2 mx-auto">
                                                <Link className="review-btn" type="submit"><ThunderboltFilled />  <span>Ask Your Question</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* right section of items >>>>>>>>> */}
                            <div className="col-md-8 ps-md-5">
                                <div>
                                    <div className="my-3">
                                        <div>
                                            <img src={top} alt="blog 1" className="w-100 mx-auto"/>
                                        </div>
                                        <div className="w-95 py-5 ps-3 et-s-i-card bg-white">
                                            <div className="px-md-5">
                                                <p className="text-orng fs-6 lh-1 fw-bold">Commercial Service </p>
                                                <p className="text-dk fs-1 fw-bold">Outdoor and Motion Lighting</p>
                                                <p className="text-li fs-6 border-start border-4 border-danger ps-4 pr-6 lh-sm"> Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-3 position-relative px-md-4 px-3">
                                        <p className="fs-4 fw-bold text-ld">Home Electrical Repair</p>
                                        <p className="text-li fs-6">Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there. So while electricity is so ingrained into our lives that we can take it for granted and hardly notice it’s there, if there’s an electrical problem, it can be difficult to notice anything else</p>
                                        <p className="text-li fs-6">Our electrical repair technicians know what a hassle any electrical problems can be, which is why we’ll always respond to any requests for service as quickly as possible. And because all of our technicians are licensed, background checked, and professionally trained, you’re guaranteed to receive the best quality service and workmanship available when you call us. We can assist with all your electric needs including:</p>
                                        
                                        <div className="row my-5">
                                            <div className="col-md-6">
                                                <p className="fs-6 text-li lh-1"><span className="me-3 text-orng fas fa-check" /> Lighting Installation</p>
                                                <p className="fs-6 text-li lh-1"><span className="me-3 text-orng fas fa-check" /> Pool/Spa Lighting</p>
                                                <p className="fs-6 text-li lh-1"><span className="me-3 text-orng fas fa-check" /> Electrical Panel Replacement</p>
                                                <p className="fs-6 text-li lh-1"><span className="me-3 text-orng fas fa-check" /> LED Lighting</p>
                                                <p className="fs-6 text-li lh-1"><span className="me-3 text-orng fas fa-check" /> Commercial Service</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="fs-6 text-li lh-1"><span className="me-3 text-orng fas fa-check" /> Lighting Installation</p>
                                                <p className="fs-6 text-li lh-1"><span className="me-3 text-orng fas fa-check" /> Pool/Spa Lighting</p>
                                                <p className="fs-6 text-li lh-1"><span className="me-3 text-orng fas fa-check" /> Electrical Panel Replacement</p>
                                                <p className="fs-6 text-li lh-1"><span className="me-3 text-orng fas fa-check" /> LED Lighting</p>
                                                <p className="fs-6 text-li lh-1"><span className="me-3 text-orng fas fa-check" /> Commercial Service</p>
                                            </div>
                                            <div className="col-md-6 my-3">
                                                <img alt="..." src={obj1} className="w-95 mx-auto" />
                                            </div>
                                            <div className="col-md-6 my-3">
                                                <img alt="..." src={obj2} className="w-95 mx-auto" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="ps-md-4 px-3">
                                    <p className="text-dk fs-3 fw-bold">Always Hire a Professionals</p>
                                    <p className="text-li fs-6">No matter urgent any electrical repairs seem, it’s never okay to attempt to handle them on your own. Trying to take care of electrical problems without professional training is extremely dangerous. If you or someone else aren’t hurt during your attempt, there’s still a chance that you’ve left something undone that poses a huge risk to you, your home, or your family. In fact, faulty electrical wiring is the number one cause of house fires in the United States, according to the National Fire Protection Agency. So in order to make sure that your home is safe, always rely on a professional for any electrical services.</p>
                                    <Divider orientation="left" className="h-dd" type="horizontal"><span className="text-orng"><ThunderboltFilled/></span></Divider>
                                    <p className=" fs-6 text-dk fw-bold px-md-5 py-2">When searching for a reliable electrician, call us at <a className="text-orng hover-orng" href="tel:1 (800) 765-43-21">1 (800) 765-43-21</a>. We specialize in electrical repairs, indoor and outdoor lighting installations, panel upgrades, and even hot tub wiring!</p>
                                    <Divider className="h-dd"/>

                                    <Link onClick={()=> showModal(true)} className="review-btn" type="submit"><ThunderboltFilled />  <span>Get Service Now</span></Link>

                                </div>

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

export default ServiceItemTop
