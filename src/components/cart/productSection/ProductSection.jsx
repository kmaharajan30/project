import React from 'react'
import { storeData } from '../../../assets/data/dummyData'
import ProductSectionItem from '../productSectionItem/ProductSectionItem'

const ProductSection = () => {
  return (
    <div>
        <div className='bg-black p-2 w-[50%] mx-auto rounded-md'>
        <h2 className='text-white text-center text-lg font-bold tracking-normal leading-none'>Products</h2>
        </div>
        <div className='grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl'>
            {storeData.slice(0,6).map((product,index)=>{
                return(
                    <div key={index}>
                        <ProductSectionItem id ={product.id}
                        name={product.name}
                        img={product.img}
                        text={product.text}
                        color={product.color}
                        size={product.size}
                        price={product.price}
                        totalPrice={product.totalPrice}

                        />
                    </div>
                )
                // text:text,
                // color:defaultColor,
                // size:defaultSize,
                // img:img,
                // price:price,
                // totalPrice:totalPrice,
                // amount:1
            })}
        </div>
    </div>
  )
}

export default ProductSection