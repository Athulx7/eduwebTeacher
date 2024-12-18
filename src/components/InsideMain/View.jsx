import { faStar, faThumbTack, faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function View({ closeModal ,noteType }) {
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center p-2 z-50">
        <div className="bg-white md:w-1/2 w-full rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h2 className="text-lg font-medium text-gray-800">Note name</h2>
            <div className="flex">
            {noteType !== "important" && (
                <button className="text-gray-500 hover:text-yellow-500 transition duration-200 me-4 text-xl">
                  <FontAwesomeIcon icon={faStar} />
                </button>
              )}

              {noteType !== "pinned" && (
                <button className="text-gray-500 hover:text-gray-700 transition duration-200 me-4 text-xl">
                  <FontAwesomeIcon icon={faThumbTack} />
                </button>
              )}

              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition duration-200 text-2xl"
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="hover:text-red-700"
                />
              </button>
            </div>
          </div>

          <div className="p-6 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              magnam tenetur iure adipisci voluptatem dolore ipsam, natus nulla
              iusto? Necessitatibus tempora fugiat distinctio, dolorum
              exercitationem pariatur laboriosam dolor ea vero.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
