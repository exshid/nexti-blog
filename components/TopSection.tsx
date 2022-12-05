import { MDXFrontMatter } from "@/lib/types";
import {Tag} from '@/components/Tag';
import { cx, slugify } from "@/lib/utils";
import Post from '@/components/Post'

interface PostListProps {
    posts: Array<MDXFrontMatter>;
  }
  

const TopSection:React.FC<PostListProps> = ({ posts }) => {

    return <div className="flex mb-4">
                  {posts.slice(0, 2).filter(post => post === post.tags).filter(tag => tag === 'news').map((post,index) => (
         <div key={index} className="w-2/6 h-52 h-auto mr-4 dark:border-none border border-grayish rounded-lg">
    <Post title="post.title" subtitle="post.date">{post.description}</Post>
    </div>
    )))}
    </div>
    }

export default TopSection