
import { ThunderboltFilled } from '@ant-design/icons'
import { Input, Collapse, Empty } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function FaqPage() {


    const faqs=[
        {
            key: 1,
            quest: 'Does conduit need to go inside the transformer box?',
            ans: 'No. Conduit should be stopped just short of the box.'
        },
        {
            key: 2,
            quest: 'Is there a difference in meter bases?',
            ans: 'Yes, There are three types. Overhead only, Underground only, and Overhead/Underground combination bases. However, combination boxes are not recommended for Underground installations because of their limited wire space.'
        },
        {
            key: 3,
            quest: 'How close to the pole do I bring my conduit to?',
            ans: 'The top of the elbow must be 6" from the pole..'
        },
        {
            key: 4,
            quest: 'Can septic lines be installed under power lines?',
            ans: 'Yes'
        },
        {
            key: 5,
            quest: 'Is additional conduit required beyond what is installed in the ditch?',
            ans: 'If the service is being supplied from a utility pole, the member is required to supply 1-10 section of SCH 80 PVC and 2-10 sections of SCH 40 PVC to be left near the base of the pole for installation by the power company up the pole.'
        },
        {
            key: 6,
            quest: 'Can permanent service be installed if the house has had a ruff in inspection?',
            ans: 'No, We will not set a meter without a final inspection or in some instances a non occupancy permit shall be allowed from the local electrical inspector.'
        },
        {
            key: 7,
            quest: 'Does someone need to inspect the ditch before covering the conduit?',
            ans: 'Yes, contact the power company and a representative will come and inspect the ditch and conduit. The representative will place a white sticker on the meter panel with a pass or fail notice.'
        },
        {
            key: 8,
            quest: 'What about outdoor lighting?',
            ans: 'We offer a variety of lighting products including decorative colonial, cobra head, directional floodlights, and security lights. We can customize plans to fit any lighting need.'
        },
    ]
    return (
        <div className="et-about-top">
            <div className="w-100">

                <div className="lin-bg-sec">
                    <div className="text-li fs-6 px-md-5 px-sm-2 py-3 bold-sm">
                        <p><Link to="/" className="text-li hover-orng">Home</Link> / Frequently Asked Questions</p>
                    </div>
                </div>





                <div className="container-fluid my-8">
                    <div className="">
                        <div className="text-center">
                            <p className="text-orng fw-bold fs-5">Your Questions. Our Answers</p>
                            <p className="fs-1 text-dk lh-sm fw-bold">Frequently Asked Questions</p>
                            <p className="text-ls bold-sm fs-6 w-50 mx-auto px-5 d-none d-md-block">You will find answers to all of your most common Electrical Services related questions located here.</p>
                            <p className="text-ls bold-sm fs-6 px-2 d-block d-md-none">You will find answers to all of your most common Electrical Services related questions located here.</p>
                        </div>

                        <div className="container">
                            <Collapse defaultActiveKey={['1']} className="row border-0 bg-white">
                                {
                                    faqs===[]?<Empty/>:
                                    faqs.map(({key,quest,ans})=>(
                                        <Collapse.Panel className="col-md-6 border-0 my-3" header={(<span><span className="rounded-circle p-3 bg-lit fas fa-plus me-3"/> <span className="hover-orng fs-6 ff-pop fw-bold">{quest}</span></span>)} key={`${key}`}>
                                            <p className="text-ls fs-6">{ans}</p>
                                        </Collapse.Panel>
                                    ))
                                }
                            </Collapse>
                        </div>
                    </div>



                    <div className="my-8">
                        <div className="text-center">
                            <p className="text-orng fw-bold fs-5">Send us your questions below</p>
                            <p className="fs-1 text-dk lh-sm fw-bold">Ask Your Question</p>
                            <p className="text-ls bold-sm fs-6 w-50 mx-auto px-5 d-none d-md-block">Are you stumped by a home wiring project or problem? Don't worry – we are here to help. There are a number of options available for you.</p>
                            <p className="text-ls bold-sm fs-6 px-2 d-block d-md-none">Are you stumped by a home wiring project or problem? Don't worry – we are here to help. There are a number of options available for you.</p>
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
                                    <Input size="large" className="shadow-sm h-in" placeholder="Your phone number *" />
                                </div>
                                <div className="my-3 col-md-12">
                                    <Input.TextArea size="large" className="shadow-sm" placeholder="Question In Detail *" />
                                </div>
                                <p className="fs-6 text-center">
                                    All Electrical work must be done by a qualified licensed electrician.
                                </p>
                                <div className="my-3 text-center mx-auto">
                                    <Link className="review-btn" type="submit"><ThunderboltFilled />  <span>Ask your question</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>



               


            </div>
        </div>
    )
}

export default FaqPage
