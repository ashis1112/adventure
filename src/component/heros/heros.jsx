import React from 'react'
import Button from '../button/button'
import './heros.css'
const Heros=()=>{

    return(
        <div className="hero-container">
            <video src="../../videos/video-2.mp4"  autoPlay loop muted/>
            <div className="text">
            <h3>ADVENTURE AWAITS</h3>
            <p>what are you waiting for?</p>
            </div>
            
            <div className="hero-btns">
                <Button className="btn" buttonstyle="btn-outline" buttonsize="btn-large">GET STARTED</Button>
                <Button className="btn" buttonstyle="btn-primary" buttonsize="btn-large">WATCH TRAILER <i className='fas fa-play-circle'></i></Button>
            </div>
        </div>
    )
}

export default Heros

