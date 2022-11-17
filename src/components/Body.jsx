import React from "react";
import Side from "../components/Side";
import Content from "../components/Content";
const Body = () => {
  return (
    <div className="h-full grid grid-cols-3">
      <div className=" mt-24">
        <Side/>
      </div> 
      <div className="bg-gray-200 mt-20 col-span-2">
        <Content/>
      </div>
    </div>
  );
};

export default Body;
