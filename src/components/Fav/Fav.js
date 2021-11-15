import React, { useState, useEffect } from 'react'

function Fav( ) {
  const userLog = JSON.parse(localStorage.getItem('user'))
  const [loadFavs, setLoadFavs] = useState()
  const [itemFav,setItemFav] = useState()
  useEffect(() => {
    fetch(`http://localhost:8000/users/${userLog.id}`)
      .then(res => res.json())
      .then(data => setLoadFavs(data.favs))

      if(loadFavs) {
        fetch(`http://localhost:8000/products/`)
          .then(res => res.json())
          .then(data => console.log(data))
      }
  }, [userLog.id, setLoadFavs])
  return (
    <div>
      {loadFavs? <h1>Hay {loadFavs.length} elementos en favs</h1> : <h1>No hay elementos en Favoritos</h1>}
      {itemFav? <h1>tu elemento</h1> : <h1>no hay elemento</h1>}
      {/* {itemFav?.map( (fav,index) => <h1>{index}: {fav}</h1>)} */}
    </div>
  )
}

export default Fav
