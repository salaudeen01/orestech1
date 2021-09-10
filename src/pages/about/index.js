import React from 'react'
import TopBar from '../../components/layout/header'
import Top from '../../components/layout/header/Top'
import Footer from '../../components/layout/footer'
import {AboutService, AboutTop} from '../../components/pages/about'

function About() {
    return (
        <div className="w-100">
            {/* Top contents */}
            <Top/>
            <TopBar active="about"/>

            {/* About page contents  */}
            <AboutTop/>
            <br/>
            <AboutService/>
            <br/>






            {/* Footer content   */}
            <Footer/>
        </div>
    )
}

export default About
