import React from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'

function Form() {
  return (
    <div>
      <div className="modal fade" id="loginModalToggle" aria-hidden="true" aria-labelledby="loginModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="loginModalToggleLabel">Login</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Login />
            </div>
            <div className="modal-footer">
              <p>¿No tienes una cuenta?<a className="ms-1" href="#registerModalToggle2" data-bs-toggle="modal">¡Registrate ahora!</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="registerModalToggle2" aria-hidden="true" aria-labelledby="registerModalToggleLabel2" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registerModalToggleLabel2">¡Registrate en un instante!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Register />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" data-bs-target="#loginModalToggle" data-bs-toggle="modal">Back to Login</button>
            </div>
          </div>
        </div>
      </div>
      <a className="nav-item" data-bs-toggle="modal" href="#loginModalToggle" role="button" title="Login"><i className="bi bi-person-circle fs-3"></i></a>
    </div>
  )
}

export default Form
