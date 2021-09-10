
import { ThunderboltFilled } from '@ant-design/icons'
import { Empty, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import us1 from '../../images/tests/test1.jpg'
import us2 from '../../images/tests/test2.jpg'
import us3 from '../../images/tests/test3.jpg'
import us4 from '../../images/tests/test4.jpg'
import us5 from '../../images/tests/test5.jpg'
import us6 from '../../images/tests/test6.jpg'
import us7 from '../../images/tests/test7.jpg'
import us8 from '../../images/tests/test8.jpg'
import us9 from '../../images/tests/test9.jpg'


function TestTests() {

const testimonials = [
    {
        img: us1,
        title: 'If you are looking for a company that is ethical then your search is over.',
        comment: 'Great service. They really helped me out when my heater went out. They made the service and payment very convenient for me. I highly recommend this company.',
        name: 'Kathleen Meade',
        role: 'Home owner',
    },
    {
        img: us2,
        title: 'If you are looking for a company that is ethical then your search is over.',
        comment: 'Great service. They really helped me out when my heater went out. They made the service and payment very convenient for me. I highly recommend this company.',
        name: 'Darren J. Napier',
        role: 'Home owner',
    },
    {
        img: us3,
        title: 'If you are looking for a company that is ethical then your search is over.',
        comment: 'Great service. They really helped me out when my heater went out. They made the service and payment very convenient for me. I highly recommend this company.',
        name: 'Jesus Erickson',
        role: 'Home owner',
    },
    {
        img: us4,
        title: 'If you are looking for a company that is ethical then your search is over.',
        comment: 'Great service. They really helped me out when my heater went out. They made the service and payment very convenient for me. I highly recommend this company.',
        name: 'Ben Sims',
        role: 'Home owner',
    },
    {
        img: us5,
        title: 'If you are looking for a company that is ethical then your search is over.',
        comment: 'Great service. They really helped me out when my heater went out. They made the service and payment very convenient for me. I highly recommend this company.',
        name: 'Nettie Marsh',
        role: 'Home owner',
    },
    {
        img: us6,
        title: 'If you are looking for a company that is ethical then your search is over.',
        comment: 'Great service. They really helped me out when my heater went out. They made the service and payment very convenient for me. I highly recommend this company.',
        name: 'Jeffrey smith',
        role: 'Home owner',
    },
    {
        img: us7,
        title: 'If you are looking for a company that is ethical then your search is over.',
        comment: 'Great service. They really helped me out when my heater went out. They made the service and payment very convenient for me. I highly recommend this company.',
        name: 'Alexander Fulton',
        role: 'Home owner',
    },
    {
        img: us8,
        title: 'If you are looking for a company that is ethical then your search is over.',
        comment: 'Great service. They really helped me out when my heater went out. They made the service and payment very convenient for me. I highly recommend this company.',
        name: 'James s. Bryant',
        role: 'Home owner',
    },
    {
        img: us9,
        title: 'If you are looking for a company that is ethical then your search is over.',
        comment: 'Great service. They really helped me out when my heater went out. They made the service and payment very convenient for me. I highly recommend this company.',
        name: 'Richard Gunderson',
        role: 'Home owner',
    },
]










    return (
        <div className="w-100">
            <div className="et-about-service">

                <div className="mb-5 px-md-4 px-sm-2">
                    <div className="text-center">
                        <p className="text-orng fw-bold fs-6">A Reputation You Can Count On</p>
                        <b className="text-ld fs-2">Explore Some of Our Testimonials!</b>
                        <p className="w-50 d-none d-md-block mx-auto">Here are a few testimonials and reviews from our customers - we're sure you will feel the same when we work with you.</p>
                        <p className="d-block d-md-none">Here are a few testimonials and reviews from our customers - we're sure you will feel the same when we work with you.</p>
                    </div>


                    <div className="container">
                        <div className="row">
                            {
                                testimonials === 0? <Empty/>:
                                testimonials.map(({img,title,comment,name,role})=>(
                                    <div className="col-md-4 my-2">
                                        <div className="et-test-cards shadow-sm p-3 rounded">
                                            <div className="">
                                                <span className="text-big text-orng fas fa-quote-left" />
                                            </div>
                                            <p className="fw-bold fs-5 text-ls">"{title}"</p>
                                            <p className="fs-6 text-ls">{comment}</p>
                                            <div className="d-flex">
                                                <div className="me-md-4">
                                                    <img alt="..." className="rounded-circle" src={img} />
                                                </div>
                                                <div className="">
                                                    <span><p className="fs-5 fw-bold text-dk m-0 lh-base">{name}</p> <span>{role}</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>



                <div className="mb-5">
                    <div className="text-center">
                        <p className="text-orng fw-bold fs-6">Your Review</p>
                        <b className="text-ld fs-2">Leave Your Feedback</b>
                    </div>

                    <div className="container px-md-5">
                        <div className="row px-md-5">
                            <div className="my-3 col-md-12">
                                <Input size="large" className="shadow-sm h-in" placeholder="Your Name *" />
                            </div>
                            <div className="my-3 col-md-6">
                                <Input size="large" className="shadow-sm h-in" placeholder="Your e-mail address *" />
                            </div>
                            <div className="my-3 col-md-6">
                                <Input size="large" className="shadow-sm h-in" placeholder="Your phone number" />
                            </div>
                            <div className="my-3 col-md-12">
                                <Input.TextArea size="large" className="shadow-sm" placeholder="Your Review" />
                            </div>
                            <div className="my-3 text-center mx-auto">
                                <Link className="review-btn" type="submit"><ThunderboltFilled />  <span>Leave your review</span></Link>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default TestTests
