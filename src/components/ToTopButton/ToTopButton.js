import React from 'react'
import './totopbutton.css'
function ToTopButton() {
  window.onscroll =  () => {
    if(document.documentElement.scrollTop > 100) document.querySelector('.go-top-container').classList.add('show-button')
    else document.querySelector('.go-top-container').classList.remove('show-button')
  }
  return (
    <div className="go-top-container" onClick={() => {window.scrollTo({top:0, behavior:'smooth'})}}>
      <div className="go-top-button">
        <i className="bi bi-arrow-up" ></i>
      </div>
    </div>
  )
}

export default ToTopButton
