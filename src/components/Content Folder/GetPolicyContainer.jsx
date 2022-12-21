import React from "react";
import Getpolicy from "./Getpolicy";
import PolicyNumPrompt from "./AccountNumPrompt";
import { useSelector } from "react-redux";
import AccountNumPrompt from "./AccountNumPrompt";

const GetPolicyContainer = () => {
  const { promptShow } = useSelector((store) => store.prompt);
  return (
    <div>
      {promptShow && <AccountNumPrompt />}
      {!promptShow && <Getpolicy />}
    </div>
  );
};

export default GetPolicyContainer;
