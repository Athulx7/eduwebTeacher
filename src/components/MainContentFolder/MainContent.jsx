import React, { useState } from "react";
import Sub1 from "./Sub1";
import Sub2 from "./Sub2";

function MainContent() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
     
      
  
        <div className="bg-white ms-2 rounded-md" style={{ width: "96%" }} >
        <Sub1 setActiveTab={setActiveTab} activeTab={activeTab} />

        <div className="p-7 mb-10">
          <Sub2 activeTab={activeTab} />
        </div>
      </div>
     
      
    </>
  );
}

export default MainContent;
