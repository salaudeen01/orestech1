import React from 'react'
import TopBar from '../../components/layout/header'
import Top from '../../components/layout/header/Top'
import Footer from '../../components/layout/footer'
import { TestTests, TestTop } from '../../components/pages/testimonial'

function Testimonials() {
    return (
        <div className="w-100">
            {/* Top contents */}
            <Top/>
            <TopBar active="testimonial" />

            {/* About page contents  */}
            <TestTop/>
            <br/>
            <TestTests/>
            <br/>






            {/* Footer content   */}
            <Footer/>
        </div>
    )
}

export default Testimonials
