import React from 'react'
import { GrCart } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className='bg-orange-300 px-5 py-4 flex'>
        <div className='w-10'></div>
        <div className='flex-grow flex items-center justify-center '>
            <h1 className='font-bold text-xl bg-white p-1.5 rounded-xl'>Menu</h1>
        </div>
        <div className='w-10 flex items-center justify-center '>
            <GrCart size={30} />
        </div>
    </div>
  )
}

export default Navbar