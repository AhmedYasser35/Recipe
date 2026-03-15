import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className="footer md:ml-64 mx-30 my-5 flex justify-between items-center  border-b-1 border-gray-400 pb-4 z-2 relative">
        <div className="image w-15 ">
          <Link to={"/"} className="w-full h-full flex items-center ">
            <img src={logo} />
            <h2 className="text-3xl font-semibold">Recipe</h2>
          </Link>
        </div>
        <h2 className="text-3xl font-bold text-blue-700">route</h2>
      </div>
      <p className='text-center mb-4'>© 2026 All Rights Reserved.</p>
    </>
  );
}
