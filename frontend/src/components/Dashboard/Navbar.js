import React from 'react';
import image from '../Assets/user_photo.jpeg'

const DashNavbar = ({user}) => {
  return (
    <div className=' bg-white flex fixed right-0 left-0 top-0 justify-between items-center text-3xl z-50 text-purple-900 border-solid border-yellow-700 border-b-2'>
    <div className='mx-10 my-4 font-semibold
    cursor-pointer '>GoTravel</div>
    <div className='mx-10 my-4 flex text-2xl items-center'>
      
      <div className='mx-6 text-xl font-semibold text-red-700 cursor-pointer'>LOGOUT</div>
      <div className=' w-10 object-contain '>
        <img src={image} className='rounded-full'></img>
      </div>
      <div className='mx-2 cursor-pointer'>{user.firstName}</div>
    </div>
    </div>
  );
}

export default DashNavbar;

