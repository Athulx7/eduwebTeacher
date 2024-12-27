import { faEnvelope, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function PowerOffHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
    <div className="hidden md:flex bg-white w-40 ms-3 mt-10 rounded-lg h-20 md:ms-6">
          <div className="flex ms-3">
            <div className="rounded-full bg-gray-200 h-12 w-12 flex items-center mt-4 ms-3">
              <button onClick={openModal} className="transition-transform duration-500 hover:scale-105">
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

        {isModalOpen && (
        <div className="fixed inset-0 pe-5 bg-black bg-opacity-50 flex items-center justify-end z-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/5 h-4/5 ">
            <h2 className="text-xl font-bold mb-4">Message</h2>
            <textarea
              className="w-full h-4/5 p-4 border border-gray-300 rounded"
              placeholder="Write your message here..."
            ></textarea>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={closeModal}
              >
                Close
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PowerOffHeader
