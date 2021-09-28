
import { Empty, Image } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import gal1 from '../../images/pages/gallery/1.jpg'
import gal2 from '../../images/pages/gallery/2.jpg'
import gal3 from '../../images/pages/gallery/3.jpg'
import gal4 from '../../images/pages/gallery/4.jpg'
import gal5 from '../../images/pages/gallery/5.jpg'
import gal6 from '../../images/pages/gallery/6.jpg'
import gal7 from '../../images/pages/gallery/7.jpg'
import gal8 from '../../images/pages/gallery/8.jpg'
import gal9 from '../../images/pages/gallery/9.jpg'
import gal10 from '../../images/pages/gallery/10.jpg'
import gal11 from '../../images/pages/gallery/11.jpg'
import gal12 from '../../images/pages/gallery/12.jpg'



function GalleryPage() {
    const imgs =[
        {
            img:gal1
        },
        {
            img:gal2
        },
        {
            img:gal3
        },
        {
            img:gal4
        },
        {
            img:gal5
        },
        {
            img:gal6
        },
        {
            img:gal7
        },
        {
            img:gal8
        },
        {
            img:gal9
        },
        {
            img:gal10
        },
        {
            img:gal11
        },
        {
            img:gal12
        },
    ]
    return (
        <div className="et-about-top">
            <div className="w-100">

                <div className="lin-bg-sec">
                    <div className="text-li fs-6 px-md-5 px-sm-2 py-3 bold-sm">
                        <p><Link to="/" className="text-li hover-orng">Home</Link> / Gallery</p>
                    </div>
                </div>
















            {/* web view  */}
            <div className="container-fluid d-none d-md-block my-8" style={{padding:'0px 90px'}}>
                <div className="container-fluid">
                    <div className="et-h-g-first">
                        <div className="text-center">
                            <p className="text-orng fs-6 fw-bold m-0">Electrical Gallery</p>
                            <p className="fs-1 fw-bold text-dark">Our Photo Gallery</p>
                            <p className="fs-6 text-li bold-sm d-none d-md-block w-75 mx-auto px-5">You will really enjoy doing business with us! Fast, electrical estimates at a competitive price. We save you time and money. Interested? Check out our photos.</p>
                            <p className="fs-6 text-li bold-sm d-block d-md-none px-3">You will really enjoy doing business with us! Fast, electrical estimates at a competitive price. We save you time and money. Interested? Check out our photos.</p>
                            <div className="w-100 my-5">

                                {/* <div className="d-md-inline fw-bold text-center">
                                        <Link className="d-md-inline mx-3 hover-orng text-orng">All</Link>
                                        <Link className="d-md-inline mx-3 hover-orng text-dk">Other</Link>
                                        <Link className="d-md-inline mx-3 hover-orng text-dk">Heating</Link>
                                        <Link className="d-md-inline mx-3 hover-orng text-dk">Air Conditioning</Link>
                                        <Link className="d-md-inline mx-3 hover-orng text-dk">Security Systems</Link>
                                        <Link className="d-md-inline mx-3 hover-orng text-dk">Electrical</Link>
                                </div> */}
                            </div>
                        </div>
                        <div className="row my-2">
                            {
                                imgs === []? <Empty/>:
                                imgs.map(({img})=>(
                                    <div className="col-md-4 my-2">
                                        <Image alt="gallery image" src={img} />
                                    </div>
                                ))
                            }
                            
                        </div>

                        
                    </div>
                </div>
            </div>




            {/* mobile view  */}
            <div className="container-fluid d-block d-md-none my-8">
                <div className="container-fluid">
                    <div className="">
                        <div className="text-center">
                            <p className="text-orng fs-6 fw-bold m-0">Electrical Gallery</p>
                            <p className="fs-1 fw-bold text-dark">Our Photo Gallery</p>
                            <p className="fs-6 text-li bold-sm d-none d-md-block w-75 mx-auto px-5">You will really enjoy doing business with us! Fast, electrical estimates at a competitive price. We save you time and money. Interested? Check out our photos.</p>
                            <p className="fs-6 text-li bold-sm d-block d-md-none px-3">You will really enjoy doing business with us! Fast, electrical estimates at a competitive price. We save you time and money. Interested? Check out our photos.</p>
                            <div className="w-100 my-5">

                                <div className="d-md-inline fw-bold text-center">
                                        <Link className="d-md-inline mx-3 hover-orng text-orng">All</Link>
                                        <Link className="d-md-inline mx-3 hover-orng text-dk">Other</Link>
                                        <Link className="d-md-inline mx-3 hover-orng text-dk">Heating</Link>
                                        <Link className="d-md-inline mx-3 hover-orng text-dk">Air Conditioning</Link>
                                        <Link className="d-md-inline mx-3 hover-orng text-dk">Security Systems</Link>
                                        <Link className="d-md-inline mx-3 hover-orng text-dk">Electrical</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row my-2">
                            {
                                imgs === []? <Empty/>:
                                imgs.map(({img})=>(
                                    <div className="col-6 my-2">
                                        <Image alt="gallery image" src={img} />
                                    </div>
                                ))
                            }
                            
                        </div>

                        
                    </div>
                </div>
            </div>







            </div>
        </div>
    )
}

export default GalleryPage

