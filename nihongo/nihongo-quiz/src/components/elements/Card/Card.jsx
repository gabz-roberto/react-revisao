import React from 'react';

import './Card.css';

const Card = ({option}) => {
  return (
    <div className='card'>
        <div className="card-option">
            {option}
        </div>
        <div className="card-answer">
            <input type="text" className='card-input'/>
        </div>
    </div>
  )
}

export default Card;