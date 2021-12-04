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
      <div className="my-5 py-5 ">
        <h1 className="text-center">Página no disponible! 😞</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductPage
