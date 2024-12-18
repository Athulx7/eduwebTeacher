import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import View from '../InsideMain/View'
import Edit from '../InsideMain/Edit'

function ThreeDot({noteType}) {
    const [isOpenView,setIsOpenview] = useState(false)
    const openModalView = () => setIsOpenview(true)
    const closeModalView = () => setIsOpenview(false)

    const [isOpenEdit,setIsOpenEdit] = useState(false)
    const openModalEdit = () => setIsOpenEdit(true)
    const closeModalEdit = () => setIsOpenEdit(false)

    return (
        <>
            <div
                className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-2 z-20 w-48 me-3"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="flex items-center text-md text-gray-700 hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer"
                    onClick={openModalView}
                >
                    <FontAwesomeIcon icon={faEye} className="me-2" /> View
                </button>
                <button
                    className="flex items-center text-md text-gray-700 hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer"
                    onClick={openModalEdit}
                >
                    <FontAwesomeIcon icon={faPencil} className="me-2" /> Edit
                </button>
                <button
                    className="flex items-center text-md text-gray-700 hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer"
                >
                    <FontAwesomeIcon icon={faTrash} className="me-2" /> Delete
                </button>
            </div>

            {isOpenView && ( 
                <View closeModal={closeModalView} noteType={noteType} />
            )}

            {
                isOpenEdit && (
                    <Edit closeModal={closeModalEdit} />
                )
            }


            

        </>
    )
}

export default ThreeDot


