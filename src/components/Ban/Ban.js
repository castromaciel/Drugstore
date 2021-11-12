import React from 'react';
import './Ban.css';
import logo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom';

function Ban() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light background-ban fixed-top">
        <div className="container-fluid d-sm-flex align-items-center ">
          <NavLink className="ms-4 navbar-brand" exact to={'/'}><img className="logo" src={logo} alt="logo"/></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end d-flex flex-lg-row justify-content-lg-between" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Droguería Oasis</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr className="mx-3 my-0 d-lg-none"/>
            <div className="offcanvas-body d-lg-flex align-items-center">
              <form className="d-flex mt-3 mt-lg-0">
                <input className="form-control me-2" type="search" placeholder="Buscá producto, marca" aria-label="Search"/>
                <button className="btn btn-outline-pink">Buscar</button>
              </form>
              <ul className="d-lg-none navbar-nav">
                <li className="my-2 item-navbar">
                  <a className="nav-link active" aria-current="page" href="/#"><i className="bi bi-house pe-1"></i>Inicio</a>
                </li>
                <li className="my-2 item-navbar">
                  <a className="nav-link active" href="/#"><i className="bi bi-stars pe-1"></i>Destacados</a>
                </li>
                <li className="my-2 item-navbar">
                  <a className="nav-link active" href="/#"><i className="bi bi-bag-check-fill pe-1"></i>Productos</a>
                </li>
                <li className="my-2 item-navbar">
                  <a className="nav-link active" href="/#"><i className="bi bi-briefcase-fill pe-1"></i>Contacto</a>
                </li>
              </ul>
            </div>
            <div>
              <hr className="mx-5 my-0 d-lg-none"/>
              <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row justify-content-evenly justify-content-lg-none ">
                <li className="nav-item px-3">
                  <a className="nav-link" href="http://www.facebook.com" target="_blank" rel="noreferrer"><i className="bi bi-facebook text-dark fs-4"></i></a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="http://www.twitter.com" target="_blank" rel="noreferrer"><i className="bi bi-twitter text-dark fs-4"></i></a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="http://www.instagram.com" target="_blank" rel="noreferrer"><i className="bi bi-instagram text-dark fs-4"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Ban;