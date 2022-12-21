import React from "react";

const Fileclaim = () => {
  return (
    <div className="w-screen">
      <div>
        <h1 className="font-bold text-2xl my-6 text-center">FILE A CLAIM</h1>
        <h1 className="font-bold text-center my-8 bg-slate-400">
          Accident Details:
        </h1>
      </div>

      <div className="grid grid-cols-2 bg-red-400 mt-2">
        <div className="flex items-center">
          <h1 className="text-gray-900 dark:text-white w-full h-full text-sm md:text-base text-center bg-slate-500 my-auto">
            Date of Accident:
          </h1>
        </div>
        <div className="text-center bg-amber-300 items-center h-full">
          <input type="date" className="text-sm text-center h-10" />
        </div>
      </div>
      <div className="grid grid-cols-2 bg-red-400 mt-2">
        <div className="flex items-center ">
          <h1 className="text-gray-900 dark:text-white w-full h-full text-sm md:text-base text-center bg-slate-500 my-auto">
            Address of Accident:
          </h1>
        </div>
        <div className="text-center bg-amber-300 items-center h-10">
          <input
            type="text"
            className="text-sm text-center h-full md:w-full"
            placeholder="Accident Address"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 bg-red-400 mt-2">
        <div className="flex items-center ">
          <h1 className="text-gray-900 dark:text-white w-full h-24 text-sm md:text-base text-center bg-slate-500 my-auto">
            Description of Accident:
          </h1>
        </div>
        <div className="text-center bg-amber-300 items-center">
          <textarea
            type="text"
            className="text-sm text-center md:w-full h-24"
            placeholder="Accident Description"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 bg-red-400 mt-2">
        <div className="flex items-center ">
          <h1 className="text-gray-900 dark:text-white w-full h-24 text-sm md:text-base text-center bg-slate-500 my-auto">
            Damage to Vehicle (description):
          </h1>
        </div>
        <div className="text-center bg-amber-300 items-center">
          <textarea
            type="text"
            className="text-sm text-center h-24 md:w-full"
            placeholder="Description on Damage to Vehicle"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 bg-red-400 mt-2">
        <div className="flex items-center ">
          <h1 className="text-gray-900 dark:text-white w-full h-full text-sm md:text-base text-center bg-slate-500 my-auto">
            Estimated Cost of Repair:
          </h1>
        </div>
        <div className="text-center bg-amber-300 items-center">
          <input
            type="number"
            className="text-sm text-center h-14 md:w-full"
            placeholder="Cost of Repair"
          />
        </div>
      </div>

      <div className="mt-3 bg-red-400 w-full flex justify-center">
        <button className="bg-red-300 rounded-2xl w-1/8 mx-auto p-2 ring-2 ring-black ring-inset font-bold hover:bg-red-500">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Fileclaim;
