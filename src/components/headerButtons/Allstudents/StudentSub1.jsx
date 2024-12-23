import React from "react";

function StudentSub1() {
  return (
    <>
      <div className="bg-white ms-2 rounded-md pt-8" style={{ width: "96%" }}>
        <div className="bg-white mx-2 rounded-md pt-8 md:mx-auto md:w-11/12 lg:w-4/5 xl:w-3/4">
          <div className="w-full">
            <div className="bg-gray-900 rounded-t-xl flex flex-col md:flex-row items-center text-white py-3 px-4 font-semibold text-center">
              <div className="flex-1 text-center">MEMBER NAME</div>
              <div className="flex-1 text-center">EMAIL</div>
            </div>

            <div className="overflow-y-scroll h-[640px] no-scrollbar">
              <div className="flex flex-col md:flex-row items-center bg-white text-black font-medium py-4 px-4 text-center">
                <div className="flex-1 text-center">
                  MEMBER NAME
                </div>
                <div className="flex-1 text-center">
                  athulnsjnjhiuwbeb@gmail.com
                </div>
              </div>

              <hr className="border-t border-gray-400 mx-4" />
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

export default StudentSub1;
