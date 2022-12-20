//@ts-nocheck
import {useState} from 'react'
import Link from "next/link";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { ArrowRight } from "react-feather";
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { listTags, TagContent } from "@/lib/tags";
import { Header } from "@/components/Header";
import TopSection from '@/components/TopSection';
import Topics from '@/components/Topics';
import RecentPosts from '@/components/RecentPosts';
import Subscribe from '../components/Subscribe';
import Head from "next/head";
import siteConfig from "@/data/siteConfig";
import { onlyText } from "react-children-utilities";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
  tags: TagContent[];
tag: string;
className?: string;
  date?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  thumbnail?: string;

}
const Home: NextPage<HomeProps> = ({ posts, tags,
  date,
  title,
  description,
  thumbnail,
  alt,
 }) => {
  const metaTitle = onlyText(title);
  const metaDescription = description
    ? onlyText(description)
    : siteConfig.siteDescription;
  const metaThumbnail = thumbnail ? thumbnail : siteConfig.siteThumbnail;

const [postNum, setPostNum] = useState(10);
const [buttonReturn, setButtonReturn] = useState(true);


function postNumberHandler(){
  setPostNum(prevPostNum => prevPostNum + 5)
  if (posts.length < postNum || posts.length === postNum){
    setButtonReturn(false)
  }
}
  return (
    <>
          <Head>
        <title>
          {siteConfig.siteName} - {siteConfig.siteDescription}
        </title>
        <meta name="og:url" content={siteConfig.siteUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content={`${siteConfig.siteUrl}${metaThumbnail}`}
        />
      </Head>

<Layout>
      <Header posts={posts.slice(0, 4)} />
      <main id="main" className="pt-1 p-4">
      <div className="border-t mt-3 border-reddish border-t-8 rounded-lg">
      <div className="grid mb-3 p-3 px-4 dark:border-none border border-grayish bg-white dark:bg-midnightish rounded-lg md:grid-cols-2">

      {posts.slice(0, 2).map((post,index) => (
<RecentPosts key={index} title={post.title} background={post.thumbnail} subtitle={post.description} author={post.author} slug={post.slug} alt={post.alt}/>
))
}
</div>
</div>
          <TopSection posts={posts.slice(0, 3)}/>
          <Topics tags={tags}/>
        <div className="flex mt-3 w-full flex-col lg:flex-row">
	<div className="w-full lg:w-9/12 mr-4 h-auto dark:bg-midnightish rounded-lg dark:border-none border border-grayish h-fit">
<h2 className="border-t border-reddish border-t-8 rounded-lg md:rounded-t-lg p-4 uppercase text-midnightish dark:text-white">Recent Posts</h2>
        <PostList posts={posts.slice(0, postNum) } />

      {buttonReturn && <button className="p-4 bg-reddish hover:bg-darker-reddish w-full md:w-fit justify-center rounded-bl-lg text-white transition flex" onClick={postNumberHandler}><p className="mr-1">Load More Posts </p><ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                width={".9em"}
              />
</button>}
       
        </div>
        <div className="w-full flex flex-col dark:border-none border border-grayish rounded-lg mt-3 lg:mt-0 lg:w-3/12 h-auto dark:bg-midnightish"><Sidebar posts={posts.slice(0, 6)}/></div>
</div>
<Subscribe/>
</main>
        </Layout>
        </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  const tags = listTags();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(mdxFiles)),
      tags,
    },
  };
};

export default Home;
