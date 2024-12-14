import {
  faEnvelope,
  faPencil,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MainContent from "./MainContentFolder/MainContent";

function NewTask() {
  return (
    <>

    


<div className="w-full   ">
  
  <div className="flex items-center md:justify-start ">
    
    <button className="bg-white rounded-lg hover:text-gray-950 text-gray-500 w-4/5 h-auto md:h-20 mt-6 md:mt-10 p-4 flex items-center ms-12 md:ms-3 ">
      <span className="text-sm md:text-base flex items-center">
        <FontAwesomeIcon icon={faPencil} className="me-2" />
        Add New 
      </span>
    </button>


    <div className="hidden md:flex bg-white w-40 ms-3 mt-10 rounded-lg h-20 md:ms-6">
      <div className="flex ms-3">
        <div className="rounded-full bg-gray-200 h-12 w-12 flex items-center mt-4 ms-3">
          <button className="transition-transform duration-500 hover:scale-105">
            <FontAwesomeIcon icon={faEnvelope} className="ms-3 text-xl" />
          </button>
        </div>
        <div className="rounded-full bg-gray-200 h-12 w-12 flex items-center mt-4 ms-4 me-2">
          <button className="transition-transform duration-500 hover:scale-105">
            <FontAwesomeIcon
              icon={faPowerOff}
              className="ms-3 hover:text-red-700 text-xl"
            />
          </button>
        </div>
      </div>
    </div>
  </div>

  
  <div className="mt-6 md:mt-8">
    <MainContent />
    
  </div>
</div>
  
    </>
  );
}

export default NewTask;
