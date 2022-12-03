import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { ArrowRight } from "react-feather";
import Layout from '@/components/Layout';
import TopSection from '@/components/TopSection';
import Topics from '@/components/Topics';
import { getGlobalData } from '@/utils/global-data';


interface HomeProps {
  posts: Array<MDXFrontMatter>;
  globalData:string;
}

const Home: NextPage<HomeProps> = ({ posts, globalData }) => {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <TopSection/>
        <Topics/>
        <div className="flex mt-3">
	<div className="w-9/12 mr-4 h-auto dark:bg-midnightish rounded-lg dark:border-none border border-grayish">

        <PostList posts={posts} />
      
        <div className="mt-8">
          <Link href="/posts">
            <a className="group inline-flex items-center gap-2 text-pink-600">
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
      posts: mdxFiles.slice(0, 5),
    },
  };
};

export default Home;
