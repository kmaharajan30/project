import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const FilteredProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.product.filteredProducts);
    console.log("products", products)
    const {type} = useParams();
    console.log("params", type);
  return (
    <div>
        <div className='pt-16'>
            <div className="pl-14">
                <h1 className="text-4xl text-gray-600 font-bold leading-none tracking-normal ">{type}</h1>
            </div>
            <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
                {products.filter((product)=> product.type === type)
                .map((product, index)=> {
                    return (
                        <div key={index}>
                        <ProductCard id={product.id}
                        name={product.name}
                        text={product.text}
                        img={product.img}
                        colors={product.color}
                        size={product.size}
                        price={product.price}
                        />

                        
                    </div>
                    )
                    
                })
                }
            </div>
        </div>
    </div>
  )
}

export default FilteredProducts