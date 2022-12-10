import { useState } from "react";
import Image from "next/image";
import siteConfig from "@/data/siteConfig";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import type { MDXFrontMatter } from "@/lib/types";
import { Prose } from "@/components/Prose";
import { cx, slugify } from "@/lib/utils";
import Contact from "@/components/Contact";

interface PostListProps {
  posts: Array<MDXFrontMatter>;
}

export const Header: React.FC<PostListProps> = ({ posts }) => {
  const [dropdown, setDropdown] = useState(false)
  const [contactUs, setContactUs] = useState(false)
  
const dropdownHandler = () =>{
    
  setDropdown(!dropdown)
   

}

const contactHandler = () =>{
    
  setContactUs(!contactUs)
console.log(contactUs)   
}


const dropdownCloseHandler =() =>{
  setDropdown(false)
}
return (
    <header className="mt-3 mb-1 px-4 z-40	sticky top-0 w-full">
<nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-midnightish w-full z-20 top-0 left-0 rounded-lg border border-grayish dark:border-none">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://flowbite.com/" className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div className="flex md:order-2">
  <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4">
    <button className="block w-full md:w-auto text-white bg-blue-700 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-midnightish dark:hover:bg-lightnight dark:focus:ring-lightnight" type="button" data-modal-toggle="extralarge-modal">
    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>    </button>
</div>

      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-lightnight dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:bg-white dark:bg-midnightish md:dark:bg-midnightish">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-lightnight dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li onClick={dropdownHandler}>
                    <button onClick={dropdownHandler} className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-lightnight dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-lightnight dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-lightnight dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={contactHandler}>Contact</a>
      </li>
     
    </ul>
  </div>
  </div>
  <Contact/>
 {dropdown && <div id="mega-menu-full-dropdown" className='mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-midnightish dark:border-gray-600'>
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
        <ul onClick={dropdownCloseHandler}>
            {posts.filter((file) => file.tags?.includes('typescript')).map((post,index) => (

                                    <Link key={index} href={`/posts/${post.slug}`}>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-lightnight">
                <li className="flex my-1" >
         {post.thumbnail && (<div className="overflow-hidden mr-4 rounded-lg relative w-1/5 image-span">
                    <Image className="bg-contain w-full relative header-image" src={post.thumbnail} height= "100px"
                    alt={post.title}
                    />
                    </div>
                  )}

         <div className="w-4/5">

                        <div className="font-semibold">{post.title}</div>
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">{post.description}</span>
                </div>
                </li>
                    </a>
                </Link>
             ))}
             </ul>
            <ul onClick={dropdownCloseHandler}>
            {posts.filter((file) => file.tags?.includes('react')).map((post,index) => (

                <li key={index}>
                                    <Link href={`/posts/${post.slug}`}>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-lightnight">
                        <div className="font-semibold">{post.title}</div>
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">{post.description}</span>
                    </a>
                </Link>
                </li>
             ))}
             </ul>
        </div>
    </div>
 }
</nav>

    </header>
    );
};
