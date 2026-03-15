import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { useParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { div } from "framer-motion/client";

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
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    }
  }, [id]);

  if (!details) return <div className="p-10 text-center">Loading...</div>;

  const ingredients = Object.keys(details)
    .filter((key) => key.includes("strIngredient") && details[key])
    .map((ingredientKey, index) => {
      const ingredient = details[ingredientKey];
      const measureKey = `strMeasure${index + 1}`;
      const measure = details[measureKey];
      return { ingredient, measure };
    });

  return (
    <div className="md:ml-64">
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f4f2ee]">
      <SideBar />

      <div className="flex-1 w-full p-4 lg:p-8">
        <div className="all-content">
          {/* Header */}
          <div className="header mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {details.strMeal}
            </h2>
          </div>

          {/* Main Grid Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 1. Image & Social Section */}
            <div className="w-full lg:w-1/3">
              <img
                src={details.strMealThumb}
                alt={details.strMeal}
                className="w-full rounded-3xl shadow-lg"
              />
              <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
                <Button
                  as={"a"}
                  href={details.strYoutube}
                  target="_blank"
                  className="text-white bg-red-600 rounded-lg font-bold flex-1 md:flex-none"
                >
                  <i className="fa-brands fa-youtube mr-2"></i> YouTube
                </Button>
                <Button
                  as={"a"}
                  href={details.strSource}
                  target="_blank"
                  className="text-white bg-emerald-500 rounded-lg font-bold flex-1 md:flex-none"
                >
                  <i className="fa-solid fa-globe mr-2"></i> Source
                </Button>
              </div>
            </div>

            {/* 2. Instructions Section */}
            <div className="w-full lg:w-1/3">
              <h3 className="text-2xl font-bold mb-4 lg:hidden">
                Instructions:
              </h3>
              <p className="font-medium text-gray-700 leading-relaxed">
                {details.strInstructions}
              </p>
            </div>

            {/* 3. Ingredients Section */}
            <div className="w-full lg:w-1/3 p-6 bg-white rounded-3xl h-fit shadow-sm">
              <h3 className="text-2xl font-bold border-b-4 border-gray-100 pb-2 mb-4">
                Ingredients
              </h3>
              <ul className="flex flex-col">
                {ingredients.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between border-b border-gray-100 py-3 font-medium text-gray-600"
                  >
                    <span>{item.ingredient}:</span>
                    <span className="text-gray-900">{item.measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
