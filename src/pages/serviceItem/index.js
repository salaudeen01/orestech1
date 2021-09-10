import React from 'react'
import TopBar from '../../components/layout/header'
import Top from '../../components/layout/header/Top'
import Footer from '../../components/layout/footer'
import { ServiceItemSection, ServiceItemTop } from '../../components/pages/serviceItem'

function ServiceItem() {
    return (
        <div className="w-100">
            {/* top section >>> */}
            <Top/>
            <TopBar active="serviceItem"/>

            {/* content section >>>>>>>> */}
            <ServiceItemTop/>
            {/* <ServiceItemSection/> */}
            <br/>

            {/* footer section >> */}
            <Footer/>
        </div>
    )
}

export default ServiceItem
