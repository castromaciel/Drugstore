import React from "react";
import Slider from "react-slick";
import Cards from '../Cards/Cards'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ListCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div>
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <div>
          <Cards />
          <h1>1</h1>
        </div>
        <div>
          <Cards />
          <h1>2</h1>
        </div>
        <div>
          <Cards />
          <h1>3</h1>
        </div>
      </Slider>
    </div>
  )
}

export default ListCards

