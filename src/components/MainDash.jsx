import React from 'react'
import Header from '../pages/Header'
import NewTask from './NewTask'



function MainDash() {
  return (
    <>

      <div className="flex flex-col md:flex-row">
        <Header />
        <div className="w-full md:w-4/5">
          <NewTask />
        </div>
      </div>

    </>
  )
}

export default MainDash
