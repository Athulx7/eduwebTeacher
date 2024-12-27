import {
  faEnvelope,
  faPencil,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import PowerOffHeader from "../../pages/PowerOffHeader";
import AllTaskSub1 from "./Alltask/AllTaskSub1";
import { Route, Routes } from "react-router-dom";
import SubTask2 from "./Alltask/SubTask2";

function AllTask() {
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
              <span className="text-black ms-1 font-semibold">Task</span>
            </span>
          </button>

          <PowerOffHeader />
        </div>

        <div className="mt-6 md:mt-8">
          <Routes>
            <Route path="/allTasks11" element={<AllTaskSub1 />} />
            <Route path="/subTask2" element={<SubTask2 />} />
          </Routes>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 md:w-1/2">
              <h2 className="text-xl font-bold mb-4">Add New Task</h2>

              <label className="block text-gray-700 mb-2">
                Task Title:
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Enter the task title"
                />
              </label>

              <label className="block text-gray-700 mb-2">
                Task Brief:
                <textarea
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Enter a brief description of the task"
                  rows="4"
                />
              </label>

              <label className="block text-gray-700 mb-4">
                Submission Date:
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
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

export default AllTask;
