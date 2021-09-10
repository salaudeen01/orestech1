import React from 'react'
import TopBar from '../../components/layout/header'
import Top from '../../components/layout/header/Top'
import Footer from '../../components/layout/footer'
import { BlogItemSection, BlogItemTop } from '../../components/pages/blogItem'

function BlogItem() {
    return (
        <div className="w-100">
            {/* top section >>> */}
            <Top/>
            <TopBar active="blogItem"/>

            {/* content section >>>>>>>> */}
            <BlogItemTop/>
            {/* <BlogItemSection/> */}
            <br/>

            {/* footer section >> */}
            <Footer/>
        </div>
    )
}

export default BlogItem
