import React from 'react';
import white from '../assets/img/white.jpg'

const FoodPage = () => {
  return (
    <div className='absolute inset-0 flex justify-center items-center'>
        <div className='m-10 flex justify-center'>
            <img src={white} alt="Bg" className='h-1/2 w-1/2'/>
        </div>
    </div>
  )
}

export default FoodPage;