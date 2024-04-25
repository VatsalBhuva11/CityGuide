import React from 'react';
import image from '../Assets/user_photo.jpeg'

const Sidebar = ({user, setClicked}) => {
  return (
    <div className="bg-[#f6ebf8] fixed top-32 left-14  py-2 flex flex-col justify-center items-center shadow-xl z-10 text-xl border border-purple-300 border-opacity-45 rounded-2xl">
      <div>
        <ul>
          <li className="py-3 border-b border-purple-300 flex flex-col justify-center items-center">
            <div className=' w-24 object-contain my-3 '>
             <img src={image} className='rounded-full cursor-pointer'></img>
             </div>
            <a href="#" className="text-purple-700  flex font-bold text-[26px] items-center px-12 hover:px-7">
              {user.firstName}
            </a>
            <div className=' text-sm my-1 text-purple-500'>{user.email}</div>
          </li>
          <li className="py-3 border-b border-purple-300 flex justify-center" onClick={()=>{setClicked(1)}}>
            <a href="#" className="text-purple-700 hover:font-semibold flex items-center px-8 hover:px-7 ">
              My Itenaries
            </a>
          </li>
          <li className="py-3 border-b border-purple-300 flex justify-center" onClick={()=>{setClicked(2)}}>
            <a href="#" className="text-purple-700 hover:font-semibold flex items-center px-20 hover:px-[78px]">
              Saved Itenaries
            </a>
          </li>
          <li className="py-3 border-b border-purple-300 flex justify-center" onClick={()=>{setClicked(3)}}>
            <a href="#" className="text-purple-700 hover:font-semibold flex items-center px-8 hover:px-7">
              My Wishlist
            </a>
          </li>
          <li className="py-3 flex justify-center" onClick={()=>{setClicked(4)}}>
            <a href="#" className="text-purple-700 hover:font-semibold flex items-center px-8 hover:px-7">
              Blogs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

