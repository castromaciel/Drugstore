import React, { useEffect, useState } from 'react'

function CategoriesButton({handleChange}) {

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
        <div className="input-group ">
          <select className="form-select" id="inputGroupSelect04" defaultValue="" aria-label="Example select with button addon" onChange={handleChange}>
            <option value="" index='0' selected>Filtrar por marcas...</option>
            { brands.map( brand => <option key={brand} defaultValue={brand} >{brand}</option>)}
          </select>
        </div>
      </div>
    </div>
  )
}

export default CategoriesButton
