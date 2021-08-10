import React from 'react'
import {
   ThunderboltFilled 
} from '@ant-design/icons'
import './style.css'
import { Link } from 'react-router-dom';

function TopBar() {

    document.addEventListener("DOMContentLoaded", function(){
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
              document.getElementById('navbar').classList.add('fixed-top');
              // add padding top to show content behind navbar
              let navbar_height = document.querySelector('.navbar').offsetHeight;
              document.body.style.paddingTop = navbar_height + 'px';
            } else {
              document.getElementById('navbar').classList.remove('fixed-top');
               // remove padding top from body
              document.body.style.paddingTop = '0';
            } 
        });
      });
    return (
        <div>
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-white" style={{minHeight:'115px'}}>
                <div className="container">
                    <Link className="navbar-brand" href="#"><img src="resources/images/logo.png" alt="logo" width="30px" height="50px" /><span>Electrician</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{maxHeight: '150px'}}>
                        <li className="nav-item py-md-2 mx-md-2">
                        <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item py-md-2 mx-md-2 dropdown">
                        <span className="nav-link dropbtn">About Us</span>
                        <ul class="dropdown-content">
                            <li><Link href="#" className="dropdown-item">Testimonial</Link></li>
                        </ul>
                        </li>
                        <li className="nav-item py-md-2 mx-md-2 dropdown">
                        <span className="nav-link dropbtn">Services</span>
                        <ul class="dropdown-content">
                            <li><Link href="#" className="dropdown-item">Services Item</Link></li>
                        </ul>
                        </li>
                        <li className="nav-item py-md-2 mx-md-2">
                        <Link className="nav-link" aria-current="page" href="#">Prices</Link>
                        </li>
                        <li className="nav-item py-md-2 mx-md-2">
                        <Link className="nav-link" aria-current="page" href="#">Gallery</Link>
                        </li>
                        <li className="nav-item py-md-2 mx-md-2 dropdown">
                        <span className="nav-link dropbtn">Blog</span>
                        <ul class="dropdown-content">
                            <li><Link href="#" className="dropdown-item">Blog Item</Link></li>
                        </ul>
                        </li>
                        <li className="nav-item py-md-2 mx-md-2">
                        <Link className="nav-link" aria-current="page" href="#">Shop</Link>
                        </li>
                        <li className="nav-item py-md-2 mx-md-2">
                        <Link className="nav-link" aria-current="page" href="#">Faq</Link>
                        </li>
                        <li className="nav-item py-md-2 mx-md-2">
                        <Link className="nav-link" aria-current="page" href="#">Contact</Link>
                        </li>
                        <li className="nav-item ms-md-2">
                        <button className="nav-link-button px-2" type="submit"><ThunderboltFilled />  Appointment</button>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </div>
    )
}

export default TopBar
