import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className=" fixed font-bold w-screen bg-slate-500 h-20 flex items-center justify-between">
      <div className="flex h-full space-x-6">
        <img src={Logo} className="w-fit h-full ml-2 rounded p-1" />

        <div className="hidden w-fit h-full items-center text-center md:flex">
          <h1 className=" font-serif text-2xl">MAJ Automobile Insurance</h1>
        </div>
      </div>

      <input
        className="text-center h-2/3 mr-4 rounded-2xl"
        type="text"
        placeholder="Searching.."
      />
    </div>
  );
};

export default Navbar;
