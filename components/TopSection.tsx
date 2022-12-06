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
      console.log(posts.filter((file) => file.tags?.includes('typescript')))
      return <div className="flex mb-4 w-full">
               {posts.filter((file) => file.tags?.includes('typescript')).map((post,index) => (
                              <Link key={index} href={`/posts/${post.slug}`}>
                              <a className="py-2 flex focus:outline-none odd:w-2/6 even:w-4/6 focus:ring-4">
              
    <div 
    className="w-full h-52 h-auto odd:mr-4 dark:border-none border border-grayish rounded-lg">
    <Post title={post.title} subtitle={formatDate(post.date)}>{post.description}</Post></div>
    </a>
    </Link>
             ))}

</div>
    }

export default TopSection