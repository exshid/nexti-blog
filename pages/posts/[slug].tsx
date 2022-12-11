import { formatDate } from "@/lib/formatDate";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { cx, slugify } from "@/lib/utils";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypePrism from "rehype-prism-plus";
import { getAllMdx, getMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { components } from "@/components/MDX";
import { Tag } from "@/components/Tag";
import { Prose } from "@/components/Prose";
import PostSidebar from "@/components/PostSidebar";
import RecentPosts from "@/components/RecentPosts";
import { listTags, TagContent } from "@/lib/tags";
import { Header } from "@/components/Header";
import Contact from "../../components/Contact";
import Layout from '@/components/Layout';


interface ContextProps extends ParsedUrlQuery {
  slug: string;
}


interface PostProps {
  frontMatter: MDXFrontMatter;
  mdx: any;
  tags: TagContent[];
  posts: Array<MDXFrontMatter>;
  previous: MDXFrontMatter | null;
  next: MDXFrontMatter | null;
}

const Post: NextPage<PostProps> = ({ frontMatter, mdx, tags, posts, previous, next }) => {
  return (
<Layout>
    <Header posts={posts.slice(0, 4)} />
        <main id="main" className="pt-2 p-4">
    <article className="px-6 md:px-0 w-full">
<div className="flex w-full flex-col">
    <div className="flex">
<div className="w-9/12 mr-4 border border-grayish dark:border-none bg-white dark:bg-midnightish rounded-lg pt-9 p-12 h-auto">
    <Page {...frontMatter}>
        <Prose>
          <MDXRemote {...mdx} components={components} />
        </Prose>
        
<div className="flex">
  <div className="grid md:grid-cols-1 mt-3 w-full border rounded-lg dark:bg-midnightish dark:border-none rounded-lg border-grayish">
  
        {previous || next ? (
          <nav
            className="text-center md:text-left first rounded-lg transition flex lg-round"
          >
            {previous ? (
           <Link href={`/posts/${previous?.slug}`}>
           <a className="w-1/2">
           <div className=" w-full lg:max-w-full lg:flex">
           <div className="bg-white dark:bg-nightish text-nightish dark:text-white rounded-lg p-4 flex flex-col justify-between leading-normal">
             <div className="mb-8">
               <p className="text-sm text-gray-600 dark:text-white flex items-center">
                 
                 Previous               </p>
               <div className="text-gray-900 dark:text-white font-bold text-xl mb-2"><h3>{previous?.title}</h3>
                </div>
               <p className="text-gray-700 dark:text-white text-base">{previous?.description}</p>
             </div>
             <div className="flex items-center">
               <div className="text-sm">
                 <p className="text-gray-900 dark:text-white leading-none">{previous?.author}</p>
                 <p className="text-gray-600 dark:text-white">{formatDate(previous?.date)}</p>
               </div>
             </div>
           </div>
           </div>
     </a>
     </Link>
         ) : <div className=" w-full lg:max-w-full lg:flex">
         <div className="bg-white dark:bg-nightish text-nightish dark:text-white rounded-lg p-4 flex flex-col justify-between leading-normal">
           <div className="mb-8">
             <p className="text-sm text-gray-600 dark:text-white flex items-center">
               
               Previous               </p>
             <div className="text-gray-900 uppercase dark:text-white font-bold text-xl mb-2"><h3>This is the first post ever!</h3>
              </div>
             <p className="text-gray-700 dark:text-white text-base"></p>
           </div>
           <div className="flex items-center">
             <div className="text-sm">
               <p className="text-gray-900 dark:text-white leading-none"></p>
               <p className="text-gray-600 dark:text-white"></p>
             </div>
           </div>
         </div>
         </div>}
          


         {next ? (
           <Link href={`/posts/${next?.slug}`}>
<a className="w-1/2 ml-3">
             <div className=" w-full lg:max-w-full lg:flex">
           <div className="bg-white dark:bg-nightish text-nightish dark:text-white rounded-lg p-4 flex flex-col justify-between leading-normal">
             <div className="mb-8">
               <p className="text-sm text-gray-600 dark:text-white flex text-right items-center">
                 
                 Next               </p>
               <div className="text-gray-900 dark:text-white font-bold text-xl text-right mb-2"><h3>{next?.title}</h3>
                </div>
               <p className="text-gray-700 dark:text-white text-right text-base">{next?.description}</p>
             </div>
             <div className="flex items-center">
               <div className="text-sm">
                 <p className="text-gray-900 dark:text-white leading-none text-right">{next?.author}</p>
                 <p className="text-gray-600 dark:text-white text-right">{formatDate(next?.date)}</p>
               </div>
             </div>
           </div>
           </div>
     </a>
     </Link>
         ) : <div className="ml-3 w-full lg:max-w-full lg:flex">
         <div className="bg-white dark:bg-nightish text-nightish dark:text-white rounded-lg p-4 flex flex-col justify-between leading-normal">
           <div className="mb-8">
             <p className="text-sm text-gray-600 dark:text-white flex items-center">
               
               Next               </p>
             <div className="text-gray-900 uppercase dark:text-white font-bold text-xl mb-2"><h3>No newer post yet!</h3>
              </div>
             <p className="text-gray-700 dark:text-white text-base"></p>
           </div>
           <div className="flex items-center">
             <div className="text-sm">
               <p className="text-gray-900 dark:text-white leading-none"></p>
               <p className="text-gray-600 dark:text-white"></p>
             </div>
           </div>
         </div>
         </div>}

          </nav>
        ) : null}
</div>
          </div>   


      </Page>
      </div>
        
      <div className="w-3/12 h-auto rounded-lg"> 
         <PostSidebar author={frontMatter.author} date={formatDate(frontMatter.date)}>
         {frontMatter.tags ? frontMatter.tags.map((tag, index) => {
                    return (
                      <li className="inline-block mx-1 mr-1" key={index}>
                        <Tag href={`/posts/tagged/${slugify(tag)}`}>{tag}</Tag>
                      </li>
                    );
                  }) : ''}
                  </PostSidebar>
</div>
 </div>
<div className="grid mt-3 p-3 px-4 dark:border-none border border-grayish bg-white dark:bg-midnightish rounded-lg md:grid-cols-2">
{posts.slice(0, 4).map((post,index) => (
<RecentPosts key={index} title={post.title} background={post.thumbnail} subtitle={post.description} author={post.author} slug={post.slug}/>
))
}
</div>                 </div>

      </article>
      </main>
</Layout>    
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxFiles = getAllMdx();
  return {
    paths: mdxFiles.map((file) => ({
      params: { slug: file.frontMatter.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const mdxFile = getAllMdx().map((post) => post["frontMatter"]);
  const { slug } = context.params as ContextProps;
  const tags = listTags();
  const mdxFiles = getAllMdx();
  const postIndex = mdxFiles.findIndex((p) => p.frontMatter.slug === slug);
  const post = mdxFiles[postIndex];
  const { frontMatter, content } = post;
  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
    scope: frontMatter,
  });
  return {
    props: {
tags,
      posts: mdxFile,
      frontMatter,
      mdx: mdxContent,
      previous: mdxFiles[postIndex + 1]?.frontMatter || null,
      next: mdxFiles[postIndex - 1]?.frontMatter || null,
    },
  };
};

export default Post;
