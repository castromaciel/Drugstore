import React, { Component } from "react";
import Slider from "react-slick";
import Img1 from '../../assets/img/ads/1.jpg';
import Img2 from '../../assets/img/ads/2.jpg';
import Img3 from '../../assets/img/ads/3.jpg';
import Img4 from '../../assets/img/ads/4.jpg';

import './Ad.css';

export default class Fade extends Component {
    render(){
        const settings = {
          // dots: true,
          // infinite: true,
          // slidesToShow: 1,
          // slidesToScroll: 1,
          
          // autoplay: true,
          // speed: 10000,
          // autoplaySpeed: 10000,
          // cssEase: "linear",
          dots: true,
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
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <div>
            <Slider {...settings}>
            <div className="boxImg">
            <a href="#">
                <img src={Img1} className="imgAds"/>
              </a>
            </div>
            <div className="boxImg">
              <a href="#">
                <img src={Img2} className="imgAds"/>
              </a>
            </div>
            <div className="boxImg">
              <a href="#">
                <img src={Img3} className="imgAds"/>
              </a>
            </div>
            <div className="boxImg">
              <a href="#">
                <img src={Img4} className="imgAds"/>
              </a>
            </div>
            </Slider>
          </div>
        );
      }
    }
// export default Ad
