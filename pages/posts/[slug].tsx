import { formatDate } from "@/lib/formatDate";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { cx, slugify } from "@/lib/utils";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypePrism from "rehype-prism-plus";
import { getAllMdx, getMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { components } from "@/components/MDX";
import { Tag } from "@/components/Tag";
import { Prose } from "@/components/Prose";
import PostSidebar from "@/components/PostSidebar";
import { listTags, TagContent } from "@/lib/tags";
import { Header } from "@/components/Header";


interface ContextProps extends ParsedUrlQuery {
  slug: string;
}


interface PostProps {
  frontMatter: MDXFrontMatter;
  mdx: any;
  tags: TagContent[];
  posts: Array<MDXFrontMatter>;
  previous: MDXFrontMatter | null;
  next: MDXFrontMatter | null;
}

const Post: NextPage<PostProps> = ({ frontMatter, mdx, tags, posts, previous, next }) => {
  return (
<>
    <Header posts={posts.slice(0, 4)} />
    <main id="main" className="pt-2 p-4">
    <article className="px-6 md:px-0 w-full">
    <div className="flex">
<div className="w-9/12 mr-4 border border-grayish dark:border-none bg-white dark:bg-midnightish rounded-lg pt-9 p-12 h-auto">
    <Page {...frontMatter}>
        <Prose>
          <MDXRemote {...mdx} components={components} />
        </Prose>
<div>
        {previous || next ? (
          <nav
            className={cx(
              "mt-8 pt-8 flex flex-col border-t",
              "border-gray-200",
              "dark:border-gray-700 w-1/2"
            )}
          >
            {previous ? (
              <div className="w-full flex">
                <p
                  className={cx(
                    "mb-2 uppercase tracking-wider text-sm",
                    "text-gray-500",
                    "dark:text-gray-400"
                  )}
                >
                  Previous
                </p>
                <Link href={`/posts/${previous?.slug}`}>
                  <a className="font-bold">{previous?.title}</a>
                </Link>
              </div>
            ) : null}
            {next ? (
              <div className="col-start-2">
                <p
                  className={cx(
                    "mb-2 uppercase tracking-wider text-sm",
                    "text-gray-500",
                    "dark:text-gray-400"
                  )}
                >
                  Next
                </p>
                <Link href={`/posts/${next?.slug}`}>
                  <a className="font-bold">{next?.title}</a>
                </Link>
              </div>
            ) : <div className="col-start-2">
            <p
              className={cx(
                "mb-2 uppercase tracking-wider text-sm",
                "text-gray-500",
                "dark:text-gray-400"
              )}
            >
              Next
            </p>
            <p className="uppercase">There is no next post yet.</p>
          </div>}
          </nav>
        ) : null}

          <nav
            className={cx(
              "mt-8 pt-8 text-right flex flex-col border-t",
              "border-gray-200",
              "dark:border-gray-700 w-1/2"
            )}
          >
                      {posts.slice(0, 2).map((post,index) => (
<div key={index}
>
                <p
                  className={cx(
                    "mb-2 uppercase tracking-wider text-sm",
                    "text-gray-500",
                    "dark:text-gray-400"
                  )}
                >
                  {post.title}
                </p>
                <Link href={`/posts/${post.slug}`}>
                  <a className="font-bold">{post.title}</a>
                </Link>
              </div>
))}            
          </nav>
          </div>   


      </Page>
      </div>
        
      <div className="w-3/12 h-auto rounded-lg"> 
         <PostSidebar author={frontMatter.author} date={formatDate(frontMatter.date)}>
         {frontMatter.tags ? frontMatter.tags.map((tag, index) => {
                    return (
                      <li className="inline-block mx-1 mr-1" key={index}>
                        <Tag href={`/posts/tagged/${slugify(tag)}`}>{tag}</Tag>
                      </li>
                    );
                  }) : ''}
                  </PostSidebar>
</div>
                  </div>

      </article>
      </main>
</>    
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxFiles = getAllMdx();
  return {
    paths: mdxFiles.map((file) => ({
      params: { slug: file.frontMatter.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const mdxFile = getAllMdx().map((post) => post["frontMatter"]);
  const { slug } = context.params as ContextProps;
  const tags = listTags();
  const mdxFiles = getAllMdx();
  const postIndex = mdxFiles.findIndex((p) => p.frontMatter.slug === slug);
  const post = mdxFiles[postIndex];
  const { frontMatter, content } = post;
  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
    scope: frontMatter,
  });
  return {
    props: {
tags,
      posts: mdxFile,
      frontMatter,
      mdx: mdxContent,
      previous: mdxFiles[postIndex + 1]?.frontMatter || null,
      next: mdxFiles[postIndex - 1]?.frontMatter || null,
    },
  };
};

export default Post;
