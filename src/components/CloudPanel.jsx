import React from 'react'
import Clouds from '../assets/clouds.mp4'
import '../styles/CloudPanel.css'

function CloudPanel() {
    return (
        <div className="CloudPanel">
            <video className='videoTag' autoPlay loop muted disablePictureInPicture>
                <source src={Clouds} type='video/mp4' />

            </video>
            <p className="hero"> Hello there, let's work together!</p>
        </div>
    )
}

export default CloudPanel
