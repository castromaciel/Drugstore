import React from 'react'
import { NavLink } from 'react-router-dom'
import './UserLogged'

function UserLogged({user}) {
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.replace('')
  }
  
    return (
    <div className="dropdown me-0 m-md-3 ">
      <button className="d-flex align-items-center btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={user.img} alt="" width="32" height="32" className="rounded-circle me-2"/>
        <h5 className="my-0">{user.username}</h5>
      </button>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
        <li><NavLink exact to='/profile' activeClassName="" className="dropdown-item">Profile</NavLink></li>
        <hr className="my-0 mx-2" />
        <li><NavLink to='/' className="dropdown-item" activeClassName="" onClick={logout}>Logout</NavLink></li>
      </ul>
    </div>
  )
}

export default UserLogged
