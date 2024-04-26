import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import img1 from '../components/Assets/Dubai1.jpg'
import Related from '../components/Related';

const Blog1 = () => {

  useEffect(() => {
    // window.scrollTo(0,0)
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  },[])

  return (
    <div>
<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
  <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                  <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img class="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"/>
                      <div>
                          <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                          <p class="text-base text-gray-500 dark:text-gray-400">Traveller</p>
                          <p class="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                  </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">5 Best Places to Visit and Fun Things to Do in Dubai</h1>
          </header>
          <figure><img src={img1} alt=""/>
              <figcaption className='text-white text-xl text-center'>Dubai</figcaption>
          </figure>
          <div className='text-field text-white text-lg'>
            <p>Dubai is the fourth most visited place in the world and is famous for its high-rising architectural wonders and excellent 
              collection of resorts and spas. It is a place that was once the talk of the town for its gigantic tower Burj Al Arab,
               only to be replaced by the Palm Jumeirah and Burj Khalifa.</p>

            <p>This city never stops growing and is on a rapid rise, building futuristic towers as well as fascinating attractions. 
              If you continue reading this list of tourist sites written in the following blog, you will be taken on a guided tour 
              to some of Dubai’s best places to visit where you can find tons of fun things to do.</p>

            <p>Certainly, it is a holiday experience taken to another level, where there exist world’s 
              largest gardens and markets; an entertaining venue filled with cultural shows; indoor aquatic
               world and lots more. From beaches to spending leisure time with friends and family members, shopping 
               different items from different countries, trying out international cuisines, exploring multicultural sides to
                soaking in the lively nightlife at different spots, the city perhaps has everything that one could ask for. So, start 
                reading the blog and bookmark the places you would like to visit during your tour in Dubai.</p>
             <h2 className='text-2xl font-bold'>1.Dubai Miracle Garden: Worlds Largest Flower Garden</h2>
             <p>
             Dubai’s Miracle Garden is a world-renowned botanical garden located in the heart of Dubai, United Arab Emirates. 
             It is one of the most visited attractions in the city and has been recognized as the world’s largest natural
              flower garden by the Guinness Book of World Records
             </p>
             <p>
              The garden spans over 72,000 square metres and features over 45 million blooming flowers in vibrant 
              colours and intricate designs. The flowers are arranged in unique patterns, shapes, and designs that
               change every year, making each visit a new and exciting experience. The garden also features numerous
                sculptures and structures made entirely out of flowers, including an Emirates A380 aeroplane, an enormous
                 teddy bear, and a giant clock, all made from flowers.
             </p>
          </div>
      </article>
  </div>
</main>

<Related/>

<Footer/>

    </div>
  );
}

export default Blog1;