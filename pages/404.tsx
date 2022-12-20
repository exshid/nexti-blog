import Link from 'next/link'
import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { listTags, TagContent } from "@/lib/tags";
import { Header } from "@/components/Header";
import { Page } from "@/components/Page";
import Layout from '@/components/Layout';
import Head from "next/head";
import siteConfig from "@/data/siteConfig";
import { onlyText } from "react-children-utilities";


interface HomeProps {
  posts: Array<MDXFrontMatter>;
  tags: TagContent[];
  tag: string;
  description?: string | React.ReactNode;

    }
const Custom404: NextPage<HomeProps> = ({ posts, tags,  description}) => {
  const metaDescription = description
    ? onlyText(description)
    : siteConfig.siteDescription;

  return <>
        <Head>
        <title>
          Not Found - {siteConfig.siteName}
        </title>
        <meta name="og:url" content={siteConfig.siteUrl} />
        <meta name="description" content={metaDescription} />
        <meta name="og:description" content={metaDescription} />
      </Head>
  <Layout> <Header posts={posts.slice(0, 4)} />
  <main id="main" className="pt-2 pb-2 px-4">
<div className="border-t border-reddish border-t-8 rounded-lg md:rounded-t-lg">
  <div className="mb-3 px-8 py-4 rounded-lg dark:bg-midnightish border flex flex-col items-center border-grayish dark:border-none">
    <h1 className="text-3xl md:text-5xl text-midnightish dark:text-white mb-3 inline-block font-bold">404</h1>
    <div id="main-content" className="mt-4 inline-block"><div className="max-w-none text-midnightish dark:text-white image-container">
      <p>Page not found</p></div></div>
      <Link href='/'>
      <a className="mt-3 text-midnightish hover:text-reddish transition dark:text-white dark:hover:text-muted">Return to the Main Page</a>
      </Link>
      </div>
  </div>
  </main>
</Layout>
</>
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


export default Custom404;
