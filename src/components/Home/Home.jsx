import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Details from '../Details/Details';
import SideBar from './../SideBar/SideBar';
import'../../App.css'
import Card from '../Card/Card';
import { div } from 'framer-motion/client';


export default function Home() {
    const [category,setCategory]=useState('All')
    const [meals,setMeals]=useState([])

    useEffect(()=>{
        let url=""
        if(category==="All"){
            url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        }
        else{
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
        }
        axios.get(url).then((response) => {setMeals(response.data.meals || [])})
    },[category])

  return (
    /* Wrap in a flex container to handle the Sidebar + Content layout */
    <div className="md:ml-64">
      <div className="flex flex-col md:flex-row min-h-screen">
        <SideBar />

        {/* 1. Added 'flex-1' to take remaining width 
          2. 'w-full' for mobile, then auto-managed by flex for desktop
      */}
        <div className="container w-full flex-1">
          {/* Adjusted padding: px-4 for mobile, px-7 for larger screens */}
          <div className="content px-4 md:px-7 pt-10 bg-[#f4f2ee] min-h-full">
            {/* Responsive text size: text-2xl for mobile, text-3xl for desktop */}
            <h2 className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-600 w-fit text-2xl md:text-3xl font-bold mb-8">
              Learn, Cook, Eat Your Food
            </h2>

            <Navbar setCategory={setCategory} activeCategory={category} />

            {/* Ensure the Card component internal grid is responsive */}
            <Card data={meals} />
          </div>
        </div>
      </div>
    </div>
  );
}