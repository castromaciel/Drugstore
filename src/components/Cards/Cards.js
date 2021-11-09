import React from 'react';
import "../Cards/cards.css";

function Cards( {img, name, brand, index} ) {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div>
        <img src={img} alt={name} className=" img-card"/>
      </div>
    </div>
  )
}

export default Cards