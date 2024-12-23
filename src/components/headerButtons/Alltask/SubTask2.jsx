import {
  faArrowLeft,
  faCaretRight,
  faFolderOpen,
  faPen,
  faSquareCheck,
  faTicket,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SubTask2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className="bg-white ms-2 rounded-md pt-8" style={{ width: "96%" }}>
        <Link
          to={"/allTasks11"}
          className="ms-5 mb-4 flex font-bold text-gray-500 hover:text-black w-32 transition-transform duration-500 hover:scale-105"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="ms-3 -mt-1 ">BACK TO</span>
        </Link>
        <div className="w-11/12 md:ms-12 ms-5">
          <div className="bg-gray-900 rounded-t-xl flex items-center text-white py-3 px-4 font-semibold text-center">
            <div className="w-2/5 flex justify-center">MEMBER NAME</div>
            <div className="w-2/5 flex justify-center">SUBMITION DATE</div>
            <div className="w-2/5 flex justify-center">ACTION</div>
          </div>

          <div className="overflow-y-scroll h-[634px] no-scrollbar">
            <div className="flex items-center bg-white text-black font-medium h-24 py-3 px-4 text-center">
              <button
                to={""}
                className="w-2/5 flex justify-center hover:text-gray-600"
                onClick={toggleModal}
              >
                <span>
                  <FontAwesomeIcon icon={faFolderOpen} className="me-2" />
                </span>
                Example Title
              </button>
              <div className="w-2/5 flex justify-center">Dec 20, 2024</div>
              <div className="w-2/5 flex justify-center">
                <button
                  to={""}
                  className=" w-10 py-1 rounded-lg bg-green-600 transition-transform duration-500 hover:scale-105 "
                >
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className="text-lg text-white "
                  />
                </button>
              </div>
            </div>

            <hr className="border-t border-gray-400" />
          </div>
        </div>
      </div>

      {/* modal  */}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-2/3">
            <h2 className="text-xl font-semibold mb-4">TASK NAME</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              adipisci, voluptatibus commodi tempore vitae molestiae incidunt
              maxime nihil hic libero facere culpa, et, pariatur excepturi ullam
              voluptate voluptatum aliquam maiores!
            </p>
            <button
              onClick={toggleModal}
              className="mt-4  py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

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

export default SubTask2;
