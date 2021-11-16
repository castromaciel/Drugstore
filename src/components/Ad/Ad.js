import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import Img1 from '../../assets/img/ads/1.jpg';
import Img2 from '../../assets/img/ads/2.jpg';
import Img3 from '../../assets/img/ads/3.jpg';
import Img4 from '../../assets/img/ads/4.jpg';
import './Ad.css';

function Ad() {
  const settings2 = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings2: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings2: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings2: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  
  return (
    <div className='ads'>
      <Slider {...settings2}>
        <div className="box-img-ads">
          <NavLink exact to='/error404'><img src={Img1} className="img-ads" alt="Anuncios"/></NavLink>
        </div>
        <div className="box-img-ads">
          <NavLink exact to='/error404'><img src={Img2} className="img-ads" alt="Anuncios"/></NavLink>
        </div>
        <div className="box-img-ads">
          <NavLink exact to='/error404'><img src={Img3} className="img-ads" alt="Anuncios"/></NavLink>
        </div>
        <div className="box-img-ads">
          <NavLink exact to='/error404'><img src={Img4} className="img-ads" alt="Anuncios"/></NavLink>
        </div>
      </Slider>
    </div>
  )
}

export default Ad
