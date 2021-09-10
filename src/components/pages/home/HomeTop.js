import { DatePicker, Dropdown, Form, Input, Menu } from 'antd'
import React from 'react'
import {
    DownOutlined,
    EnvironmentOutlined,
    PhoneOutlined,
    ThunderboltFilled,
    ThunderboltOutlined,
    UserOutlined
} from '@ant-design/icons'

function HomeTop() {

    const menu = (
        <Menu className="et-top-r-mobile w-100" style={{
            margin: '-3px auto',
            minHeight: '100px',
            backgroundColor: 'rgb(1, 1, 32)'
            }}>
            <Form className="row px-3 py-2">
                <Form.Item className="col-12">
                    <Input placeholder="Your name" size="large" />
                </Form.Item>
                <Form.Item className="col-12">
                    <Input placeholder="Your e-mail" size="large" />
                </Form.Item>
                <Form.Item className="col-12">
                    <Input placeholder="Your phone" size="large" />
                </Form.Item>
                <Form.Item className="col-12">
                    <DatePicker className="w-100" size="large" placeholder="Date" />
                </Form.Item>
                <Form.Item className="col-12">
                    <button className="et-home-top-btn px-2" type="submit"><ThunderboltOutlined/>  Get Service</button>
                </Form.Item>
            </Form>
        </Menu>
      )
    return (
        <div className="et-home-top w-100">
            <div className="et-home-top-first">
                <div className="et-home-top-second">
                    <div className="et-home-top-second-text w3-animate-bottom">
                        <p className="m-0 px-2 lh-sm font-fam fs-3 fw-bold">Keeping you wired <span className="text-orng"><ThunderboltFilled/></span></p>
                        <p className="m-0 px-2 lh-sm font-fam text-big fw-bold">We're the Current</p>
                        <p className="m-0 px-2 lh-sm font-fam text-big fw-bold">Specialist</p>
                    </div>
                </div>
            </div>


            <div className="et-home-top-request mx-auto">

                {/* web view  */}
                <div className="container d-none d-md-block">
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
                                <div className="col-md-2 my-2">
                                    <Input className="w-100" size="large" placeholder="Your name" prefix={<UserOutlined/>} />
                                </div>
                                <div className="col-md-2 my-2">
                                    <Input className="w-100" size="large" placeholder="Your e-mail" prefix={<EnvironmentOutlined/>} />
                                </div>
                                <div className="col-md-2 my-2">
                                    <Input className="w-100" size="large" placeholder="Your phone" prefix={<PhoneOutlined/>} />
                                </div>
                                <div className="col-md-2 my-2">
                                    <DatePicker className="w-100" size="large" placeholder="Date" />
                                </div>
                                <div className="col-md-2 my-2">
                                    <button className="et-home-top-button px-2" type="submit"><ThunderboltOutlined/>  Get Service</button>
                                </div>
                                <div className="col-md-1"></div>
                            </Form>
                        </div>
                    </div>
                </div>


                {/* mobile view  */}
                <div className="w-100 request-mobile d-block d-md-none">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <span className="ant-dropdown-link px-2 et-home-top-orng fs-5 py-2 fw-bold" role="button" onClick={e => e.preventDefault()}><DownOutlined /> Request Service Today</span>
                    </Dropdown>
                </div>

            </div>
        </div>
    )
}

export default HomeTop
