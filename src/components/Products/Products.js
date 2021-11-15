import React from 'react'
import { useState } from 'react'
import CategoriesButton from '../CategoriesButton/CategoriesButton'
import ListCards from '../ListCards/ListCards'

function Products() {

  const [filter,setFilter] = useState("")
  const receiveFilter = e => setFilter(e.target.value)

  return (
    <div>
      <CategoriesButton handleChange={receiveFilter}/> 
      <ListCards brand={filter}/>
    </div>
  )
}

export default Products
