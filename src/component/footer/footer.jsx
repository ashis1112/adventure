import React from 'react'
import './footer.css'

const Footer=()=>{

    return(
        <>
            <div className='footer'>
                <div className='data'>
                    <div className='email'>
                        <h2>Join the adventure to recieve our best vacation deal</h2>
                        <p>You can unsubscribe at any time</p>
                        <div className="join-email">
                            <input type="email" placeholder="Your Email"/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className='links'>
                        <div className="about-us">
                            <h3>About</h3>
                            <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                            </ul>
                        </div>
                        <div className="contact-us">
                            <h3>Contact-Us</h3>
                        <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                            </ul>
                        </div>
                        <div className="videos">
                            <h3>Videos</h3>
                        <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                            </ul>
                        </div>
                        <div className="social-media">
                            <h3>Social-Media</h3>
                        <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer