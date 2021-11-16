import React from 'react'
import './footer.css'
import qr_afip from '../../assets/img/qr_afip.jpeg'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-footer" id="contacto">
      <div className="container pt-3">
  	 	  <div className="row">
  	 		  <div className="footer-col">
					  <h1 className="text-white">Oasis<span className="highlight">Ds</span></h1>
  	 		  </div>
  	 		  <div className="footer-col">
  	 			  <h4>Ayuda</h4>
  	 			  <ul className="mt-3 mt-md-0 d-flex d-md-inline">
  	 				  <li><a href="/#">Comprar</a></li>
  	 				  <li><NavLink exact to='/error404'>Vender</NavLink></li>
  	 				  <li><NavLink exact to='/error404'>Problemas</NavLink></li>
  	 			  </ul>
  	 		  </div>
  	 		  <div className="footer-col">
  	 			  <h4>Acerca de</h4>
  	 			  <ul className="mt-3 mt-md-0 d-flex d-md-inline">
  	 				  <li><NavLink exact to='/error404'>Oásis Ds</NavLink></li>
  	 				  <li><NavLink exact to='/error404'>Destacados</NavLink></li>
  	 			  </ul>
  	 		  </div>
  	 		  <div className="footer-col">
  	 			  <h4>Síguenos!</h4>
  	 			  <div className="pt-2 d-flex row social-links justify-content-center">
							 <ul className="d-flex justify-content-evenly mb-0 pb-1">
								<li><a href="http://www.facebook.com"><i className="bi bi-facebook"></i></a></li>
								<li><a href="http://www.twitter.com"><i className="bi bi-twitter"></i></a></li>
								<li><a href="http://www.instagram.com"><i className="bi bi-instagram"></i></a></li>
							 </ul>
  	 			  </div>
						<NavLink exact to='/Error404' className="d-flex justify-content-center" title="Data fiscal"><img src={ qr_afip } alt="QR" className="qr-img col-4 col-lg-4"/></NavLink>
  	 		  </div>
  	 	  </div>
  	  </div>
			<div className="copyright">
				<hr className="my-2 mx-5"/>
				<p className="my-0 pb-1"> Todos los derechos reservados &copy; Oasis Devs</p>
	   	</div>
    </footer>
  )
}

export default Footer
