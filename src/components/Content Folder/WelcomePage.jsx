import React from "react";
import Welcome from "../Content Folder/content-assets/welcome.png";

const WelcomePage = () => {
  return (
    <div className="h-full w-full flex items-center">
        <img src={Welcome} className="mx-auto"></img>
      </div>
  );
};

export default WelcomePage;
