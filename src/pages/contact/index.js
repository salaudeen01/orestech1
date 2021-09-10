import React from 'react'
import TopBar from '../../components/layout/header'
import Top from '../../components/layout/header/Top'
import Footer from '../../components/layout/footer'
import { ContactPage } from '../../components/pages/contact'

function Contact() {
    return (
        <div className="w-100">
            {/* top section >>> */}
            <Top/>
            <TopBar active="contact"/>

            {/* content section >>>>>>>> */}
            <ContactPage/>
            <br/>

            {/* footer section >> */}
            <Footer/>
        </div>
    )
}

export default Contact
