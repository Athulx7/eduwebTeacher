import {
    faBookOpen,
    faCalendarDays,
    faEllipsis,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React, { useState } from "react";
  import ThreeDot from "./ThreeDot";
function PinnedNote() {
    const [DotMenu, SetDotmenu] = useState(false);
          const threeDotButton = () => SetDotmenu(!DotMenu);
  return (
    <>

<div className="container mx-auto p-4 -mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative w-62 p-4 border-b-4 border-b-blue-400 rounded-md hover:bg-blue-400 hover:text-white mt-5 hover:shadow-lg transition-all duration-300 ease-in-out">
            <div className="flex">
              <FontAwesomeIcon icon={faBookOpen} className="text-2xl" />
              <button
                className="ms-auto"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  threeDotButton();
                }}
              >
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>

            {DotMenu && <ThreeDot noteType = 'pinned'/>}

            <div className="mt-4">
              <h2 className="text-xl font-medium">Note Name</h2>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                mollitia laudantium harum, fugit distinctio laboriosam suscipit.
                Quibusdam expedita quo earum architecto fugit!
              </p>
            </div>
            <div className="flex ms-auto mt-5">
              <FontAwesomeIcon icon={faCalendarDays} className="mt-1" />
              <div className="ms-2 font-medium">12 Jan 2024</div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default PinnedNote
