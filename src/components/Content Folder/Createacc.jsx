import * as React from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openAccountCreatedModal } from "../../features/modalSlice";

export default function BasicTextFields() {
  const dispatch = useDispatch();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (fname.length == 0 || lname.length == 0 || address.length == 0) {
      setError(true);
    }
    if (fname && lname && address) {
      const Customer = { fname, lname, address };
      console.log(Customer);
      axios
        .post("http://localhost:8080/api/addcustomer", {
          fname: fname,
          lname: lname,
          address: address,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      dispatch(openAccountCreatedModal());
    }
  };

  return (
    <div className=" h-full flex flex-col md:w-1/3 space-y-8">
      <h1 className="font-bold text-2xl my-6 text-center">
        CREATE NEW ACCOUNT
      </h1>
      <h1 className="font-bold text-center my-2 bg-slate-400">
        Customer Account Details:
      </h1>

      <div>
        {error && fname.length <= 0 ? (
          <div
            className="text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <span className="font-medium">Error! This field is required</span>
          </div>
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="FIRSTNAME"
          className="rounded-lg h-14 text-center w-full"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
      </div>

      <div>
        {error && lname.length <= 0 ? (
          <div
            className="text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <span className="font-medium">Error! This field is required</span>
          </div>
        ) : (
          ""
        )}

        <input
          type="text"
          placeholder="LASTNAME"
          className="rounded-lg h-14 text-center w-full"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div>
        {error && address.length <= 0 ? (
          <div
            className="text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <span className="font-medium">Error! This field is required</span>
          </div>
        ) : (
          ""
        )}

        <input
          type="text"
          placeholder="ADDRESS"
          className="rounded-lg h-14 text-center w-full"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <button
        className="bg-red-300 rounded-2xl w-1/2 mx-auto p-2 ring-2 ring-black ring-inset font-bold hover:bg-red-500"
        onClick={handleClick}
      >
        SUBMIT
      </button>
    </div>
  );
};
