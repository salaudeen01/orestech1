
import { ThunderboltFilled } from '@ant-design/icons'
import { Card, DatePicker, Divider, Input, Modal, Form,Select } from 'antd'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function HomeShop() {
    const [modal, setModal] = useState(false)
    
    
    const showModal =(show)=>{
        setModal(show)
    }
    return (
        <div className="et-home-shop my-8">
            <div className="text-center">
                <p className="text-orng fs-6 fw-bold ff-pop">Save on the Service You Need</p>
                <p className="text-dk fs-1 fw-bold ff-pop lh-1">Maintenance Plans</p>
                <p className="text-li fs-6 lh-base ">With an electrical maintenance plan, you won’t find yourself in a panic wondering <br/> who to call when you’re having problems with your electrical system.</p>
            </div>


        {/* shop pricing range >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <div className="my-5">

                {/* web view >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div className="d-none d-md-block">
                <div id="carouselExampleDark2" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="my-2">
                                            <Card hoverable className="">
                                                <div className="text-center">
                                                    <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-integrated-circuit"/></p>
                                                    <p className="text-dk fs-3 fw-bold">Commercial Service</p>
                                                </div>
                                                <div className="px-3">
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Indoor/Outdoor Lighting Installation</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Appliance & Fixture Installation</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual Electrical inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Ceiling Fan Installation</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  New & Replacement Wiring</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Surge Protection Maintenance</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  24-hour Response</p>
                                                </div>
                                                <Divider/>
                                                <div className="text-center">
                                                    <p className="fs-1 fw-bold text-li m-0">$89.00</p>
                                                    <p onClick={()=> showModal(true)} className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="my-2">
                                            <Card hoverable className="">
                                                <div className="text-center">
                                                    <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-electric-tower"/></p>
                                                    <p className="text-dk fs-3 fw-bold">Industrial Service</p>
                                                </div>
                                                <div className="px-3">
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual A/C inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual electrical inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Install new double power</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Retrofit and Upgrades</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Install double power outside</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Switchboard Upgrade</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Critical Installations</p>
                                                </div>
                                                <Divider/>
                                                <div className="text-center">
                                                    <p className="fs-1 fw-bold text-li m-0">$130.00</p>
                                                    <p onClick={()=> showModal(true)} className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="my-2">
                                            <Card hoverable className="">
                                                <div className="text-center">
                                                    <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-house"/></p>
                                                    <p className="text-dk fs-3 fw-bold">Residential Service</p>
                                                </div>
                                                <div className="px-3">
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual A/C inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual electrical inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Design-Build Services</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Supply and Install Sensor light</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Lighting Fixtures</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Replace Hotplates</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  SwitchBoard Upgrades</p>
                                                </div>
                                                <Divider/>
                                                <div className="text-center">
                                                    <p className="fs-1 fw-bold text-li m-0">$12.00</p>
                                                    <p onClick={()=> showModal(true)} className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item" data-bs-interval="10000">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="my-2">
                                            <Card hoverable className="">
                                                <div className="text-center">
                                                    <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-integrated-circuit"/></p>
                                                    <p className="text-dk fs-3 fw-bold">Commercial Service</p>
                                                </div>
                                                <div className="px-3">
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Indoor/Outdoor Lighting Installation</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Appliance & Fixture Installation</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual Electrical inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Ceiling Fan Installation</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  New & Replacement Wiring</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Surge Protection Maintenance</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  24-hour Response</p>
                                                </div>
                                                <Divider/>
                                                <div className="text-center">
                                                    <p className="fs-1 fw-bold text-li m-0">$89.00</p>
                                                    <p onClick={()=> showModal(true)} className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="my-2">
                                            <Card hoverable className="">
                                                <div className="text-center">
                                                    <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-electric-tower"/></p>
                                                    <p className="text-dk fs-3 fw-bold">Industrial Service</p>
                                                </div>
                                                <div className="px-3">
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual A/C inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual electrical inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Install new double power</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Retrofit and Upgrades</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Install double power outside</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Switchboard Upgrade</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Critical Installations</p>
                                                </div>
                                                <Divider/>
                                                <div className="text-center">
                                                    <p className="fs-1 fw-bold text-li m-0">$130.00</p>
                                                    <p onClick={()=> showModal(true)} className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="my-2">
                                            <Card hoverable className="">
                                                <div className="text-center">
                                                    <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-house"/></p>
                                                    <p className="text-dk fs-3 fw-bold">Residential Service</p>
                                                </div>
                                                <div className="px-3">
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual A/C inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual electrical inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Design-Build Services</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Supply and Install Sensor light</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Lighting Fixtures</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Replace Hotplates</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  SwitchBoard Upgrades</p>
                                                </div>
                                                <Divider/>
                                                <div className="text-center">
                                                    <p className="fs-1 fw-bold text-li m-0">$12.00</p>
                                                    <p onClick={()=> showModal(true)} className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>


                    {/* mobile view >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <div className="d-block d-md-none">
                        <div id="carouselExampleDark2" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <div className="my-2">
                                        <Card hoverable className="">
                                            <div className="text-center">
                                                <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-integrated-circuit"/></p>
                                                <p className="text-dk fs-3 fw-bold">Commercial Service</p>
                                            </div>
                                            <div className="px-3">
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Indoor/Outdoor Lighting Installation</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Appliance & Fixture Installation</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual Electrical inspection</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Ceiling Fan Installation</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  New & Replacement Wiring</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Surge Protection Maintenance</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  24-hour Response</p>
                                            </div>
                                            <Divider/>
                                            <div className="text-center">
                                                <p className="fs-1 fw-bold text-li m-0">$89.00</p>
                                                <p onClick={()=> showModal(true)} className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <div className="my-2">
                                        <Card hoverable className="">
                                            <div className="text-center">
                                                <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-electric-tower"/></p>
                                                <p className="text-dk fs-3 fw-bold">Industrial Service</p>
                                            </div>
                                            <div className="px-3">
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual A/C inspection</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual electrical inspection</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Install new double power</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Retrofit and Upgrades</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Install double power outside</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Switchboard Upgrade</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Critical Installations</p>
                                            </div>
                                            <Divider/>
                                            <div className="text-center">
                                                <p className="fs-1 fw-bold text-li m-0">$130.00</p>
                                                <p onClick={()=> showModal(true)} className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="my-2">
                                        <Card hoverable className="">
                                            <div className="text-center">
                                                <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-house"/></p>
                                                <p className="text-dk fs-3 fw-bold">Residential Service</p>
                                            </div>
                                            <div className="px-3">
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual A/C inspection</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual electrical inspection</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Design-Build Services</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Supply and Install Sensor light</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Lighting Fixtures</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Replace Hotplates</p>
                                                <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  SwitchBoard Upgrades</p>
                                            </div>
                                            <Divider/>
                                            <div className="text-center">
                                                <p className="fs-1 fw-bold text-li m-0">$12.00</p>
                                                <p onClick={()=> showModal(true)} className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    
            </div>



        {/* shop  explore services section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <div className="my-5">

                {/* web view  */}
                <div className="container-fluid w-100 p-0 d-none d-md-block">
                    <div className="et-h-sh-p">
                        <br/>
                        <div className="et-h-sh-p-card bg-white">
                            <p className="border-left ps-5 p-0 fs-1 fw-bold text-dk lh-sm">Your <span className="text-orng">Best Option </span>
                                <br/>in Electrical
                                Contractors 24/7
                            </p>
                            <p className="text-li fs-6 px-4">Our experienced electricians are highly trained in all aspects of electrical service, from office lighting and security systems to emergency repair.</p>

                            <div className="mt-5">
                                <Link to="/service" className="et-h-s-p-btn-orng mx-3" type="submit"><ThunderboltFilled />  <span>Explore Services</span></Link>
                            </div>

                        </div>
                    </div>
                </div>


                {/* mobile view  */}
                <div className="container-fluid w-100 p-0 d-block d-md-none">
                    <div className="et-h-sh-p-mob">
                        <br/>
                        <div className="et-h-sh-p-card-mob bg-white">
                            <p className="border-left ps-5 p-0 fs-1 fw-bold text-dk lh-sm">Your <span className="text-orng">Best Option </span>
                                <br/>in Electrical
                                Contractors 24/7
                            </p>
                            <p className="text-li fs-6 px-4">Our experienced electricians are highly trained in all aspects of electrical service, from office lighting and security systems to emergency repair.</p>

                            <div className="mt-5">
                                <Link to="/service" className="et-h-s-p-btn-orng mx-3" type="submit"><ThunderboltFilled />  <span>Explore Services</span></Link>
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

export default HomeShop
