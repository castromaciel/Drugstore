import React, { useState } from 'react'
import Ban from '../components/Ban/Ban'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function ProductPage() {
  const [favCount, setFavCount] = useState()
  return (
    <div>
      <Ban />
      <Navbar favCount={favCount} setFavCount={setFavCount} />
      <h1>Product id</h1>
      <Footer/>
    </div>
  )
}

export default ProductPage
