import React,  { useEffect, useState } from "react";
import Slider from "react-slick";
import Cards from '../Cards/Cards'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ListCards({brand, setUpdateFavs, setFavCount}) {
  
  const userLog = JSON.parse(localStorage.getItem('user'))
  const [products, setProducts] = useState([])
  const [favItems, setFavItems] = useState()
  
  const handleCallback = (idCallback) =>{
    let fav = favItems.some( (a) => a === idCallback )
    setUpdateFavs(prev => !prev)
    if(fav) setFavItems(favItems.filter(a =>  a !== idCallback))
    else setFavItems([...favItems, idCallback]); 
  }
  
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: false,
        }
      }
    ]
  }
  useEffect(() => {
    fetch('https://apidrogueriaoasis.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
    if(userLog){
      fetch(`https://apidrogueriaoasis.herokuapp.com/users/${userLog.id}`)
        .then(res => res.json())
        .then(data => setFavItems(data.favs))
    }
    //eslint-disable-next-line
  }, [setProducts])

  useEffect(() => {
    if(favItems) {
      fetch(`https://apidrogueriaoasis.herokuapp.com/users/${userLog.id}`,{
        method:'PUT',
        body: JSON.stringify({
          favs: favItems
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(res => res.json())
        .then(json => setFavCount(favItems.length))  
    }
  },[userLog?.id,setFavCount,favItems])

  return (
    <div className="px-5 container d-flex flex-column justify-content-center">
      <h2 className="text-center mt-3"> Productos disponibles </h2>
      {brand? 
          <Slider {...settings} className="mb-5 mt-4">
          {products.filter(product => product.brand === brand).map( (product,index) =>
            (<Cards img={product.imgURL} name={product.name} brand={product.brand} index={index} id={product._id} parentCallback={handleCallback} favs={favItems}/>)
          )}
          </Slider> :
        (<section>
            <Slider {...settings} className="mb-5 mt-4">
              { products.slice(0, products.length/3).map((product,index) => 
                  (<div key={index}>
                    <Cards img={product.imgURL} name={product.name} brand={product.brand} index={index+1} id={product._id} parentCallback = {handleCallback} favs={favItems}/>
                  </div>)) }
            </Slider>
            <Slider {...settings} className="mb-5">
              { products.slice(products.length/3, 2*products.length/3).map((product,index) => 
                  (<div key={index}>
                    <Cards img={product.imgURL} name={product.name} brand={product.brand} index={index+1} id={product._id} parentCallback = {handleCallback} favs={favItems}/>
                  </div>)) }
            </Slider>
            <Slider {...settings} className="mb-5">
              { products.slice(2*products.length/3, products.length).map((product,index) => 
                  (<div key={index}>
                    <Cards img={product.imgURL} name={product.name} brand={product.brand} index={index+1} id={product._id} parentCallback = {handleCallback} favs={favItems}/>
                  </div>)) }
            </Slider>
        </section>) 
      }
    </div>
  )
}

export default ListCards
