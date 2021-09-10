
import React from 'react'
import { Link } from 'react-router-dom'
import hum from '../../images/gallery/human.jpg'

function TestTop() {
    return (
        <div className="et-about-top">
            <div className="w-100">

                <div className="lin-bg-sec">
                    <div className="text-li fs-6 px-md-5 px-sm-2 py-3 bold-sm">
                        <p><Link to="/" className="text-li hover-orng">Home</Link> / Testimonials</p>
                    </div>
                </div>

                <div className="container-fluid p-0">
                    {/* web view >>>>>>>>>>>>>>>>>>>> */}
                    <div className="et-t-slide d-none d-md-block">
                        <div className="w-100">
                            <div className="float-md-start">
                                <div className="et-t-cs">

                                    <div className="w-75 mx-auto py-5 et-h-g-s-cs-in">
                                        <div id="carouselExampleDark" className="carousel carousel-dark text-dark slide" data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <div className="carousel-inner py-5">
                                                <div className="carousel-item active" data-bs-interval="10000">
                                                    <div className="row">
                                                        <div className=" col-md-3">
                                                            <span className="text-orng fas fa-quote-left text-big position-absolute shift-top" />
                                                            <img src={hum} className="ms-4 rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <p className="text-orng fs-5 fw-bold lh-1">What Our Clients Say</p>
                                                            <p className="text-dk fs-1 fw-bold lh-1 pe-5">Professional, Reliable & Cost Effective</p>
                                                            <p className="fs-6 text-li pe-5">We've been using your company and from the beginning found him and his team extremely professional and knowledgeable. We don't have any hesitation in recommending their services. </p>
                                                            <p className="fw-bold text-dk fs-5">- Teresa and Kevin K</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item" data-bs-interval="2000">
                                                    <div className="row">
                                                        <div className=" col-md-3">
                                                            <span className="text-orng fas fa-quote-left text-big position-absolute shift-top" />
                                                            <img src={hum} className="ms-4 rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <p className="text-orng fs-5 fw-bold lh-1">What Our Clients Say</p>
                                                            <p className="text-dk fs-1 fw-bold lh-1 pe-5">Professional, Reliable & Cost Effective</p>
                                                            <p className="fs-6 text-li pe-5">We've been using your company and from the beginning found him and his team extremely professional and knowledgeable. We don't have any hesitation in recommending their services. </p>
                                                            <p className="fw-bold text-dk fs-5">- Teresa and Kevin K</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="row">
                                                        <div className=" col-md-3">
                                                            <span className="text-orng fas fa-quote-left text-big position-absolute shift-top" />
                                                            <img src={hum} className="ms-4 rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <p className="text-orng fs-5 fw-bold lh-1">What Our Clients Say</p>
                                                            <p className="text-dk fs-1 fw-bold lh-1 pe-5">Professional, Reliable & Cost Effective</p>
                                                            <p className="fs-6 text-li pe-5">We've been using your company and from the beginning found him and his team extremely professional and knowledgeable. We don't have any hesitation in recommending their services. </p>
                                                            <p className="fw-bold text-dk fs-5">- Teresa and Kevin K</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className="float-md-end">
                                <div className="et-t-bbg">
                                    
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* mobile view >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <div className="d-block d-md-none">
                        <div className="">
                            <div className="">
                                <div className="et-t-bbg-mob">

                                </div>
                            </div>
                            <div className="">
                                <div className="et-t-cs-mob">
                                    <div className="w-90 mx-auto">
                                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <div class="carousel-inner py-5 px-0">
                                                <div class="carousel-item active" data-bs-interval="10000">
                                                    <div className="row">
                                                        <div className=" col-3">
                                                            <span className="text-orng fas fa-quote-left fs-2 position-absolute" />
                                                            <img src={hum} width="60vw" className="rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="col-9">
                                                            <p className="text-orng fs-6 fw-bold lh-1">What Our Clients Say</p>
                                                            <p className="text-dk fs-1 fw-bold lh-1">Professional, Reliable & Cost Effective</p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p className="fs-6 text-li">We've been using your company and from the beginning found him and his team extremely professional and knowledgeable. We don't have any hesitation in recommending their services. </p>
                                                            <p className="fw-bold text-dk fs-5">- Teresa and Kevin K</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item" data-bs-interval="2000">
                                                    <div className="row">
                                                        <div className=" col-3">
                                                            <span className="text-orng fas fa-quote-left fs-2 position-absolute" />
                                                            <img src={hum} width="60vw" className="rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="col-9">
                                                            <p className="text-orng fs-6 fw-bold lh-1">What Our Clients Say</p>
                                                            <p className="text-dk fs-1 fw-bold lh-1">Professional, Reliable & Cost Effective</p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p className="fs-6 text-li">We've been using your company and from the beginning found him and his team extremely professional and knowledgeable. We don't have any hesitation in recommending their services. </p>
                                                            <p className="fw-bold text-dk fs-5">- Teresa and Kevin K</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div className="row">
                                                        <div className=" col-3">
                                                            <span className="text-orng fas fa-quote-left fs-2 position-absolute" />
                                                            <img src={hum} width="60vw" className="rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="col-9">
                                                            <p className="text-orng fs-6 fw-bold lh-1">What Our Clients Say</p>
                                                            <p className="text-dk fs-1 fw-bold lh-1">Professional, Reliable & Cost Effective</p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p className="fs-6 text-li">We've been using your company and from the beginning found him and his team extremely professional and knowledgeable. We don't have any hesitation in recommending their services. </p>
                                                            <p className="fw-bold text-dk fs-5">- Teresa and Kevin K</p>
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


            </div>
        </div>
    )
}

export default TestTop
