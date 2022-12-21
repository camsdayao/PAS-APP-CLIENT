import React from "react";
import { useState } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { openAccountCreatedModal } from "../../features/modalSlice";

const Getpolicy = () => {
  const dispatch = useDispatch();

  const [effectDate, setEffectDate] = useState("");
  const [polFname, setPolFname] = useState("");
  const [polLname, setPolLname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [licenseNum, setLicenseNum] = useState("");
  const [licenseDate, setLicenseDate] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [carType, setCarType] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState();

  const handleClick = (e) => {
    //dispatch(openAccountCreatedModal());
    //console.log(handleClick);
    console.log();
    console.log(typeof price);
  };

  return (
    <div className="text-center">
      <h1 className="font-bold my-2 bg-slate-400">Effective Date:</h1>
      <input
        type="date"
        className="rounded ring-2 ring-black ring-inset w-28 p-1  md:ml-12 text-sm md:w-48 md:text-base"
        value={effectDate}
        onChange={(e) => setEffectDate(e.target.value)}
      />

      <div className="">
        <h1 className="font-bold mt-5 bg-slate-400">Policy Holder Details</h1>

        <div className="grid grid-cols-2 items-end md:grid-cols-3">
          <input
            type="text"
            placeholder="FIRSTNAME"
            id="floating_outlined"
            className="text-center rounded-lg mt-2 h-8 mx-2 text-xs md:text-base"
            value={polFname}
            onChange={(e) => setPolFname(e.target.value)}
          />
          <input
            type="text"
            placeholder="LASTNAME"
            className="text-center rounded-lg mt-2 h-8 mx-2 text-xs md:text-base"
            value={polLname}
            onChange={(e) => setPolLname(e.target.value)}
          />
          <div className="flex flex-col col-span-2 items-center md:col-span-1">
            <label className="mt-2 text-sm">Birthdate:</label>
            <input
              type="date"
              className="rounded ring-2 ring-black ring-inset p-1 md: text-sm md:w-3/4 md:text-base md:align-end"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
        </div>

        <input
          type="text"
          placeholder="ADDRESS"
          className="md:flex text-center rounded-lg mt-2 w-full h-8 text-xs md:text-base"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="grid grid-cols-3 items-end">
          <input
            type="text"
            placeholder="LICENSE NUMBER"
            className="md:flex text-center rounded-lg mt-2 h-8 text-xs col-span-2 align-end md:text-base mx-4"
            value={licenseNum}
            onChange={(e) => setLicenseNum(e.target.value)}
          />
          <div className="w-full">
            <h1 className="mt-2 text-sm">Issued date:</h1>
            <input
              type="date"
              className="rounded ring-2 ring-black ring-inset w-full p-1  text-sm md:text-base md:w-3/4"
              value={licenseDate}
              onChange={(e) => setLicenseDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-bold bg-slate-400 mb-2">Vehicle Details</h1>
        <div className="grid grid-cols-3 text-xs mb-2 md:text-base">
          <input
            type="text"
            placeholder="MAKE"
            className="md:flex text-center rounded-lg h-8 w-3/4 mx-auto"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
          <input
            type="text"
            placeholder="MODEL"
            className="md:flex text-center rounded-lg h-8 w-3/4 mx-auto"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <input
            type="text"
            placeholder="COLOR"
            className="md:flex text-center rounded-lg h-8 w-3/4 mx-auto"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-gray-900 mx-auto dark:text-white w-2/3 text-sm md:text-base">
              Fuel Type:
            </h1>
            <ul className="w-2/3 mx-auto text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    id="list-radio-license"
                    type="radio"
                    value="Gasoline"
                    name="list-radio"
                    className="w-3 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 md:w-4"
                    onChange={(e) => setFuelType(e.target.value)}
                  />
                  <label
                    id="list-radio-license"
                    className="py-1 ml-2 w-1/3 text-xs font-medium text-gray-900 dark:text-gray-300 md:text-base"
                  >
                    Gasoline
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    id="list-radio-license"
                    type="radio"
                    value="Diesel"
                    name="list-radio"
                    className="w-3 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 md:w-4"
                    onChange={(e) => setFuelType(e.target.value)}
                  />
                  <label
                    id="list-radio-license"
                    className="py-1 ml-2 w-1/3 text-xs font-medium text-gray-900 dark:text-gray-300 md:text-base"
                  >
                    Diesel
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    id="list-radio-millitary"
                    type="radio"
                    value="Electric"
                    name="list-radio"
                    className="w-3 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 md:w-4"
                    onChange={(e) => setFuelType(e.target.value)}
                  />
                  <label
                    id="list-radio-millitary"
                    className="py-1 ml-1 w-1/3 text-xs font-medium text-gray-900 dark:text-gray-300 md:text-base"
                  >
                    Electric
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-gray-900 dark:text-white w-2/3 text-sm md:text-base">
              Car Type:
            </h1>
            <div className="inline-block relative w-full text-xs md:text-base">
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setCarType(e.target.value)}
              >
                <option>4-Door(Sedan)</option>
                <option>2-Door(Sportscar)</option>
                <option>SUV</option>
                <option>Trucks</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-2">
          <div className="">
            <h1 className="text-gray-900 dark:text-white w-2/3 text-sm md:text-base">
              Month & Year
            </h1>
            <input
              type="month"
              className="w-3/4 items"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="">
            <h1 className="text-gray-900 dark:text-white w-2/3 text-sm md:text-base">
              Price:
            </h1>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-6 h-20 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <AiOutlineDollarCircle size={22} />
                </svg>
              </div>
              <input
                type="number"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Amount"
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <button
            className="bg-red-300 rounded-2xl w-1/3 mx-auto p-2 ring-2 ring-black ring-inset font-bold hover:bg-red-500"
            onClick={handleClick}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Getpolicy;
