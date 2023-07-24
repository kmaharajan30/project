import React from 'react'
import { Button } from "@material-tailwind/react";
import clothes from '../../assets/images/clothes.jpg'
import { useDispatch } from 'react-redux';
import { filterProducts } from '../../slice/productSlice';
import { Link } from 'react-router-dom';
const NavigateButtons = () => {
    const dispatch = useDispatch();
    const buttons =[
        "T-Shirts",
        "Hoodies",
        "Shoes",
        "Suits",
        "Jeans",
        "Jackets",
        "Bags",
        "Dresses"
    ]
  return (
    <div>
    <div className="flex items-center justify-center py-8">
        
            {buttons.map((button, index)=>{
                return(
                    <div key={index} className="mr-4">
                        <Link to={"/filteredProducts/" + button}>
                        <Button
                        color='gray'
                        variant='outlined'
                        size='lg'
                        ripple={true}
                        className="hover:bg-green-300 duration-300 ease-in-out"
                        onClick={()=>dispatch(filterProducts(button))}
                        >
                            {button}
                        </Button>
                        </Link>
                    </div>
                )
            })}
    </div>
    <div className='flex justify-center items-center py-4'>
        <img className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600" src={clothes} alt="clothes" />
    </div>
    </div>
  )
}

export default NavigateButtons