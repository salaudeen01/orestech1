import { DatePicker, Form, Input } from 'antd'
import React from 'react'
import {
    EnvironmentOutlined,
    PhoneOutlined,
    ThunderboltOutlined,
    UserOutlined
} from '@ant-design/icons'

function HomeTop() {

      
    return (
        <div className="et-home-top w-100">
            {/* <div className="et-home-top-first">
                <div className="d-flex d-inline"></div>
                <div className="d-flex d-inline"></div>
                <div className="d-flex d-inline"></div>
            </div> */}


            <div className="et-home-top-request">
                <div className="container">
                    <div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-3 et-home-top-orng fs-5 py-2 fw-bold">
                                    <p>Request Service Today</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 et-home-top-ryl">
                            <Form className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <Input className="w-100" size="large" placeholder="Your name" prefix={<UserOutlined/>} />
                                </div>
                                <div className="col-md-2">
                                    <Input className="w-100" size="large" placeholder="Your e-mail" prefix={<EnvironmentOutlined/>} />
                                </div>
                                <div className="col-md-2">
                                    <Input className="w-100" size="large" placeholder="Your phone" prefix={<PhoneOutlined/>} />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker className="w-100" size="large" placeholder="Date" />
                                </div>
                                <div className="col-md-2">
                                    <button className="et-home-top-button px-2" type="submit"><ThunderboltOutlined/>  Get Service</button>
                                </div>
                                <div className="col-md-1"></div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTop
