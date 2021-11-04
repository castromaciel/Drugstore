import React from 'react';
import './Ban.css';
import logo from './logo.png'

function Ban() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light background-ban">
        <div className="container-fluid"><a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></a><button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="http://www.facebook.com"><i className="bi bi-facebook"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://www.twitter.com"><i className="bi bi-twitter"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://www.instagram.com"><i className="bi bi-instagram"></i></a>
              </li>
            </ul>
             <ul className="navbar-nav me-auto w-50 mb-lg-0">
                <input className="form-control mw-100 me-2" type="search" placeholder="Buscá por producto, marca, categoría..." aria-label="Search"></input><button className="btn btn-outline-light" type="submit">Search</button>
              </ul>
            </div>
          </div>  
       </nav>
      </div>
  )
}

export default Ban;