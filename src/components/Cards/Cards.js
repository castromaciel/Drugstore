import React from 'react';
import "../Cards/cards.css";
import Img from '../../assets/img/modulo_2.jpg'

function Cards() {
  return (
    <div className="card">
      <div className="card-body">
        <img src={Img} alt="img-promo" />
        <h4 className="card-title">Promo #1</h4>
      </div>
    </div>
  )
}

export default Cards