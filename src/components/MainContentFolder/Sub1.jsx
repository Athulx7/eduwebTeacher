import React from "react";

function Sub1({ setActiveTab, activeTab }) {
  return (
    <>
      <div className="p-5">
        <h2 className="text-xl">All Added Notes</h2>

        <div className="flex mt-4">
          <button
            className={`font-bold ${
              activeTab === "all"
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All Notes
          </button>
          <button
            className={`ms-5 font-bold ${
              activeTab === "important"
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab("important")}
          >
            Important Notes
          </button>
          <button
            className={`ms-5 font-bold ${
              activeTab === "pinned"
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab("pinned")}
          >
            Pin Notes
          </button>
        </div>
      </div>
    </>
  );
}

export default Sub1;
