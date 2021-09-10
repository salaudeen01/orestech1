import React from 'react'
import TopBar from '../../components/layout/header'
import Top from '../../components/layout/header/Top'
import Footer from '../../components/layout/footer'
import { ServiceSection, ServiceTop } from '../../components/pages/service'

function Service() {
    return (
        <div className="w-100">
            {/* top section >>> */}
            <Top/>
            <TopBar active="service"/>

            {/* content section >>>>>>>> */}
            <ServiceTop/>
            <ServiceSection/>
            <br/>

            {/* footer section >> */}
            <Footer/>
        </div>
    )
}

export default Service
