
import { SearchOutlined, ThunderboltFilled } from '@ant-design/icons'
import { Calendar, Carousel, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import top from '../../images/pages/service/item/objtop.jpg'
import obj1 from '../../images/pages/service/item/obj1.jpg'
import obj2 from '../../images/pages/service/item/obj2.jpg'

function BlogItemTop() {
    return (
        <div className="et-about-top">
            <div className="w-100">

                <div className="lin-bg-sec">
                    <div className="text-li fs-6 px-md-5 px-sm-2 py-3 bold-sm">
                        <p><Link to="/" className="text-li hover-orng">Home</Link> / <Link to="/blog" className="text-li hover-orng">Blog</Link> / BlogItems</p>
                    </div>
                </div>


                <div className="my-8">
                    <div className="container p-md-0">
                        <div className="row">

                           

                            {/* left section of blogs >>>>>>>>> */}
                            <div className="col-md-8 ps-md-5">
                                <div>
                                    <div className="my-8">
                                        <div className="">
                                            <img src={top} alt="blog 1" className="w-100 mx-auto"/>
                                        </div>
                                        <div className="w-95 py-5 ps-3 et-s-i-card bg-white">
                                            <div className="px-md-0 px-2">
                                                <p className="text-li fs-6 lh-1 bold-sm"><span className="mx-2">23 Nov, 2016</span> <span className="mx-2">Posted by: <span className="hover-orng bold-sm text-ld">admin</span></span> <span className="mx-2">0 Comments</span></p>
                                                <p className="text-dk fs-1 fw-bold hover-orng lh-sm">How to Install Landscape Lighting and Boost Home Value</p>
                                                <p className="text-li fs-6 pr-6 border-left ps-md-5 ps-3 lh-base ms-md-5">Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there. <p className="text-ls ff-pop bold-sm py-3">- Teresa and kevin K</p></p>
                                                <p className="text-li fs-6 pr-6 lh-base">Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there. – Teresa and Kevin K. Home Electrical Repair Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most […]</p>
                                                <div className="my-5">
                                                    <Link className="button-orng"><ThunderboltFilled/>  Read More</Link>
                                                </div>
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
                                
                                {/* <div className="ps-md-4 px-3">
                                    <p className="text-dk fs-3 fw-bold">Always Hire a Professionals</p>
                                    <p className="text-li fs-6">No matter urgent any electrical repairs seem, it’s never okay to attempt to handle them on your own. Trying to take care of electrical problems without professional training is extremely dangerous. If you or someone else aren’t hurt during your attempt, there’s still a chance that you’ve left something undone that poses a huge risk to you, your home, or your family. In fact, faulty electrical wiring is the number one cause of house fires in the United States, according to the National Fire Protection Agency. So in order to make sure that your home is safe, always rely on a professional for any electrical services.</p>
                                    <Divider orientation="left" className="h-dd" type="horizontal"><span className="text-orng"><ThunderboltFilled/></span></Divider>
                                    <p className=" fs-6 text-dk fw-bold px-md-5 py-2">When searching for a reliable electrician, call us at <a className="text-orng hover-orng" href="tel:1 (800) 765-43-21">1 (800) 765-43-21</a>. We specialize in electrical repairs, indoor and outdoor lighting installations, panel upgrades, and even hot tub wiring!</p>
                                    <Divider className="h-dd"/>

                                    <Link className="review-btn" type="submit"><ThunderboltFilled />  <span>Get Service Now</span></Link>

                                </div> */}

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

export default BlogItemTop
