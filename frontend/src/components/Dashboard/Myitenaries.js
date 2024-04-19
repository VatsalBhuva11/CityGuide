import React from 'react';
import img from '../Assets/user_photo.jpeg'
import qmimg from '../Assets/qutub_minar.jpg'
import tmimg from '../Assets/taj_mahal.jpg'
import fsimg from '../Assets/fateh.jpeg'
import rfimg from '../Assets/red_fort.webp'

const Myitenaries = () => {
  return (
    <div>
      <div className=' py-3 text-2xl font-semibold px-4 text-purple-700 border-b-2  border-purple-300'>
        My Itenaries
      </div>
      
<div className='grid grid-cols-2 gap-5 px-10 py-4'>

<div class="   bg-[#321735] bg-opacity-30 border border-gray-200 rounded-lg shadow ">

    <article class="relative isolate flex flex-col justify-end overflow-hidden px-8 pb-4 pt-40  mx-auto ">
    <img src={tmimg} alt="University of Southern California" class="absolute left-0 bottom-0 h-full w-1/2 object-cover " />
    <img src={fsimg} alt="University of Southern California" class="absolute right-0 bottom-0 h-full w-1/2 object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Agra Trip</h3>
</article>


    <div class="px-5">
        <p class="mb-3 font-normal text-white ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
  </div>
   


  </div>
  </div>
  );
}

export default Myitenaries;
