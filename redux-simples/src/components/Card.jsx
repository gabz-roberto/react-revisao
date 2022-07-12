import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <div className="header">
        <span className='title'>{props.title}</span>
      </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

export default Card