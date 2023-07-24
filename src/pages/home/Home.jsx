import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import NavigateButtons from '../../components/navigateButtons/NavigateButtons'
import ProductSection from '../../components/cart/productSection/ProductSection'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <NavigateButtons/>
        <ProductSection/>
        <Footer/>
    </div>
  )
}

export default Home