import React from 'react'
import './info.css'
function Info() {
    return (
     <div className="nav-link">
       <div className="modal fade" id="infoModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header info">
              <h4 className="modal-title">¿Cómo hago para comprar?</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <h5>Simplemente seguí estas indicaciones:</h5>
            <ul>
              <li>Buscá el producto que querés a través de nuestro buscador o bien en nuestro listado de productos. La cantidad estará seteada por default con el número 1, si querés sumar más unidades simplemente hacé click y seleccioná el número que quieras recibir.
              </li>
              <li>Dale click al botón comprar para sumar al carrito.
              </li>
              <li>Repetí los pasos del 2 y 3 si deseas añadir otros productos a tu carrito.
              </li>
              <li>Verificá en tu bolsa de compras que los productos sumados sean correctos, en el caso contrario podrás editar las cantidades o removerlos. Para avanzar presioná "Iniciar Pago".
              </li>
              <li>Se te solicitará que ingreses un mail y luego deberás completar tus datos personales. Esto deberás hacerlo sólo la primera vez, o bien en el caso de querer modificar datos.
              </li>
              <li>Completá el formulario de información de envío, método de envío e información de pago. En este último paso deberás seleccionar si tu pago lo quieres hacer con Tarjeta de Débito, Crédito (donde tendrás las promos de tu banco si la hubiera).
              </li>
              <li>Te llegará un mail con los datos de tu compra, seguido de un segundo mail con la confirmación de compra y ¡listo! Ya compraste en OÁSIS Drugstore.
              </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
      <a data-bs-toggle="modal" href="#infoModal" role="button" title="Ayuda"><i className="bi bi-question-circle-fill"></i></a>
      </div>
    )
}

export default Info
