import React from 'react';
import BlogInfo from '../components/Blogs/BlogInfo';
import Footer from '../components/Footer';

const Blog4 = () => {
  return (
    <div className='relative bottom-0'>
      <section class="bg-white dark:bg-gray-900 min-h-screen">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-5xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
          <p class="font-light text-gray-500 sm:text-2xl dark:text-gray-400">"Explore, Discover, Share: Your Journey Begins Here!"</p>
      </div> 
      <div class="grid gap-8 lg:grid-cols-2">
      {/* this place we need to map all the fetched data */}
      <BlogInfo/>
      </div>  
  </div>
</section>
<Footer/>
    </div>
  );
}

export default Blog4;