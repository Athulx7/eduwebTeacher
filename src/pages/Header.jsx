import React, { useState } from "react";
import { Link } from "react-router-dom";
import noteLogo from "../assets/noteLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBars,
  faFolderOpen,
  faNoteSticky,
  faPlus,
  faUsers,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faReadme } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className="w-full md:w-1/5 pt-8 pb-8 mt-2">
        <div className="bg-white mx-8 rounded-lg">
          
          <div className="flex items-center justify-between">
            <Link className="flex items-center">
              <img
                src={noteLogo}
                width={50}
                alt="Logo"
                className="ms-3 mt-3 mb-3"
              />
              
              <div className="hidden md:block mt-3 ms-4 text-xl font-bold">
                <h2 className="mb-3">EDU WEB</h2>
              </div>
            </Link>


            <div className="block md:hidden mt-3 ml-auto">
              <button
                onClick={toggleMenu}
                className="text-gray-600 text-2xl px-4 py-2 rounded focus:outline-none flex items-center"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>

          
          <hr className="bg-gray-400 h-0.5" />

          
          {menuOpen && (
            <div className="mt-3 p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <img
                  width={50}
                  src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                  alt="User"
                  className="cursor-pointer"
                />
                <h2 className="ms-4">User Name</h2>
                <button>
                  <FontAwesomeIcon className="ms-5" icon={faChevronDown} />
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <button className="bg-gray-800 text-white px-10 py-2 rounded-md font-bold hover:bg-black w-full">
                  <FontAwesomeIcon icon={faPlus} className="me-3" />
                  ADD NEW
                </button>

                <button className="text-lg text-gray-700 hover:text-black w-full flex items-center">
                  <FontAwesomeIcon icon={faReadme} className="me-3" />
                  All Notes
                </button>

                <button className="text-lg text-gray-700 hover:text-black w-full flex items-center">
                  <FontAwesomeIcon icon={faFolderOpen} className="me-3" />
                  Important Notes
                </button>

                <button className="text-lg text-gray-700 hover:text-black w-full flex items-center">
                  <FontAwesomeIcon icon={faNoteSticky} className="me-3" />
                  All Tasks
                </button>

                <button className="text-lg text-gray-700 hover:text-black w-full flex items-center">
                  <FontAwesomeIcon icon={faUsers} className="me-3" />
                  All Students
                </button>

                <button className="text-lg text-gray-700 hover:text-red-700 w-full flex items-center">
                  <FontAwesomeIcon icon={faArrowRightFromBracket} className="me-3" />
                  Log Out
                </button>
              </div>
            </div>
          )}

          
          <div className="hidden md:block ">
            <button className="flex items-center mt-5 ms-3">
              <img
                width={50}
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                alt="User"
                className="cursor-pointer"
              />
              <h2 className="ms-4">User Name</h2>
              <button>
                <FontAwesomeIcon className="ms-10" icon={faChevronDown} />
              </button>
            </button>

            <div className="mt-6 space-y-4 ms-3 me-3">
              <button className="bg-gray-800 text-white px-10 py-2 rounded-md font-bold hover:bg-black w-full">
                <FontAwesomeIcon icon={faPlus} className="me-3" />
                ADD NEW
              </button>

              <button className="text-lg text-gray-700 hover:text-black w-full flex items-center">
                <FontAwesomeIcon icon={faReadme} className="me-3" />
                All Notes
              </button>

              <button className="text-lg text-gray-700 hover:text-black w-full flex items-center">
                <FontAwesomeIcon icon={faFolderOpen} className="me-3" />
                Important Notes
              </button>

              <button className="text-lg text-gray-700 hover:text-black w-full flex items-center">
                <FontAwesomeIcon icon={faNoteSticky} className="me-3" />
                All Tasks
              </button>

              <button className="text-lg text-gray-700 hover:text-black w-full flex items-center">
                <FontAwesomeIcon icon={faUserTie} className="me-3" />
                All Students
              </button>

              <button className="text-lg text-gray-700 hover:text-red-700 w-full flex items-center">
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="me-3" />
                Log Out
              </button>
            </div>

            <img
              className="mt-48 m w-full rounded-md"
              src="https://thumbs.dreamstime.com/b/not-listening-to-teacher-isolated-cartoon-vector-illustration-kid-lays-head-desk-children-having-fun-last-row-annoyed-262139485.jpg"  
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
