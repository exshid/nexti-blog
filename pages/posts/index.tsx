import { Page } from "@/components/Page";
import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { PostList } from "@/components/PostList";
import { listTags, TagContent } from "@/lib/tags";
import { Header } from "@/components/Header";


interface PostsProps {
  posts: Array<MDXFrontMatter>;
  tags: TagContent[];
tag: string;

}

const Posts: NextPage<PostsProps> = ({ posts,tags }) => {
  return (
    <>
          <Header posts={posts.slice(0, 4)} />
          <main id="main" className="pt-2 p-4">

      <Page
        title="Posts"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      >
        <PostList posts={posts} />
      </Page>
</main>
    </>
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
