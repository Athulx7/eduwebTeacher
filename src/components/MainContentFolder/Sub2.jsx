
import React, { useState } from "react";
import AllNotes from "./AllNotes";
import ImportantNote from "./ImportantNote";
import PinnedNote from "./PinnedNote";


function Sub2({ activeTab }) {
 return (
    <>
      <div>
      {activeTab === 'all' && <AllNotes />}
      {activeTab === 'important' && <ImportantNote />}
      {activeTab === 'pinned' && <PinnedNote />}
    </div>
    </>
  );
}

export default Sub2;
