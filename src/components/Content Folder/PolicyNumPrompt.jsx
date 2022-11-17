import React from "react";

const PolicyNumPrompt = () => {
  return (
    <div className="bg-lime-200 w-full h-full flex items-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-orange-300">
        <div className="px-6 py-4 justify-center bg-slate-500">
          <div className="font-bold text-base mb-2 bg-blue-400 text-center">
            Kindly input your existing 4-digits Account Number (XXXX):
          </div>
          <div className=" text-center">
            <input
              className="text-gray-700 h-10 text-base text-center rounded-lg ring-2 ring-inset ring-black "
              placeholder="Account Number"
            ></input>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            SUBMIT
          </button>
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyNumPrompt;
