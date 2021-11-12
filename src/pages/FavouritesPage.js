import React from 'react'
import Ban from '../components/Ban/Ban'
import Fav from '../components/Fav/Fav'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Nav/Navbar'

function FavouritesPage() {
  return (
    <div>
      <Ban />
      <Navbar />
      <Fav />
      <Footer />
    </div>
  )
}

export default FavouritesPage
