import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { getAllMdx } from "@/lib/mdx";
import { slugify } from "@/lib/utils";
import { MDXFrontMatter } from "@/lib/types";
import { TagTitle } from "@/components/TagTitle";
import { PostList } from "@/components/PostList";
import { listTags, TagContent } from "@/lib/tags";
import { Header } from "@/components/Header";

interface ContextProps extends ParsedUrlQuery {
  tag: string;
}

interface PostsProps {
  tag: string;
  posts: Array<MDXFrontMatter>;
  tags: TagContent[];
<Breadcrumb aria-label="Default breadcrumb example">
  <Breadcrumb.Item
    href="#"
    icon={HiHome}
  >
    Home
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    Projects
  </Breadcrumb.Item>
  <Breadcrumb.Item>
    Flowbite React
  </Breadcrumb.Item>
</Breadcrumb>

}

const Posts: NextPage<PostsProps> = ({ tag, posts,tags }) => {
  return (
    <>
              <Header posts={posts.slice(0, 4)} />
              <main id="main" className="pt-2 p-4">
      <TagTitle title={`Posts tagged: "${tag}"`}>
        <PostList posts={posts} />
      </TagTitle>
</main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  
  return {
    paths: Array.from(new Set(mdxFiles.map((file) => file.tags).flat())).map(
      (tag) => {
        return {
          params: {
            tag: slugify(tag!),
          },
        };
      }
      ),
      fallback: false,
    };
  };
  
  export const getStaticProps: GetStaticProps = async (context) => {
  const tags = listTags();
  const { tag } = context.params as ContextProps;
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
tags,
      tag,
      posts: mdxFiles.filter((file) => {
        return file.tags?.includes(tag);
      }),
    },
  };
};

export default Posts;
