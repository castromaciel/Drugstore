import React from 'react';
import "../Cards/cards.css";
import Img from '../../images/cards/modulo_2.jpg'

function Cards() {
  return (
    <a href="#">
      <div className="card">
        <div className="card-body">
          <img src={Img} alt="img-promo" />
          <h4 className="card-title">Promo #1</h4>
        </div>
      </div>
    </a>
  )
}

export default Cards