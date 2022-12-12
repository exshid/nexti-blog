import Link from "next/link";
import Image from "next/image";
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
    <ul className="w-full pt-8 pb-4 bg-white divide-y divide-grayish dark:divide-none border border-grayish dark:border-none rounded-lg dark:bg-midnightish">
          {posts.map((post,index) => (
            <li
              key={index}
              className="px-8 bg-white dark:bg-midnightish hover:bg-daylight dark:hover:bg-lightnight transition"
            >
                              <Link href={`/posts/${slugify(post.slug)}`}>
                <a className="py-3 flex focus:outline-none focus:ring-4">
	
                {post.thumbnail && (<div className="overflow-hidden mr-4 rounded-lg relative w-2/6">
                    <Image className="bg-contain w-full relative post-image" src={post.thumbnail}
                    alt={post.title}
                    />
                    </div>
                  )}
<div className="w-4/6">
                  {post.date && (
                    <p className="uppercase mb-3 opacity-60 prose dark:prose-invert">
                      {formatDate(post.date)}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl prose dark:prose-invert">{post.title}</h2>
                  {post.description && (
                    <p className="mt-3 text-lg overflow-hidden prose dark:prose-invert" style={{maxHeight:'50px'}}>
                      {post.description}
                    </p>
                  )}
               
{post.tags ? (
                <ul className="mt-4 flex flex-wrap space-x-2">
                  {post.tags.map((tag, index) => {
                    return (
                      <li key={index}>
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
