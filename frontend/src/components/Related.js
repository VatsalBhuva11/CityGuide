import React from 'react';
import {Link} from 'react-router-dom'
import img1 from './Assets/Dubai1.jpg'
import img2 from './Assets/SeaWorld-Abu-Dhabi.jpg'
import img3 from './Assets/UnderWater.jpg'
import img4 from '../components/Assets/Abu-Dhabi.jpg'

const Related = () => {
  return (
<div>
<aside aria-label="Related articles" class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
  <div class="px-4 mx-auto max-w-screen-xl">
      <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <article class="max-w-xs">
              <a href="#">
                  <img src={img1} class="mb-5 rounded-lg" alt="Image 1"/>
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <p>5 Best Places to Visit and Fun Things to Do in Dubai</p>
              </h2>
              <p class="mb-4 text-gray-500 dark:text-gray-400">Dubai is the fourth most visited place in the world and is famous for its high-r...</p>
              <Link to='/blog/1' class="inline-flex items-center font-medium underline underline-offset-4 text-white dark:text-primary-500 hover:no-underline">
                  Read in 2 minutes
              </Link>
          </article>
          <article class="max-w-xs">
              <a href="#">
                  <img src={img2} class="mb-5 rounded-lg" alt="Image 1"/>
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <p>SeaWorld Abu Dhabi: Everything You Need to Know</p>
              </h2>
              <p class="mb-4 text-gray-500 dark:text-gray-400">Abu Dhabi warmly welcomes you to explore its marvels of human engineering, world...</p>
              <Link to='/blog/2' class="inline-flex items-center font-medium underline underline-offset-4 text-white dark:text-primary-500 hover:no-underline">
                  Read in 5 minutes
              </Link>
          </article>
          <article class="max-w-xs">
              <a href="#">
                  <img src={img3} class="mb-5 rounded-lg" alt="Image 1"/>
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <p>Guide to Adventure and Fun Things to Do in Dubai</p>
              </h2>
              <p class="mb-4 text-gray-500 dark:text-gray-400">The first thing that pops up in my mind when thinking about Dubai is the golden ...</p>
              <Link to='/blog/3' class="inline-flex items-center font-medium underline underline-offset-4 text-white dark:text-primary-500 hover:no-underline">
                  Read in 4 minutes
              </Link>
          </article>
          <article class="max-w-xs">
              <a href="#">
                  <img src={img4} class="mb-5 rounded-lg" alt="Image 1"/>
              </a>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <p>What to See and Do While in the Charismatic Abu Dhabi City?</p>
              </h2>
              <p class="mb-4 text-gray-500 dark:text-gray-400">A glamorous and glitzy city – Abu Dhabi, the capital and eminent tourism p...</p>
              <Link to='/blog/4' class="inline-flex items-center font-medium underline underline-offset-4 text-white dark:text-primary-500 hover:no-underline">
                  Read in 6 minutes
              </Link>
          </article>

      </div>
  </div>
</aside>
</div>
  );
}

export default Related;
