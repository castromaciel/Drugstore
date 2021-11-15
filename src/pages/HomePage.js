import React, { useState } from 'react'
import Ban from '../components/Ban/Ban'
import Nav from '../components/Navbar/Navbar'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'
import Carousel from '../components/Carousel/Carousel'

function HomePage() {
  const [updateFavs,setUpdateFavs] = useState(true)
  const [favCount, setFavCount] = useState()

  return (
    <div>
      <Ban />
      <Nav favCount={favCount} setFavCount={setFavCount} updateFavs={updateFavs}/>
      <Carousel />
      <Products setFavCount={setFavCount} setUpdateFavs={setUpdateFavs}/>
      <Footer />
    </div>
  )
}

export default HomePage
