import {Tag} from '@/components/Tag';
import { cx, slugify } from "@/lib/utils";
import Post from '@/components/Post'
import Link from "next/link";
import type { MDXFrontMatter } from "@/lib/types";
import { formatDate } from "@/lib/formatDate";

interface PostListProps {
    posts: Array<MDXFrontMatter>;
  }
  
  export const TopSection: React.FC<PostListProps> = ({ posts }) => {
      return <div className="flex mb-2 w-full flex-col lg:flex-row">
               {posts.slice(0,2).filter((file) => file.tags?.includes('politics')).map((post,index) => (
                              <Link key={index} href={`/posts/${post.slug}`}>
                              <a className="pt-1 py-2 flex odd:mr-4 focus:outline-none w-full lg:odd:w-2/6 lg:even:w-4/6 focus:ring-4">
              
    <div 
    className="w-full h-52 h-auto dark:border-none border border-grayish rounded-lg">
    <Post title={post.title} subtitle={post.date}>{post.description}</Post></div>
    </a>
    </Link>
             ))}

</div>
    }

export default TopSection