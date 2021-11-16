import React from 'react'
import oferta_andromaco_do from '../../assets/img/oferta_andromaco_do.jpeg'
import oferta_teva_do from '../../assets/img/oferta_teva_do.jpg'
import oferta_gador_do from '../../assets/img/oferta_gador_do.jpeg'
import oferta_biol_do from '../../assets/img/oferta_biol_do.jpeg'


function Carousel() {
  return (
    <div>
      <div id="heroIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#heroIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#heroIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#heroIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className="d-flex justify-content-end">
              <div className="carousel-caption">
                <h5>¡Productos Destacados!</h5>
              </div>
            </div>
            <img src={oferta_andromaco_do} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={oferta_gador_do} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>¡Productos Destacados!</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={oferta_teva_do} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>¡Productos Destacados!</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={oferta_biol_do} className="d-block w-100" alt="..." />
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
