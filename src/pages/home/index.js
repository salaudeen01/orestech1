import React from 'react'
import TopBar from '../../components/layout/header'
import Top from '../../components/layout/header/Top'
import HomeTop from '../../components/pages/home/HomeTop'

function Home() {
    return (
        <div className="w-100">
            <Top/>
            <TopBar/>
            <HomeTop/>
        </div>
    )
}

export default Home
