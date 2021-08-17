import React from 'react'
import TopBar from '../../components/layout/header'
import Top from '../../components/layout/header/Top'
import { HomeTop, HomeAbout, HomeServices } from '../../components/pages/home'

function Home() {
    return (
        <div className="w-100">
            <Top/>
            <TopBar/>
            <HomeTop/>
            <HomeAbout/>
            <HomeServices/>
        </div>
    )
}

export default Home
