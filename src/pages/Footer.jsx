import React from 'react'
import { Link } from 'react-router-dom'
import noteLogo from "../assets/noteLogo.png";

function Footer() {
  return (
    <div className='bg-white md:ms-8 p-3 rounded-md md:flex ms-3 ' style={{width:'95%'}}>

      <div>
       <Link className="flex items-center">
                     <img
                       src={noteLogo}
                       width={30}
                       alt="Logo"
                       className="ms-3 mt-3 mb-3"
                     />
                     
                     <div className="hidden md:block mt-3 ms-2 text-md font-bold">
                       <h2 className="mb-3">EDU WEB</h2>
                     </div>
                   </Link>
         </div>
      <p className='ms-auto md:mt-3'><span className='text-gray-600'>2024©</span> EDU WEB</p>
      
    </div>
  )
}

export default Footer
