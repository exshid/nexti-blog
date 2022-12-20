import { formatDate } from "@/lib/formatDate";

import {Tag} from '@/components/Tag';
import { cx, slugify } from "@/lib/utils";

const PostSidebar:React.FC<{author:string, date:string}> = ({author,date,children}) => {
return <div style={{top: "85px"}} className="top-0 sticky border-t border-reddish border-t-8 rounded-lg md:rounded-t-lg"><ul className="w-full text-midnightish dark:text-white dark:border-none border border-grayish flex flex-col justify-between content-start bg-white rounded-lg dark:text-white dark:bg-midnightish px-6 h-fit">
        <li className="py-6">
<p className="text-xl uppercase text-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" aria-hidden="true" height="20" fill="currentColor" className="inline-block mr-2 bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg><p className="sr-only">Written by</p> {author}</p>
<hr aria-hidden="true" style={{color: '#e7eaed'}}/>
        </li>

        <li className="pt-6 pb-3 flex justify-between md:flex-col lg:flex-row md:items-center lg:items-baseline">
<p className="text-xl uppercase inline-block">Date:</p>
<p className="text-xl uppercase md:text-center lg:text-left inline-block">{formatDate(date)}</p>
        </li>
        <li className="pt-3 pb-6 flex justify-between md:flex-col lg:flex-row md:items-center lg:items-baseline">
        <p className="text-xl uppercase inline-block">Tags:</p>
<p className="text-xl uppercase inline-block" style={{width: "200px"}}>{children}</p>
        </li>
    </ul>
    </div>
}

export default PostSidebar