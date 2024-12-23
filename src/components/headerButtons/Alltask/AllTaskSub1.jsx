import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCaretRight, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function AllTaskSub1() {
  return (
    <>
      <div className="bg-white ms-2 rounded-md pt-8" style={{ width: "96%" }}>
        <div className="w-11/12 md:ms-12 ms-5 ">
          <div className="bg-gray-900 rounded-t-xl flex items-center text-white py-3 px-4 font-semibold text-center">
            <div className="w-2/5 flex justify-center">TITLE</div>
            <div className="w-2/5 flex justify-center">SUBMISSION DATE</div>
            <div className="w-2/5 flex justify-center">ACTION</div>
          </div>

          <div
            className="overflow-y-scroll h-[670px] no-scrollbar" // Custom utility class
          >
           
              
                <div className="flex items-center bg-white text-black font-medium h-24 py-3 px-4 text-center">
                  <Link
                    to={"/subTask2"}
                    className="w-2/5 flex justify-center hover:text-gray-600"
                  >
                    <span>
                      <FontAwesomeIcon icon={faCaretRight} className="me-2" />
                    </span>
                    Example Title 
                  </Link>
                  <div className="w-2/5 flex justify-center">
                    Dec 20, 2024
                  </div>
                  <div className="w-2/5 flex justify-center">
                    <Link
                      to={"/subTask2"}
                      className="w-10 py-1 rounded-lg bg-green-600 transition-transform duration-500 hover:scale-105"
                    >
                      <FontAwesomeIcon
                        icon={faPen}
                        className="text-lg text-white "
                      />
                    </Link>

                    <button className="w-10 py-1 rounded-lg bg-red-600 ms-10 transition-transform duration-500 hover:scale-105">
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className=" text-xl text-white"
                      />
                    </button>
                  </div>
                </div>
                <hr className="border-t border-gray-400" />
              
          
          </div>
        </div>
      </div>

      {/* Tailwind CSS Custom Styles */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none; /* Internet Explorer 10+ */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
    </>
  );
}

export default AllTaskSub1;
