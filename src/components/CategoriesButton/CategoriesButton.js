import React, { useEffect, useState } from 'react'

function CategoriesButton() {

  
  const [brands, setBrands] = useState([])
  useEffect(()=> {
    fetch('http://localhost:8000/products')
      .then(res => res.json())
      .then(data => {
        setBrands([...new Set(data.map(product => product.brand))])
      })
  },[])

  
  return (
    <div className="container d-flex justify-content-end">
      <div className="col-10 col-md-4 col-lg-4">
        <div class="input-group ">
          <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
            <option selected>Filtrar por marcas...</option>
            { brands.map( (brand, index) => <option key={index} value={brand}>{brand}</option>)}
          </select>
          <button class="btn btn-outline-secondary" type="button">Filtrar</button>
        </div>
      </div>
    </div>
  )
}

export default CategoriesButton
