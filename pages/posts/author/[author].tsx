import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { getAllMdx } from "@/lib/mdx";
import { slugify } from "@/lib/utils";
import { MDXFrontMatter } from "@/lib/types";
import { TagTitle } from "@/components/TagTitle";
import { PostList } from "@/components/PostList";

interface ContextProps extends ParsedUrlQuery {
  written: string;
}

interface PostsProps {
  written: string;
  posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ written, posts }) => {
  return (
    <>
      <TagTitle title={`Posts written by ${written}`}>
        <PostList posts={posts} />
      </TagTitle>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    paths: Array.from(new Set(mdxFiles.map((file) => file.author).flat())).map(
      (written) => {
        return {
          params: {
            written: slugify(author!),
          },
        };
      }
    ),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { written } = context.params as ContextProps;
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      written,
      posts: mdxFiles.filter((file) => {
        return file.author?.includes(written);
      }),
    },
  };
};

export default Posts;
