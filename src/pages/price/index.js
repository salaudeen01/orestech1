import React from 'react'
import TopBar from '../../components/layout/header'
import Top from '../../components/layout/header/Top'
import Footer from '../../components/layout/footer'
import { PriceSection, PriceTop } from '../../components/pages/price'

function Prices() {
    return (
        <div className="w-100">
            {/* top section >>> */}
            <Top/>
            <TopBar active="prices"/>

            {/* content section >>>>>>>> */}
            <PriceTop/>
            <PriceSection/>
            <br/>

            {/* footer section >> */}
            <Footer/>
        </div>
    )
}

export default Prices
