import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDisplay } from "../features/menuSlice";

const options = [
  { label: "Create New Account", name: "createAccount" },
  { label: "Get a Policy", name: "getPolicy" },
  { label: "Cancel Policy", name: "cancelPolicy" },
  { label: "File a Claim", name: "fileClaim" },
  { label: "Search Customer Account", name: "searchAccount" },
  { label: "Search Policy", name: "searchPolicy" },
  { label: "Search Claims", name: "searchClaims" },
  { label: "EXIT", name: "exit" },
];

const Side = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        {options.map((option) => (
          <button
            className="p-2 mt-6 mx-2 bg-amber-500 rounded-lg md:text-2xl md: font-bold font text-slate-500 md:mx-10 hover:bg-amber-800"
            key={option.label}
            onClick={() => dispatch(setDisplay(option.name))}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* <button
        className="p-2 mt-6 mx-2 bg-amber-500 rounded-lg md:text-2xl md: font-bold font text-slate-500 md:mx-10"
        onClick={() => dispatch(setDisplay("asd"))}
      >
        Create New Account
      </button>
      <button className="p-2 mt-6 mx-2 bg-amber-500 rounded-lg md:text-2xl md: font-bold font text-slate-500 md:mx-10">
        Get a Policy
      </button>
      <button className="p-2 mt-6 mx-2 bg-amber-500 rounded-lg md:text-2xl md: font-bold font text-slate-500 md:mx-10">
        Cancel Policy
      </button>
      <button className="p-2 mt-6 mx-2 bg-amber-500 rounded-lg md:text-2xl md: font-bold font text-slate-500 md:mx-10">
        File a Claim
      </button>
      <button className="p-2 mt-6 mx-2 bg-amber-500 rounded-lg md:text-2xl md: font-bold font text-slate-500 md:mx-10">
        Search Customer Account
      </button>
      <button className="p-2 mt-6 mx-2 bg-amber-500 rounded-lg md:text-2xl md: font-bold font text-slate-500 md:mx-10">
        Search Policy
      </button>
      <button className="p-2 mt-6 mx-2 bg-amber-500 rounded-lg md:text-2xl md: font-bold font text-slate-500 md:mx-10">
        Search Claims
      </button>
      <button className="p-2 mt-6 mx-2 bg-amber-500 rounded-lg md:text-2xl md: font-bold font text-slate-500 md:mx-10">
        EXIT
      </button> */}
    </div>
  );
};

export default Side;
