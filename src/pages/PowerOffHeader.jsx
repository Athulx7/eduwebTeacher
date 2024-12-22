import { faEnvelope, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PowerOffHeader() {
  return (
    <>
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
    </>
  )
}

export default PowerOffHeader
