import React from "react";

const Cancelpolicy = () => {
  return (
    <div className="bg-orange-200 justify-center">
      <div>
        <h1 className="text-gray-900 dark:text-white text-sm md:text-base text-center my-3">
          POLICY CANCELLATION
        </h1>
      </div>
      <div className="grid grid-cols-2 my-auto bg-slate-400 p-2 content-center">
        <h1 className="text-gray-900 dark:text-white text-sm md:text-base bg-red-500 text-center">
          Enter cancellation date:
        </h1>
        <div className="text-center bg-amber-300">
          <input type="date" className="rounded text-sm" />
        </div>
      </div>
    </div>
  );
};

export default Cancelpolicy;
