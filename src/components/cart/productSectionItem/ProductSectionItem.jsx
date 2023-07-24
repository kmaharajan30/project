import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import { Button } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../slice/cartSlice';
const ProductSectionItem = ({id, name, size, color, img, text, price, totalPrice}) => {
    const dispatch = useDispatch();
    const defaultSize = size[0];
    const defaultColor = color[0];
  return (
    <div>
        <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src={img} alt={name} />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="gray" className="font-medium" textGradient>
          {text}
        </Typography>
        <div className='flex justify-between items-center pt-4'>
        <Typography color="gray" className="font-medium" textGradient>
          Size Left : {defaultSize}
        </Typography>
        <Typography color="gray" className="font-medium" textGradient>
          Color: <span className='px-2 rounded-full ml-2' style={{backgroundColor : defaultColor}}></span>
        </Typography>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content = "Add to cart" placement ="bottom">
            <Button size='lg' color='gray' variant='outlined' onClick={()=>dispatch(addToCart({
                id:id,
                name:name,
                text:text,
                color:defaultColor,
                size:defaultSize,
                img:img,
                price:price,
                totalPrice:totalPrice,
                amount:1,
            }))}>Add to Cart</Button>
        </Tooltip>
      </CardFooter>
    </Card>
    </div>
  )
}

export default ProductSectionItem