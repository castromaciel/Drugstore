import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Info from '../Info/Info'
import Form from '../Form/Form'
import { NavLink } from 'react-router-dom'
import UserLogged from '../UserLogged/UserLogged'

function Navbar() {

  const [isLogged,setIsLogged] = useState(false)
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{
    if(token) setIsLogged(true)
    // eslint-disable-next-line
  },[])

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
              <NavLink exact to={'/favourites'} className="nav-link">
                <i className="bi bi-heart-fill"></i>
              </NavLink>
            </li>
            <li className="m-1 item-navbar i-right-icons px-3 fs-5">
              <NavLink exact to={'/cart'} className="nav-link" ><i className="bi bi-cart-fill"></i></NavLink>
            </li>
            <li className="m-1 item-navbar i-right-icons px-3 fs-5">
              <Info />
            </li>
          </ul>
        </div>
        {isLogged === false? <Form /> : <UserLogged user={user}/>}
        </div>

      </nav>
    </div>
  )
}

export default Navbar
