import {Tag} from '@/components/Tag';
import Link from "next/link";
import type { MDXFrontMatter } from "@/lib/types";
import { formatDate } from "@/lib/formatDate";
import { cx, slugify } from "@/lib/utils";

interface PostListProps {
    posts: Array<MDXFrontMatter>;
  }
  export const Sidebar: React.FC<PostListProps> = ({ posts }) => {

    return <><h2 className="border-t border-reddish border-t-8 rounded-lg md:rounded-none md:rounded-tr-lg pb-0 text-right text-midnightish p-4 inline-block w-full self-end uppercase dark:text-white">Recent Posts</h2>
    <ul style={{top: "85px"}} className="w-full divide-y dark:divide-none divide-grayish dark:text-white flex flex-col justify-between content-start bg-white rounded-lg dark:text-white dark:bg-midnightish px-6 h-fit top-0 sticky">
                  {posts.filter((file) => file.tags?.includes('world')).map((post,index) => (
    <Link key={index} href={`/posts/${post.slug}`}>
                              <a className="py-1 last:pb-6 group flex focus:outline-none focus:ring-4">       
    <li className="py-3 transition text-midnightish w-full dark:text-white">
<h3 className="text-xl group-hover:translate-x-1 transition">{post.title}</h3>
<p className="text-muted uppercase">{formatDate(post.date)}</p>
    </li>
    </a>
    </Link>
             ))}


</ul>
             </>    
}

export default Sidebar