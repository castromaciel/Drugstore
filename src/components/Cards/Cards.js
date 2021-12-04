import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import "../Cards/cards.css";
function Cards( {parentCallback ,img, name, id, favs} ) {

  const [isHovering, setIsHovering] = useState(false)
  const [isFavourite, setIsFavourite] = useState(false)
  const handleMouseOver = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)
  const onClickFavourite = (e) => {
    if(!localStorage.getItem('token')) return swal("¡No se pudo agregar a favoritos!", "Prueba iniciando sesión 😉", "error");
    isFavourite? setIsFavourite(false) : setIsFavourite(true)
    parentCallback(e.target.dataset.id);
    e.preventDefault();
  }
  useEffect(()=> {
    setIsFavourite(favs?.some(f => f === id ))
  },[setIsFavourite,favs,id])
  
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="card position-relative" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} >
        <NavLink exact to='/product'>
          <img src={img} className="card-img-top"alt={name} />
        </NavLink>
        {isHovering &&
          <div>
            <div className="position-absolute top-0 end-0 btn btn-sm" onClick={onClickFavourite}>
              { isFavourite? (<i className="bi bi-heart-fill fs-4 text-danger" data-id={id}></i>) : (<i className="bi bi-heart fs-4 text-danger" data-id={id}></i>) }
            </div>
            <NavLink exact to='/cart' className="position-absolute bottom-0 end-0 w-100 btn btn-primary bg-gradient"><i class="bi bi-cart-fill me-2"></i>Añadir</NavLink>
          </div>
        }
      </div>
    </div>
  )
}

export default Cards