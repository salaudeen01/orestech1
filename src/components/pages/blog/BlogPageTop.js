
import { SearchOutlined, ThunderboltFilled } from '@ant-design/icons'
import { Calendar, Carousel, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import obj1 from '../../images/pages/service/item/obj1.jpg'
import top from '../../images/pages/blog/blogtop.jpg'
import sl1 from '../../images/pages/blog/slide1.1.jpg'
import sl2 from '../../images/pages/blog/slide1.2.jpg'
import sl3 from '../../images/pages/blog/slide1.3.jpg'

function BlogPageTop() {
    return (
        <div className="et-about-top">
            <div className="w-100">

                <div className="lin-bg-sec">
                    <div className="text-li fs-6 px-md-5 px-sm-2 py-3 bold-sm">
                        <p><Link to="/" className="text-li hover-orng">Home</Link> / Blog</p>
                    </div>
                </div>


                <div className="my-8">
                    <div className="container p-md-0">
                        <div className="row">

                           

                            {/* left section of blogs >>>>>>>>> */}
                            <div className="col-md-8 ps-md-5">
                                <div>
                                    <div className="my-3">
                                        <div>
                                            <img src={top} alt="blog 1" className="w-100 mx-auto"/>
                                        </div>
                                        <div className="w-95 py-5 ps-3 et-s-i-card bg-white">
                                            <div className="px-md-0 px-2">
                                                <p className="text-li fs-6 lh-1 bold-sm"><span className="mx-2">23 Nov, 2016</span> <span className="mx-2">Posted by: <span className="hover-orng bold-sm text-ld">admin</span></span> <span className="mx-2">2 Comments</span></p>
                                                <p className="text-dk fs-1 fw-bold hover-orng">Outdoor and Motion Lighting</p>
                                                <p className="text-li fs-6 pr-6 lh-base"> Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there.</p>
                                                <div className="my-5">
                                                    <Link to="/blogItems" className="button-orng"><ThunderboltFilled/>  Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="my-3">
                                        <Carousel autoplay >
                                            <div>
                                                <img src={sl1} alt="blog 1" className="w-100 mx-auto"/>
                                            </div>
                                            <div>
                                                <img src={sl2} alt="blog 1" className="w-100 mx-auto"/>
                                            </div>
                                            <div>
                                                <img src={sl3} alt="blog 1" className="w-100 mx-auto"/>
                                            </div>
                                        </Carousel>
                                        <div className="w-95 py-5 ps-3 et-s-i-card bg-white">
                                            <div className="px-md-0 px-2">
                                                <p className="text-li fs-6 lh-1 bold-sm"><span className="mx-2">23 Nov, 2016</span> <span className="mx-2">Posted by: <span className="hover-orng bold-sm text-ld">admin</span></span> <span className="mx-2">2 Comments</span></p>
                                                <p className="text-dk hover-orng fs-1 fw-bold lh-sm">How to Install a Ceiling Fan Where No Fixture Exists</p>
                                                <p className="text-li fs-6 pr-6 lh-base"> Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there.</p>
                                                <div className="my-5">
                                                    <Link to="/blogItems" className="button-orng"><ThunderboltFilled/>  Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-8">
                                        <div>
                                            <img src={sl2} alt="blog 1" className="w-100 mx-auto"/>
                                        </div>
                                        <div className="w-95 py-5 ps-3 et-s-i-card bg-white">
                                            <div className="px-md-0 px-2">
                                                <p className="text-li fs-6 lh-1 bold-sm"><span className="mx-2">23 Nov, 2016</span> <span className="mx-2">Posted by: <span className="hover-orng bold-sm text-ld">admin</span></span> <span className="mx-2">0 Comments</span></p>
                                                <p className="text-dk fs-1 fw-bold hover-orng lh-sm">How to Get Electricity to a Kitchen Island</p>
                                                <p className="text-li fs-6 pr-6 lh-base"> Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there.</p>
                                                <div className="my-5">
                                                    <Link to="/blogItems" className="button-orng"><ThunderboltFilled/>  Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-8">
                                        <div className="w-100 mx-auto bg-lit h-blog">
                                            {/* <img src={sl2} alt="blog 1" className="w-100 mx-auto"/> */}
                                        </div>
                                        <div className="w-95 py-5 ps-3 et-s-i-card bg-white">
                                            <div className="px-md-0 px-2">
                                                <p className="text-li fs-6 lh-1 bold-sm"><span className="mx-2">23 Nov, 2016</span> <span className="mx-2">Posted by: <span className="hover-orng bold-sm text-ld">admin</span></span> <span className="mx-2">0 Comments</span></p>
                                                <p className="text-dk fs-1 fw-bold hover-orng lh-sm">How to Install Landscape Lighting and Boost Home Value</p>
                                                <p className="text-li fs-6 pr-6 border-left ps-md-5 ps-3 lh-base ms-md-5">Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there. <p className="text-ls ff-pop bold-sm py-3">- Teresa and kevin K</p></p>
                                                <p className="text-li fs-6 pr-6 lh-base">Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there. – Teresa and Kevin K. Home Electrical Repair Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most […]</p>
                                                <div className="my-5">
                                                    <Link to="/blogItems" className="button-orng"><ThunderboltFilled/>  Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-8">
                                        <div className="w-100 mx-auto bg-lit h-blog">
                                            {/* <img src={sl2} alt="blog 1" className="w-100 mx-auto"/> */}
                                        </div>
                                        <div className="w-95 py-5 ps-3 et-s-i-card bg-white">
                                            <div className="px-md-0 px-2">
                                                <p className="text-li fs-6 lh-1 bold-sm"><span className="mx-2">23 Nov, 2016</span> <span className="mx-2">Posted by: <span className="hover-orng bold-sm text-ld">admin</span></span> <span className="mx-2">0 Comments</span></p>
                                                <p className="text-dk fs-1 fw-bold hover-orng lh-sm">The Best Lighting for Bathrooms with No Windows</p>
                                                <div className="my-3">
                                                    <iframe width="100%" height="300" scrolling="no" frameborder="no" title="electrician podcast" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1116107950&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                                                </div>
                                                <p className="text-li fs-6 pr-6 lh-base">Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there.</p>
                                                <div className="my-5">
                                                    <Link to="/blogItems" className="button-orng"><ThunderboltFilled/>  Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-8">
                                        <div className="">
                                            <img src={sl3} alt="blog 1" className="w-100 mx-auto"/>
                                        </div>
                                        <div className="w-95 py-5 ps-3 et-s-i-card bg-white">
                                            <div className="px-md-0 px-2">
                                                <p className="text-li fs-6 lh-1 bold-sm"><span className="mx-2">23 Nov, 2016</span> <span className="mx-2">Posted by: <span className="hover-orng bold-sm text-ld">admin</span></span> <span className="mx-2">0 Comments</span></p>
                                                <p className="text-dk fs-1 fw-bold hover-orng lh-sm">How to Choose Light Bulbs for Each Area of Your Home</p>
                                                <p className="text-li fs-6 pr-6 lh-base">Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there.</p>
                                                <div className="my-5">
                                                    <Link to="/blogItems" className="button-orng"><ThunderboltFilled/>  Read More</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <nav aria-label="Page navigation example border-0">
                                        <ul class="pagination border-0">
                                            <li class="page-item">
                                            <a class="page-link" href="#index" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#index">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#index">2</a></li>
                                            <li class="page-item">
                                            <a class="page-link" href="#index" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                            </li>
                                        </ul>
                                        </nav>
                                    </div>

                                </div>
                            </div>




                             {/* right section of blogs >>>>> */}
                             <div className="col-md-4 d-none d-md-block px-md-4 px-3">
                                <div className="my-3 ">
                                    <p className="fs-3 ff-pop bold-sm text-dk">Search</p>
                                    <div>
                                        <Input className="shadow-sm h-in border-2 fs-5" placeholder="Search text..." suffix={<SearchOutlined/>} />
                                    </div>
                                </div>

                                <div className="my-3 shadow py-5 px-5">
                                    <div className="">
                                        <p className="fs-3 ff-pop fw-bold">Categories</p>
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

                                <div className="my-5">
                                    <div className="container-fluid p-0">
                                        <p className="text-dk fs-3 fw-bold">Archive</p>
                                        <Calendar fullscreen={false}  />
                                        <p className="fs-6 ff-pop px-3">June 2021</p>
                                    </div>
                                </div>

                                <div className="my-3 shadow py-5 px-5">
                                    <div className="row">
                                        <p className="fs-3 ff-pop fw-bold">Tags</p>
                                        <span className="col-3 p-3 fs-6 bg-light bold-sm m-1">amet</span>
                                        <span className="col-3 p-3 fs-6 bg-light bold-sm m-1">dolor</span>
                                        <span className="col-3 p-3 fs-6 bg-light bold-sm m-1">Electrical</span>
                                        <span className="col-3 p-3 fs-6 bg-light bold-sm m-1">ipsum</span>
                                        <span className="col-3 p-3 fs-6 bg-light bold-sm m-1">lorem</span>
                                        <span className="col-3 p-3 fs-6 bg-light bold-sm m-1">Repairs</span>
                                        <span className="col-3 p-3 fs-6 bg-light bold-sm m-1">set</span>
                                        <span className="col-3 p-3 fs-6 bg-light bold-sm m-1">Upgrades</span>
                                    </div>
                                </div>

                                <div className="my-3">
                                    <p className="fs-3 ff-pop fw-bold">Recent Posts</p>
                                    <Carousel autoplay>
                                        <div className="">
                                            <div>
                                                <img src={top} alt="blog 1" className="w-100 mx-auto"/>
                                            </div>
                                            <div className="w-95 py-5 et-s-i-card bg-white">
                                                <div className="">
                                                    <p className="text-li fs-6 lh-1 bold-sm">23 Nov, 2016 </p>
                                                    <p className="text-dk lh-sm hover-orng border-left px-3 fs-3 fw-bold">Outdoor and Motion Lighting</p>
                                                    <p className="text-li fs-6 lh-sm"> Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there.</p>
                                                    <p className="fs-6 ff-pop hover-orng">Read More <span className="fas fa-caret-right text-orng" /></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div>
                                                <img src={obj1} alt="blog 1" className="w-100 mx-auto"/>
                                            </div>
                                            <div className="w-95 py-5 et-s-i-card bg-white">
                                                <div className="">
                                                    <p className="text-li fs-6 lh-1 bold-sm">23 Nov, 2016 </p>
                                                    <p className="text-dk lh-sm hover-orng border-left px-3 fs-3 fw-bold">Outdoor and Motion Lighting</p>
                                                    <p className="text-li fs-6 lh-sm"> Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there.</p>
                                                    <p className="fs-6 ff-pop hover-orng">Read More <span className="fas fa-caret-right text-orng" /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel>
                                </div>



                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogPageTop
