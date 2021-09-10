import React from 'react'
import TopBar from '../../components/layout/header'
import Top from '../../components/layout/header/Top'
import Footer from '../../components/layout/footer'
import { FaqPage } from '../../components/pages/faq'

function Faq() {
    return (
        <div className="w-100">
            {/* top section >>> */}
            <Top/>
            <TopBar active="faq"/>

            {/* content section >>>>>>>> */}
            <FaqPage/>
            <br/>

            {/* footer section >> */}
            <Footer/>
        </div>
    )
}

export default Faq
