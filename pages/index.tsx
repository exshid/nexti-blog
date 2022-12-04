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

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}
const Home: NextPage<HomeProps> = ({ posts }) => {
const [postNum, setPostNum] = useState(3);

function postNumberHandler(){
  setPostNum(prevPostNum => prevPostNum + 3)
}
  return (
    <Layout>
          <TopSection/>
          <Topics/>
        <div className="flex mt-3 w-full ">
	<div className="w-9/12 mr-4 h-auto dark:bg-midnightish rounded-lg dark:border-none border border-grayish h-fit">

        <PostList posts={posts} />
      <button onClick={postNumberHandler}/>
        <div className="mt-8">
          <Link href="/posts">
            <a className="group prose dark:prose-invert inline-flex items-center gap-2 text-pink-600">
              View more posts{" "}
              <ArrowRight
                className="group-hover:translate-x-0.5 transition-transform"
                width={".9em"}
              />
            </a>
          </Link>
        </div>
        </div>
        <div className="w-3/12 h-auto"><Sidebar/></div>
</div>
        </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles.slice(0, postNum),
    },
  };
};

export default Home;
