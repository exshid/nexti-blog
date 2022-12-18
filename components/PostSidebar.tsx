import {Tag} from '@/components/Tag';
import { cx, slugify } from "@/lib/utils";

const PostSidebar:React.FC<{author:string, date:string}> = ({author,date,children}) => {
return <div className="border-t border-reddish border-t-8 rounded-lg md:rounded-tr-lg"><ul style={{top: "85px"}} className="w-full text-midnightish dark:text-white dark:border-none border border-grayish flex flex-col justify-between content-start bg-white rounded-lg dark:text-white dark:bg-midnightish px-6 h-fit top-0 sticky">
        <li className="py-6">
<p className="text-xl uppercase text-center mb-2">{author}</p>
<hr style={{color: '#e7eaed'}}/>
        </li>

        <li className="pt-6 pb-3 flex justify-between">
<p className="text-xl uppercase inline-block">Date:</p>
<p className="text-xl uppercase inline-block">{date}</p>
        </li>
        <li className="pt-3 pb-6 flex justify-between">
        <p className="text-xl uppercase inline-block">Tags:</p>
<p className="text-xl uppercase inline-block" style={{width: "200px"}}>{children}</p>
        </li>
    </ul>
    </div>
}

export default PostSidebar