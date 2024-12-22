import React, { useState } from 'react'
import Header from '../pages/Header'
import NewTask from './NewTask'
import AllTask from './headerButtons/AllTask';
import AllStudent from './headerButtons/AllStudent';

function MainDash() {
  const [activeView, setActiveView] = useState("NewTask");
  return (
    <>

      <div className="flex flex-col md:flex-row">
        <Header activeView={activeView} setActiveView={setActiveView} />
        <div className="w-full md:w-4/5">
        {activeView === "NewTask" && (
          <NewTask activeView={activeView} setActiveView={setActiveView} />
        ) }
        { activeView === "AllTask" && <AllTask />}
        {activeView === "AllStudent" && <AllStudent />}
        </div>
      </div>

    </>
  )
}

export default MainDash
