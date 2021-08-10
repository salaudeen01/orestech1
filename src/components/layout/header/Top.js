import React from 'react'
import './style.css'

function Top() {
    return (
        <div className="elect-top w-100 d-none d-md-block">
            <div className="container-fluid py-3">
                <div className="float-start">
                   <span className="mx-5">
                       <span className="icon fas fa-map-marker-alt px-2"/> 
                       <span>8494 Signal Hill Road Manassas, VA, 20110</span>
                   </span>
                   <span>
                       <span className="icon far fa-clock px-2"/> 
                       <span>Mon-Fri 08:00 AM - 05:00 PM</span>
                   </span>
                </div>
                <div className="float-end">
                    <span className="">
                      <a href="tel:1 (800) 765-43-21" className="text-decoration-none">
                       <span className="text-white fa fa-phone px-4"/> 
                       <span className="icon fw-bold">1 (800) 765-43-21</span>
                      </a>
                   </span>
                   <span className="mx-5">
                       <a href="#cart" className="cart"><span className="fas fa-shopping-cart"/></a>
                   </span>
                </div>
            </div>
        </div>
    )
}

export default Top
