//@ts-nocheck
import type { GetStaticProps, NextPage } from "next";
import {useState} from 'react'
import Link from "next/link";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { ArrowRight } from "react-feather";
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import TopSection from '@/components/TopSection';
import Topics from '@/components/Topics';
import { listTags, TagContent } from "@/lib/tags";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
  tags: TagContent[];

}
const Home: NextPage<HomeProps> = ({ posts, tags }) => {
const [postNum, setPostNum] = useState(10);
const [buttonReturn, setButtonReturn] = useState(true);


function postNumberHandler(){
  setPostNum(prevPostNum => prevPostNum + 5)
}
function buttonHandler(){
  if (posts.length === postNum){
    setButtonReturn(false)
  }
}
  return (
    <Layout>
          <TopSection/>
          <Topics tags={tags}/>
        <div className="flex mt-3 w-full ">
	<div className="w-9/12 mr-4 h-auto dark:bg-midnightish rounded-lg dark:border-none border border-grayish h-fit">

        <PostList tag={posts} posts={posts.slice(0, postNum)} />

      {buttonReturn && <button className="p-4 bg-reddish hover:bg-darker-reddish rounded-bl-lg text-white transition flex" onClick={postNumberHandler}><p className="mr-1">Load More Posts </p><ArrowRight
                className="group-hover:translate-x-0.5 transition-transform"
                width={".9em"}
              />
</button>}
       
        </div>
        <div className="w-3/12 h-auto"><Sidebar/></div>
</div>
        </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  const tags = listTags();

  return {
    props: {
      posts: mdxFiles,
      tags,
    },
  };
};

export default Home;
