import React, { useState } from "react";
import { Button } from "@heroui/react";
import Details from "../Details/Details";
import { Link } from "react-router-dom";
export default function Card({ data }) {
  const [id, setId] = useState(null); 
  const meals = data;



  return (
    <>
    
      <div className="cards flex flex-wrap mt-24">
        {meals.length > 0
          ? meals.map((meal, index) => (
            
              <div className="w-1/4 p-4 my-10">
                <div className="bg-white flex justify-start items-center flex-col rounded-3xl hover:scale-105 hover:shadow-2xl duration-300 group">
                  <div className="image w-2/3 rounded-full overflow-hidden -translate-y-14 shadow-2xl group-hover:rotate-360 duration-700">
                    <img src={meal.strMealThumb} />
                  </div>
                  <div className="name -translate-y-6">
                    <h2 className="text-center text-2xl font-bold">
                      {meal.strMeal}
                    </h2>
                  </div>
                  <div className="area flex items-center -translate-y-6">
                    {meal.strArea ? (
                      <i className="fa-solid fa-earth-americas me-3 text-green-600"></i>
                    ) : null}
                    <h3 className="text-green-600">{meal.strArea}</h3>
                  </div>
                  <div className="button">
                    <Button
                      as={Link}
                      to={`/details/${meal.idMeal}`}
                      className="text-white font-bold rounded-4xl bg-emerald-500 hover:bg-emerald-700 hover:scale-105 mb-3"
                    >
                      View Recipe
                    </Button>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>

      {id && <Details id={id} />}
    </>
  );
}
