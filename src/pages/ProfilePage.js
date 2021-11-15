import React, { useState } from 'react'
import Ban from '../components/Ban/Ban'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function ProfilePage() {
  const [favCount, setFavCount] = useState()

  return (
    <div>
      <Ban />
      <Navbar favCount={favCount} setFavCount={setFavCount} />
      <h1>Profile</h1>
      <Footer />
    </div>
  )
}

export default ProfilePage
