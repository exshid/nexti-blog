import { Page } from "@/components/Page";
import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { PostList } from "@/components/PostList";
import { listTags, TagContent } from "@/lib/tags";
import { Header } from "@/components/Header";
import Layout from '@/components/Layout';

interface PostsProps {
  posts: Array<MDXFrontMatter>;
  tags: TagContent[];
tag: string;

}

const Posts: NextPage<PostsProps> = ({ posts,tags }) => {
  return (
    <Layout>
          <Header posts={posts.slice(0, 4)} />
          <main id="main" className="pt-2 p-4">
          <div className="border-t border-reddish border-t-8 rounded-lg md:rounded-t-lg">
      <Page
      className="px-8 rounded-lg bg-white dark:bg-midnightish mb-3 py-4 border border-grayish dark:border-none"
        title="Posts"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      >
        <PostList posts={posts} className="border-t border-reddish border-t-8 rounded-lg md:rounded-t-lg" />
      </Page>
      </div>
</main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const tags = listTags();

  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles,
      tags,

    },
  };
};

export default Posts;
