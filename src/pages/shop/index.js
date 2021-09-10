import React from 'react'
import TopBar from '../../components/layout/header'
import Top from '../../components/layout/header/Top'
import Footer from '../../components/layout/footer'
import { ShopSection, ShopTop } from '../../components/pages/shop'

function Shop() {
    return (
        <div className="w-100">
            {/* top section >>> */}
            <Top/>
            <TopBar active="shop"/>

            {/* content section >>>>>>>> */}
            <ShopTop/>
            {/* <ShopSection/> */}
            <br/>

            {/* footer section >> */}
            <Footer/>
        </div>
    )
}

export default Shop
