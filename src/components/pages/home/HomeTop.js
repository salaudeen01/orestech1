import React, { useState } from 'react'
import './style.css'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'

function HomeTop() {

    const [state, setState] = useState({background: img1})

    const { background } = state
    const homeTop = {
      width: '100%',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${background})`,
    }


    setTimeout(() => {
        setState({
            background: background,
          })
    }, 1000);
      
    return (
        <div className="et-home-top w-100">
            <div className="et-home-top-first" style={homeTop}>
                <div className="et-home-top-second">

                </div>
            </div>
        </div>
    )
}

export default HomeTop
