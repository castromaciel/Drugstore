import React from 'react'
import './footer.css'
import code from '../../assets/img/code.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
  	 	  <div className="row">
  	 		  <div className="footer-col">
					  <h1 class="heading">Team<span class="highlight">Fernet</span></h1>
  	 		  </div>
  	 		  <div className="footer-col">
  	 			  <h4>Link</h4>
  	 			  <ul>
  	 				  <li><a href="#">Link-1</a></li>
  	 				  <li><a href="">Link-2</a></li>
  	 				  <li><a href="">Link-3</a></li>
  	 			  </ul>
  	 		  </div>
  	 		  <div className="footer-col">
  	 			  <h4>Link</h4>
  	 			  <ul>
  	 				  <li><a href="#">Link-1</a></li>
  	 				  <li><a href="#">Link-2</a></li>
  	 				  <li><a href="#">Link-3</a></li>
  	 			  </ul>
  	 		  </div>
  	 		  <div className="footer-col">
  	 			  <h4>follow us</h4>
  	 			  <div className="social-links">
  	 				  <a href="#"><i className="bi bi-facebook"></i></a>
  	 				  <a href="#"><i className="bi bi-twitter"></i></a>
  	 				  <a href="#"><i className="bi bi-instagram"></i></a>
  	 				  <a href="#"><i className="bi bi-linkedin"></i></a>
                <img src={ code } alt="QR"/>
  	 			  </div>
  	 		  </div>
  	 	  </div>
  	  </div>
			<div class="copyright">
		   		<p>All right reserved by &copy;TeamFernet 2021</p>
	   	</div>
    </footer>
  )
}

export default Footer
