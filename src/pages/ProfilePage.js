import React from 'react'
import Ban from '../components/Ban/Ban'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Nav/Navbar'

function profilePage() {
  return (
    <div>
      <Ban />
      <Navbar />
      <h1>Profile</h1>
      <Footer />
    </div>
  )
}

export default profilePage
