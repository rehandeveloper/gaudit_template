import React, {useEffect} from 'react'
import BlogCard from './common/BlogCard'
import { blogData } from '../data/blogData'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

function Blog() {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
        gallery: '#my-gallery',
        children: 'a',
        pswpModule: () => import('photoswipe')
    });

    lightbox.init();

    // Cleanup function to destroy lightbox on unmount (optional)
    return () => lightbox.destroy();
}, []);
  return (
    <section className='blog w-full  py-20'>
        <div className=' text-center'>
            <h6 className='inline-block text-primary text-center'>OUR BLOG</h6>
            <h1 className='block font-bold lg:text-5xl text-3xl p-4 lg:my-6 my-2'>Latest Blog & News for You</h1>
            {/* <p className='text-secondary mx-auto text-center lg:w-[600px] w-full lg:p-10 p-4'>Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut suspendisse pharetra. Finibus condimentum aenean lacinia sem metus Integer.</p> */}
        </div>

        <div className='max-w-full lg:px-24 p-4 py-6 grid lg:grid-cols-3 grid-flow-row gap-8 ' id="my-gallery">
        {
            blogData.map(i=>(
              <a key={i.src} href={i.src} className='shadow-2xl rounded-lg overflow-hidden p-4  hover:bg-slate-200 hover:scale-105 transition-all'>
              <img src={i.src} alt="Image 1" className='w-full h-full object-cover rounded-2xl' />
          </a>

            ))
          }
       

        </div>

     


    </section>
  )
}

export default Blog




