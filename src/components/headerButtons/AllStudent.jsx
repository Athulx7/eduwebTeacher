import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import PowerOffHeader from "../../pages/PowerOffHeader";
import StudentSub1 from "./Allstudents/StudentSub1";

function AllStudent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="w-full">
        <div className="flex items-center md:justify-start ">
          <button
            onClick={openModal}
            className="bg-white rounded-lg hover:text-gray-950 text-gray-500 w-4/5 h-auto md:h-20 mt-6 md:mt-10 p-4 flex items-center ms-12 md:ms-3 "
          >
            <span className="text-sm md:text-base flex items-center">
              <FontAwesomeIcon icon={faPencil} className="me-2" />
              Add New{" "}
              <span className="text-black ms-2 font-semibold">Member</span>
            </span>
          </button>

          <PowerOffHeader />
        </div>

        <div className="mt-6 md:mt-8">
          <StudentSub1 />
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 md:w-1/2">
              <h2 className="text-xl font-bold mb-4">Add New Member</h2>

              <label className="block text-gray-700 mb-2">
                Member Name:
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Enter the member's name"
                />
              </label>

              <label className="block text-gray-700 mb-2">
                Member Email:
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Enter the member's email"
                />
              </label>

              <label className="block text-gray-700 mb-2">
                Password:
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Enter a password"
                />
              </label>

              <label className="block text-gray-700 mb-4">
                Re-enter Password:
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Re-enter the password"
                />
              </label>

              <div className="flex justify-end gap-4">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AllStudent;
