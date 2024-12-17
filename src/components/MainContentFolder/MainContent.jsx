import React from 'react'
import Sub1 from './Sub1'
import Sub2 from './Sub2'

function MainContent() {
  return (
    <>

      <div className='bg-white  ms-2 rounded-md' style={{ width: '96%' }}>
        <Sub1 />

        <div className='p-7 mb-10'>
          <Sub2 />
        </div>

      </div>

      

    </>
  )
}

export default MainContent
