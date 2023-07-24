import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FilteredProducts from './components/filteredProducts/FilteredProducts'
import SingleProduct from './components/filteredProducts/SingleProduct'
import { useSelector } from 'react-redux'
import Cart from './components/cart/Cart'
import CartPage from './pages/cart/CartPage'
import Login from './components/login/Login'

function App() {
  // const {cart, totalAmount, totalPrice,} = useSelector((state)=>state.cart)
  // console.log("cart",cart)
  // console.log("total", totalAmount)
  // console.log("price", totalPrice);
  const {authUser} = useSelector((state)=>state.user.user);
  console.log(authUser);

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={authUser? <Home/> : <Login/>}/>
        <Route path='/filteredProducts/:type' element={<FilteredProducts/>}/>
        <Route path='/filteredProducts/:type/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
