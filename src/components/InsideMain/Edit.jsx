import React from "react";
function Edit({closeModal}) {
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center p-2 z-50">
        <div className="bg-white md:w-1/2 w-full rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <div className="text-lg w-96  font-medium text-gray-800">
              <input type="text" name="" className="p-2" placeholder="heading name " id="" />
            </div>
          </div>

          <div className="p-6 text-gray-600">
            <textarea name="" className="w-11/12 h-52 ms-6" id="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              magnam tenetur iure adipisci volupt
              atem dolore ipsam, natus nulla
              iusto? Necessitatibus tempora fugiat distinctio, dolorum
              exercitationem pariatur laboriosam dolor ea vero.
            </textarea>
          </div>

          <div className="flex justify-end px-6 py-4 border-t">
          <button
            onClick={closeModal}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-all duration-300 me-2"
          >
            Close
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-300"
          >
            Save Changes
          </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
