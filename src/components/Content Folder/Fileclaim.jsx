import React from "react";

const Fileclaim = () => {
  return (
    <div className="w-screen">
      <h1 className="text-gray-900 dark:text-white w-full text-sm md:text-base mt-2 text-center bg-slate-400">
        File Claim
      </h1>
      <div className="grid grid-cols-2 bg-red-400 mt-2">
        <div className="flex items-center">
          <h1 className="text-gray-900 dark:text-white w-full h-full text-sm md:text-base text-center bg-slate-500 my-auto md:w-2/3">
            Date of Accident:
          </h1>
        </div>
        <div className="text-center bg-amber-300 items-center">
          <input type="date" className="text-sm text-center" />
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
          <h1 className="text-gray-900 dark:text-white w-full h-full text-sm md:text-base text-center bg-slate-500 my-auto">
            Description of Accident:
          </h1>
        </div>
        <div className="text-center bg-amber-300 items-center">
          <textarea
            type="text"
            className="text-sm text-center md:w-full"
            placeholder="Accident Description"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 bg-red-400 mt-2">
        <div className="flex items-center ">
          <h1 className="text-gray-900 dark:text-white w-full h-full text-sm md:text-base text-center bg-slate-500 my-auto">
            Damage to Vehicle (description):
          </h1>
        </div>
        <div className="text-center bg-amber-300 items-center">
          <textarea
            type="text"
            className="text-sm text-center md:w-full"
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
            className="text-sm text-center md:w-full"
            placeholder="Description on Damage to Vehicle"
          />
        </div>
      </div>

      <div className="mt-3 bg-red-400 w-full flex justify-center">
        <button className="bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Fileclaim;
