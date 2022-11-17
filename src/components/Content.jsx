import React from "react";
import Createacc from "./Content Folder/Createacc";
import Getpolicy from "./Content Folder/Getpolicy";
import GetPolicyContainer from "./Content Folder/GetPolicyContainer";
import Cancelpolicy from "./Content Folder/Cancelpolicy";
import Fileclaim from "./Content Folder/Fileclaim";
import WelcomePage from "./Content Folder/WelcomePage";
import ModalCard from "../components/Content Folder/ModalCard";
import { useSelector } from "react-redux";
import { store } from "../store";

const Content = () => {
  const { accountCreatedShow } = useSelector((store) => store.modal);
  const { display } = useSelector((store) => store.menu);
  console.log(accountCreatedShow);

  var comptoDisplay = <WelcomePage />;

  switch (display) {
    case "createAccount":
      console.log(display)
      comptoDisplay = <Createacc />;

      break;
    case "getPolicy":
      comptoDisplay = <GetPolicyContainer />;
      break;

    case "cancelPolicy":
      comptoDisplay = <Cancelpolicy />;
      break;

    case "fileClaim":
      comptoDisplay = <Fileclaim />;
      break;
  }

  return (
    <div className="h-full flex justify-center">
      {!accountCreatedShow && comptoDisplay}
      {accountCreatedShow && <ModalCard />}
    </div>
  );
};

export default Content;
