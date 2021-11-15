import React from 'react'
import oferta_andromaco from '../../assets/img/oferta_andromaco.jpg'
import oferta_teva from '../../assets/img/oferta_teva.jpg'
import oferta_gador from '../../assets/img/oferta_gador.jpg'

function Carousel() {
  return (
    <div>
      <div id="heroIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#heroIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#heroIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className="d-flex justify-content-end">
              <div className="carousel-caption">
                <h5>¡Productos Destacados!</h5>
              </div>
            </div>
            <img src={oferta_andromaco} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={oferta_gador} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>¡Productos Destacados!</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={oferta_teva} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>¡Productos Destacados!</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
