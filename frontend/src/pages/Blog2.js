import React, {useEffect} from 'react';
import Footer from '../components/Footer';
import img2 from '../components/Assets/SeaWorld-Abu-Dhabi.jpg'
import Related from '../components/Related';

const Blog2 = () => {

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
                          <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Vatsal Bhuva</a>
                          <p class="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                          <p class="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2023-02-01" title="February 1th, 2023">Feb. 1, 2023</time></p>
                      </div>
                  </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">SeaWorld Abu Dhabi: Everything You Need to Know</h1>
          </header>
          <figure><img src={img2} alt=""/>
              <figcaption className='text-white text-xl text-center'>Sea-World-Abudabi</figcaption>
          </figure>
          <div className='text-field text-white text-lg'>
            <p className='my-3'>Abu Dhabi warmly welcomes you to explore its marvels of human engineering, world-class facilities, and rich heritage. Prepare to be captivated by its picturesque desert landscapes, beautiful beaches, and exquisite flavours offered by Michelin-star restaurants. Additionally, it is home to four exotic theme parks, including the newly inaugurated SeaWorld, where you can embark on an incredible journey from the poles to the tropics while discovering over 100,000 marine animals.</p>

            <p className='my-3'>SeaWorld opened the region’s first marine life theme park in Abu Dhabi on May 23rd. Developed in partnership between SeaWorld Parks and Entertainment and Miral Real Estate Developers, this park offers a majestic experience in the world of marine life and educates visitors about these amazing creatures of nature. It marks a significant milestone in the history of Abu Dhabi tourism, as the city now boasts four theme parks, including Warner Bros. World Abu Dhabi, Ferrari World Abu Dhabi, Yas Waterworld, and CLYMB Abu Dhabi. Yas SeaWorld Research & Rescue serves as the first and only integrated research, rescue, rehabilitation, return, and education center in the MENA region.</p>

            <p className='my-3'>Certainly, it is a holiday experience taken to another level, where there exist world’s 
              largest gardens and markets; an entertaining venue filled with cultural shows; indoor aquatic
               world and lots more. From beaches to spending leisure time with friends and family members, shopping 
               different items from different countries, trying out international cuisines, exploring multicultural sides to
                soaking in the lively nightlife at different spots, the city perhaps has everything that one could ask for. So, start 
                reading the blog and bookmark the places you would like to visit during your tour in Dubai.</p>
             <h2 className='text-2xl font-bold my-4'>Enchanting World Awaits You at SeaWorld!</h2>
             <p className='my-3'>Spread over 183,000 square meters, this five-storey theme park offers a great opportunity for tourists to live among and spend time with sea creatures. Upon entering, guests are greeted with awe-inspiring infrastructure and the use of technology that immerses them in the world of marine life. As you step into SeaWorld, you will immediately sense a transformation in your surroundings. With captivating visuals of marine life and background music, SeaWorld warmly welcomes you to embark on a once-in-a-lifetime journey.</p>
             <p className='my-3'>The theme park features eight realms, namely Endless Ocean, Tropical Ocean, Rocky Realm, Abu Dhabi Ocean, Arctic, Antarctica, and Micro Ocean. Connecting all of them together is One Ocean, where visitors can enjoy a 360-degree media experience and observe the animal care center, where vet experts work. Fun facts can be found in almost every corner of SeaWorld.</p>
          </div>
      </article>
  </div>
</main>

<Related/>


<Footer/>

    </div>
  );
}

export default Blog2;