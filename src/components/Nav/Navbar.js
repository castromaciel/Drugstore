import React from 'react'
import './Navbar.css'
import Info from '../Info/Info'
import '../Info/Info.css'
import Form from '../Form/Form'
import '../Form/Form.css'
import Fav from '../Fav/Fav'
import '../Fav/Fav.css'

function Navbar() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light background-navbar">
            <div className="collapse navbar-collapse background-navbar" id="navbarNav">
              <ul className="navbar-nav m-4 background-navbar">
                <li className="item-navbar">
          <a className="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li className="item-navbar">
          <a className="nav-link active" href="/#">Features</a>
        </li>
        <li className="item-navbar">
          <a className="nav-link active" href="/#">Products</a>
        </li>
        <li className="item-navbar">
        <a className="nav-link active" href="/#">Contact</a>
        </li>
      </ul>
    </div>
    <div className=" right-icons" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="item-navbar i-right-icons">
          <a className="nav-link"><Fav/>
          </a>
        </li>
        <li className="item-navbar i-right-icons">
          <a className="nav-link" href="http://www.twitter.com"><i className="bi bi-cart-fill"></i></a>
        </li>
        <li className="item-navbar i-right-icons">
          <a className="nav-link"><Info/>
          </a>
        </li>
        </ul>
    </div>
    <Form/>
</nav>
        </div>
    )
}

export default Navbar
