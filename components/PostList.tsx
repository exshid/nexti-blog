import Link from "next/link";
import Image from "next/future/image";
import { formatDate } from "@/lib/formatDate";
import type { MDXFrontMatter } from "@/lib/types";
import { Prose } from "@/components/Prose";
import { cx, slugify } from "@/lib/utils";
import { Tag } from "@/components/Tag";

interface PostListProps {
  posts: Array<MDXFrontMatter>;
}


export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className="w-full pb-4 bg-white divide-y divide-grayish dark:divide-none border border-grayish dark:border-none rounded-lg dark:bg-midnightish">
          {posts.map((post,index) => (
            <li
              key={index}
              className="px-3 md:px-8 bg-white dark:bg-midnightish hover:bg-daylight dark:hover:bg-lightnight transition"
            >
                              <Link href={`/posts/${slugify(post.slug)}`}>
                <a className="py-3 flex focus:outline-none focus:ring-4">
	
                {post.thumbnail && (<div className="block overflow-hidden mr-4 rounded-lg w-2/6">
                    <Image className="object-cover w-full relative h-full max-h-80 rounded-lg" src={post.thumbnail}
                    alt={post.title}
                    height={300}
                    width={300}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"  
                    />
                    </div>
                  )}
<div className="w-4/6">
                  {post.date && (
                    <p className="uppercase mb-1 text-sm md:text-base opacity-60 prose dark:prose-invert">
                      {formatDate(post.date)}
                    </p>
                  )}
                  <h2 className="text-xl md:text-3xl prose dark:prose-invert">{post.title}</h2>
                  {post.description && (
                    <p className="mt-3 md:text-lg overflow-hidden prose dark:prose-invert" style={{maxHeight:'50px'}}>
                      {post.description}
                    </p>
                  )}
               
{post.tags ? (
                <ul className="mt-4 flex flex-wrap space-x-2">
                  {post.tags.map((tag, index) => {
                    return (
                      <li style={{margin:'4px'}} key={index}>
                        <Tag href={`/posts/tagged/${slugify(tag)}`}>{tag}</Tag>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
              </div>
                  </a>
                </Link>      
            </li>
          ))}
    </ul>
  );
};
