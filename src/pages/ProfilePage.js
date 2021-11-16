import React, { useState } from 'react'
import Ban from '../components/Ban/Ban'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Profile from '../components/Profile/Profile'

function ProfilePage() {
  const [favCount, setFavCount] = useState()

  return (
    <div>
      <Ban />
      <Navbar favCount={favCount} setFavCount={setFavCount} />
      <Profile />
      <Footer />
    </div>
  )
}

export default ProfilePage
