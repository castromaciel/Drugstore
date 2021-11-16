import React,{ useState } from 'react'
import Ban from '../components/Ban/Ban'
import Fav from '../components/Fav/Fav'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ToTopButton from '../components/ToTopButton/ToTopButton'

function FavouritesPage() {
  const [updateFavs,setUpdateFavs] = useState(true)
  const [favCount, setFavCount] = useState()
  return (
    <div>
      <Ban />
      <Navbar favCount={favCount} updateFavs={updateFavs} setFavCount={setFavCount} />
      <Fav setUpdateFavs={setUpdateFavs} setFavCount={setFavCount}/>
      <ToTopButton />
      <Footer />
    </div>
  )
}

export default FavouritesPage
