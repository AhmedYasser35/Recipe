import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Details from '../Details/Details';
import SideBar from './../SideBar/SideBar';
import'../../App.css'
import Card from '../Card/Card';


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
    <>
      <SideBar />
      <div className="container w-full ">
        <div className="content px-7 pt-10 bg-[#f4f2ee]">
          <h2 className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-600 w-fit text-3xl font-bold mb-8">
            Learn, Cook, Eat Your Food
          </h2>
          <Navbar setCategory={setCategory} activeCategory={category} />
          <Card data={meals}/>
        </div>
      </div>
      
    </>
  );
}
