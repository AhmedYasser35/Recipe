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
              /* RESPONSIVE WIDTHS:
                 w-full: 1 column on mobile
                 sm:w-1/2: 2 columns on small tablets
                 md:w-1/3: 3 columns on small laptops
                 lg:w-1/4: 4 columns on large desktops 
              */
              <div
                key={meal.idMeal}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 my-10"
              >
                <div className="bg-white flex justify-start items-center flex-col rounded-3xl hover:scale-105 hover:shadow-2xl duration-300 group">
                  {/* Image size logic stays same, but now has space to breathe */}
                  <div className="image w-2/3 rounded-full overflow-hidden -translate-y-14 shadow-2xl group-hover:rotate-360 duration-700">
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                  </div>

                  <div className="name -translate-y-6 px-2">
                    <h2 className="text-center text-xl md:text-2xl font-bold">
                      {meal.strMeal}
                    </h2>
                  </div>

                  <div className="area flex items-center -translate-y-6">
                    {meal.strArea ? (
                      <i className="fa-solid fa-earth-americas me-3 text-green-600"></i>
                    ) : null}
                    <h3 className="text-green-600 font-medium">
                      {meal.strArea}
                    </h3>
                  </div>

                  <div className="button">
                    <Button
                      as={Link}
                      to={`/details/${meal.idMeal}`}
                      className="text-white font-bold rounded-4xl bg-emerald-500 hover:bg-emerald-700 hover:scale-105 mb-6"
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
