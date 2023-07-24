import React from "react";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../slice/authSlice";

const Navbar = () => {
  const totalAmount = useSelector((state)=>state.cart.totalAmount);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="bg-black p-2 w-full">
        <h3 className="text-white text-2xl font-bold tracking-normal text-center leading-none">
          Welcome All
        </h3>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <img src={logo} className="h-28 w-full " alt="logo" />
        </div>
        <div className="flex flex-row items-center">
          <button className="font-medium text-center tracking-normal leading-none mr-4 " onClick={()=>dispatch(logout())}>
            Logout
          </button>
          <div className="flex flex-row items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="font-medium text-center tracking-normal leading-none mr-4">
              Whislist
            </p>
          </div>
          <Link to='/cart'>
          <div className="flex flex-row items-center cursor-pointer">
          {totalAmount > 0 ? (
              <span className="rounded-full px-2 bg-gray-300 mr-2">
                {totalAmount}
              </span>
            ) :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          }
            <p className="font-medium text-center tracking-normal leading-none mr-4">
              Shopping Cart
            </p>            
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
