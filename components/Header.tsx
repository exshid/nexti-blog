import { useState } from "react";
import Image from "next/future/image";
import siteConfig from "@/data/siteConfig";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import type { MDXFrontMatter } from "@/lib/types";
import { Prose } from "@/components/Prose";
import { cx, slugify } from "@/lib/utils";
import Contact from "@/components/Contact";
import Search from "@/components/Search";
import ThemeSwitcher from "@/components/ThemeSwitcher";


interface PostListProps {
  posts: Array<MDXFrontMatter>;
}

export const Header: React.FC<PostListProps> = ({ posts }) => {
  const [headerClasses, setHeaderClasses] = useState("items-center justify-between w-full md:flex md:w-auto md:order-1 hidden")
  const [dropdown, setDropdown] = useState(false)
  const [contactUs, setContactUs] = useState(false)
  const [searchPopUp, setSearchPopUp] = useState(false)

  const classesHander = () =>{
    if (headerClasses === "items-center justify-between w-full md:flex md:w-auto md:order-1 hidden"){
  setHeaderClasses("items-center justify-between w-full md:flex md:w-auto md:order-1")
    } else {
      setHeaderClasses("items-center justify-between w-full md:flex md:w-auto md:order-1 hidden")
    }
    if(searchPopUp){
      setSearchPopUp(false)
    }   
    if(dropdown){
      setDropdown(false)
    }   
    if(contactUs){
      setContactUs(false)
    }  
  
  }
  
const dropdownHandler = () =>{
    
  setDropdown(!dropdown)
if(contactUs){
  setContactUs(false)
}   
if(searchPopUp){
  setSearchPopUp(false)
}   
setHeaderClasses("items-center justify-between w-full md:flex md:w-auto md:order-1 hidden")

}
const searchHandler = () =>{
  setSearchPopUp(!searchPopUp)
  if(dropdown){
    setDropdown(false)
  }   
  if(contactUs){
    setContactUs(false)
  }  
  setHeaderClasses("items-center justify-between w-full md:flex md:w-auto md:order-1 hidden")

}
const contactHandler = () =>{
  setContactUs(!contactUs)
  if(dropdown){
    setDropdown(false)
  }
  if(searchPopUp){
    setSearchPopUp(false)
  }   
  setHeaderClasses("items-center justify-between w-full md:flex md:w-auto md:order-1 hidden")
 
}


const dropdownCloseHandler =() =>{
  setDropdown(false)
}
return (
    <header className="mt-3 mb-1 px-4 z-40	sticky top-0 w-full">
<nav className="bg-white header-shadow px-2 sm:px-4 py-2.5 dark:bg-midnightish transition w-full z-20 top-0 left-0 rounded-lg border border-grayish dark:border-none">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <Link href={`/`}>

  <a className="flex items-center ml-3 md:ml-0">
      <span className="self-center transition text-gray-700 hover:text-gray-500 dark:hover:text-white dark:text-gray-400  dark:hover:text-white text-xl font-semibold whitespace-nowrap rounded-3xl hover:text-lightreddish">Home</span>
  </a>
</Link>
  <div className="md:order-2 flex">
  <div className="flex">
  <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4">
    <button onClick={searchHandler} aria-label="Open search menu" className="block w-full md:w-auto hover:bg-grayish dark:hover:bg-lightnight mr-1 transition transition rounded-3xl text-white focus:ring-2 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-gray-600" type="button">
    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>    </button>
</div>

      <button onClick={classesHander} type="button" className="hover:bg-grayish dark:hover:bg-lightnight transition rounded-3xl inline-flex items-center mr-1 p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
  <div>
    <ThemeSwitcher/>
  </div>
  </div>
  <div className={headerClasses} id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li onClick={dropdownHandler}>
                    <button onClick={dropdownHandler} className="transition text-gray-700  hover:bg-gray-100 hover:text-lightreddish dark:hover:text-white dark:text-gray-400 flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-lightnight md:dark:hover:bg-transparent dark:border-gray-700">News <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                </li>
      <li>
      <Link href={`/posts`}>
       
        <a className="transition block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-lightreddish md:p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-lightnight dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Posts</a>
      </Link>
      </li>
      <li>
        <a className="transition block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-lightreddish md:p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-lightnight dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer" type="button" onClick={contactHandler}>Contact</a>
      </li>
    </ul>
  </div>
  </div>
  {searchPopUp && 
  
  <div id="mega-menu-full-dropdown" className='mt-1 border-gray-200 bg-gray-50 md:bg-white border-y dark:bg-midnightish dark:border-gray-600'>
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white md:px-6">
<Search onSearch={searchHandler}/>
        </div>
    </div>
  
  }
{contactUs && <Contact close={contactHandler}/>}
 {dropdown && <div id="mega-menu-full-dropdown" className='mt-1 shadow-sm bg-gray-50 md:bg-white dark:bg-evening border border-grayish dark:border-none dark:bg-midnightish absolute rounded-lg'>
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
        <ul onClick={dropdownCloseHandler}>
            {posts.filter((file) => file.tags?.includes('featured')).map((post,index) => (

                                    <Link key={index} href={`/posts/${slugify(post.slug)}`}>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-lightnight">
                <li className="flex my-1" >
         {post.thumbnail && (<div className="overflow-hidden mr-4 rounded-lg relative w-1/5 image-span">
                    <Image className="bg-contain w-full relative header-image" src={post.thumbnail} height= "100px"
                    alt={post.alt}
                    />
                    </div>
                  )}

         <div className="w-4/5 flex items-center">

                        <div className="font-semibold">{post.title}</div>
                </div>
                </li>
                    </a>
                </Link>
             ))}
             </ul>
            <ul onClick={dropdownCloseHandler}>
            {posts.filter((file) => file.tags?.includes('news')).map((post,index) => (

<Link key={index} href={`/posts/${slugify(post.slug)}`}>
<a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-lightnight">
<li className="flex my-1" >
{post.thumbnail && (<div className="overflow-hidden mr-4 rounded-lg relative w-1/5 image-span">
<Image className="bg-contain w-full relative header-image" src={post.thumbnail} height= "100px"
alt={post.alt}
/>
</div>
)}

<div className="w-4/5 flex items-center">

<div className="font-semibold">{post.title}</div>
</div>
</li>
</a>
</Link>
))}
</ul>
        </div>
    </div>
 }
</nav>

    </header>
    );
};
