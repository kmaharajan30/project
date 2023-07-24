import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import FilteredProducts from './components/filteredProducts/FilteredProducts'
const FilteredPage = () => {
  return (
    <div>
        <Navbar/>
        <FilteredProducts/>
    </div>
  )
}

export default FilteredPage