import React from "react";
import { Button } from "@heroui/react";

let categories = [
  "All",
  "Beef",
  "Breakfast",
  "Chicken",
  "Dessert",
  "Goat",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
];

// Added activeCategory prop to highlight the current selection
export default function Navbar({ setCategory, activeCategory }) {
  return (
    <>
      {/* On mobile: Added sm:justify-start for better alignment. 
        The flex-wrap ensures they flow like tags.
      */}
      <div className="navbar flex flex-wrap justify-center md:justify-start gap-2 mb-8">
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`
              rounded-full border-1.5 py-1 px-4 duration-500 font-bold transition-all
              ${
                activeCategory === cat
                  ? "bg-black text-white border-black shadow-lg"
                  : "bg-transparent text-neutral-500 border-gray-400 hover:bg-white hover:text-black hover:shadow-md"
              }
            `}
          >
            {cat}
          </Button>
        ))}
      </div>
    </>
  );
}
