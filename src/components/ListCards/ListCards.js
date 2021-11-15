import React,  { useEffect, useState } from "react";
import Slider from "react-slick";
import Cards from '../Cards/Cards'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ListCards({brand}) {

  const [products, setProducts] = useState([])

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,

        }
      }
    ]
  };

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="px-5 container d-flex flex-column justify-content-center">
      <h2 className="text-center mt-3"> Productos disponibles </h2>
      {brand? 
          <Slider {...settings} className="mb-5 mt-4">
          {products.filter(product => product.brand === brand).map( (product,index) =>
            (<Cards img={product.imgURL} name={product.name} brand={product.brand} index={index} />)
          )}
          </Slider> :
        (<section>
            <Slider {...settings} className="mb-5 mt-4">
              { products.slice(0, products.length/3).map((product,index) => 
                  (<div key={index}>
                    <Cards img={product.imgURL} name={product.name} brand={product.brand} index={index+1} />
                  </div>)) }
            </Slider>
            <Slider {...settings} className="mb-5">
              { products.slice(products.length/3, 2*products.length/3).map((product,index) => 
                  (<div key={index}>
                    <Cards img={product.imgURL} name={product.name} brand={product.brand} index={index+1} />
                  </div>)) }
            </Slider>
            <Slider {...settings} className="mb-5">
              { products.slice(2*products.length/3, products.length).map((product,index) => 
                  (<div key={index}>
                    <Cards img={product.imgURL} name={product.name} brand={product.brand} index={index+1} />
                  </div>)) }
            </Slider>
        </section>) 
      }
    </div>
  )
}

export default ListCards
