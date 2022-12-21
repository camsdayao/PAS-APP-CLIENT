import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closePrompt,
  setaccNumResult,
} from "../../features/accountpromptSlice";

const AccountNumPrompt = () => {
  const [inputAccNum, setAccountNum] = useState("");
  // const [accNumResult, setaccNumResult] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { accNumResult } = useSelector((store) => store.prompt);

  const getClick = async () => {
    if (inputAccNum.length === 0) {
      setError(true);
    } else {
      await axios
        .get("http://localhost:8080/api/" + inputAccNum)
        .then((response) => {
          dispatch(setaccNumResult(response.data));
          dispatch(closePrompt());
        })
        .catch((error) => {
          console.log(error.response.data.message);
          setError(true);
        });
    }
  };

  return (
    <div className="bg-lime-200 w-full h-full flex items-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-orange-300">
        {error ? (
          <div
            className="text-medium text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <span className="font-large">
              Account Number doesn't exist! Please try again!{" "}
            </span>
          </div>
        ) : (
          ""
        )}
        <div className="px-6 py-4 justify-center bg-slate-500">
          <div className="font-bold text-base mb-2 bg-blue-400 text-center">
            Kindly input your existing 4-digits Account Number (XXXX):
          </div>
          <div className=" text-center">
            <input
              className="text-gray-700 h-10 text-base text-center rounded-lg ring-2 ring-inset ring-black "
              placeholder="Account Number"
              value={inputAccNum}
              onChange={(e) => setAccountNum(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <button
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-orange-200"
            onClick={getClick}
          >
            SUBMIT
          </button>
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-orange-200">
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountNumPrompt;
