import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { login } from '../../slice/authSlice';
const Login = () => {
    const initialState = {
        name:"",
        password:"",
        image:""
    }
    const [values, setValues] = useState(initialState);
    const changeHandler =(e)=>{
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }
    const dispatch = useDispatch();
  return (
    <div className='grid grid-cols-1 justify-items-center items-center h-screen'>
        <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" type='text' name="name" value={values.name} onChange={changeHandler}/>
        <Input label="Password" type='password' size="lg" name='password' value={values.password} onChange={changeHandler} />
        <Input label="Image URL" type='text' name='image' size="lg" value={values.image} onChange={changeHandler}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={()=>dispatch(login(values))}>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Image is optional
        </Typography>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Login