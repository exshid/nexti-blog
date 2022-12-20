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
  newFM: MDXFrontMatter;
  mdx: any;
  tags: TagContent[];
  posts: Array<MDXFrontMatter>;
  previous: MDXFrontMatter | null;
  next: MDXFrontMatter | null;
}

const Post: NextPage<PostProps> = ({ newFM, mdx, tags, posts, previous, next }) => {
  return (
<Layout>
    <Header posts={posts.slice(0, 4)} />
        <main id="main" className="pt-2 p-4">
    <article className="w-full">
<div className="flex w-full flex-col">
    <div className="flex flex-col-reverse md:flex-row">
      <div className="border-t mt-3 md:mt-0  border-reddish border-t-8 rounded-lg md:rounded-t-lg w-full md:w-8/12 lg:w-9/12 mr-4">
<div className="w-full mr-4 p-4 md:p-12 border border-grayish dark:border-none bg-white dark:bg-midnightish rounded-lg pt-4 md:p-12 h-auto">
 
    <Page {...newFM}>
        <Prose>
          <MDXRemote {...mdx} components={components} />
        </Prose>
        
<div className="flex mt-3 border-t border-grayish">
  <div className="grid md:grid-cols-1 mt-3 w-full rounded-lg dark:border-none rounded-lg border-grayish">
  
        {previous || next ? (
          <nav
            className="flex-col md:flex-row text-center md:text-left first rounded-lg transition flex lg-round"
          >
            {previous ? (
           <Link href={`/posts/${slugify(previous?.slug)}`}>
           <a className="w-full md:w-1/2 group border-b pb-3 md:pb-0 md:border-b-0 border-grayish">
           <div className=" w-full lg:max-w-full lg:flex">
           <div className="text-nightish dark:text-white rounded-lg flex w-full flex-col justify-between leading-normal">
             <div className="mb-8">
               <p className="text-muted flex items-center">
                 
                 Previous               </p>
               <div className="text-gray-900 group-hover:translate-x-0.5 transition dark:text-white font-bold text-xl mb-2"><h3>{previous?.title}</h3>
                </div>
               <p className="text-gray-700 dark:text-white text-base overflow-hidden" style={{height:'50px'}}>{previous?.description}</p>
             </div>
             <div className="flex items-center">
               <div className="text-sm">
                 <p className="text-gray-900 text-lg dark:text-white leading-none mb-1">{previous?.author}</p>
               </div>
             </div>
           </div>
           </div>
     </a>
     </Link>
         ) : <div className="w-full md:w-1/2 lg:flex">
         <div className="text-nightish dark:text-white rounded-lg flex w-full flex-col justify-between leading-normal">
           <div className="mb-8">
             <p className="text-muted flex items-center">
               
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
           <Link href={`/posts/${slugify(next?.slug)}`}>
<a className="w-full mt-3 md:mt-0 md:w-1/2 ml-3 group">
             <div className=" w-full lg:max-w-full lg:flex">
           <div className="text-nightish dark:text-white rounded-lg p-4 flex w-full flex-col justify-between leading-normal">
             <div className="mb-8">
               <p className="text-muted flex md:text-right justify-end	">
                 
                 Next               </p>
               <div className="text-gray-900 group-hover:translate-x-1 transition dark:text-white font-bold text-xl md:text-right mb-2"><h3>{next?.title}</h3>
                </div>
               <p className="text-gray-700 dark:text-white md:text-right text-base overflow-hidden" style={{height:'50px'}}>{next?.description}</p>
             </div>
             <div className="flex justify-end	">
               <div className="text-sm">
                 <p className="text-gray-900 dark:text-white leading-none mb-1 text-lg md:text-right">{next?.author}</p>
               </div>
             </div>
           </div>
           </div>
     </a>
     </Link>
         ) : <div className="ml-3 w-full md:w-1/2 lg:flex">
         <div className="text-nightish dark:text-white rounded-lg p-4 flex w-full flex-col justify-between leading-normal">
           <div className="mb-8">
             <p className="text-muted flex justify-end	">
               
               Next               </p>
             <div className="text-gray-900 uppercase dark:text-white font-bold md:text-right text-xl mb-2"><h3>No newer post yet!</h3>
              </div>
             <p className="text-gray-700 dark:text-white text-base"></p>
           </div>
           <div className="flex justify-end	">
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
        </div>
      <div className="w-full md:w-4/12 lg:w-3/12 h-auto rounded-lg"> 
         <PostSidebar author={newFM.author} date={newFM.date}>
         {newFM.tags ? newFM.tags.map((tag, index) => {
                    return (
                      <li className="inline-block mx-1 mr-1" key={index}>
                        <Tag href={`/posts/tagged/${slugify(tag)}`}>{tag}</Tag>
                      </li>
                    );
                  }) : ''}
                  </PostSidebar>
</div>
 </div>
 <div className="border-t mt-3 border-reddish border-t-8 rounded-lg">
<div className="grid p-3 px-4 dark:border-none border border-grayish bg-white dark:bg-midnightish rounded-lg md:grid-cols-2">
{posts.slice(0, 4).map((post,index) => (
<RecentPosts key={index} title={post.title} background={post.thumbnail} subtitle={post.description} author={post.author} slug={post.slug}/>
))
}
</div>                </div> </div>

      </article>
      </main>
</Layout>    
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxFiles = getAllMdx();
  return {
    paths: mdxFiles.map((file) => ({
      params: { slug: file.newFM.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const mdxFile = getAllMdx().map((post) => post["frontMatter"]);
  const { slug } = context.params as ContextProps;
  const tags = listTags();
  const mdxFiles = getAllMdx();
  const postIndex = mdxFiles.findIndex((p) => p.newFM.slug === slug);
  const post = mdxFiles[postIndex];
  const { frontMatter, content } = post;
  const newFM = JSON.parse(JSON.stringify(frontMatter));
  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
    scope: newFM,
  });
  return {
    props: {
tags,
      posts: JSON.parse(JSON.stringify(mdxFile)),
      newFM,
      mdx: mdxContent,
      previous: mdxFiles[postIndex + 1]?.frontMatter || null,
      next: mdxFiles[postIndex - 1]?.frontMatter || null,
    },
  };
};

export default Post;
