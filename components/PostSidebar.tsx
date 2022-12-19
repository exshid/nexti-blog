import {Tag} from '@/components/Tag';
import { cx, slugify } from "@/lib/utils";

const PostSidebar:React.FC<{author:string, date:string}> = ({author,date,children}) => {
return <div style={{top: "85px"}} className="top-0 sticky border-t border-reddish border-t-8 rounded-lg md:rounded-t-lg"><ul className="w-full text-midnightish dark:text-white dark:border-none border border-grayish flex flex-col justify-between content-start bg-white rounded-lg dark:text-white dark:bg-midnightish px-6 h-fit">
        <li className="py-6">
<p className="text-xl uppercase text-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>{author}</p>
<hr style={{color: '#e7eaed'}}/>
        </li>

        <li className="pt-6 pb-3 flex justify-between md:flex-col lg:flex-row md:items-center lg:items-baseline">
<p className="text-xl uppercase inline-block">Date:</p>
<p className="text-xl uppercase md:text-center lg:text-left inline-block">{date}</p>
        </li>
        <li className="pt-3 pb-6 flex justify-between md:flex-col lg:flex-row md:items-center lg:items-baseline">
        <p className="text-xl uppercase inline-block">Tags:</p>
<p className="text-xl uppercase inline-block" style={{width: "200px"}}>{children}</p>
        </li>
    </ul>
    </div>
}

export default PostSidebar