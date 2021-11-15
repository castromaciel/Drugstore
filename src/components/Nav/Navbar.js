import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Info from '../Info/Info'
import Form from '../Form/Form'
import { NavLink } from 'react-router-dom'
import UserLogged from '../UserLogged/UserLogged'

function Navbar() {

  const [favCount, setFavCount] = useState()
  const [cartCount, setCartCount] = useState() 
  const [isLogged, setIsLogged] = useState(false)
  const token = localStorage.getItem('token')
  const userLog = JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{
    if(token) {
      setIsLogged(true)
      fetch(`http://localhost:8000/users/${userLog.id}`)
        .then(res => res.json())
        .then(user => setFavCount(user.favs.length))
    }
  },[token, setIsLogged, userLog?.id, setFavCount, favCount])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light mt-5 pt-5">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav m-4 fw-bold">
              <li className="m-1 item-navbar">
                <a className="nav-link active" aria-current="page" href="/#"><i className="bi bi-house pe-1"></i>Inicio</a>
              </li>
              <li className="m-1 item-navbar">
                <a className="nav-link active" href="/#"><i className="bi bi-stars pe-1"></i>Destacados</a>
              </li>
              <li className="m-1 item-navbar">
                <a className="nav-link active" href="/#"><i className="bi bi-bag-check-fill pe-1"></i>Productos</a>
              </li>
              <li className="m-1 item-navbar">
                <a className="nav-link active" href="/#"><i className="bi bi-briefcase-fill pe-1"></i>Contacto</a>
              </li>
            </ul>
          </div>
          <div className="right-icons ms-3">
            <ul className="navbar-nav d-flex flex-row">
              <li className="m-1 item-navbar i-right-icons px-3 fs-5">
                <NavLink exact to='/favourites' className="nav-link">
                  <i className="bi bi-heart-fill position-relative">
                    <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-light text-dark border">{favCount}</span>
                  </i>
                </NavLink>
              </li>
              <li className="m-1 item-navbar i-right-icons px-3 fs-5">
                <NavLink exact to='/cart' className="nav-link" >
                  <i className="bi bi-cart-fill position-relative">
                    <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-light text-dark border">{cartCount}</span>
                  </i>
                </NavLink>
              </li>
              <li className="m-1 item-navbar i-right-icons px-3 fs-5">
                <Info />
              </li>
            </ul>
          </div>
          {isLogged === false? <Form /> : <UserLogged user={userLog}/>}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
