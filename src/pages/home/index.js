import React from 'react'
// import { MobileViewNav, WebViewNav } from '../../components/layout/header'
import { HomeAbout, HomeBlogs, HomeGallery, HomeServices, HomeTop } from '../../components/pages/home'
import Footer from '../../components/layout/footer'
import Top from '../../components/layout/header/Top'
import TopBar from '../../components/layout/header'

function Home() {
    return (
        <div className="w-100">

            {/* navbar section  */}
            <Top/>
            <TopBar active="home" />

            {/* home components  */}
            <HomeTop/>
            <br/>
            <HomeAbout/>
            {/* <br/> */}
            <HomeServices/>
            {/* <br/> */}
            <HomeGallery/>
            {/* <br/>
            <HomeShop/> */}
            <br/>
            <HomeBlogs/>
            <br/>

            {/* footer  */}
            <Footer/>
        </div>
    )
}

export default Home
