import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { listTags, TagContent } from "@/lib/tags";
import { Header } from "@/components/Header";
import { Page } from "@/components/Page";
import type { NextPage } from "next";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
  tags: TagContent[];
tag: string;
}
const Custom404: NextPage<HomeProps> = ({ posts, tags }) => {

  return <> <Header posts={posts.slice(0, 4)} />
  <main id="main" className="p-4">
<Page title="404" description="Page not found" />;
</main>
</>
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
