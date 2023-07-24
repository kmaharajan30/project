import React from "react";
import {
  Card,  CardHeader,
  CardBody,  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { oneProduct } from "../../slice/productSlice";
import { addToCart } from "../../slice/cartSlice";

const ProductCard = ({ id, name, img, price, size, colors, text }) => {
    const dispatch = useDispatch();
    const {type} = useParams();
  return (<div>
    <Link to={`/filteredProducts/${type}/`+id}>
    <Card className="w-96" onClick={()=>dispatch(oneProduct(id))}>
      <CardHeader shadow={false} floated={false} className="h-96">
        <img 
          src={img} 
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-bold">
            ${price}
          </Typography>
        </div>
        <Typography variant="small" color="gray" className="font-normal opacity-75">
          {text}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography variant="small" color="gray" className="flex gap-1" >
            {colors.map((color, index)=>{
                return(
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 mr-4 rounded-full mb-3" key={index} style={{backgroundColor: color}}>  
                    </i>
                )
            })}
        </Typography>
        <Button
          ripple={false}
          fullWidth={true}
          
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    </Link>
  </div>);
};

export default ProductCard;
