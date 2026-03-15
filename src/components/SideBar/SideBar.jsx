import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Button } from "@heroui/react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* MOBILE TOP BAR - Only visible on small screens */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200 sticky top-0 z-[60]">
        <img src={logo} alt="Logo" className="h-8" />
        <Button
          isIconOnly
          variant="light"
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl"
        >
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </Button>
      </div>

      {/* OVERLAY - Darkens the background when menu is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[50] md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <div
        className={`
        side-bar fixed left-0 top-0 h-full w-64 flex flex-col bg-white border-r border-gray-200 z-[55] transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0
      `}
      >
        <div className="image py-8 px-6">
          <img src={logo} alt="Logo" className="w-full" />
        </div>

        <div className="flex flex-col gap-2 px-4">
          <Button
            className="bg-[#f29624] hover:scale-105 text-white font-bold text-lg justify-start"
            variant="shadow"
          >
            <i className="fa-solid fa-utensils mr-3"></i>
            Meals
          </Button>

          <Button className="bg-white hover:scale-105 text-black font-medium text-lg border-1 border-gray-300 justify-start">
            <i className="fa-solid fa-list-check mr-3"></i>
            Ingredients
          </Button>

          <Button className="bg-white hover:scale-105 text-black font-medium text-lg border-1 border-gray-300 justify-start">
            <i className="fa-solid fa-earth-africa mr-3"></i>
            Area
          </Button>
        </div>
      </div>
    </>
  );
}
