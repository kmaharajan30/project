import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from "@material-tailwind/react";
import { Link, NavLink } from 'react-router-dom';
import { removeFromCart } from '../../slice/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const {cart, totalAmount, totalPrice,} = useSelector((state)=>state.cart)

  return (
    <div>
        {cart.length <= 0 ? (
            <div className="flex justify-center items-center ">
                <h3 className='text-2xl font-bold tracking-normal text-center leading-none pt-4 pb-6'>Cart Is Empty</h3>
                <NavLink to='/' className="absolute top-[25%]">
                    <Button  variant='outlined' >Go to Shopping!</Button>
                </NavLink>
            </div>
        ) :
        <div>
            <div className="flex justify-around ">
            <h3 className='text-2xl font-bold tracking-normal text-center leading-none pt-4 pb-6'>Your Cart</h3>
            <h3 className='text-2xl font-bold tracking-normal text-center leading-none pt-4 pb-6'>Total Price:{}
            <span className='ml-2'>{totalPrice}$</span>
            </h3>

            </div>
            
            <div className='flex flex-col justify-center items-start px-8 py-6'>
                {
                    cart.map((item,index)=>{
                        return(
                            <div key={index} className="grid grid-cols-2  py-4">
                                <div>
                                <img src={item.img} className='h-[125px] rounded-md' alt={item.name} />
                                <div className="flex flex-col items-start">
                                    <h4 className='text-black text-base font-bold tracking-normal leading-none pt-2 '>
                                        {item.name}
                                    </h4>
                                    
                                </div>
                                <div className="max-w-xs" >
                                    <p className='text-black text-xs tracking-normal leading-none pt-2 '>{item.text}</p>
                                </div>
                                </div>
                                <div>
                                    <p className='text-black text-xs tracking-normal leading-none pt-2 '>Selected Size:{" "}
                                    <span className='ml-2'>{item.size}</span>
                                    </p>
                                    <p className='text-black text-xs tracking-normal leading-none pt-2 '>Selected Color:{" "}
                                    <span className='ml-2 px-2 rounded-full' style={{backgroundColor:item.color}}></span>
                                    </p>
                                    <p className='text-black text-xs tracking-normal leading-none pt-2 '>Quantity:{" "}
                                    <span className='ml-2'>{item.amount}</span>
                                    </p>
                                    <p className='text-black text-xs tracking-normal leading-none pt-2 '>Price:{" "}
                                    <span className='ml-2'>{item.price}$</span>
                                    </p>
                                    <p className='text-black text-xs tracking-normal leading-none pt-2 '>Total Price:{" "}
                                    <span className='ml-2'>{item.totalPrice}$</span>
                                    </p>
                                    <div className="p-2">
                                        <Button size='sm' className='rounded-full' onClick={()=>dispatch(removeFromCart(item))} color='red' ripple={true}>Remove</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div> 
         }
    </div>
  )
}

export default Cart