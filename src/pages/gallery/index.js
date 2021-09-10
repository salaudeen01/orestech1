import React from 'react'
import TopBar from '../../components/layout/header'
import Top from '../../components/layout/header/Top'
import Footer from '../../components/layout/footer'
import { GalleryPage } from '../../components/pages/gallery'

function Gallery() {
    return (
        <div className="w-100">
            {/* top section >>> */}
            <Top/>
            <TopBar active="gallery"/>

            {/* content section >>>>>>>> */}
            <GalleryPage/>
            <br/>

            {/* footer section >> */}
            <Footer/>
        </div>
    )
}

export default Gallery
