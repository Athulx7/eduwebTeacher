import {
    faBookOpen,
    faCalendarDays,
    faEllipsis,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React, { useState } from "react";
  import ThreeDot from "./ThreeDot";

function ImportantNote() {
     const [DotMenu, SetDotmenu] = useState(false);
      const threeDotButton = () => SetDotmenu(!DotMenu);
  return (
    <>
      <div className="container mx-auto p-4 -mt-10 overflow-y-scroll h-[640px] no-scrollbar">
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

            {DotMenu && <ThreeDot noteType = 'important'/>}

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

          <div className="w-62 p-4 border-b-4 border-b-pink-500 rounded-md hover:bg-pink-500 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out mt-5">
            <div className="flex">
              <FontAwesomeIcon icon={faBookOpen} className="text-2xl" />
              <button className="ms-auto">
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>
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

export default ImportantNote;
