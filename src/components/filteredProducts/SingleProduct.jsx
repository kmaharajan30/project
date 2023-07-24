import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Select, Option } from "@material-tailwind/react";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../slice/cartSlice";

const SingleProduct = () => {
    
  
  const product = useSelector((state) => state.product.singleProduct);
  console.log("product", product);
  const { id } = useParams();
  console.log("params", id);
  const productSize = product[0].size ? product[0].size[0] : "";
  const colorSet = product[0].color ? product[0].color[0] : "";
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(colorSet);
  console.log("size",size)
  console.log("color",color)
  const dispatch = useDispatch();

  
  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center py-10">
              <div className="pl-44 grow-[2] ">
                <img
                  className="h-[650px] rounded-lg "
                  src={item.img}
                  alt="src"
                />
              </div>
              <div className="max-w-lg">
                <div className="grow-[3]">
                  <h5 className="text-2xl font-bold tracking-normal leading-none pb-6 ">
                    {item.name}
                  </h5>
                  <p className="text-xl text-gray-600 tracking-normal leading-none pb-6 " >
                    {item.text}
                  </p>
                </div>
                {item.size ? (
                    <div className="pb-6">
                  
                    <div className="w-72">
                      <Select label="Select Size" name="size" id="size" value={size} onChange={(e)=> setSize(e)}>
                        {item.size.map((item,index)=>{
                            return(
                                <Option key={index} value={item}>{item}</Option>
                            )
                        })}
                      </Select>
                    </div>
                </div> 

                ) : ""}
                
                {item.color ? (
                    <div className="pb-6">
                  
                    <div className="w-72">
                      <Select label="Select Color" value={color} onChange={(e)=>setColor(e)}>
                        {item.color.map((item,index)=>{
                            return(
                                <Option key={index} value={item}>{item}</Option>
                            )
                        })}
                      </Select>
                    </div>
                </div>

                ) : ""}

<Tooltip content="Add to Cart" placement="bottom" >
      <Button color="gray" variant="outlined" onClick={()=>dispatch(addToCart({
        id: item.id,
        name: item.name,
        img: item.img,
        text: item.text,
        price: item.price,
        amount: 1,
        color: color,
        size: size,
        price: item.price,

      }))}>Add to Cart</Button>
    </Tooltip>
                
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
