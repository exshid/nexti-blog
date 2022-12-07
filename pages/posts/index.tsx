import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { listTags, TagContent } from "@/lib/tags";


interface PostsProps {
  posts: Array<MDXFrontMatter>;
  tags: TagContent[];
tag: string;

}

const Posts: NextPage<PostsProps> = ({ posts,tags }) => {
  return (
    <>
          <Header posts={posts.slice(0, 4)} />
      <Page
        title="Posts"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      >
        <PostList posts={posts} />
      </Page>
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
