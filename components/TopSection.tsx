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
      return <div className="flex mb-2 w-full flex-col md:flex-row">
               {posts.filter((file) => file.tags?.includes('politics')).map((post,index) => (
                              <Link key={index} href={`/posts/${post.slug}`}>
                              <a className="pt-1 py-2 flex odd:mr-4 focus:outline-none w-full md:odd:w-2/6 md:even:w-4/6 focus:ring-4">
              
    <div 
    className="w-full h-52 h-auto dark:border-none border border-grayish rounded-lg">
    <Post title={post.title} subtitle={formatDate(post.date)}>{post.description}</Post></div>
    </a>
    </Link>
             ))}

</div>
    }

export default TopSection