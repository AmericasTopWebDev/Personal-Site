import React from 'react'
import Clouds from '../assets/clouds.mp4'
import '../styles/CloudPanel.css'

function CloudPanel() {
    return (
        <div className="CloudPanel">
            <video className='videoTag' autoPlay loop muted disablePictureInPicture>
                <source src={Clouds} type='video/mp4' />

            </video>
            <p className="hero"> Lucas Harrison </p>
            <h2 className="subhero"> Full Stack </h2>
        </div>
    )
}

export default CloudPanel
