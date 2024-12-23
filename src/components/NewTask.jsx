import {
  faEnvelope,
  faPencil,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MainContent from "./MainContentFolder/MainContent";
import PowerOffHeader from "../pages/PowerOffHeader";

function NewTask() {
  return (
    <>

<div className="w-full">
  
  <div className="flex items-center md:justify-start ">
    
    <button className="bg-white rounded-lg hover:text-gray-950 text-gray-500 w-4/5 h-auto md:h-20 mt-6 md:mt-10 p-4 flex items-center ms-12 md:ms-3 ">
      <span className="text-sm md:text-base flex items-center">
        <FontAwesomeIcon icon={faPencil} className="me-2" />
        Add New 
      </span>
    </button>


  

    <PowerOffHeader />
  </div>

  
  <div className="mt-6 md:mt-8">
    <MainContent />

    
  </div>
</div>
  
    </>
  );
}

export default NewTask;
