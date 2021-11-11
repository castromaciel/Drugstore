import React, {useState} from 'react';
import "../Cards/cards.css";

function Cards( {img, name, brand, index} ) {

  const [isHovering, setIsHovering] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false)
  const handleMouseOver = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false)
  const handleFavourites = () => isFavourite? setIsFavourite(false) : setIsFavourite(true) 
  
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div class="card position-relative" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} >
        <img src={img} class="card-img-top"alt={name} />
        {isHovering &&
          <div>
            <div className="position-absolute top-0 end-0 btn btn-sm" onClick={handleFavourites}>
              { isFavourite? (<i className="bi bi-heart-fill fs-4 text-danger"></i>) : (<i className="bi bi-heart fs-4 text-danger"></i>) }
            </div>
            <button className="position-absolute bottom-0 end-0 w-100 btn btn-primary bg-gradient">Comprar</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Cards