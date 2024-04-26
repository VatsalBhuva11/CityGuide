import React,{useState} from 'react';
import Footer from '../components/Footer';
import Related from '../components/Related.js'
const OpenBlog = () => {
    const [author,setAuthor] = useState('Jese Leos');
    const [date,setDate] = useState('Feb 23 , 2023');
    const [city,setCity] = useState('Dubai');
    const [title,setTitle] = useState('Best practices for successful prototypes');
    const [image,setImage] = useState('https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png');
    const [description,setDescription] = useState('hello guys i am arpit');

  return (
    <div>
<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
  <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                  <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img class="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Author Photo"/>
                      <div>
                          <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">{author}</a>
                          <p class="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">{date}</time></p>
                      </div>
                  </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{title}</h1>
          </header>
          <figure><img src={image} alt=""/>
          </figure>
          <div className='text-field text-white text-lg'>{description}</div>
      </article>
  </div>
</main>

<Related/>


<Footer />
    </div>
  );
}

export default OpenBlog;
