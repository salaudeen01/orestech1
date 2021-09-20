import React from 'react'
import TopBar from '../../components/layout/header'
import Top from '../../components/layout/header/Top'
import Footer from '../../components/layout/footer'
import { BlogPageTop } from '../../components/pages/blog'

function Blog() {
    return (
        <div className="w-100">
            {/* top section >>> */}
            <Top/>
            <TopBar active="blog"/>

            {/* content section >>>>>>>> */}
            <BlogPageTop/>
            <br/>

            {/* footer section >> */}
            <Footer/>
        </div>
    )
}

export default Blog
