import React,{useState} from 'react'
import {
    ShoppingCartOutlined,
   ThunderboltFilled 
} from '@ant-design/icons'
import './style.css'
import { Link } from 'react-router-dom';
import { Input, Modal, Form, Select, DatePicker } from 'antd';

function TopBar({active}) {

    const [modal, setModal] = useState(false)


    const showModal =(show)=>{
        setModal(show)
    }


    document.addEventListener("DOMContentLoaded", function(){
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
              document.getElementById('navbar').classList.add('fixed-top');
              document.getElementById('navbar').classList.add('shadow');
              document.getElementById('navbar').style.minHeight='10px';

            //   document.getElementById('navbar').classList.remove('position-absolute');
              // add padding top to show content behind navbar
              let navbar_height = document.querySelector('.navbar').offsetHeight;
              document.body.style.paddingTop = navbar_height + 'px';
            } else {
              document.getElementById('navbar').classList.remove('fixed-top');
              document.getElementById('navbar').classList.remove('shadow');
              document.getElementById('navbar').style.minHeight='115px';
               // remove padding top from body
              document.body.style.paddingTop = '0';
            } 
        });
      });
    return (
        <div className="ff-pop">
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light px-md-5" style={{minHeight:'80px'}}>
                <div className="container-fluid">
                    <Link to="/" className="d-none d-md-block navbar-brand fw-bold" href="#"><img src="resources/images/logo.png" alt="logo" width="30px" height="50px" /><span>Electrician</span></Link>
                    <Link to="/" className="d-block d-md-none navbar-brand-mob fw-bold" href="#"><img src="resources/images/logo.png" alt="logo" width="25px" height="40px" /><span>Electrician</span></Link>
                    
                    <Link className="d-block d-md-none cart-icon fs-3 up-smo"><ShoppingCartOutlined/></Link>
                    <button className="navbar-toggler border-0 m-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-md-auto" style={{maxHeight: '150px'}}>
                        <li className="nav-item py-md-2 px-md-2">
                        <Link to="/" className={`nav-link ${active=== 'home'?'active':''}`} aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item py-md-2 px-md-2 dropdown">
                        <Link to="/about" className={`nav-link dropbtn ${active=== 'about'?'active':''}`}>About Us</Link>
                        <ul class="dropdown-content">
                            <li><Link to="/testimonials" className={`dropdown-item ${active=== 'testimonial'?'active':''}`}>Testimonial</Link></li>
                        </ul>
                        </li>
                        <li className="nav-item py-md-2 px-md-2 dropdown">
                        <Link to="/service" className={`nav-link dropbtn ${active=== 'service'?'active':''}`} >Services</Link>
                        <ul class="dropdown-content">
                            <li><Link to="/serviceItems" href="#" className={`dropdown-item ${active=== 'serviceItem'?'active':''}`}>Services Item</Link></li>
                        </ul>
                        </li>
                        {/* <li className="nav-item py-md-2 px-md-2">
                        <Link to="/price" className={`nav-link ${active=== 'prices'?'active':''}`} aria-current="page" href="#">Prices</Link>
                        </li> */}
                        <li className="nav-item py-md-2 px-md-2">
                        <Link to="/gallery" className={`nav-link ${active=== 'gallery'?'active':''}`} aria-current="page" href="#">Gallery</Link>
                        </li>
                        {/* <li className="nav-item py-md-2 px-md-2 dropdown">
                        <Link to="/blog" className={`nav-link dropbtn ${active=== 'blog'?'active':''}`}>Blog</Link>
                        <ul class="dropdown-content">
                            <li><Link to="/blogItems" href="#" className={`dropdown-item ${active=== 'blogItem'?'active':''}`}>Blog Item</Link></li>
                        </ul>
                        </li> */}
                        {/* <li className="nav-item py-md-2 px-md-2">
                        <Link to="/shop" className={`nav-link ${active=== 'shop'?'active':''}`} aria-current="page" href="#">Shop</Link>
                        </li> */}
                        <li className="nav-item py-md-2 px-md-2">
                        <Link to="/faq" className={`nav-link ${active=== 'faq'?'active':''}`} aria-current="page" href="#">Faq</Link>
                        </li>
                        <li className="nav-item py-md-2 px-md-2">
                        <Link to="/contact" className={`nav-link ${active=== 'contact'?'active':''}`} aria-current="page" href="#">Contact</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <span className="nav-item">
                        <button onClick={()=>showModal(true)} className="nav-link-button" type="submit"><ThunderboltFilled />  <span>Appointment</span></button>
                        </span>
                    </div>
                    </div>
                </div>
            </nav>






            {/* appointment modal >>>>>>>>> */}
            <div>
                <Modal
                    className="w-50"
                    title={(<p className="px-md-4 my-4 fs-1 fw-bold text-dk">Make an Appointment</p>)}
                    style={{ top: 20 }}
                    visible={modal}
                    onOk={() => setModal(false)}
                    onCancel={() => setModal(false)}
                    footer={null}
                    >
                        <div className="container-fluid ">
                            <Form className="row ">
                                <Form.Item className="my-3 col-md-12">
                                    <Input size="large" className="shadow-sm h-in" placeholder="Your Name *" />
                                </Form.Item>
                                <Form.Item className="my-3 col-md-6 px-md-1">
                                    <Input size="large" className="shadow-sm h-in" placeholder="Your e-mail address *" />
                                </Form.Item>
                                <Form.Item className="my-3 col-md-6 px-md-1">
                                    <Input size="large" className="shadow-sm h-in" placeholder="Your phone number *" />
                                </Form.Item>
                                <Form.Item className="my-3 col-md-12">
                                    <Input size="large" className="shadow-sm h-in" placeholder="Your Address *" />
                                </Form.Item>
                                <Form.Item className="my-3 col-md-12">
                                    <Select defaultValue='service' size="large" className="shadow-sm">
                                        <Select.Option value="service" key="1">Service</Select.Option>
                                        <Select.Option value="industrial" key="2">Industrial Service</Select.Option>
                                        <Select.Option value="commercial" key="3">Commercial Service</Select.Option>
                                        <Select.Option value="residential" key="4">Residential Service</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item className="my-3 col-md-12">
                                    <DatePicker size="large" className="shadow-sm h-in w-100" placeholder="Date of visit" />
                                </Form.Item>
                                <Form.Item className="my-3 col-md-12">
                                    <Input.TextArea size="large" className="shadow-sm" placeholder="Your Comment *" />
                                </Form.Item>


                                <Form.Item className="my-3 mx-auto">
                                    <Link className="review-btn" type="submit"><ThunderboltFilled />  <span>Explore Services</span></Link>
                                </Form.Item>
                            </Form>
                        </div>
                </Modal>
            </div>

        </div>
    )
}

export default TopBar
