import React from 'react'
import { Button } from "@heroui/react";
let categories = ["All","Beef","Breakfast","Chicken","Dessert","Goat","Lamb","Miscellaneous","Pasta","Pork","Seafood","Side","Starter","Vegan","Vegetarian",
];

export default function Navbar({setCategory}) {


  return (
    <>
      <div className="navbar flex flex-wrap">
        {categories.map((cat) => (
          <Button
            
            onClick={() => setCategory(cat)}
            className="rounded-3xl border-1.5 py-2 px-4 border-gray-400 m-2.5 bg-transparent hover:bg-white focus:bg-black focus:text-white font-bold text-neutral-500 hover:shadow-2xl duration-500"
          >
            {cat}
          </Button>
        ))}
      </div>
    </>
  );
}
