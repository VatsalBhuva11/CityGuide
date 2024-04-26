import React, { useState } from 'react';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Footer from '../components/Footer';
import parse from 'html-react-parser';

const NewBlog = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setContent(editorRef.current.getContent());
    }
  };
  
  return (
    <div >
  <section class="bg-white dark:bg-gray-900 min-h-screen pb-16">
      <div class="mx-auto max-w-screen-sm text-center mb-8 pt-4">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Write Your Blog</h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">"Unleash Your Wanderlust: Share Your Adventures, Stories, and Insights with the World!"</p>
      </div> 
  <div className='flex justify-center'>
  <div className='w-1/2 flex flex-col'>
    <Editor
        apiKey='c8314dncok6trnwwdf99d0demq44vwzpk4rt7bt5ggedtugx'
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        onChange={log}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          skin: "oxide-dark",
content_css: "dark"


        }}
      />

<button type="button" className=" mt-4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 ">Submit Post</button>
</div>
<div>
</div>    
</div>
</section>
{/* <Footer/> */}
    </div>
  );
}

export default NewBlog;

