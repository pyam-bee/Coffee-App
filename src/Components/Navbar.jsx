import React from 'react'
import { GrCart } from "react-icons/gr";

const Navbar = ({ onMenuClick }) => {
  return (
    <div className='bg-orange-300 px-5 py-4 flex rounded-lg'>
        <div className='w-10'></div>
        <div className='flex-grow flex items-center justify-center '>
            <button onClick={onMenuClick} className='w-20 font-bold text-xl bg-white p-2 rounded-xl shadow-xl hover:shadow-white'>Menu</button>
        </div>
        <div className='w-10 flex items-center justify-center'>
            <GrCart size={30} />
        </div>
    </div>
  )
}

export default Navbar