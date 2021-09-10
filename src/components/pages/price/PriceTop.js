
import { ThunderboltFilled } from '@ant-design/icons'
import { Carousel } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function PriceTop() {
    return (
        <div className="et-about-top">
            <div className="w-100">

                <div className="lin-bg-sec">
                    <div className="text-li fs-6 px-md-5 px-sm-2 py-3 bold-sm">
                        <p><Link to="/" className="text-li hover-orng">Home</Link> / Prices</p>
                    </div>
                </div>





                <div className="container-fluid my-8">
                    <div className="">
                        <div className="text-center">
                            <p className="text-orng fw-bold fs-5">Coupons</p>
                            <p className="fs-1 text-dk lh-sm fw-bold">Special Offers</p>
                            <p className="text-ls bold-sm fs-6 w-50 mx-auto px-5 d-none d-md-block">The electrical coupons for electrical services is how Electrician shows their customers how much they are valued.</p>
                            <p className="text-ls bold-sm fs-6 px-2 d-block d-md-none">The electrical coupons for electrical services is how Electrician shows their customers how much they are valued.</p>
                        </div>

                        {/* web view >>>>> */}
                        <div className="container">
                            <Carousel autoplay className="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="container-fluid p-0">
                                            <div className="row">
                                                <div className="col-md-5">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6">

                                    </div>
                                </div>
                            </Carousel>
                        </div>

                    </div>
                </div>



                {/* web view  */}
                <div className="container-fluid w-100 p-0 d-none d-md-block">
                    <div className="et-h-sh-p">
                        <br/>
                        <div className="et-h-sh-p-card bg-white">
                            <p className="border-danger border-start border-4 ps-5 p-0 fs-1 fw-bold text-dk lh-sm">Your <span className="text-orng">Best Option </span>
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
                            <p className="border-danger border-start border-4 ps-5 p-0 fs-1 fw-bold text-dk lh-sm">Your <span className="text-orng">Best Option </span>
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
        </div>
    )
}

export default PriceTop
