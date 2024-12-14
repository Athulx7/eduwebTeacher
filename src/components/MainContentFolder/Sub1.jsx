import React from 'react'

function Sub1() {
  return (
    <>

      <div className='p-5'>
        <h2 className='text-xl'>All Added Notes</h2>

        <div className='flex mt-4'>
          <button className='text-gray-500 hover:text-black font-bold'>All Notes</button>
          <button className='ms-5 text-gray-500 hover:text-black font-bold'>Important Notes</button>
          <button className='ms-5 text-gray-500 hover:text-black font-bold'>Pin Notes</button>
          <button className='ms-5 text-gray-500 hover:text-black font-bold'>Recent Shared</button>

        </div>


      </div>

    </>
  )
}

export default Sub1
