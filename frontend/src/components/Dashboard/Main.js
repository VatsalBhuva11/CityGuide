import React from 'react';
import Info from './Info';
import Blogs from './Blogs'
import Myitenaries from './Myitenaries';
import Wishlist from './Wishlist';
import Saveditenaries from './Saveditenaries';

const Dash_main = ({user, clicked}) => {
  // const token = localStorage.getItem("token");
  console.log(clicked);
  let Hello=<Wishlist/>;
  if(clicked==1) Hello=<Myitenaries/>;
  if(clicked==2) Hello=  <Saveditenaries/>;
  if(clicked==3) Hello=   <Wishlist/>;
  if(clicked==4) Hello=   <Blogs/>;
  return (
    <div className="bg-[#f6ebf8] mr-10 py-2 flex-1 flex-col justify-center items-center shadow-xl z-8 text-xl border border-purple-300 border-opacity-45 rounded-2xl">
      {Hello}
    </div>
  );
}

export default Dash_main;
