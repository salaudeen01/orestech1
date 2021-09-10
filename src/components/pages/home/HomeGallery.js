    import { Image } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import gal1 from '../../images/gallery/gallery01.jpg'
import gal2 from '../../images/gallery/gallery02.jpg'
import gal3 from '../../images/gallery/gallery03.jpg'
import gal4 from '../../images/gallery/gallery04.jpg'
import gal5 from '../../images/gallery/gallery05.jpg'
import gal6 from '../../images/gallery/gallery06.jpg'
import gal7 from '../../images/gallery/gallery07.jpg'
import gal8 from '../../images/gallery/gallery08.jpg'
import gal9 from '../../images/gallery/gallery09.jpg'
import gal10 from '../../images/gallery/gallery10.jpg'
import hum from '../../images/gallery/human.jpg'
import bgm from '../../images/bg_marker.png'

    
    function HomeGallery() {
        return (
            <div className="et-home-gallery my-8">


                {/* web view >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div className="d-none d-md-block">
                    <div className="container-fluid">
                        <div className="et-h-g-first">
                            <div className="text-center">
                                <p className="text-orng fs-6 fw-bold m-0">@electricians</p>
                                <p className="fs-1 fw-bold text-dark">Our Projects</p>
                                <div className="w-100 my-5">

                                    <div className="d-inline fw-bold text-center">
                                            <Link className="d-inline mx-3 hover-orng text-orng">All</Link>
                                            <Link className="d-inline mx-3 hover-orng text-dk">Residences</Link>
                                            <Link className="d-inline mx-3 hover-orng text-dk">Industrial_objects</Link>
                                            <Link className="d-inline mx-3 hover-orng text-dk">Offices</Link>
                                            <Link className="d-inline mx-3 hover-orng text-dk">Retail_objects</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <Image alt="gallery image" src={gal1} />
                                </div>
                                <div className="col-md-2">
                                    <Image alt="gallery image" src={gal2} />
                                </div>
                                <div className="col-md-2">
                                    <Image alt="gallery image" src={gal3} />
                                </div>
                                <div className="col-md-2">
                                    <Image alt="gallery image" src={gal4} />
                                </div>
                                <div className="col-md-2">
                                    <Image alt="gallery image" src={gal5} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                            <div className="row my-2">
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <Image alt="gallery image" src={gal6} />
                                </div>
                                <div className="col-md-2">
                                    <Image alt="gallery image" src={gal7} />
                                </div>
                                <div className="col-md-2">
                                    <Image alt="gallery image" src={gal8} />
                                </div>
                                <div className="col-md-2">
                                    <Image alt="gallery image" src={gal9} />
                                </div>
                                <div className="col-md-2">
                                    <Image alt="gallery image" src={gal10} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                            <div className="text-center my-4">
                                <Link to="/gallery" className="text-dk fw-bold hover-orng">View More  <i className="text-orng ms-3 fas fa-caret-right"/></Link>
                            </div>
                            
                        </div>
                    </div>


                    <div className="container-fluid p-0">
                        <div className="et-h-g-second">
                            <div className="container text-white py-5">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="" style={{backgroundImage: `url(${bgm})`, backgroundSize:'contain'}}>
                                            <p className="text-orng fw-bold fs-5">Our Statistics</p>
                                            <p className="fw-bold fs-1 lh-1">Some Important Facts</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="">
                                            <span className="fw-bold fs-1 lh-base">5000+</span>
                                            <p className="fw-bold fs-5 lh-base">Residential Projects</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="">
                                            <span className="fw-bold fs-1 lh-base">1500+</span>
                                            <p className="fw-bold fs-5 lh-base">Commercial Projects</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="">
                                            <span className="fw-bold fs-1 lh-base">1000+</span>
                                            <p className="fw-bold fs-5 lh-base">Industrial Projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-100">
                                <div className="float-md-start">
                                    <div className="et-h-g-s-cs">

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
                                    <div className="et-h-g-s-bbg">
                                        {/* <br/> */}
                                        <div className="et-h-g-s-bbg-card py-4 px-md-4 text-white">
                                            <p className="fs-3 fw-bold lh-1">Emergency Service</p>
                                            <p className="fs-6 fw-bold lh-base">If this is an emergency outside of normal business hours, call us</p>
                                            <a href="tel:1 (800) 765-43-21" className="lh-1 fw-bold fs-4 text-white"><span className="fas fa-phone" /> 1 (800) 765-43-21</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>







                {/* mobile view >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div className="d-block d-md-none">
                    <div className="container-fluid">
                        <div className="et-h-g-first">
                            <div className="text-center">
                                <p className="text-orng fs-6 fw-bold m-0">@electricians</p>
                                <p className="fs-1 fw-bold text-dark">Our Projects</p>
                                <div className="w-100 my-5">

                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-4">
                                    <Image alt="gallery image" src={gal1} />
                                </div>
                                <div className="col-4">
                                    <Image alt="gallery image" src={gal2} />
                                </div>
                                <div className="col-4">
                                    <Image alt="gallery image" src={gal3} />
                                </div>
                                <div className="col-4">
                                    <Image alt="gallery image" src={gal4} />
                                </div>
                                <div className="col-4">
                                    <Image alt="gallery image" src={gal5} />
                                </div>
                                <div className="col-4">
                                    <Image alt="gallery image" src={gal6} />
                                </div>
                                <div className="col-4">
                                    <Image alt="gallery image" src={gal7} />
                                </div>
                                <div className="col-4">
                                    <Image alt="gallery image" src={gal8} />
                                </div>
                                <div className="col-4">
                                    <Image alt="gallery image" src={gal9} />
                                </div>
                                <div className="col-4">
                                    <Image alt="gallery image" src={gal10} />
                                </div>
                            </div>

                            <div className="text-center my-4">
                                <Link to="/" className="text-dk fw-bold hover-orng">View More  <i className="text-orng ms-3 fas fa-caret-right"/></Link>
                            </div>
                            
                        </div>
                    </div>


                    <div className="container-fluid p-0">
                        <div className="et-h-g-second">
                            <div className="container text-center text-white py-5">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="" style={{backgroundImage: `url(${bgm})`, backgroundSize:'contain'}}>
                                            <p className="text-orng fw-bold fs-5">Our Statistics</p>
                                            <p className="fw-bold fs-1 lh-1">Some Important Facts</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="">
                                            <span className="fw-bold fs-1 lh-base">5000+</span>
                                            <p className="fw-bold fs-5 lh-base">Residential Projects</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="">
                                            <span className="fw-bold fs-1 lh-base">1500+</span>
                                            <p className="fw-bold fs-5 lh-base">Commercial Projects</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="">
                                            <span className="fw-bold fs-1 lh-base">1000+</span>
                                            <p className="fw-bold fs-5 lh-base">Industrial Projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <div className="">
                                    <div className="et-h-g-s-cs-mob">
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
                                
                                <div className="col-md-7 ">
                                    <div className="et-h-g-s-bbg-mob">

                                    </div>
                                    <div className="et-h-g-s-bbg-card-mob py-4 px-4 text-white">
                                        <p className="fs-3 fw-bold lh-1">Emergency Service</p>
                                        <p className="fs-6 fw-bold lh-base">If this is an emergency outside of normal business hours, call us</p>
                                        <a href="tel:1 (800) 765-43-21" className="lh-1 fw-bold fs-3 text-white"><span className="fas fa-phone" /> 1 (800) 765-43-21</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
    
    export default HomeGallery
    