import {Tag} from '@/components/Tag';
import { cx, slugify } from "@/lib/utils";
import Link from "next/link";
      
// @ts-ignore
const PostSidebar:React.FC<{author?:string, date:string,href: any;}> = ({author,date,children, href}) => {
return <ul style={{top: "85px"}} className="w-full dark:text-white dark:border-none border border-grayish flex flex-col justify-between content-start bg-white rounded-lg dark:text-white dark:bg-midnightish px-6 h-fit top-0 sticky">
        <li className="py-6">
<p className="text-xl uppercase text-center mb-2">
<Link href={`/posts/author/${slugify(href)}`}>
      <a
        className={cx(
          "inline-block text-sm py-0.5 prose dark:prose-invert px-2.5 rounded-full hover:underline",
          "bg-reddish hover:bg-darker-reddish transition text-white"
        )}
      >
        {author}
      </a>
        
    </Link></p>
<hr/>
        </li>

        <li className="pt-6 pb-3 flex justify-between">
<p className="text-xl uppercase inline-block">Date:</p>
<p className="text-xl uppercase inline-block">{date}</p>
        </li>
        <li className="pt-3 pb-6 flex justify-between">
        <p className="text-xl uppercase inline-block">Tags:</p>
<p className="text-xl uppercase inline-block" style={{width: "130px"}}>{children}</p>
        </li>
    </ul>
}

export default PostSidebar