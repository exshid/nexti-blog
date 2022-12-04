import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { getAllMdx } from "@/lib/mdx";
import { slugify } from "@/lib/utils";
import { MDXFrontMatter } from "@/lib/types";
import { TagTitle } from "@/components/TagTitle";
import { PostList } from "@/components/PostList";

interface ContextProps extends ParsedUrlQuery {
  author: string;
}

interface PostsProps {
  author: string;
  posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ author, posts }) => {
  return (
    <>
      <TagTitle title={`Posts written by ${author}`}>
        <PostList posts={posts} />
      </TagTitle>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    paths: Array.from(new Set(mdxFiles.map((file) => file.author).flat())).map(
      (author) => {
        return {
          params: {
            author: slugify(author!),
          },
        };
      }
    ),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { author } = context.params as ContextProps;
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      author,
      posts: mdxFiles.filter((file) => {
        return file.author?.includes(author);
      }),
    },
  };
};

export default Posts;