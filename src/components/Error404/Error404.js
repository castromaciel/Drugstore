import React from 'react'
import { NavLink } from 'react-router-dom'
import './error404.css'
function Error404() {
  return (
    <div class="d-flex justify-content-center align-items-center flex-column box404">
      <h3 class="bounce-1">404</h3>
      <p>Pagina no encontrada</p>
      <NavLink exact to='/' className="text-decoration-none"><p>Volver al inicio</p></NavLink>
  </div>
  )
}

export default Error404
