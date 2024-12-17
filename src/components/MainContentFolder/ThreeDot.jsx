import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ThreeDot() {
    return (
        <>
            <div
                className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-2 z-20 w-48 me-3"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="flex items-center text-md text-gray-700 hover:bg-gray-100 w-full p-2 rounded-md cursor-pointer"
                >
                    <FontAwesomeIcon icon={faEye} className="me-2" /> View
                </button>
                <button
                    className="flex items-center text-md text-gray-700 hover:bg-gray-100 w-full p-2 rounded-md cursor-pointer"
                >
                    <FontAwesomeIcon icon={faPencil} className="me-2" /> Edit
                </button>
                <button
                    className="flex items-center text-md text-gray-700 hover:bg-gray-100 w-full p-2 rounded-md cursor-pointer"
                >
                    <FontAwesomeIcon icon={faTrash} className="me-2" /> Delete
                </button>
            </div>

        </>
    )
}

export default ThreeDot
