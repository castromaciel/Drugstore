import React from 'react'

function Carousel() {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
          <div className="d-flex justify-content-end">
              <div class="carousel-caption">
                <h5>¡Productos Destacados!</h5>
              </div>
            </div>
            <mg src={work1} class="d-block w-100" alt="..." height="690px"/>
          </div>
          <div class="carousel-item">
            <img src={work2} class="d-block w-100" alt="..." height="690px"/>
            <div class="carousel-caption">
              <h5>¡Productos Destacados!</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src={work3} class="d-block w-100" alt="..." height="690px"/>
            <div class="carousel-caption">
              <h5>¡Productos Destacados!</h5>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
