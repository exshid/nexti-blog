import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './search.module.css'

export default function Search(props) {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndpoint = (query) => `/api/search?q=${query}`

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
        })  
    } else {  
      setResults([])
    }  
  }, [])  

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])  

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }  
  }, [])  

  return (
    <div id="mega-menu-full-dropdown" className='mt-1 bg-gray-50 md:bg-whitedark:bg-midnightish' 
        ref={searchRef}>
    <div className="relative w-full max-w-7xl h-full md:h-auto">
        <div className="relative bg-white dark:bg-midnightish">
                        <div className="p-6 space-y-6">
      <input id="default-search" className="block text-lg w-full p-4 pl-10 dark:bg-lightnight focus:ring-darker-reddish focus:border-darker-reddish block text-gray-900 border border-grayish dark:border-none rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-midnightish dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange}
        onFocus={onFocus}
        placeholder='Search posts'
        type='text'
        value={query}
      />
      { results.length <= 1 ? (
        <ul className="flex flex-wrap	w-full p-4 pl-10 text-gray-900 border border-grayish dark:border-none dark:bg-lightnight focus:ring-darker-reddish focus:border-darker-reddish block rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-midnightish dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {results.slice(0,16).map(({ id, title }) => (
            <li className="p-2 transition hover:translate-x-1 w-full lg:w-1/2 text-lg" key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a onClick={props.onSearch} className="hover:translate-x-1">{title}</a>
                </Link>  
            </li>            
          )) 
        </ul>
      ) : (<p>Nothing found</p>)}
                  </div>

            </div>
        </div>
    </div>

  )
}  