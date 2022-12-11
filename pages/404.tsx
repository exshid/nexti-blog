import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { listTags, TagContent } from "@/lib/tags";
import { Header } from "@/components/Header";
import { Page } from "@/components/Page";
import Layout from '@/components/Layout';

interface HomeProps {
  posts: Array<MDXFrontMatter>;
  tags: TagContent[];
tag: string;
}
const Custom404: NextPage<HomeProps> = ({ posts, tags }) => {

  return <Layout> <Header posts={posts.slice(0, 4)} />
  <main id="main" className="pt-2 p-4">
  <header className="mb-3 px-8 py-4 rounded-lg dark:bg-midnightish border flex flex-col items-center border-grayish dark:border-none">
    <h1 className="text-3xl md:text-5xl text-midnightish dark:text-white mb-3 inline-block font-bold">404</h1>
    <div className="mt-4 inline-block"><div className="max-w-none text-midnightish dark:text-white image-container">
      <p>Page not found</p></div></div>
  </header>
  </main>
</Layout>
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


export default Custom404;
