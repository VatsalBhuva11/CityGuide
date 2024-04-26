import React, {useEffect} from 'react';
import Footer from '../components/Footer';
import img3 from '../components/Assets/UnderWater.jpg'
import img3b from '../components/Assets/illusion.jpg'
import Related from '../components/Related';

const Blog3= () => {
useEffect(() => {
  window.scroll({top: 0, left: 0, behavior: 'smooth' })
    // window.scrollTo(0,0)
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
                          <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Bradd Pitt</a>
                          <p class="text-base text-gray-500 dark:text-gray-400">Geologist</p>
                          <p class="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                  </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Guide to Adventure and Fun Things to Do in Dubai</h1>
          </header>
          <figure><img src={img3} alt=""/>
              <figcaption className='text-white text-xl text-center'>Dubai UnderWater Park</figcaption>
          </figure>
          <div className='text-field text-white text-lg'>
            <p className='my-3'>The first thing that pops up in my mind when thinking about Dubai is the golden sand and yes the skyscrapers. But that’s not only how Dubai is known to tourists. Along with the luxury holidayers, Dubai has also become one of the preferred destinations among the adventure seekers. So if Dubai which is one of the best holiday destinations in the world is on your mind to travel then I have prepared a list of activities that will help you pick the activities to take your holiday experience on another level.</p>

            <p className='my-3'>Get ready to enter the world of Indoor Skydive, underwater zoo, desert safaris and a lot more. So let’s get started and bookmark the fun and adventure activities that you would like to try during your tour in Dubai.</p>

            <p className='my-3'>Certainly, it is a holiday experience taken to another level, where there exist world’s 
              largest gardens and markets; an entertaining venue filled with cultural shows; indoor aquatic
               world and lots more. From beaches to spending leisure time with friends and family members, shopping 
               different items from different countries, trying out international cuisines, exploring multicultural sides to
                soaking in the lively nightlife at different spots, the city perhaps has everything that one could ask for. So, start 
                reading the blog and bookmark the places you would like to visit during your tour in Dubai.</p>
             <h2 className='text-2xl font-bold my-4'>Enter the World of Illusions at Dubai Museum of Illusion</h2>
             <figure><img src={img3b} alt=""/>
              <figcaption className='text-white text-xl text-center'>Dubai Museum of illusion</figcaption>
             </figure>
             <p className='my-3'>Are you the one who loves tricks and illusion? If yes, then you are going to experience it at Dubai’s Museum of Illusion (one of tourism places in Dubai) which is the world’s biggest museum which is now open at Al Seef. Entering the museum, you would see 8- interactive exhibits that include a vortex tunnel, rotating cylinder and Ames room, where you would be appearing to shrink or grow depending on your position.</p>
             <p className='my-3'>Considered to be the largest indoor adventurous activity in UAE, you would see an acrylic glass tunnel that gives an experience worth every penny. The activity is not just limited to the adults but even children above 4 who have the adventure zeal in their heart can try. The place remains crowded with enthusiastic people during the weekends so what I’ll suggest to visit the place during a weekday.</p>
          
          </div>
      </article>
  </div>
</main>

<Related/>

<Footer/>

    </div>
  );
}

export default Blog3;