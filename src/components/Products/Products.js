import React from 'react'
import { useState } from 'react'
import CategoriesButton from '../CategoriesButton/CategoriesButton'
import ListCards from '../ListCards/ListCards'

function Products({setUpdateFavs, setFavCount}) {

  const [filter,setFilter] = useState("")
  const receiveFilter = e => setFilter(e.target.value)

  return (
    <div id="productos">
      <CategoriesButton handleChange={receiveFilter}/> 
      <ListCards brand={filter} setFavCount={setFavCount} setUpdateFavs={setUpdateFavs}/>
    </div>
  )
}

export default Products
