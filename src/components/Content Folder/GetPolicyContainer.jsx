import React from 'react'
import Getpolicy from './Getpolicy';
import PolicyNumPrompt from './PolicyNumPrompt';
import { useSelector } from 'react-redux';

const GetPolicyContainer = () => {
  const {promptShow} = useSelector((store) => store.prompt);
  return (
    <div>
{promptShow&&<PolicyNumPrompt/>}
{!promptShow&&<Getpolicy/>}
    </div>
   

  );
}

export default GetPolicyContainer