import React, { useState } from 'react'
import Header from '../pages/Header'
import NewTask from './NewTask'



function MainDash() {
  const [activeView, setActiveView] = useState("allNotes");
  return (
    <>

      <div className="flex flex-col md:flex-row">
        <Header setActiveView={setActiveView} />
        <div className="w-full md:w-4/5">
          <NewTask activeView={activeView} setActiveView={setActiveView}/>
        </div>
      </div>

    </>
  )
}

export default MainDash
