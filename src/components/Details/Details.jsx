import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { useParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

export default function Details() {
    const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (id) {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      axios
        .get(url)
        .then((response) => {
          setDetails(response.data.meals[0]);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    }
  }, [id]);

  if (!details) return <div>Loading...</div>;


  const ingredients = Object.keys(details)
    .filter((key) => key.includes("strIngredient") && details[key]) 
    .map((ingredientKey, index) => {
      const ingredient = details[ingredientKey];
      const measureKey = `strMeasure${index + 1}`; 
      const measure = details[measureKey];
      return { ingredient, measure };
    });

  return (
    <>
      <SideBar />
      <div className="container w-full h-full  ">
        <div className="all-content bg-[#f4f2ee] p-4 ">
          <div className="header">
            <h2 className="text-4xl font-bold">{details.strMeal}</h2>
          </div>
          <div className="flex flex-wrap">
            <div className="image w-1/3 px-5 ">
              <img
                src={details.strMealThumb}
                className="w-full mt-4 rounded-3xl"
              />
              <Button
                as={"a"}
                href={details.strYoutube}
                target="_blank"
                className="mt-9 ms-17 text-white bg-red-600 rounded-lg font-bold"
              >
                <i class="fa-brands fa-youtube"></i> youtube
              </Button>
              <Button
                as={"a"}
                href={details.strSource}
                target="_blank"
                className="text-center ms-6 text-white bg-emerald-500 font-bold"
              >
                <i class="fa-solid fa-globe"></i>source
              </Button>
            </div>
            <div className="content w-1/3 px-5">
              <p className="font-medium">{details.strInstructions}</p>
            </div>
            <div className="ing w-1/3 p-5 bg-white rounded-3xl h-fit">
              <h3 className="text-2xl font-bold border-b-4 border-gray-200">
                Ingredients:
              </h3>
              <ul className="flex flex-col ">
                {ingredients.map((item, index) => (
                  <li
                    key={index}
                    className=" flex justify-between border-b-2 px-1  border-gray-200  py-3 font-medium"
                  >
                    {item.ingredient + ":"} <span>{item.measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
