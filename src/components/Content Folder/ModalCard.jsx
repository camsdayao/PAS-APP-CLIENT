import React from "react";
import { closeAccountCreatedModal } from "../../features/modalSlice";
import { useDispatch } from "react-redux";

const ModalCard = () => {
  const dispatch = useDispatch();
  const handleOKClick = () => {
    dispatch(closeAccountCreatedModal());
  };

  return (
    <div className="text-center max-w-sm my-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Submitted Successfully!{" "}
        </h5>

      <button
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleOKClick}
      >
        OK
      </button>
    </div>
  );
};

export default ModalCard;
