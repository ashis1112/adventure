import React from 'react'
import {Link} from 'react-router-dom'
import './card.css'
const Carditem=(props)=>{

    return(
        <>  <Link to="/service" className='link'>
            <div className="card-container">
                <span>{props.title}</span>
                <div className='card-img'>
                    <img src={props.image} alt="" />
                </div>
                <div className="card-text">
                    <h1 className='title'>{props.title}</h1>
                    <p>
                       {props.desc}
                    </p>
                </div>
            </div>
            </Link>
        </>
    )
}

export default Carditem