import { useState } from "react";
import Image from "next/image";
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
  const [dropdown, setDropdown] = useState(false)
  const [contactUs, setContactUs] = useState(false)
  const [searchPopUp, setSearchPopUp] = useState(false)
  
const dropdownHandler = () =>{
    
  setDropdown(!dropdown)
if(contactUs){
  setContactUs(false)
}   
if(searchPopUp){
  setSearchPopUp(false)
}   


}
const searchHandler = () =>{
  setSearchPopUp(!searchPopUp)
  if(dropdown){
    setDropdown(false)
  }   
  if(contactUs){
    setContactUs(false)
  }  
}
const contactHandler = () =>{
  setContactUs(!contactUs)
  if(dropdown){
    setDropdown(false)
  }
  if(searchPopUp){
    setSearchPopUp(false)
  }   
 
}


const dropdownCloseHandler =() =>{
  setDropdown(false)
}
return (
    <header className="mt-3 mb-1 px-4 z-40	sticky top-0 w-full">
<nav className="navbar navbar-expand-lg shadow-lg py-2 bg-gray-50 relative flex items-center w-full justify-between">
  <div className="px-6">
    <button className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentQ" aria-controls="navbarSupportedContentQ" aria-expanded="false" aria-label="Toggle navigation">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
      </svg>
    </button>
    <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentQ">
      <ul className="navbar-nav mr-auto flex flex-row">
        <li className="nav-item">
          <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Regular link</a>
        </li>
        <li className="nav-item dropdown static">
          <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonQ" data-bs-toggle="dropdown"
          aria-expanded="false">Mega menu
            <svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            </svg>
          </a>
          <div className="dropdown-menu w-full mt-0 hidden shadow-lg bg-white absolute left-0 top-full" aria-labelledby="dropdownMenuButtonQ">
            <div className="px-6 lg:px-8 py-5">
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="bg-white text-gray-600">
                  <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">Lorem ipsum</p>
                  <a href="#!" aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                  <a href="#!" aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                  <a href="#!" aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                  <a href="#!" aria-current="true" className="block px-6 py-3 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                </div>
                <div className="bg-white text-gray-600">
                  <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">Explit voluptas</p>
                  <a href="#!" aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                  <a href="#!" aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                  <a href="#!" aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                  <a href="#!" aria-current="true" className="block px-6 py-3 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                </div>
                <div className="bg-white text-gray-600">
                  <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">Iste quaerato</p>
                  <a href="#!" aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                  <a href="#!" aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                  <a href="#!" aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                  <a href="#!" aria-current="true" className="block px-6 py-3 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                </div>
                <div className="bg-white text-gray-600">
                  <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">Cras justo odio</p>
                  <a href="#!" aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                  <a href="#!" aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                  <a href="#!" aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                  <a href="#!" aria-current="true" className="block px-6 py-3 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
<nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-midnightish w-full z-20 top-0 left-0 rounded-lg border border-grayish dark:border-none">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <Link href={`/`}>

  <a className="flex items-center ml-3 md:ml-0">
      <span className="self-center text-xl font-semibold whitespace-nowrap text-midnightish dark:text-white hover:text-lightreddish dark:hover:text-lightreddish">Home</span>
  </a>
</Link>
  <div className="md:order-2 flex">
  <div className="flex">
  <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4">
    <button onClick={searchHandler} className="block w-full md:w-auto text-white focus:ring-4 focus:outline-none focus:ring-lightreddish font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-midnightish dark:focus:ring-lightnight" type="button">
    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>    </button>
</div>

      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center mr-1 p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
  <div>
    <ThemeSwitcher/>
  </div>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:bg-white dark:bg-midnightish md:dark:bg-midnightish">
      <li onClick={dropdownHandler}>
                    <button onClick={dropdownHandler} className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lightreddish md:p-0 dark:text-gray-400 md:dark:hover:text-lightreddish dark:hover:bg-lightnight dark:hover:text-lightreddish md:dark:hover:bg-transparent dark:border-gray-700">News <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                </li>
      <li>
      <Link href={`/posts`}>

        <a className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lightreddish md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-lightnight dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Posts</a>
      </Link>
      </li>
      <li>
        <a className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lightreddish md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-lightnight dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer" type="button" onClick={contactHandler}>Contact</a>
      </li>
    </ul>
  </div>
  </div>
  {searchPopUp && 
  
  <div id="mega-menu-full-dropdown" className='mt-1 border-gray-200 bg-gray-50 md:bg-white border-y dark:bg-midnightish dark:border-gray-600'>
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white md:px-6">
<Search/>
        </div>
    </div>
  
  }
{contactUs && <Contact close={contactHandler}/>}
 {dropdown && <div id="mega-menu-full-dropdown" className='mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-midnightish dark:border-gray-600'>
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
        <ul onClick={dropdownCloseHandler}>
            {posts.filter((file) => file.tags?.includes('typescript')).map((post,index) => (

                                    <Link key={index} href={`/posts/${slugify(post.slug)}`}>
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
                                    <Link href={`/posts/${slugify(post.slug)}`}>
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
