import React from 'react'
import './form.css'
import Login from '../Login/Login'
import Register from '../Register/Register'

function Form() {
  return (
    <div className="mx-3">
      <div className="modal fade" id="loginModalToggle" aria-hidden="true" aria-labelledby="loginModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header form">
              <h4 className="modal-title" id="loginModalToggleLabel">Login</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Login />
            </div>
            <div className="modal-footer">
              <p>¿No tienes una cuenta?<a className="ms-1 register-link" href="#registerModalToggle2" data-bs-toggle="modal">¡Registrate ahora!</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="registerModalToggle2" aria-hidden="true" aria-labelledby="registerModalToggleLabel2" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header form">
              <h5 className="modal-title" id="registerModalToggleLabel2">¡Registrate en un instante!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Register />
            </div>
            <div className="modal-footer">
              <div className="fs-5 back-to-login me-2" data-bs-target="#loginModalToggle" data-bs-toggle="modal">
                <i className="bi bi-arrow-left me-2" ></i>Volver al Inicio
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="nav-item text-dark" data-bs-toggle="modal" href="#loginModalToggle" role="button" title="Login"><i className="bi bi-person-circle fs-3"></i></a>
    </div>
  )
}

export default Form
