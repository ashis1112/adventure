import React from 'react'
import Carditem from './carditem'
import img9 from '../../images/img-9.jpg'
import img8 from '../../images/img-8.jpg'
import img4 from '../../images/img-4.jpg'
import {Link} from 'react-router-dom'
import './card.css'
const Card=()=>{

    return(
        <div className="cards">
            <h2>Check out these epic destinations!</h2>
            <div className="card-wrapper">
                <Carditem image={img9} title="Trecking" desc=
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci quisquam ad natus commodi dolores, aut id nulla corporis unde?"
                     />
                <Carditem image={img8} title="Adventure" desc=
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci quisquam ad natus commodi dolores, aut id nulla corporis unde?"
                     />
                <Carditem image={img4} title="Game" desc=
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci quisquam ad natus commodi dolores, aut id nulla corporis unde?"
                     />
                
            </div>
        </div>
    )
}

export default Card