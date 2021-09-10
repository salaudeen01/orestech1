import { Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import b1 from '../../images/blog01.jpg'
import b2 from '../../images/blog02.jpg'


import as1 from '../../images/associates/ass01.png'
import as2 from '../../images/associates/ass02.png'
import as3 from '../../images/associates/ass03.png'
import as4 from '../../images/associates/ass04.png'
import as5 from '../../images/associates/ass05.png'
import as6 from '../../images/associates/ass06.png'

function HomeBlogs() {
    return (
        <div>
            <div className="container-fluid w-100 px-6 my-8">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="">
                                <p className="text-orng fw-bold ff-pop fs-6 lh-1">Latest News</p>
                                <p className="text-dk fs-1 fw-bold lh-1 ff-pop">News & Update</p>
                            </div>
                            <div className="my-2">
                                <p className="text-li fs-6 lh-1">23 Nov, 2016 </p>
                                <p className="text-dk fs-5 border-left bold-sm ps-4 pr-10 lh-sm hover-orng">Outdoor and Motion Lighting</p>
                                <p className="text-li fs-6 pe-5">Electricity is arguably the most valuable resource we have in our mode...</p>
                            </div>
                            <Divider/>
                            <div className="my-2">
                                <p className="text-li fs-6 lh-1">14 Nov, 2016 </p>
                                <p className="text-dk fs-5 border-left bold-sm ps-4 pr-10 lh-sm hover-orng"> How to install a Ceiling Fan Where No Fixture Exists</p>
                                <p className="text-li fs-6 pe-5">Electricity is arguably the most valuable resource we have in our mode...</p>
                            </div>
                        </div>

                        {/* web view  */}
                        <div className="col-md-4 d-none d-md-block">
                            <div>
                                <img src={b1} alt="blog 1" className="w-95 mx-auto"/>
                            </div>
                            <div className="w-85 py-5 ps-3 et-h-b-card bg-white">
                                <div className="">
                                    <p className="text-li fs-6 lh-1">14 Nov, 2016 </p>
                                    <p className="text-dk fs-5 border-left bold-sm ps-4 pr-6 lh-sm hover-orng"> How to Get Electricity to  a Kitchen Island</p>
                                    <p className="text-li fs-6 pe-5">Electricity is arguably the most valuable resource we have in our modern society. Without ...</p>
                                    <Link to="/blog" className="text-dk fs-6 lh-sm hover-orng bold-sm"> Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 d-none d-md-block">
                            <div>
                                <img src={b2} alt="blog 1" className="w-95 mx-auto"/>
                            </div>
                            <div className="w-85 py-5 ps-3 et-h-b-card bg-white">
                                <div className="">
                                    <p className="text-li fs-6 lh-1">14 Nov, 2016 </p>
                                    <p className="text-dk fs-5 border-left bold-sm ps-4 pe-5 lh-sm hover-orng"> How to Install Landscape Lighting and Boost Home Value</p>
                                    <p className="text-li fs-6 pe-5">Electricity is arguably the most valuable resource we have in our modern society. Without ...</p>
                                    <Link to="/blog" className="text-dk fs-6 lh-sm hover-orng bold-sm"> Read More</Link>
                                </div>
                            </div>
                        </div>




                        

                        {/* mobile view  */}
                        <div className="d-block d-md-none">
                            <div id="homeBlog" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#homeBlog" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#homeBlog" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                </div>
                                <div className="carousel-inner h-10">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <div>
                                            <img src={b1} alt="blog 1" className="w-95 mx-auto"/>
                                        </div>
                                        <div className="w-85 py-5 ps-3 et-h-b-card bg-white">
                                            <div className="">
                                                <p className="text-li fs-6 lh-1">14 Nov, 2016 </p>
                                                <p className="text-dk fs-5 border-left bold-sm ps-4 pr-6 lh-sm hover-orng"> How to Get Electricity to  a Kitchen Island</p>
                                                <p className="text-li fs-6 pe-5">Electricity is arguably the most valuable resource we have in our modern society. Without ...</p>
                                                <Link to="/blog" className="text-dk fs-6 lh-sm hover-orng bold-sm"> Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <div>
                                            <img src={b2} alt="blog 1" className="w-95 mx-auto"/>
                                        </div>
                                        <div className="w-85 py-5 ps-3 et-h-b-card bg-white">
                                            <div className="">
                                                <p className="text-li fs-6 lh-1">14 Nov, 2016 </p>
                                                <p className="text-dk fs-5 border-left bold-sm ps-4 pe-5 lh-sm hover-orng"> How to Install Landscape Lighting and Boost Home Value</p>
                                                <p className="text-li fs-6 pe-5">Electricity is arguably the most valuable resource we have in our modern society. Without ...</p>
                                                <Link to="/blog" className="text-dk fs-6 lh-sm hover-orng bold-sm"> Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            {/* web view>>>>>>>>>>>>>>>>>>>>>>>>>>  */}
            <div className="et-h-b-asst d-none d-md-block">
                <Divider/>
                <div className="container-fluid px-6">
                    <div className="row">
                        <div className="col-md-2">
                            <Link><img src={as1} alt="associates" className="hover-opa" /></Link>
                        </div>
                        <div className="col-md-2">
                            <Link><img src={as2} alt="associates" className="hover-opa" /></Link>
                        </div>
                        <div className="col-md-2">
                            <Link><img src={as3} alt="associates" className="hover-opa" /></Link>
                        </div>
                        <div className="col-md-2">
                            <Link><img src={as4} alt="associates" className="hover-opa" /></Link>
                        </div>
                        <div className="col-md-2">
                            <Link><img src={as5} alt="associates" className="hover-opa" /></Link>
                        </div>
                        <div className="col-md-2">
                            <Link><img src={as6} alt="associates" className="hover-opa" /></Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* mobile view >>>>>>>>>>>>>> */}
            <div className="et-h-b-asst d-block d-md-none">
                <Divider/>
                <div className="container-fluid px-6">
                    <div id="blogClients" className="carousel carousel-dark slide" data-bs-ride="carousel">
                     
                        <div className="carousel-inner text-center">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <Link><img src={as1} alt="associates" className="hover-opa" /></Link>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <Link><img src={as2} alt="associates" className="hover-opa" /></Link>
                            </div>
                            <div className="carousel-item">
                                <Link><img src={as3} alt="associates" className="hover-opa" /></Link>
                            </div>
                            <div className="carousel-item">
                                <Link><img src={as4} alt="associates" className="hover-opa" /></Link>
                            </div>
                            <div className="carousel-item">
                                <Link><img src={as5} alt="associates" className="hover-opa" /></Link>
                            </div>
                            <div className="carousel-item">
                                <Link><img src={as6} alt="associates" className="hover-opa" /></Link>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#blogClients" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#blogClients" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeBlogs
