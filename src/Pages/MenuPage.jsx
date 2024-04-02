import React from 'react';

const MenuPage = ({ onFoodClick, onDrinkClick }) => {
  return (
    <div className='fixed w-full h-full bg-gradient-to-b from-orange-300 to-orange-200 border-double border-4 border-white-500'>
        <div className='flex justify-center'>
            <div className='m-2'>
                <button className='bg-white p-2 rounded-lg font-bold' onClick={onFoodClick}>Food</button>
            </div>
            <div className='m-2'>
             <button className='bg-white p-2 rounded-lg font-bold' onClick={onDrinkClick}>Drinks</button>
            </div>
        </div>
        <div className='flex justify-center h-full items-center text-2xl'>
          <button className='bg-white p-1.5 rounded-xl shadow-xl shadow-white'>Click ON the Menu</button>
        </div>
    </div>
  );
}

export default MenuPage