
import { Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Footer(style) {
    return (
        <div className="et-footer ff-pop" style={style}>
            <br/>

            {/* web view >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <div className="d-none d-md-block">
                <div className="container-fluid px-9">
                    <div className="et-f-newslet row px-8">
                        <div className="col-md-4">
                            <p className="text-white fs-p">Subscribe to Our Newsletter</p>
                        </div>
                        <div className="col-md-5">
                            <div>
                                <input type="email" className="form-control h-4" placeholder="Your e-mail address" id="exampleInputEmail1"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <button className="et-f-newslet-btn mx-md-3 py-0" type="submit"><span className="text-orng fas fa-envelope me-2" />  <span>Subscribe now</span></button>
                        </div>
                    </div>
                </div>

                <div className="container-fluid px-9 my-big">
                    <div className="row">
                        <div className="col-md-3">
                            <div>
                                <Link to="/" className="footer-brand fw-bold" href="#"><img src="resources/images/logo-dark.png" alt="logo" width="25px" height="50px" /><span>OresTech</span></Link>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div>
                                <p className="fs-7 text-lit">Our experienced electricians are highly trained in all aspects of electrical service, from office lighting and security systems to emergency repair.</p>
                            </div>
                        </div>

                        <div className="col-md-5"></div>
                    </div>

                    <div className="row mt-big">
                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-6">
                                    <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/" className="et-f-links">Home</Link></p>
                                    <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/about" className="et-f-links">About Us</Link></p>
                                    <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/service" className="et-f-links">Services</Link></p>
                                    {/* <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/price" className="et-f-links">Prices</Link></p> */}
                                </div>
                                <div className="col-6">
                                    <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/gallery" className="et-f-links">Gallery</Link></p>
                                    {/* <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/shop" className="et-f-links">Shop</Link></p> */}
                                    <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/faq" className="et-f-links">FAQ</Link></p>
                                    <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/contact" className="et-f-links">Contacts</Link></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 pe-8">
                            <p className="fs-7 text-lit lh-sm d-flex">
                                <p className="m-0 icon fas fa-map-marker-alt pe-4"/> 
                                <p className="m-0">Rc-Terries Banana Island Road, Ikoyi, Lagos, Nigeria</p>
                            </p>

                            <p className="fs-7 text-lit lh-sm">
                                <span className="icon far fa-envelope pe-4"/> 
                                {/* <i class="fas fa-envelope"></i> */}
                                <span>oresttech@gmail.com</span>
                            </p>

                            <p className="fs-7 text-lit lh-sm">
                                <span className="icon far fa-clock pe-4"/> 
                                <span>Mon-Fri 08:00 AM - 05:00 PM</span>
                            </p>

                            <p className="fs-7 text-lit lh-sm">
                                <a href="tel:+234 (081) 270-162-92" className="text-decoration-none et-f-ph">
                                    <span className="icon fas fa-phone-alt pe-4"/> 
                                    <span className="fw-bold">+234 (081) 270-162-92</span>
                                </a>
                            </p>
                        </div>

                        <div className="col-md-5">
                            <img alt="map" src="resources/images/footer-map.jpg" width="100%" height="150px" className="-up" />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <p className="fs-7 text-lit lh-sm">© 2020 Electrical Services. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <p className="float-end m-0">
                                <a href="twitter.com" className="f-icons fs-6 px-2 py-1 mx-1 rounded-circle"><span className="fab fa-twitter"/></a>
                                <a href="facebook.com" className="f-icons fs-6 px-2 py-1 mx-1 rounded-circle"><span className="fab fa-facebook"/></a>
                                <a href="instagram.com" className="f-icons fs-6 px-2 py-1 mx-1 rounded-circle"><span className="fab fa-instagram"/></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>






            {/* mobile view >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <div className="d-block d-md-none">
                <div className="news-let-mob">
                    <div className="container-fluid py-2">
                        <div className="w-100">
                            <div className="text-center w-100">
                                <p className="text-white fs-5 m-0">Subscribe to Our Newsletter</p>
                                <div className="float-start w-60">
                                    <Input type="email" placeholder="Your e-mail address" size="large" />
                                </div>
                                <div className="float-end w-35">
                                    <button className="news-let-mob-btn" type="submit"><span className="text-orng fas fa-envelope pe-1" />  <span>Subscribe</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="et-f-mob mt-big py-1">
                    <div className="container-fluid">
                        <div className="text-center my-3">
                            <Link to="/" className="footer-brand-mob fw-bold" href="#"><img src="resources/images/logo-dark.png" alt="logo" width="25px" height="30px" /><span>OresTech</span></Link>
                        </div>
                        <div className="text-center my-3">
                            <p className="fs-7 text-lit">Our experienced electricians are highly trained in all aspects of electrical service, from office lighting and security systems to emergency repair.</p>
                        </div>

                        <div className="row mt-5 px-3">
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-6">
                                        <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/" className="et-f-links">Home</Link></p>
                                        <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/about" className="et-f-links">About Us</Link></p>
                                        <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/service" className="et-f-links">Services</Link></p>
                                        {/* <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/price" className="et-f-links">Prices</Link></p> */}
                                    </div>
                                    <div className="col-6">
                                        <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/gallery" className="et-f-links">Gallery</Link></p>
                                        {/* <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/shop" className="et-f-links">Shop</Link></p> */}
                                        <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/faq" className="et-f-links">FAQ</Link></p>
                                        <p className="fs-6 lh-1"><span className="text-orng fas fa-check me-2"/> <Link to="/contact" className="et-f-links">Contacts</Link></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <p className="fs-7 text-lit lh-sm d-flex">
                                    <p className="m-0 icon fas fa-map-marker-alt pe-4"/> 
                                    <p className="m-0">Rc-Terries Banana Island Road, Ikoyi, Lagos, Nigeria</p>
                                </p>

                                <p className="fs-7 text-lit lh-sm">
                                    <span className="icon far fa-clock pe-4"/> 
                                    <span>Mon-Fri 08:00 AM - 05:00 PM</span>
                                </p>

                                <p className="fs-7 text-lit lh-sm">
                                    <a href="tel:+234 (081) 270-162-92" className="text-decoration-none et-f-ph">
                                        <span className="icon fas fa-phone-alt pe-4"/> 
                                        <span className="fw-bold">+234 (081) 270-162-92</span>
                                    </a>
                                </p>
                            </div>

                            <div className="col-md-5">
                                <img alt="map" src="resources/images/footer-map.jpg" width="100%" height="150px" className="" />
                            </div>
                        </div>

                        <div className="row my-4 text-center">
                            <div className="col-md-6">
                                <p className="fs-7 text-lit lh-sm">© 2020 Electrical Services. All Rights Reserved.</p>
                            </div>
                            <div className="col-md-6">
                                <p className="m-0">
                                    <a href="twitter.com" className="f-icons fs-5 px-2 py-1 mx-1 rounded-circle"><span className="fab fa-twitter"/></a>
                                    <a href="facebook.com" className="f-icons fs-5 px-2 py-1 mx-1 rounded-circle"><span className="fab fa-facebook"/></a>
                                    <a href="instagram.com" className="f-icons fs-5 px-2 py-1 mx-1 rounded-circle"><span className="fab fa-instagram"/></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>






        </div>
    )
}

export default Footer











