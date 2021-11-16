import React, { useState, useEffect } from 'react'
import './fav.css'
function Fav( {setUpdateFavs, setFavCount}) {
  const userLog = JSON.parse(localStorage.getItem('user'))
  const [loadFavs, setLoadFavs] = useState()
  const [itemFav,setItemFav] = useState()

  const deleteFav = (e) =>{
    let fav = loadFavs.some( (a) => a === e.target.dataset.id )
    setUpdateFavs(prev => !prev)
    if(fav) setLoadFavs(loadFavs.filter(a =>  a !== e.target.dataset.id))
    else setLoadFavs([...loadFavs, e.target.dataset.id]);
    setItemFav(itemFav.filter(p => loadFavs.includes(p._id)))
  }

  useEffect(() => {
    fetch(`http://localhost:8000/users/${userLog.id}`)
      .then(res => res.json())
      .then(data => setLoadFavs(data.favs))
  }, [userLog.id, setLoadFavs])

  useEffect(()=> {
    if(loadFavs) {
    fetch(`http://localhost:8000/products/`)
      .then(res=> res.json())
      .then(products => 
        setItemFav(products.filter(p => loadFavs.includes(p._id)))
      )
    }
  },[loadFavs,setItemFav])

useEffect(() => {
  if(loadFavs) {
    fetch(`http://localhost:8000/users/${userLog.id}`,{
      method:'PUT',
      body: JSON.stringify({
        favs: loadFavs
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(json => setFavCount(loadFavs.length))  
  }
},[userLog?.id,loadFavs,setFavCount])
  return (
    <div className="container">
      {loadFavs?.length > 0? <h1>Favoritos</h1> : <h1 className="mb-5 pb-5">No hay elementos en Favoritos</h1>}
      {
        itemFav?.map((p,index) =>
          <section className="my-1 py-2 d-flex flex-column flex-lg-row align-items-center justify-content-lg-around" key={index}>
            <img src={p.imgURL} className="col-6 col-lg-2" alt={p.name}/>
            <div className="col-12 col-lg-8 d-flex flex-column px-5 px-lg-5 align-items-center align-items-lg-start products">
              <p>Producto: {p.name}</p>
              <p>Marca: {p.brand}</p>
              <p>Precio: ${p.price}</p>
            </div>
            <div className="col-12 col-lg-2 d-flex flex-lg-column flex-sm-row justify-content-center">
              <button className="my-lg-1 mx-1 btn btn-danger" data-id={p._id} onClick={deleteFav}><i className="bi bi-x me-1"></i>Eliminar</button>
              <button className="my-lg-1 mx-1 btn btn-success"><i className="bi bi-cart-fill position-relative me-1"></i>Comprar</button>
            </div>
          </section>
        )
      }
    </div>
  )
}

export default Fav
