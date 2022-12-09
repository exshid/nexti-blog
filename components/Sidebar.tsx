import {Tag} from '@/components/Tag';
import Link from "next/link";
import type { MDXFrontMatter } from "@/lib/types";
import { formatDate } from "@/lib/formatDate";
import { cx, slugify } from "@/lib/utils";

interface PostListProps {
    posts: Array<MDXFrontMatter>;
  }
  export const Sidebar: React.FC<PostListProps> = ({ posts }) => {

    return <ul style={{top: "85px"}} className="w-full divide-y divide-grayish dark:text-white dark:border-none border border-grayish flex flex-col justify-between content-start bg-white rounded-lg dark:text-white dark:bg-midnightish px-6 h-fit top-0 sticky">
                  {posts.filter((file) => file.tags?.includes('typescript')).map((post,index) => (
    <Link key={index} href={`/posts/${post.slug}`}>
                              <a className="py-2 flex focus:outline-none focus:ring-4">       
    <li className="py-6 hover:bg-daylight dark:hover:bg-lightnight">
<h5 className="text-xl">{post.title}</h5>
<p className="text-muted uppercase">{formatDate(post.date)}</p>
    </li>
    </a>
    </Link>
    
             ))}


</ul>
}

export default Sidebar