import React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Sidebaar from '../components/Dashboard/Sidebaar';
import Main from '../components/Dashboard/Main';

const DashBoard = () => {
  return (
    <>
    <div className='flex flex-col'>
    <div className=' h-24'>
      <Navbar/>
    </div>
    <div className=' flex'>
      <div className=' w-96'>
        <Sidebaar/>
      </div>
      <div className=' my-8 flex flex-1'>
      <Main/>
      </div>
      </div>
    </div>
    </>
  );
}

export default DashBoard;

